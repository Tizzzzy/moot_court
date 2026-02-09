import logging
from typing import List, Optional
from fastapi import APIRouter, Depends, WebSocket, WebSocketDisconnect, File, UploadFile, Form
from sqlalchemy.orm import Session
import json

from backend.database import get_db
from backend.schemas.court_schemas import (
    CreateSessionRequest,
    CreateSessionResponse,
    SessionStateResponse,
    SendMessageRequest,
    SendMessageResponse,
    ObjectionDecision,
    PlaintiffFeedback,
    ContinueAfterObjectionRequest,
    UploadEvidenceResponse,
    EvidenceFileMetadata,
    ErrorResponse,
)
from backend.services.court_session_service import CourtSessionService
from backend.services.evidence_service import EvidenceService
from backend.websockets.court_ws import ws_manager
from pathlib import Path
import os
from backend.utils.path_utils import get_extracted_data_path, get_user_evidence_dir

logger = logging.getLogger(__name__)

router = APIRouter(tags=["court"])

# Feature flags - set to False to disable
ENABLE_FEEDBACK = True
ENABLE_OBJECTIONS = False

# Initialize services
_session_service: Optional[CourtSessionService] = None
_evidence_services: dict = {}  # session_id -> EvidenceService


def get_session_service() -> CourtSessionService:
    """Lazy initialize session service."""
    global _session_service
    if _session_service is None:
        _session_service = CourtSessionService()
    return _session_service


def get_evidence_service(session_id: str, user_id: str = None) -> EvidenceService:
    """Get evidence service for a session."""
    if session_id not in _evidence_services:
        # Use user-specific directory if available
        if user_id:
            evidence_dir = get_user_evidence_dir(user_id) / "court_submitted"
        else:
            evidence_dir = Path("data") / "evidence" / "court_submitted"
        _evidence_services[session_id] = EvidenceService(str(evidence_dir))
    return _evidence_services[session_id]


# ===== REST Endpoints =====


@router.get("/case-data")
async def get_case_data(user_id: str = "user_1", case_id: int = 1):
    """
    Get case data from extracted_data.json file.
    Returns the case information for the UI to display.
    """
    try:
        case_file = get_extracted_data_path(user_id)

        if case_file.exists():
            with open(case_file, "r") as f:
                case_data = json.load(f)
            return case_data
        else:
            logger.warning(f"Case file not found: {case_file}")
            return {
                "case_type": "Small Claims",
                "state": "Unknown",
                "plaintiffs": [{"name": "Plaintiff"}],
                "defendants": [{"name": "Defendant"}],
                "claim_summary": "Case information not available",
                "amount_sought": 0
            }
    except Exception as e:
        logger.error(f"Error loading case data: {e}")
        return {
            "case_type": "Small Claims",
            "state": "Unknown",
            "plaintiffs": [{"name": "Plaintiff"}],
            "defendants": [{"name": "Defendant"}],
            "claim_summary": "Error loading case information",
            "amount_sought": 0
        }


@router.post("/sessions", response_model=CreateSessionResponse)
async def create_session(
    request: CreateSessionRequest,
    db: Session = Depends(get_db),
):
    """
    Create a new court simulator session.

    Returns the session ID and the Judge's opening statement.
    """
    try:
        service = get_session_service()
        result = service.create_session(request.user_id, request.case_id, db)

        # Notify frontend that turn is now Plaintiff's
        await ws_manager.send_next_speaker(result["session_id"], "Plaintiff")

        return CreateSessionResponse(**result)
    except ValueError as e:
        logger.error(f"Session creation failed: {e}")
        raise
    except Exception as e:
        logger.error(f"Unexpected error creating session: {e}")
        raise


@router.get("/sessions/{session_id}", response_model=SessionStateResponse)
async def get_session_state(
    session_id: str,
    db: Session = Depends(get_db),
):
    """
    Get the current state of a court session.

    Useful for restoring session state on page refresh.
    """
    try:
        service = get_session_service()
        state = service.get_session_state(session_id, db)
        if not state:
            raise ValueError(f"Session {session_id} not found")
        return SessionStateResponse(**state)
    except Exception as e:
        logger.error(f"Error getting session state: {e}")
        raise


