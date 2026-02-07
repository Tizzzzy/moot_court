import google.generativeai as genai
import json
import os
import base64
import requests
from pydantic import BaseModel, Field
from typing import List, Literal, Optional
import logging

logger = logging.getLogger(__name__)

class PlaintiffFeedback(BaseModel):
    """Structured feedback for plaintiff statement"""
    did_well: str = Field(description="What the plaintiff did well in their statement")
    improvements: List[str] = Field(description="List of specific areas for improvement (2-3 items)")

class ObjectionDecision(BaseModel):
    """Defendant's evaluation of plaintiff statement for objections"""
    has_objection: bool = Field(description="True if this statement raises a valid objection")
    objection_type: Optional[str] = Field(description="Type: Hearsay, Speculation, Relevance, Foundation, Narrative, etc.", default=None)
    legal_reasoning: Optional[str] = Field(description="Legal/procedural basis for the objection", default=None)
    suggested_rephrasing: Optional[str] = Field(description="How plaintiff should rephrase to avoid objection", default=None)
    severity: Literal['minor', 'moderate', 'severe'] = Field(default='moderate', description="Severity level of the objection")

class EvidenceRequest(BaseModel):
    """Judge's explicit request for evidence"""
    requesting_evidence: bool = Field(description="True if Judge is requesting evidence")
    evidence_types: List[str] = Field(description="Types of evidence requested (e.g., ['dental invoice', 'photos'])", default_factory=list)
    urgency: Literal['required', 'optional'] = Field(default='optional', description="Whether evidence is required or optional")

class ControllerDecision(BaseModel):
    next_speaker: Literal['Judge', 'Defendant', 'Plaintiff', 'Verdict'] = Field(description="The role selected to speak next.")

class CourtroomResponse(BaseModel):
    role: str = Field(description="The role of the speaker (e.g., Judge, Defendant).")
    dialogue: str = Field(description="The actual spoken words/response to the court.")
    inner_thought: Optional[str] = Field(description="The agent's internal reasoning or legal strategy.", default=None)
    citations: Optional[List[str]] = Field(description="List of legal precedents or evidence references if applicable.", default=None)
    evidence_request: Optional[EvidenceRequest] = Field(description="Judge's evidence request, if any", default=None)

