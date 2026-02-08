from typing import List, Dict, Optional, Tuple
from court_simulator.agent import (
    CourtroomAgents,
    ObjectionDecision,
    CourtroomResponse,
    ControllerDecision
)
import json
import os


class CourtSession:
    """
    Manages state for a single court simulation session.
    Handles turn processing, objection loops, and evidence gating.
    """

    def __init__(self, case_data: Dict, api_key: str, evidence_submit_dir: str):
        self.case_data = case_data
        self.agents = CourtroomAgents(api_key)
        self.evidence_submit_dir = evidence_submit_dir

        # State
        self.history: List[Dict] = []
        self.evidence_upload_allowed: bool = False
        self.current_speaker: str = "Judge"
        self.evidence_buffer: List[str] = []  # Now stores file paths, not dicts
        self.turn_number: int = 0
        self.verdict_issued: bool = False

    def process_plaintiff_turn(
        self,
        statement: str,
        evidence_paths: Optional[List[str]] = None
    ) -> Tuple[bool, Optional[ObjectionDecision]]:
        """
        Process plaintiff statement with objection evaluation.

        Args:
            statement: The plaintiff's statement
            evidence_paths: List of file paths to evidence files

        Returns:
            (objection_raised, objection_decision)

        Raises:
            ValueError: If evidence upload not allowed
        """
        # Check evidence permission
        if evidence_paths and not self.evidence_upload_allowed:
            raise ValueError("Evidence upload not allowed - Judge must request evidence first")

        # Store evidence paths in buffer
        if evidence_paths:
            self.evidence_buffer.extend(evidence_paths)
            self.evidence_upload_allowed = False  # Reset after upload

        # Evaluate for objections BEFORE adding to history
        objection = self.agents.evaluate_for_objection(
            plaintiff_statement=statement,
            history=self.history,
            case_data=self.case_data
        )

        if objection.has_objection:
            return (True, objection)
        else:
            # No objection - will be added to history in finalize_plaintiff_turn()
            return (False, None)

    def finalize_plaintiff_turn(self, statement: str):
        """
        Finalize plaintiff turn after objection handling.
        Called when plaintiff chooses to continue despite objection OR after rephrasing.

        Args:
            statement: The final statement to add to history
        """
        self._add_to_history("Plaintiff", statement)
        self.turn_number += 1

    def process_ai_turn(self) -> CourtroomResponse:
        """
        Process Judge or Defendant turn.
        Returns structured response and updates evidence permission if needed.

        Returns:
            CourtroomResponse with dialogue, inner thoughts, and optional evidence request
        """
        # Retrieve ALL historical evidence from directory
        all_evidence = self.get_all_evidence_paths()

        response = self.agents.get_role_response(
            role=self.current_speaker,
            history=self.history,
            case_data=self.case_data,
            evidence_upload_allowed=self.evidence_upload_allowed,
            evidence_paths=all_evidence if all_evidence else None
        )

        # Check for verdict BEFORE adding to history
        if self.current_speaker == "Judge":
            self.check_for_verdict(response)

        # Clear evidence buffer after AI processes it
        self.evidence_buffer = []

        # Check if Judge requested evidence
        if self.current_speaker == "Judge" and response.evidence_request:
            if response.evidence_request.requesting_evidence:
                self.evidence_upload_allowed = True

        # Add to history
        self._add_to_history(self.current_speaker, response.dialogue)
        self.turn_number += 1

        return response

    def check_for_verdict(self, response: CourtroomResponse) -> bool:
        """
        Check if Judge's response contains a final verdict.
        Returns True if verdict was issued.
        """
        if self.current_speaker != "Judge":
            return False

        # Only check after significant trial progress (turn 5+)
        if self.turn_number < 5:
            return False

        dialogue_lower = response.dialogue.lower()

        # Must have verdict keyword AND a decision phrase
        has_verdict_keyword = any(kw in dialogue_lower for kw in [
            'verdict', 'ruling', 'judgment', 'my decision'
        ])

        has_decision = any(phrase in dialogue_lower for phrase in [
            'i find for', 'i rule in favor', 'judgment for',
            'plaintiff wins', 'defendant wins', 'case dismissed',
            'in favor of the plaintiff', 'in favor of the defendant'
        ])

        if has_verdict_keyword and has_decision:
            self.verdict_issued = True
            self.current_speaker = "Verdict"
            return True

        return False

    def decide_next_speaker(self) -> str:
        """
        Use Controller agent to decide next speaker.

        Returns:
            The role of the next speaker
        """
        decision = self.agents.get_controller_decision(
            history=self.history[-10:] if len(self.history) > 10 else self.history
        )
        self.current_speaker = decision.next_speaker
        return decision.next_speaker

    def _add_to_history(self, role: str, content: str):
        """
        Add entry to conversation history.

        Args:
            role: The speaker role
            content: The spoken content
        """
        self.history.append({
            "role": role,
            "content": content,
            "turn": self.turn_number
        })

    def get_all_evidence_paths(self) -> List[str]:
        """
        Retrieve all evidence files from the persistent storage directory.
        Returns sorted list of absolute file paths.
        """
        if not os.path.exists(self.evidence_submit_dir):
            return []

        try:
            files = []
            for filename in os.listdir(self.evidence_submit_dir):
                filepath = os.path.join(self.evidence_submit_dir, filename)
                if os.path.isfile(filepath):
                    files.append(filepath)
            return sorted(files)  # Chronological order by filename
        except Exception as e:
            print(f"Warning: Could not read evidence directory: {e}")
            return []

    def save_transcript(self, filepath: str):
        """
        Save trial transcript to JSON file.

        Args:
            filepath: Path to save the transcript
        """
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(self.history, f, indent=2, ensure_ascii=False)