@router.post("/sessions/{session_id}/messages", response_model=SendMessageResponse)
async def send_plaintiff_message(
    session_id: str,
    request: SendMessageRequest,
    db: Session = Depends(get_db),
):
    """
    Send a plaintiff statement during the hearing.

    Performs objection check and returns feedback.
    Note: AI responses are sent via WebSocket in real-time.
    """
    try:
        service = get_session_service()
        court_session = service.get_session(session_id, db)

        if not court_session:
            raise ValueError(f"Session {session_id} not found")

        # Check for objections (if enabled)
        if ENABLE_OBJECTIONS:
            objection_result = court_session.process_plaintiff_turn(request.message)
            has_objection, objection_decision = objection_result

            if has_objection:
                return SendMessageResponse(
                    status="objection_raised",
                    objection=ObjectionDecision(**objection_decision.model_dump())
                    if hasattr(objection_decision, "model_dump")
                    else ObjectionDecision(**vars(objection_decision)),
                )

        # Finalize plaintiff turn (objection checking is disabled or no objection found)
        logger.info(f"Session {session_id}: Finalizing plaintiff turn")
        court_session.finalize_plaintiff_turn(request.message)

        # Generate educational feedback for the plaintiff (if enabled)
        plaintiff_feedback = None
        if ENABLE_FEEDBACK:
            try:
                logger.info(f"Session {session_id}: Generating feedback...")
                feedback_result = court_session.get_plaintiff_feedback(request.message)
                plaintiff_feedback = PlaintiffFeedback(
                    positive=feedback_result.did_well,
                    improvements=feedback_result.improvements
                )
                logger.info(f"Session {session_id}: Generated feedback: {feedback_result.did_well[:50]}...")
                # Send feedback via WebSocket for real-time update
                await ws_manager.send_feedback(
                    session_id,
                    feedback_result.did_well,
                    feedback_result.improvements
                )
            except Exception as feedback_error:
                logger.warning(f"Failed to generate plaintiff feedback: {feedback_error}", exc_info=True)

        service.save_session(session_id, db)

        # Collect all AI responses (Judge and/or Defendant may both respond)
        all_responses = []

        # Decide first who should respond
        logger.info(f"Session {session_id}: Deciding next speaker...")
        next_speaker = court_session.decide_next_speaker().lower()
        logger.info(f"Session {session_id}: Next speaker decided: {next_speaker}")

        # If verdict, generate final verdict message
        if next_speaker == "verdict":
            logger.info(f"Session {session_id}: Generating verdict message...")
            verdict_response = court_session.process_ai_turn()

            # Send verdict via WebSocket
            await ws_manager.send_response(
                session_id,
                verdict_response.role,
                verdict_response.dialogue,
                inner_thought=verdict_response.inner_thought,
            )
            await ws_manager.send_next_speaker(session_id, "Verdict")

            # Mark trial as complete and save transcript
            service.complete_session(session_id, db)
            service.save_session(session_id, db)

            return SendMessageResponse(
                status="verdict",
                message="The trial has concluded.",
                feedback=plaintiff_feedback,
                ai_response=SchemaResponse(
                    role=verdict_response.role,
                    dialogue=verdict_response.dialogue,
                    inner_thought=verdict_response.inner_thought,
                ),
            )

        # Process AI turns until it's Plaintiff's turn or verdict
        max_ai_turns = 5  # Allow more turns for proper proceedings
        ai_turn_count = 0

        try:
            while next_speaker not in ["plaintiff", "verdict"] and ai_turn_count < max_ai_turns:
                ai_turn_count += 1
                logger.info(f"Session {session_id}: AI turn {ai_turn_count}, speaker: {next_speaker}")

                # Get AI response
                ai_response = court_session.process_ai_turn()
                logger.info(f"Session {session_id}: AI response from {ai_response.role}: {ai_response.dialogue[:50] if ai_response.dialogue else 'empty'}...")
                all_responses.append(ai_response)

                # Send to WebSocket clients
                await ws_manager.send_response(
                    session_id,
                    ai_response.role,
                    ai_response.dialogue,
                    inner_thought=ai_response.inner_thought,
                )


                # Decide next speaker
                next_speaker = court_session.decide_next_speaker().lower()

                # If Plaintiff's turn, break and let them speak
                if next_speaker == "plaintiff":
                    await ws_manager.send_next_speaker(session_id, "Plaintiff")
                    break

                # CRITICAL FIX: Check for verdict in AI loop
                if next_speaker == "verdict":
                    logger.info(f"Session {session_id}: Verdict reached in AI loop")
                    verdict_response = court_session.process_ai_turn()

                    await ws_manager.send_response(
                        session_id,
                        verdict_response.role,
                        verdict_response.dialogue,
                        inner_thought=verdict_response.inner_thought,
                    )
                    await ws_manager.send_next_speaker(session_id, "Verdict")

                    # Complete session with transcript save
                    service.complete_session(session_id, db)
                    break

        except Exception as ai_loop_error:
            logger.error(f"Session {session_id}: Error in AI turn loop: {ai_loop_error}", exc_info=True)
            # Still try to return what we have
            await ws_manager.send_error(session_id, f"AI processing error: {str(ai_loop_error)}")

        service.save_session(session_id, db)

        # Return the last AI response in HTTP response (fallback for when WebSocket fails)
        from backend.schemas.court_schemas import CourtroomResponse as SchemaResponse, EvidenceRequestModel

        # Use the last response for the HTTP return
        if not all_responses:
            logger.warning(f"Session {session_id}: No AI responses generated")
            return SendMessageResponse(
                status="success",
                feedback=plaintiff_feedback,
                message="Waiting for court response...",
            )

        last_response = all_responses[-1]

        return SendMessageResponse(
            status="success",
            feedback=plaintiff_feedback,
            ai_response=SchemaResponse(
                role=last_response.role,
                dialogue=last_response.dialogue,
                inner_thought=last_response.inner_thought,
                evidence_request=None,
            ),
        )
    except Exception as e:
        logger.error(f"Error sending message: {e}")
        await ws_manager.send_error(session_id, str(e))
        raise


