import os
import json
import time
from typing import List, Dict, Optional, Tuple
from court_simulator.session import CourtSession
from court_simulator.agent import ObjectionDecision, PlaintiffFeedback

# --- Configuration ---
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
USER_ID = "user_1"
BASE_DATA_DIR = os.path.join(PROJECT_ROOT, "data", USER_ID)
DATA_FILE = os.path.join(BASE_DATA_DIR, "ocr_output", "extracted_data.json")
EVIDENCE_SUBMIT_DIR = os.path.join(BASE_DATA_DIR, "evidence", "court_submitted")
TRANSCRIPT_FILE = os.path.join(BASE_DATA_DIR, "evidence", "court_transcript.json")


def load_case_data() -> Optional[Dict]:
    """Loads the case data from JSON."""
    if not os.path.exists(DATA_FILE):
        print(f"Error: {DATA_FILE} not found.")
        return None
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)


def sanitize_filename(filename: str) -> str:
    """
    Sanitize filename: lowercase, replace spaces, remove special chars.
    """
    name, ext = os.path.splitext(filename)
    name = name.lower().replace(' ', '_')
    name = ''.join(c for c in name if c.isalnum() or c in '-_')
    return name + ext.lower()


def get_user_evidence(evidence_submit_dir: str, turn_number: int) -> Optional[List[str]]:
    """
    Copy files to persistent storage, return list of stored file paths.

    Args:
        evidence_submit_dir: Directory to store evidence files
        turn_number: Current turn number for naming

    Returns:
        List of file paths stored in evidence_submit_dir, or None if no files
    """
    import shutil
    stored_paths = []
    print("\n--- EVIDENCE UPLOAD ---")
    print("You may upload multiple files (images or PDFs).")

    os.makedirs(evidence_submit_dir, exist_ok=True)
    turn_filenames = {}

    while True:
        filepath = input("Enter file path (or 'done' to finish): ").strip()
        if filepath.lower() == 'done':
            break

        filepath = os.path.expanduser(os.path.abspath(filepath))

        if not os.path.isfile(filepath):
            print(f"File not found: {filepath}")
            continue

        try:
            original_name = os.path.basename(filepath)
            sanitized_name = sanitize_filename(original_name)

            # Handle duplicate filenames in same turn
            if sanitized_name in turn_filenames:
                turn_filenames[sanitized_name] += 1
                base, ext = os.path.splitext(sanitized_name)
                sanitized_name = f"{base}_{turn_filenames[sanitized_name]}{ext}"
            else:
                turn_filenames[sanitized_name] = 1

            turn_filename = f"turn_{turn_number}_{sanitized_name}"
            dest_path = os.path.join(evidence_submit_dir, turn_filename)

            shutil.copy2(filepath, dest_path)
            stored_paths.append(dest_path)
            print(f"✓ Stored: {turn_filename}")
        except Exception as e:
            print(f"Error: {e}")
            continue

    return stored_paths if stored_paths else None


def handle_objection(
    objection: ObjectionDecision,
    original_statement: str
) -> Tuple[bool, str]:
    """
    Handle objection with user interaction.

    Args:
        objection: The ObjectionDecision from defendant
        original_statement: The original plaintiff statement

    Returns:
        (rephrased, final_statement) - True if rephrased, False if continuing
    """
    print("\n" + "="*70)
    print("⚠️  OBJECTION RAISED BY DEFENSE")
    print("="*70)
    print(f"Type: {objection.objection_type}")
    print(f"Severity: {objection.severity.upper()}")
    print(f"\nLegal Reasoning:\n{objection.legal_reasoning}")

    if objection.suggested_rephrasing:
        print(f"\nSuggested Rephrasing:\n\"{objection.suggested_rephrasing}\"")

    print("\nYour Options:")
    print("[1] Rephrase your statement (original will be removed from record)")
    print("[2] Continue with current statement (objection will be noted)")

    choice = input("\nYour choice (1 or 2): ").strip()

    if choice == '1':
        print("\nEnter your rephrased statement:")
        rephrased = input("> ").strip()
        return (True, rephrased)
    else:
        return (False, original_statement)


