import json
from pathlib import Path
from fastapi import APIRouter, HTTPException, UploadFile, Depends
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy.orm import Session
from backend.database import get_db
from backend.models.user import User
from backend.config import settings
from backend.services.openai_evidence import recommend_evidence, create_evidence_folders
from backend.services.evidence_analysis import evidence_feedback as analyze_evidence_file
from backend.utils.path_utils import get_user_ocr_output_dir, get_user_evidence_dir
from backend.utils.auth_utils import get_optional_user

router = APIRouter()


class Party(BaseModel):
    name: str
    address: Optional[str] = None


class CaseDataInput(BaseModel):
    """Input model for manually entered case data from frontend form."""
    case_number: Optional[str] = None
    case_type: str
    state: str
    county: Optional[str] = None
    filing_date: Optional[str] = None
    hearing_date: Optional[str] = None
    plaintiffs: List[Party]
    defendants: List[Party]
    claim_summary: str
    amount_sought: Optional[float] = None
    incident_date: Optional[str] = None
    demand_letter_sent: bool = False
    agreement_included: bool = False


@router.post("/submit-case/{user_id}")
def submit_case_data(
    user_id: str,
    case_data: CaseDataInput,
    db: Session = Depends(get_db),
    current_user: Optional[User] = Depends(get_optional_user)
):
    """
    Accept manually entered case data from the frontend form,
    save it as extracted_data.json, and generate evidence recommendations.
    """
    # Use authenticated user_id if available, otherwise use path user_id
    effective_user_id = current_user.id if current_user else user_id

    # Convert to dict for JSON storage
    data_dict = case_data.model_dump()

    # Convert Party objects to dicts
    data_dict["plaintiffs"] = [{"name": p.name, "address": p.address} for p in case_data.plaintiffs]
    data_dict["defendants"] = [{"name": d.name, "address": d.address} for d in case_data.defendants]

    # Create OCR output directory and save extracted data
    ocr_output_dir = get_user_ocr_output_dir(effective_user_id)
    json_path = ocr_output_dir / "extracted_data.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(data_dict, f, indent=4, ensure_ascii=False)

    print(f"[CASE] Saved case data for user {effective_user_id}: {json_path}")

    # Generate evidence recommendations using Gemini
    evidence_dir = get_user_evidence_dir(effective_user_id)
    conversation_path = evidence_dir / "evidence_conversation.json"

    try:
        evidence_dict = recommend_evidence(data_dict, settings.GEMINI_API_KEY)
        print(f"[EVIDENCE] Generated {len(evidence_dict)} recommendations via Gemini")
    except Exception as e:
        print(f"[WARN] Gemini API failed ({e}), using fallback recommendations")
        evidence_dict = _fallback_recommendations(data_dict)

    # Save recommendations
    with open(conversation_path, "w", encoding="utf-8") as f:
        json.dump(evidence_dict, f, indent=4)

    # Create folder structure
    recommend_folder = evidence_dir / "recommend_evidence"
    create_evidence_folders(evidence_dict, str(recommend_folder))

    return {
        "success": True,
        "user_id": effective_user_id,
        "recommendations": evidence_dict,
        "message": "Case data saved and evidence recommendations generated"
    }


@router.get("/recommend/{user_id}")
def get_evidence_recommendations(
    user_id: str,
    db: Session = Depends(get_db),
    current_user: Optional[User] = Depends(get_optional_user)
):
    """
    Read extracted case data, call Gemini to recommend evidence,
    create folder structure, and return the recommendations.
    """
    # Use authenticated user_id if available, otherwise use path user_id
    effective_user_id = current_user.id if current_user else user_id

    # Load case data
    json_path = get_user_ocr_output_dir(effective_user_id) / "extracted_data.json"
    if not json_path.exists():
        raise HTTPException(404, f"No extracted data found for user {effective_user_id}")

    with open(json_path, "r", encoding="utf-8") as f:
        case_data = json.load(f)

    # Check if recommendations already exist
    evidence_dir = get_user_evidence_dir(effective_user_id)
    conversation_path = evidence_dir / "evidence_conversation.json"

    if conversation_path.exists():
        with open(conversation_path, "r", encoding="utf-8") as f:
            evidence_dict = json.load(f)
        return {"recommendations": evidence_dict, "cached": True}

    # Call Gemini, fall back to rule-based recommendations if API fails
    try:
        evidence_dict = recommend_evidence(case_data, settings.GEMINI_API_KEY)
    except Exception as e:
        print(f"[WARN] Gemini API failed ({e}), using fallback recommendations")
        evidence_dict = _fallback_recommendations(case_data)

    # Save recommendations
    evidence_dir.mkdir(parents=True, exist_ok=True)
    with open(conversation_path, "w", encoding="utf-8") as f:
        json.dump(evidence_dict, f, indent=4)

    # Create folder structure
    recommend_folder = evidence_dir / "recommend_evidence"
    create_evidence_folders(evidence_dict, str(recommend_folder))

    return {"recommendations": evidence_dict, "cached": False}