@router.post("/sessions/{session_id}/objections/continue", response_model=dict)
async def continue_after_objection(
    session_id: str,
    request: ContinueAfterObjectionRequest,
    db: Session = Depends(get_db),
):
    """
    Continue with plaintiff's turn after objection handling.

    Called when plaintiff either uses original statement or after rephrasing.
    """
    try:
        service = get_session_service()
        court_session = service.get_session(session_id, db)

        if not court_session:
            raise ValueError(f"Session {session_id} not found")

        # In a real implementation, this would handle rephrase logic
        # For now, it finalizes the turn and triggers AI response
        # The frontend would have already shown the original statement in history

        # Proceed to AI response
        ai_response = court_session.process_ai_turn()

        # Send to WebSocket clients
        await ws_manager.send_response(
            session_id,
            ai_response.role,
            ai_response.dialogue,
            inner_thought=ai_response.inner_thought,
        )

        service.save_session(session_id, db)

        return {"status": "success"}
    except Exception as e:
        logger.error(f"Error continuing after objection: {e}")
        raise


@router.post("/sessions/{session_id}/evidence", response_model=UploadEvidenceResponse)
async def upload_evidence(
    session_id: str,
    files: List[UploadFile] = File(...),
    db: Session = Depends(get_db),
):
    """
    Upload evidence files during the hearing.

    Evidence can be uploaded anytime during Plaintiff's turn.
    """
    try:
        service = get_session_service()
        court_session = service.get_session(session_id, db)

        if not court_session:
            raise ValueError(f"Session {session_id} not found")

        # Validate it's Plaintiff's turn
        logger.info(f"It is {court_session.current_speaker}'s turn")   
        if court_session.current_speaker != "Plaintiff":
            raise ValueError(
                "Evidence can only be uploaded during your turn to speak."
            )

        # Upload files to the session's evidence directory
        evidence_service = EvidenceService(court_session.evidence_submit_dir)
        logger.info(f"Session {session_id}: Uploading evidence to: {court_session.evidence_submit_dir}, turn: {court_session.turn_number}")
        uploaded = await evidence_service.upload_evidence(
            files, court_session.turn_number
        )
        logger.info(f"Session {session_id}: Uploaded {len(uploaded)} evidence files")

        # Store file paths in session for AI processing
        file_paths = [f["path"] for f in uploaded]
        court_session.evidence_buffer.extend(file_paths)

        # Add a system message indicating evidence was submitted
        file_names = [f["filename"] for f in uploaded]
        evidence_msg = f"[Plaintiff submitted evidence: {', '.join(file_names)}]"
        court_session.history.append({
            "role": "System",
            "content": evidence_msg,
            "turn": court_session.turn_number
        })

        logger.info(f"Session {session_id}: Evidence uploaded - {file_names}")

        # Trigger Judge response to acknowledge evidence
        # court_session.current_speaker = "Judge"
        # ai_response = court_session.process_ai_turn()

        # # Send AI response via WebSocket
        # await ws_manager.send_response(
        #     session_id,
        #     ai_response.role,
        #     ai_response.dialogue,
        #     inner_thought=ai_response.inner_thought,
        # )

        # ALWAYS return turn to Plaintiff after evidence acknowledgement
        # This prevents Defendant from interrupting while Plaintiff is typing context
        court_session.current_speaker = "Plaintiff"
        await ws_manager.send_next_speaker(session_id, "Plaintiff")
        logger.info(f"Session {session_id}: Returned turn to Plaintiff after evidence acknowledgement")

        service.save_session(session_id, db)

        return UploadEvidenceResponse(
            uploaded_files=[EvidenceFileMetadata(**f) for f in uploaded]
        )
    except ValueError as e:
        logger.warning(f"Evidence upload validation failed: {e}")
        raise
    except Exception as e:
        logger.error(f"Error uploading evidence: {e}")
        raise