def display_feedback(feedback):
    """Display structured educational feedback to user."""
    print("\n" + "─"*70)
    print("💡 COACH FEEDBACK")
    print("─"*70)
    print(f"✓ What you did well:")
    print(f"  {feedback.did_well}")
    print(f"\n📌 Areas for improvement:")
    for i, improvement in enumerate(feedback.improvements, 1):
        print(f"  {i}. {improvement}")
    print("─"*70)


def display_educational_objection(objection: ObjectionDecision):
    """
    Display educational objection opportunity to user.
    Does NOT affect trial - informational only.
    """
    print("\n" + "━"*70)
    print("🎓 LEARNING OPPORTUNITY - You Could Have Objected")
    print("━"*70)
    print(f"Objection Type: {objection.objection_type}")
    print(f"Severity: {objection.severity.upper()}")
    print(f"\nWhy This Would Be Valid:")
    print(objection.legal_reasoning)

    if objection.suggested_rephrasing:
        print(f"\nHow to Object:")
        print(f'  "Objection, Your Honor - {objection.objection_type.lower()}."')

    print("\nNote: This is educational only - the trial continues normally.")
    print("━"*70)


def main():
    """Main trial simulation loop."""
    # Load case data
    case_data = load_case_data()
    if not case_data:
        return

    # Get API key
    api_key = ''

    if not api_key:
        api_key = os.getenv("GEMINI_API_KEY")

    if not api_key:
        api_key = input("Enter your Gemini API Key: ").strip()

    if not api_key:
        print("API Key required to run simulation.")
        return

    # Create evidence storage directory
    os.makedirs(EVIDENCE_SUBMIT_DIR, exist_ok=True)

    # Initialize session
    try:
        session = CourtSession(case_data, api_key, EVIDENCE_SUBMIT_DIR)
        print("✅ Courtroom Initialized")
    except Exception as e:
        print(f"❌ Failed to initialize: {e}")
        return

    print("\n" + "="*70)
    print("🏛️  SMALL CLAIMS COURT SIMULATION")
    print("="*70)
    print(f"Case: {case_data['claim_summary'][:100]}...")
    print(f"Plaintiff: {case_data['plaintiffs'][0]['name']}")
    print(f"Defendant: {case_data['defendants'][0]['name']}")
    print(f"Amount Sought: ${case_data['amount_sought']}")
    print("\nType 'QUIT' to end simulation.\n")

    # Judge opens court
    print(f"\n[{session.current_speaker}]")
    response = session.process_ai_turn()
    print(response.dialogue)

    if response.inner_thought:
        print(f"   [Thinking: {response.inner_thought}]")

    # Determine next speaker
    session.decide_next_speaker()

    # Main trial loop
    while session.current_speaker != "Verdict":
        print(f"\n[{session.current_speaker}]")

        if session.current_speaker == "Plaintiff":
            # --- PLAINTIFF TURN WITH OBJECTION HANDLING ---

            user_input = input("Your Argument: ").strip()

            if user_input.upper() == 'QUIT':
                break

            # Handle evidence upload
            evidence_paths = None
            choice = input("Upload evidence now? (y/n): ").lower()
            if choice == 'y':
                evidence_paths = get_user_evidence(EVIDENCE_SUBMIT_DIR, session.turn_number)

            # Process statement with objection check
            try:
                objection_raised, objection = session.process_plaintiff_turn(
                    statement=user_input,
                    evidence_paths=evidence_paths
                )

                if objection_raised:
                    # Handle objection interactively
                    rephrased, final_statement = handle_objection(objection, user_input)

                    if rephrased:
                        print("\n✓ Statement rephrased (original removed from record)")
                        # Re-check rephrased statement for objections
                        recheck_raised, recheck_obj = session.process_plaintiff_turn(
                            statement=final_statement,
                            evidence_paths=None  # Evidence already uploaded
                        )

                        if recheck_raised:
                            print("\n⚠️  Rephrased statement still has issues:")
                            print(f"{recheck_obj.objection_type}: {recheck_obj.legal_reasoning}")
                            print("Proceeding anyway...")
                            session.finalize_plaintiff_turn(final_statement)
                        else:
                            print("\n✓ Rephrased statement accepted")
                            session.finalize_plaintiff_turn(final_statement)

                            # Provide feedback
                            try:
                                feedback = session.agents.provide_plaintiff_feedback(
                                    plaintiff_statement=final_statement,
                                    history=session.history,
                                    case_data=case_data
                                )
                                display_feedback(feedback)
                            except Exception:
                                pass  # Non-critical feature
                    else:
                        print("\n→ Continuing with original statement (objection noted)")
                        # Add objection to record

                        session.finalize_plaintiff_turn(user_input)

                        # session._add_to_history(
                        #     "Defendant",
                        #     f"OBJECTION: {objection.objection_type}. {objection.legal_reasoning}"
                        # )

                        # Provide feedback
                        try:
                            feedback = session.agents.provide_plaintiff_feedback(
                                plaintiff_statement=user_input,
                                history=session.history,
                                case_data=case_data
                            )
                            display_feedback(feedback)
                        except Exception:
                            print("\n⚠️  Failed to provide feedback.")
                            pass  # Non-critical feature
                else:
                    # No objection - statement already added to history
                    session.finalize_plaintiff_turn(user_input)

                    # Provide feedback
                    try:
                        feedback = session.agents.provide_plaintiff_feedback(
                            plaintiff_statement=user_input,
                            history=session.history,
                            case_data=case_data
                        )
                        display_feedback(feedback)
                    except Exception:
                        print("\n⚠️  Failed to provide feedback.")
                        pass  # Non-critical feature

            except ValueError as e:
                print(f"\n❌ ERROR: {e}")
                continue

        else:
            # --- AI TURN (JUDGE OR DEFENDANT) ---
            response = session.process_ai_turn()
            print(response.dialogue)

            # Show inner thoughts for debugging (optional)
            if response.inner_thought:
                print(f"   [Thinking: {response.inner_thought}]")

            # Educational objection monitoring for Defendant (non-blocking)
            if session.current_speaker == "Defendant":
                try:
                    defendant_statement = session.history[-1]['content']
                    educational_obj = session.agents.evaluate_defendant_statement(
                        defendant_statement=defendant_statement,
                        history=session.history,
                        case_data=case_data
                    )

                    # Only display if there's an actual objection opportunity
                    if educational_obj.has_objection:
                        display_educational_objection(educational_obj)
                except Exception:
                    pass  # Silent failure - educational feature only

        # Decide next speaker
        next_speaker = session.decide_next_speaker()

        if next_speaker == "Verdict":
            print("\n[Judge - VERDICT]")
            # Final verdict
            verdict_response = session.process_ai_turn()
            print(verdict_response.dialogue)
            break

        # Small delay to prevent rapid API calls
        time.sleep(1)

    # Save transcript
    os.makedirs(os.path.dirname(TRANSCRIPT_FILE), exist_ok=True)
    session.save_transcript(TRANSCRIPT_FILE)
    print(f"\n✓ Transcript: {TRANSCRIPT_FILE}")
    if os.path.exists(EVIDENCE_SUBMIT_DIR):
        count = len([f for f in os.listdir(EVIDENCE_SUBMIT_DIR)
                     if os.path.isfile(os.path.join(EVIDENCE_SUBMIT_DIR, f))])
        print(f"✓ Evidence: {count} file(s) in {EVIDENCE_SUBMIT_DIR}")
    print("\nSimulation complete.")


if __name__ == "__main__":
    main()