@router.post("/upload/{user_id}/{folder_name}")
async def upload_evidence_file(user_id: str, folder_name: str, file: UploadFile):
    """
    Upload an evidence file to the appropriate folder.
    """
    evidence_folder = (
        Path(settings.BASE_DATA_DIR) / user_id / "evidence" / "recommend_evidence" / folder_name
    )

    if not evidence_folder.exists():
        evidence_folder.mkdir(parents=True, exist_ok=True)

    file_path = evidence_folder / file.filename
    content = await file.read()
    with open(file_path, "wb") as f:
        f.write(content)

    return {
        "filename": file.filename,
        "size": len(content),
        "path": str(file_path),
    }


@router.post("/analyze/{user_id}/{folder_name}")
def analyze_evidence(user_id: str, folder_name: str):
    """
    Analyze uploaded evidence files in a folder using the evidence_feedback module.
    Returns feedback for each file.
    """
    # Load case data
    json_path = Path(settings.BASE_DATA_DIR) / user_id / "ocr_output" / "extracted_data.json"
    if not json_path.exists():
        raise HTTPException(404, "No extracted data found")

    with open(json_path, "r", encoding="utf-8") as f:
        case_data = json.load(f)

    # Load evidence description
    evidence_folder = (
        Path(settings.BASE_DATA_DIR) / user_id / "evidence" / "recommend_evidence" / folder_name
    )
    desc_path = evidence_folder / "description.txt"
    if not desc_path.exists():
        raise HTTPException(404, f"Evidence folder '{folder_name}' not found")

    with open(desc_path, "r", encoding="utf-8") as f:
        description = f.read()

    # Find evidence files (exclude description.txt and feedback_*.md files)
    evidence_files = [
        f for f in evidence_folder.iterdir()
        if f.is_file() and f.name != "description.txt" and not f.name.startswith("feedback_")
    ]

    if not evidence_files:
        raise HTTPException(400, "No evidence files found in this folder")

    # Analyze each file using the evidence_analysis service
    # (replicates exact prompt & multimodal logic from evidence_feedback/)
    results = []
    for ev_file in evidence_files:
        ready_status, feedback = analyze_evidence_file(
            case_data, description, [str(ev_file)], settings.GEMINI_API_KEY
        )
        results.append({
            "filename": ev_file.name,
            "ready_status": ready_status,
            "specific_feedback": feedback,
        })

        # Write per-file feedback file
        status_label = "READY" if ready_status else "NOT READY"
        feedback_filename = f"feedback_{ev_file.stem}.md"
        with open(evidence_folder / feedback_filename, "w", encoding="utf-8") as f:
            f.write(f"STATUS: {status_label}\n\n{feedback}")

    return {"folder": folder_name, "results": results}


def _fallback_recommendations(case_data: dict) -> dict:
    """Generate basic evidence recommendations without an LLM call."""
    case_type = case_data.get("case_type", "").lower()
    summary = case_data.get("claim_summary", "")
    defendant = case_data.get("defendants", [{}])[0].get("name", "the defendant")

    recs = {}

    # Always useful
    recs["Incident_Documentation"] = (
        f"Any documents, photos, or records that describe the incident involving {defendant}. "
        "This could include written accounts, dated notes, or official reports."
    )

    recs["Financial_Records"] = (
        f"Receipts, invoices, bills, or payment records showing the financial damages "
        f"of ${case_data.get('amount_sought', 'N/A')}. Include any out-of-pocket expenses."
    )

    recs["Communication_Records"] = (
        f"Emails, text messages, letters, or any written communication between you and {defendant} "
        "related to this dispute, including any attempts to resolve the matter."
    )

    recs["Photographic_Evidence"] = (
        "Photos or videos documenting the damage, injury, or conditions relevant to your claim. "
        "Include timestamps if available."
    )

    if "medical" in summary.lower() or "dental" in summary.lower() or "injury" in summary.lower() or "tooth" in summary.lower():
        recs["Medical_Records"] = (
            "Medical or dental records, treatment plans, diagnosis reports, and bills "
            "showing the treatment required as a result of the incident."
        )

    if case_data.get("demand_letter_sent"):
        recs["Demand_Letter_Copy"] = (
            f"A copy of the demand letter sent to {defendant} requesting resolution "
            "before filing this claim."
        )

    return recs
