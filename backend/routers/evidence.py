import json
from pathlib import Path
from datetime import datetime, date
from fastapi import APIRouter, HTTPException, UploadFile, Depends
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy.orm import Session
from backend.database import get_db
from backend.models.user import User
from backend.models.case import Case as CaseModel, Party as PartyModel
from backend.config import settings
from backend.services.openai_evidence import recommend_evidence, create_evidence_folders
from backend.services.evidence_analysis import evidence_feedback as analyze_evidence_file
from fastapi import Query
from backend.utils.path_utils import (
    get_user_ocr_output_dir,
    get_user_evidence_dir,
    get_case_extracted_data_path,
    get_case_evidence_dir,
    get_case_recommend_evidence_dir,
)
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
    existing_case_id: Optional[int] = None  # If set, update this case instead of creating a new one


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

    def _parse_date(s):
        if not s:
            return None
        if isinstance(s, date):
            return s
        try:
            return datetime.strptime(s, "%Y-%m-%d").date()
        except (ValueError, TypeError):
            return None

    # If the case was already created by OCR, update it instead of creating a duplicate
    if case_data.existing_case_id is not None:
        existing_case = db.query(CaseModel).filter_by(id=case_data.existing_case_id).first()
        if existing_case and existing_case.user_id == effective_user_id:
            existing_case.case_number = case_data.case_number
            existing_case.case_type = case_data.case_type
            existing_case.state = case_data.state
            existing_case.county = case_data.county
            existing_case.filing_date = _parse_date(case_data.filing_date)
            existing_case.hearing_date = case_data.hearing_date
            existing_case.claim_summary = case_data.claim_summary
            existing_case.amount_sought = case_data.amount_sought
            existing_case.incident_date = _parse_date(case_data.incident_date)
            existing_case.demand_letter_sent = case_data.demand_letter_sent
            existing_case.agreement_included = case_data.agreement_included
            existing_case.status = "active"

            # Replace parties
            for party in list(existing_case.parties):
                db.delete(party)
            db.flush()
            for p in case_data.plaintiffs:
                db.add(PartyModel(case_id=existing_case.id, role="plaintiff", name=p.name, address=p.address))
            for d in case_data.defendants:
                db.add(PartyModel(case_id=existing_case.id, role="defendant", name=d.name, address=d.address))

            db.commit()
            case_id = existing_case.id
            print(f"[CASE] Updated existing OCR case {case_id} for user {effective_user_id}")
        else:
            # Fallback: create new if existing case not found or belongs to another user
            case_data.existing_case_id = None

    if case_data.existing_case_id is None:
        # Create a new Case DB record so this case appears in the dashboard
        new_case = CaseModel(
            user_id=effective_user_id,
            case_number=case_data.case_number,
            case_type=case_data.case_type,
            state=case_data.state,
            county=case_data.county,
            filing_date=_parse_date(case_data.filing_date),
            hearing_date=case_data.hearing_date,
            claim_summary=case_data.claim_summary,
            amount_sought=case_data.amount_sought,
            incident_date=_parse_date(case_data.incident_date),
            demand_letter_sent=case_data.demand_letter_sent,
            agreement_included=case_data.agreement_included,
            status="active",
        )
        db.add(new_case)
        db.flush()  # Get the new case ID before committing

        for p in case_data.plaintiffs:
            db.add(PartyModel(case_id=new_case.id, role="plaintiff", name=p.name, address=p.address))
        for d in case_data.defendants:
            db.add(PartyModel(case_id=new_case.id, role="defendant", name=d.name, address=d.address))

        db.commit()
        case_id = new_case.id

    # Save extracted data at both user-level (legacy) and case-specific path
    ocr_output_dir = get_user_ocr_output_dir(effective_user_id)
    json_path = ocr_output_dir / "extracted_data.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(data_dict, f, indent=4, ensure_ascii=False)

    case_extracted_path = get_case_extracted_data_path(effective_user_id, case_id)
    with open(case_extracted_path, "w", encoding="utf-8") as f:
        json.dump(data_dict, f, indent=4, ensure_ascii=False)

    print(f"[CASE] Saved case data for user {effective_user_id}, case_id={case_id}")

    # Generate evidence recommendations using Gemini
    try:
        evidence_dict = recommend_evidence(data_dict, settings.GEMINI_API_KEY)
        print(f"[EVIDENCE] Generated {len(evidence_dict)} recommendations via Gemini")
    except Exception as e:
        print(f"[WARN] Gemini API failed ({e}), using fallback recommendations")
        evidence_dict = _fallback_recommendations(data_dict)

    # Save recommendations at user-level (legacy) and case-specific path
    evidence_dir = get_user_evidence_dir(effective_user_id)
    conversation_path = evidence_dir / "evidence_conversation.json"
    with open(conversation_path, "w", encoding="utf-8") as f:
        json.dump(evidence_dict, f, indent=4)

    case_evidence_dir = get_case_evidence_dir(effective_user_id, case_id)
    case_conv_path = case_evidence_dir / "evidence_conversation.json"
    with open(case_conv_path, "w", encoding="utf-8") as f:
        json.dump(evidence_dict, f, indent=4)

    # Create folder structure (user-level legacy path)
    recommend_folder = evidence_dir / "recommend_evidence"
    create_evidence_folders(evidence_dict, str(recommend_folder))

    # Also create case-specific folder structure so uploads/analysis use the right path
    case_recommend_folder = get_case_recommend_evidence_dir(effective_user_id, case_id)
    create_evidence_folders(evidence_dict, str(case_recommend_folder))

    return {
        "success": True,
        "user_id": effective_user_id,
        "case_id": case_id,
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


@router.get("/for-case/{case_id}")
def get_evidence_recommendations_for_case(
    case_id: int,
    db: Session = Depends(get_db),
):
    """
    Return evidence recommendations for a specific case.

    Lookup order:
    1. Case-specific recommendations file (fastest, already generated).
    2. Case-specific extracted data → generate + cache recommendations.
    3. User-level evidence_conversation.json fallback (backwards-compat).
    """
    case = db.query(CaseModel).filter_by(id=case_id).first()
    if not case:
        raise HTTPException(404, "Case not found")

    user_id = case.user_id

    # 1. Case-specific cached recommendations
    case_ev_dir = get_case_evidence_dir(user_id, case_id)
    case_conv_path = case_ev_dir / "evidence_conversation.json"

    if case_conv_path.exists():
        with open(case_conv_path, "r", encoding="utf-8") as f:
            evidence_dict = json.load(f)
        return {"recommendations": evidence_dict, "cached": True}

    # 2. Generate from case-specific extracted data
    case_extracted_path = get_case_extracted_data_path(user_id, case_id)
    user_extracted_path = get_user_ocr_output_dir(user_id) / "extracted_data.json"

    if case_extracted_path.exists():
        with open(case_extracted_path, "r", encoding="utf-8") as f:
            case_data = json.load(f)
    elif user_extracted_path.exists():
        # Fallback: use the shared extracted data (may belong to a different case)
        with open(user_extracted_path, "r", encoding="utf-8") as f:
            case_data = json.load(f)
    else:
        raise HTTPException(404, "No case data available to generate recommendations")

    try:
        evidence_dict = recommend_evidence(case_data, settings.GEMINI_API_KEY)
        print(f"[EVIDENCE] Generated {len(evidence_dict)} recommendations for case {case_id}")
    except Exception as e:
        print(f"[WARN] Gemini API failed ({e}), using fallback recommendations")
        evidence_dict = _fallback_recommendations(case_data)

    # Cache at case-specific path for future requests
    case_ev_dir.mkdir(parents=True, exist_ok=True)
    with open(case_conv_path, "w", encoding="utf-8") as f:
        json.dump(evidence_dict, f, indent=4)

    return {"recommendations": evidence_dict, "cached": False}


@router.post("/upload/{user_id}/{folder_name}")
async def upload_evidence_file(
    user_id: str,
    folder_name: str,
    file: UploadFile,
    case_id: Optional[int] = Query(None),
):
    """
    Upload an evidence file to the appropriate folder.
    When case_id is provided, files are stored in the case-specific evidence directory.
    """
    if case_id is not None:
        evidence_folder = get_case_recommend_evidence_dir(user_id, case_id) / folder_name
    else:
        evidence_folder = get_user_evidence_dir(user_id) / "recommend_evidence" / folder_name

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
def analyze_evidence(
    user_id: str,
    folder_name: str,
    case_id: Optional[int] = Query(None),
    db: Session = Depends(get_db),
):
    """
    Analyze uploaded evidence files in a folder using the evidence_feedback module.
    When case_id is provided, uses case-specific data and evidence paths.
    Returns feedback for each file.
    """
    # Load case data — prefer case-specific extracted data
    if case_id is not None:
        json_path = get_case_extracted_data_path(user_id, case_id)
        if not json_path.exists():
            # Fall back to user-level file
            json_path = get_user_ocr_output_dir(user_id) / "extracted_data.json"
    else:
        json_path = get_user_ocr_output_dir(user_id) / "extracted_data.json"

    if not json_path.exists():
        raise HTTPException(404, "No extracted data found")

    with open(json_path, "r", encoding="utf-8") as f:
        case_data = json.load(f)

    # Resolve evidence folder — prefer case-specific path
    if case_id is not None:
        evidence_folder = get_case_recommend_evidence_dir(user_id, case_id) / folder_name
    else:
        evidence_folder = get_user_evidence_dir(user_id) / "recommend_evidence" / folder_name
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


@router.get("/status/{user_id}")
def get_evidence_status(
    user_id: str,
    case_id: Optional[int] = Query(None),
    current_user: Optional[User] = Depends(get_optional_user),
):
    """
    Returns readiness status for each evidence folder.
    When case_id is provided, reads from the case-specific recommend_evidence folder.
    """
    effective_user_id = current_user.id if current_user else user_id
    if case_id is not None:
        recommend_folder = get_case_recommend_evidence_dir(effective_user_id, case_id)
    else:
        evidence_dir = get_user_evidence_dir(effective_user_id)
        recommend_folder = evidence_dir / "recommend_evidence"

    if not recommend_folder.exists():
        return {"status": {}}

    SYSTEM_FILES = {"description.txt", ".DS_Store", "processed_tracker.json", "evidence_boolean.json"}
    status: dict = {}

    for folder in recommend_folder.iterdir():
        if not folder.is_dir():
            continue

        folder_name = folder.name

        # List actual evidence files (exclude system and feedback files)
        files = [
            f.name for f in folder.iterdir()
            if f.is_file()
            and f.name not in SYSTEM_FILES
            and not f.name.startswith("feedback_")
            and f.name != "feedback.md"
        ]

        # Determine readiness and collect per-file feedback by scanning feedback files.
        # Supports both new-style "feedback_{stem}.md" and legacy "feedback.md".
        is_ready = False
        file_feedbacks: dict = {}  # stem -> feedback_text

        for feedback_file in folder.iterdir():
            if not feedback_file.is_file():
                continue

            is_new_style = feedback_file.name.startswith("feedback_")
            is_old_style = feedback_file.name == "feedback.md"

            if not (is_new_style or is_old_style):
                continue

            try:
                content = feedback_file.read_text(encoding="utf-8")
                if "STATUS: READY" in content:
                    is_ready = True

                # Extract feedback text (strip the "STATUS: ...\n\n" header)
                parts = content.split("\n\n", 1)
                feedback_text = parts[1].strip() if len(parts) > 1 else content.strip()

                if is_new_style:
                    # "feedback_invoice.md" → stem "invoice"
                    stem = feedback_file.stem[len("feedback_"):]
                else:
                    # Legacy single-file feedback; use sentinel so FE can apply to all files
                    stem = "_all_"

                if stem and feedback_text:
                    file_feedbacks[stem] = feedback_text

            except OSError:
                pass

        status[folder_name] = {
            "has_files": len(files) > 0,
            "file_count": len(files),
            "files": files,
            "is_ready": is_ready,
            "file_feedbacks": file_feedbacks,
        }

    return {"status": status}
