import json
from pathlib import Path
from fastapi import APIRouter, HTTPException
from backend.config import settings

router = APIRouter()


@router.get("/{user_id}")
def get_case_data(user_id: str):
    """Read extracted case data from the OCR pipeline output."""
    json_path = Path(settings.BASE_DATA_DIR) / user_id / "ocr_output" / "extracted_data.json"

    if not json_path.exists():
        raise HTTPException(404, f"No extracted data found for user {user_id}")

    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    return data
