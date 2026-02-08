import json
from pathlib import Path
from fastapi import APIRouter, HTTPException
from backend.config import settings
from backend.utils.path_utils import get_extracted_data_path

router = APIRouter()


@router.get("/{user_id}")
def get_case_data(user_id: str):
    """Read extracted case data from the OCR pipeline output."""
    json_path = get_extracted_data_path(user_id)

    if not json_path.exists():
        raise HTTPException(404, f"No extracted data found for user {user_id}")

    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    return data
