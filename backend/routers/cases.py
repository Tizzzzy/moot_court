from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from backend.database import get_db
from backend.models.case import Case

router = APIRouter()


@router.get("/{case_id}")
def get_case(case_id: int, db: Session = Depends(get_db)):
    """Retrieve case details"""
    case = db.query(Case).filter_by(id=case_id).first()
    if not case:
        raise HTTPException(404, "Case not found")

    return {
        "id": case.id,
        "user_id": case.user_id,
        "case_number": case.case_number,
        "case_type": case.case_type,
        "state": case.state,
        "filing_date": case.filing_date.isoformat() if case.filing_date else None,
        "claim_summary": case.claim_summary,
        "amount_sought": float(case.amount_sought) if case.amount_sought else None,
        "incident_date": case.incident_date.isoformat() if case.incident_date else None,
        
        "demand_letter_sent": case.demand_letter_sent,
        "agreement_included": case.agreement_included,

        "status": case.status,
        "plaintiffs": [
            {
                "id": p.id,
                "name": p.name,
                "address": p.address
            }
            for p in case.parties
            if p.role == "plaintiff"
        ],
        "defendants": [
            {
                "id": p.id,
                "name": p.name,
                "address": p.address
            }
            for p in case.parties
            if p.role == "defendant"
        ],
        "created_at": case.created_at.isoformat()
    }