class CourtroomAgents:
    def __init__(self, api_key: str = None):
        # Use Gemini API via REST (works with any Python version)
        # Priority: passed api_key > env var > .env file > hardcoded fallback
        self.gemini_key = api_key
        if not self.gemini_key:
            self.gemini_key = os.getenv("GEMINI_API_KEY")
        if not self.gemini_key:
            env_path = os.path.join(os.path.dirname(__file__), "..", ".env")
            if os.path.exists(env_path):
                with open(env_path, "r") as f:
                    for line in f:
                        if line.startswith("GEMINI_API_KEY="):
                            self.gemini_key = line.strip().split("=", 1)[1]
                            break
        if not self.gemini_key:
            # Fallback to hardcoded key
            self.gemini_key = 'AIzaSyDidgcddZDzZS59zPv4f8ztU_Bd7DyrDss'

        # Use Gemini REST API directly for compatibility
        self.api_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
        logger.info("CourtroomAgents initialized with Gemini 2.0 Flash API (REST)")

    def _generate_content(self, prompt: str) -> str:
        """Call Gemini API via REST."""
        headers = {"Content-Type": "application/json"}
        data = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": 0.7,
                "maxOutputTokens": 2048,
            }
        }

        url = f"{self.api_url}?key={self.gemini_key}"
        response = requests.post(url, headers=headers, json=data, timeout=60)

        if response.status_code != 200:
            logger.error(f"Gemini API error: {response.status_code} - {response.text}")
            raise Exception(f"Gemini API error: {response.status_code}")

        result = response.json()
        content = result.get("candidates", [{}])[0].get("content", {}).get("parts", [{}])[0].get("text", "")
        return content.strip()

    def evaluate_for_objection(
        self,
        plaintiff_statement: str,
        history: List,
        case_data: dict
    ) -> ObjectionDecision:
        """
        Defendant evaluates plaintiff's statement for legal objections.
        Returns structured objection decision with reasoning and rephrasing suggestions.
        """
        case_context = json.dumps(case_data)
        history_context = json.dumps(history[-5:]) if len(history) > 5 else json.dumps(history)

        system_instruction = f"""
        You are Defense Counsel for: {case_data['defendants'][0]['name']}.

        TASK: Evaluate the plaintiff's latest statement for valid legal objections.

        PLAINTIFF STATEMENT: "{plaintiff_statement}"

        Case Context: {case_context}

        OBJECTION GROUNDS TO CHECK:
        1. HEARSAY: Statement relies on what someone else said out of court (not first-hand knowledge)
        2. SPECULATION: Plaintiff is guessing about facts they don't personally know or witness
        3. RELEVANCE: Statement is not directly related to the claim or liability
        4. FOUNDATION: Plaintiff lacks personal knowledge or proper basis to make statement
        5. NARRATIVE: Statement is rambling, overly long, or non-responsive to specific question

        RULES:
        - Only raise objections with valid legal basis
        - Provide clear legal reasoning (cite rule/procedure)
        - Suggest specific rephrasing to cure the defect
        - Be strategic: not every minor issue warrants objection
        - If statement is acceptable, set has_objection to false

        Return a structured ObjectionDecision JSON with all required fields.
        """

        prompt_text = f"{system_instruction}\n\nRecent Trial History:\n{history_context}\n\nReturn ONLY valid JSON, nothing else."

        try:
            content = self._generate_content(prompt_text)
            # Clean markdown code blocks if present
            if content.startswith("```"):
                content = content.split("```")[1]
                if content.startswith("json"):
                    content = content[4:]
                content = content.strip()
            logger.info(f"Objection evaluation response: {content[:200]}")
            return ObjectionDecision.model_validate_json(content)
        except Exception as e:
            logger.error(f"Objection evaluation error: {e}")
            # Fallback: no objection
            return ObjectionDecision(
                has_objection=False,
                legal_reasoning="Error in evaluation system",
                suggested_rephrasing=None
            )

    def provide_plaintiff_feedback(
        self,
        plaintiff_statement: str,
        history: List,
        case_data: dict
    ) -> PlaintiffFeedback:
        """
        Provides structured educational feedback on plaintiff's statement.
        Returns JSON with what went well and areas for improvement.
        """
        history_context = json.dumps(history[-5:]) if len(history) > 5 else json.dumps(history)

        system_instruction = f"""
You are a Small Claims Court Coach helping the plaintiff improve their case presentation.

CASE CONTEXT: {case_data['claim_summary']}
PLAINTIFF'S STATEMENT: "{plaintiff_statement}"

TASK: Provide structured feedback as JSON with:
1. "did_well": One specific thing the plaintiff did well (1 sentence)
2. "improvements": List of 1-2 specific, actionable improvements

Guidelines:
- Focus on legal strategy, evidence use, clarity, and relevance
- Be encouraging but honest
- Improvements should be specific to their statement
- Consider small claims best practices

Return ONLY valid JSON, nothing else.
"""

        prompt = f"{system_instruction}\n\nRecent Trial Context:\n{history_context}"

        try:
            content = self._generate_content(prompt)
            # Clean markdown code blocks if present
            if content.startswith("```"):
                content = content.split("```")[1]
                if content.startswith("json"):
                    content = content[4:]
                content = content.strip()
            logger.info(f"Feedback response: {content[:200]}")
            return PlaintiffFeedback.model_validate_json(content)
        except Exception as e:
            logger.error(f"Feedback generation error: {e}")
            # Return fallback feedback
            return PlaintiffFeedback(
                did_well="You stated your position clearly.",
                improvements=["Provide specific evidence to support your claims", "Reference documents with exact amounts and dates"]
            )

    def evaluate_defendant_statement(
        self,
        defendant_statement: str,
        history: List,
        case_data: dict
    ) -> ObjectionDecision:
        """
        EDUCATIONAL ONLY: Evaluates defendant's statement for potential plaintiff objections.
        Does NOT affect trial flow or history.
        """
        case_context = json.dumps(case_data)
        history_context = json.dumps(history[-5:]) if len(history) > 5 else json.dumps(history)

        system_instruction = f"""
You are educating the Plaintiff ({case_data['plaintiffs'][0]['name']}) on objection opportunities.

DEFENDANT STATEMENT: "{defendant_statement}"
CASE CONTEXT: {case_context}

TASK: Analyze if there is a high-merit objection the plaintiff should raise against this statement.

OBJECTION GROUNDS:
1. HEARSAY: Defendant relies on what someone else said out of court
2. SPECULATION: Defendant is guessing about facts they don't personally know
3. RELEVANCE: Statement is not directly related to defense or liability
4. FOUNDATION: Defendant lacks personal knowledge or proper basis
5. NARRATIVE: Statement is rambling, overly long, or non-responsive

EDUCATIONAL CONTEXT:
- This is for plaintiff learning, not actual objection
- Explain IF an objection could be raised and WHY
- Be realistic: only flag severe legitimate objection opportunities
- If statement is legally sound, set has_objection to false

Return structured ObjectionDecision JSON with educational reasoning.
"""

        prompt_text = f"{system_instruction}\n\nRecent Trial History:\n{history_context}\n\nReturn ONLY valid JSON, nothing else."

        try:
            content = self._generate_content(prompt_text)
            # Clean markdown code blocks if present
            if content.startswith("```"):
                content = content.split("```")[1]
                if content.startswith("json"):
                    content = content[4:]
                content = content.strip()
            return ObjectionDecision.model_validate_json(content)
        except Exception as e:
            # Silent failure - educational feature only
            return ObjectionDecision(
                has_objection=False,
                legal_reasoning="Educational analysis unavailable"
            )

    def get_controller_decision(self, history, turn_number: int = 0) -> ControllerDecision:
        """
        Determines the next speaker using structured JSON output.
        Returns a ControllerDecision object with only next_speaker.

        Args:
            history: Conversation history
            turn_number: Current turn number (used to enforce minimum turns before verdict)
        """
        # Check if verdict has already been issued - if so, trial is OVER
        for entry in history:
            role = entry.get("role", "")
            content = entry.get("content", "").lower()
            # If Verdict role was already assigned or Judge gave a final ruling
            if role == "Verdict":
                return ControllerDecision(next_speaker="Verdict")
            # Check if Judge's dialogue contains verdict language
            if role == "Judge" and any(phrase in content for phrase in [
                "i rule in favor",
                "i find in favor",
                "i award",
                "judgment for",
                "the court rules",
                "verdict is",
                "case dismissed",
                "judgment is entered",
                "i hereby order",
                "plaintiff is awarded",
                "defendant is awarded"
            ]):
                return ControllerDecision(next_speaker="Verdict")

        # Simplify context for the token limit
        context = json.dumps(history[-10:]) if len(history) > 10 else json.dumps(history)

        # Count how many times each party has spoken
        plaintiff_turns = sum(1 for h in history if h.get("role") == "Plaintiff")
        defendant_turns = sum(1 for h in history if h.get("role") == "Defendant")
        judge_turns = sum(1 for h in history if h.get("role") == "Judge")

        prompt = f"""
        You are the Court Clerk. Review the trial history and decide who speaks next.

        History: {context}

        CURRENT STATISTICS:
        - Turn number: {turn_number}
        - Plaintiff has spoken: {plaintiff_turns} times
        - Defendant has spoken: {defendant_turns} times
        - Judge has spoken: {judge_turns} times

        STRICT RULES (in order of priority):

        1. MINIMUM REQUIREMENTS FOR VERDICT:
           - Verdict can ONLY be selected if ALL of these are true:
             * Turn number >= 6 (at least 6 exchanges)
             * Plaintiff has spoken at least 2 times
             * Defendant has spoken at least 1 time
             * Judge has asked about or received evidence
           - If these conditions are NOT met, you CANNOT select Verdict

        2. TURN SEQUENCE:
           - If history is empty, 'Judge' starts with opening statement
           - If Judge just spoke:
             * If Judge asked Plaintiff a question → 'Plaintiff'
             * If Judge asked Defendant a question → 'Defendant'
             * If Judge made a general statement → 'Plaintiff' (give them chance to speak)
           - If Plaintiff just spoke:
             * 'Defendant' gets chance to respond/rebut
           - If Defendant just spoke:
             * 'Judge' responds (ask questions, request evidence, or continue proceedings)

        3. ENSURE FAIR HEARING:
           - Both parties must have equal opportunity to present their case
           - Judge should ask clarifying questions before verdict
           - Evidence should be requested and reviewed before verdict

        4. ONLY SELECT VERDICT WHEN:
           - All minimum requirements met (see rule 1)
           - Both parties have fully presented their cases
           - Judge has reviewed all evidence
           - No more clarifying questions needed

        Return only the next_speaker field as JSON: {{"next_speaker": "Judge|Defendant|Plaintiff|Verdict"}}
        """

        try:
            raw_content = self._generate_content(prompt)
            # Clean markdown code blocks if present
            if raw_content.startswith("```"):
                raw_content = raw_content.split("```")[1]
                if raw_content.startswith("json"):
                    raw_content = raw_content[4:]
                raw_content = raw_content.strip()
            logger.info(f"[Controller] Raw response: {raw_content}")
            decision = ControllerDecision.model_validate_json(raw_content)
            logger.info(f"[Controller] Decided next speaker: {decision.next_speaker}")

            # Extra safety: enforce minimum turns before verdict
            if decision.next_speaker == "Verdict":
                if turn_number < 6 or plaintiff_turns < 2 or defendant_turns < 1:
                    # Force continuation - alternate between Plaintiff and Judge
                    last_speaker = history[-1].get("role") if history else None
                    if last_speaker == "Plaintiff":
                        return ControllerDecision(next_speaker="Defendant")
                    elif last_speaker == "Defendant":
                        return ControllerDecision(next_speaker="Judge")
                    else:
                        return ControllerDecision(next_speaker="Plaintiff")

            return decision

        except Exception as e:
            logger.error(f"Controller JSON Error: {e}")
            # Fallback: determine based on last speaker
            if history:
                last_speaker = history[-1].get("role")
                if last_speaker == "Plaintiff":
                    return ControllerDecision(next_speaker="Defendant")
                elif last_speaker == "Defendant":
                    return ControllerDecision(next_speaker="Judge")
            return ControllerDecision(next_speaker="Plaintiff")

    def get_role_response(
        self,
        role: str,
        history: List,
        case_data: dict,
        evidence_paths: Optional[List[str]] = None,
        evidence_upload_allowed: bool = False
    ) -> CourtroomResponse:
        """
        Generates response for Judge/Defendant returning a structured object.

        Args:
            role: The speaker role (Judge or Defendant)
            history: Conversation history
            case_data: Case information
            evidence_paths: List of file paths to evidence files
            evidence_upload_allowed: Whether evidence upload is currently allowed
        """
        history_context = json.dumps(history)

        if role == "Judge":
            evidence_status = (
                "Evidence upload is CURRENTLY ALLOWED - plaintiff may submit files"
                if evidence_upload_allowed else
                "Evidence upload is BLOCKED - you must explicitly request evidence to allow upload"
            )

            system_instruction = f"""
            You are an impartial Judge in a Small Claims Court in {case_data['state']}.
            Case: {case_data['claim_summary']}
            Amount Sought: ${case_data['amount_sought']}

            EVIDENCE MANAGEMENT:
            {evidence_status}

            COURT PROCEDURE - FOLLOW THIS ORDER:
            1. OPENING (Turn 1): Introduce yourself, explain the process, ask plaintiff to state their claim
            2. PLAINTIFF TESTIMONY (Turns 2-4): Listen to plaintiff, ask clarifying questions
            3. REQUEST EVIDENCE: Ask plaintiff to provide documentary evidence
               - Set evidence_request.requesting_evidence = true
               - List specific evidence_types needed (e.g., ["invoice", "photos", "contract"])
            4. DEFENDANT RESPONSE (Turns 5-7): Let defendant respond, challenge evidence
            5. REBUTTAL: Allow plaintiff to respond to defendant's arguments
            6. FINAL QUESTIONS: Ask any remaining questions for clarity
            7. VERDICT (Turn 8+): Only after thorough review, issue a detailed ruling

            IMPORTANT RULES:
            - DO NOT rush to verdict - conduct a proper hearing first
            - Ask at least 2-3 clarifying questions before considering verdict
            - Let both parties speak and respond to each other
            - Review all evidence before making a decision
            - When requesting evidence, set evidence_request.requesting_evidence = true
            - Keep responses to 2-3 sentences unless giving verdict
            - Be professional, fair, and impartial

            VERDICT FORMAT (only when ready):
            "After reviewing all evidence and testimony, I find in favor of [party].
            [Detailed reasoning]. The defendant is ordered to pay $[amount]."
            Set evidence_request = null when giving verdict.
            """

            if evidence_paths:
                system_instruction += f"""

EVIDENCE REVIEW:
You have access to {len(evidence_paths)} evidence file(s) submitted throughout the trial.
Review all evidence carefully when making decisions or delivering verdict.
Reference specific evidence by filename when discussing it.
"""
        elif role == "Defendant":
            system_instruction = f"""
            You are Defense Counsel for: {case_data['defendants'][0]['name']}.
            Sued for: ${case_data['amount_sought']}.
            Case: {case_data['claim_summary']}

            YOUR ROLE:
            - Defend your client against the plaintiff's claims
            - Deny liability where appropriate
            - Point out gaps in plaintiff's evidence
            - Present counter-arguments and alternative explanations
            - Be polite but firm - this is a legal proceeding

            IMPORTANT:
            - Wait for the Judge to give you permission to speak
            - Address the Judge respectfully (e.g., "Your Honor...")
            - Respond to specific claims made by the plaintiff
            - Keep responses to 2-3 sentences
            - If the Judge has issued a verdict, do NOT speak - the trial is over
            """

            if evidence_paths:
                system_instruction += f"""

PLAINTIFF'S EVIDENCE ({len(evidence_paths)} file(s)):
Review and challenge the credibility of submitted evidence.
Point out inconsistencies, missing documentation, or insufficient proof.
"""

        elif role == "Verdict":
            return CourtroomResponse(
                role="Verdict",
                dialogue="Simulation Finished"
            )

        else:
            return CourtroomResponse(
                role="System",
                dialogue="Error: Invalid Role"
            )

        # Prepare Content
        prompt_text = f"""{system_instruction}

Trial History:
{history_context}

Generate the response for {role}. Return ONLY a JSON object with EXACTLY these fields (no markdown, no code blocks):
{{
  "role": "{role}",
  "dialogue": "Your spoken response here",
  "inner_thought": "Your internal reasoning (optional, can be null)",
  "citations": null,
  "evidence_request": {{"requesting_evidence": false, "evidence_types": [], "urgency": "optional"}} or null
}}"""

        # Add evidence context
        if evidence_paths:
            evidence_summary = f"\n\nPLAINTIFF SUBMITTED EVIDENCE ({len(evidence_paths)} file(s)):"
            for filepath in evidence_paths:
                filename = os.path.basename(filepath)
                ext = os.path.splitext(filepath)[1].lower()
                mime_type = {
                    '.pdf': 'application/pdf',
                    '.jpg': 'image/jpeg',
                    '.jpeg': 'image/jpeg',
                    '.png': 'image/png'
                }.get(ext, 'unknown')
                evidence_summary += f"\n- {filename}: {mime_type}"
            prompt_text += evidence_summary

        try:
            # Use REST API for text generation
            content = self._generate_content(prompt_text)

            # Clean markdown code blocks if present
            if content.startswith("```"):
                content = content.split("```")[1]
                if content.startswith("json"):
                    content = content[4:]
                content = content.strip()

            logger.info(f"[{role}] Response: {content[:300]}...")

            try:
                return CourtroomResponse.model_validate_json(content)
            except Exception as parse_error:
                logger.warning(f"Parse error, trying to fix: {parse_error}")
                # Try to extract dialogue from nested response
                data = json.loads(content)
                if "response" in data:
                    data = data["response"]
                if "text" in data and "dialogue" not in data:
                    data["dialogue"] = data["text"]
                if "role" not in data:
                    data["role"] = role
                # Fix invalid urgency values
                if "evidence_request" in data and data["evidence_request"]:
                    if data["evidence_request"].get("urgency") not in ["required", "optional"]:
                        data["evidence_request"]["urgency"] = "optional"
                return CourtroomResponse(**data)

        except Exception as e:
            logger.error(f"{role} response generation error: {e}")
            # Return an error object formatted correctly
            return CourtroomResponse(
                role=role,
                dialogue="[System Error: Unable to generate response]",
                inner_thought=str(e)
            )