@router.get("/sessions/{session_id}/transcript", response_model=dict)
async def get_transcript(
    session_id: str,
    db: Session = Depends(get_db),
):
    """
    Get the full trial transcript for a session.
    """
    try:
        service = get_session_service()
        state = service.get_session_state(session_id, db)

        if not state:
            raise ValueError(f"Session {session_id} not found")

        return {
            "history": state["history"],
            "evidence_count": len(
                get_evidence_service(session_id).get_evidence_files()
            ),
        }
    except Exception as e:
        logger.error(f"Error retrieving transcript: {e}")
        raise


@router.delete("/sessions/{session_id}", response_model=dict)
async def complete_session(
    session_id: str,
    db: Session = Depends(get_db),
):
    """
    End a court session and save the transcript.
    """
    try:
        service = get_session_service()
        service.complete_session(session_id, db)
        return {"status": "completed"}
    except Exception as e:
        logger.error(f"Error completing session: {e}")
        raise


# ===== WebSocket Endpoint =====


@router.websocket("/sessions/{session_id}/ws")
async def websocket_endpoint(
    session_id: str,
    websocket: WebSocket,
    db: Session = Depends(get_db),
):
    """
    WebSocket endpoint for real-time court simulator updates.

    Clients connect to receive:
    - AI responses (Judge/Defendant)
    - Next speaker notifications
    - Evidence request alerts
    - Error messages
    """
    await ws_manager.connect(session_id, websocket)

    # Send connection confirmation
    await websocket.send_json({
        "type": "connected",
        "data": {"session_id": session_id}
    })

    try:
        while True:
            # Keep connection alive - messages are sent via broadcast
            await websocket.receive_text()
    except WebSocketDisconnect:
        await ws_manager.disconnect(session_id, websocket)
        logger.info(f"WebSocket client disconnected from session {session_id}")
    except Exception as e:
        logger.error(f"WebSocket error: {e}")
        await ws_manager.disconnect(session_id, websocket)
