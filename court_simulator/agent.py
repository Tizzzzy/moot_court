from google import genai
import json
import os
from pydantic import BaseModel, Field
from typing import List, Literal, Optional

class PlaintiffFeedback(BaseModel):
    """Structured feedback for plaintiff statement"""
    did_well: str = Field(description="What the plaintiff did well in their statement")
    improvements: List[str] = Field(description="List of specific areas for improvement (2-3 items)")

class ObjectionDecision(BaseModel):
    """Defendant's evaluation of plaintiff statement for objections"""
    has_objection: bool = Field(description="True if this statement raises a valid objection")
    objection_type: Optional[str] = Field(description="Type: Hearsay, Speculation, Relevance, Foundation, Narrative, etc.", default=None)
    legal_reasoning: str = Field(description="Legal/procedural basis for the objection")
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
    def __init__(self, api_key):
        # Initializing with requested version and model
        self.client = genai.Client(api_key=api_key, http_options={'api_version': 'v1alpha'})
        self.model_id = "gemini-3-flash-preview"

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

        Return a structured ObjectionDecision with all required fields.
        """

        prompt_text = f"{system_instruction}\n\nRecent Trial History:\n{history_context}"
        contents = [prompt_text]

        try:
            response = self.client.models.generate_content(
                model=self.model_id,
                contents=contents,
                config={
                    "response_mime_type": "application/json",
                    "response_json_schema": ObjectionDecision.model_json_schema(),
                },
            )
            return ObjectionDecision.model_validate_json(response.text)
        except Exception as e:
            print(f"Objection evaluation error: {e}")
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
            response = self.client.models.generate_content(
                model=self.model_id,
                contents=prompt,
                config={
                    "temperature": 0.7,
                    "response_mime_type": "application/json",
                    "response_json_schema": PlaintiffFeedback.model_json_schema(),
                }
            )
            return PlaintiffFeedback.model_validate_json(response.text)
        except Exception as e:
            print(f"Feedback generation error: {e}")
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

Return structured ObjectionDecision with educational reasoning.
"""

        prompt_text = f"{system_instruction}\n\nRecent Trial History:\n{history_context}"

        try:
            response = self.client.models.generate_content(
                model=self.model_id,
                contents=prompt_text,
                config={
                    "response_mime_type": "application/json",
                    "response_json_schema": ObjectionDecision.model_json_schema(),
                },
            )
            return ObjectionDecision.model_validate_json(response.text)
        except Exception as e:
            # Silent failure - educational feature only
            return ObjectionDecision(
                has_objection=False,
                legal_reasoning="Educational analysis unavailable"
            )

    def get_controller_decision(self, history) -> ControllerDecision:
        """
        Determines the next speaker using structured JSON output.
        Returns a ControllerDecision object with only next_speaker.
        """
        # Simplify context for the token limit
        context = json.dumps(history[-10:]) if len(history) > 10 else json.dumps(history)

        # Get last speaker to enforce strict turn-taking
        last_speaker = history[-1]['role'] if history else None

        prompt = f"""
        You are the Court Clerk managing speaker order in a small claims trial.

        Last speaker: {last_speaker}
        Recent history (last 10 exchanges): {context}

        STRICT TURN-TAKING RULES:
        1. After Plaintiff speaks → MUST be Judge or Defendant (NEVER Plaintiff again)
        2. After Defendant speaks → MUST be Judge or Plaintiff
        3. After Judge speaks → Can be Plaintiff, Defendant, or Verdict (if ready)
        4. If trial history is empty → Judge opens court
        5. If Judge has sufficient evidence and both sides presented → Verdict

        CRITICAL: You CANNOT return "Plaintiff" if the last speaker was "Plaintiff"!

        Based on the conversation flow, who should speak next?
        Return ONLY valid JSON with next_speaker field.
        """

        try:
            response = self.client.models.generate_content(
                model=self.model_id,
                contents=prompt,
                config={
                    "response_mime_type": "application/json",
                    "response_json_schema": ControllerDecision.model_json_schema(),
                },
            )
            # Validate and parse JSON automatically
            decision = ControllerDecision.model_validate_json(response.text)
            return decision

        except Exception as e:
            print(f"Controller JSON Error: {e}")
            # Fallback safe object
            return ControllerDecision(next_speaker="Judge")

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
        # case_context = json.dumps(case_data)
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

            To request evidence from plaintiff:
            1. Explicitly ask: "Please provide [specific evidence]"
            2. Include evidence_request with requesting_evidence = true
            3. List specific evidence_types needed

            When verdict time comes, set evidence_request = null and provide a detailed verdict with dollar amount.

            Goal: Determine truth, verify claim, ask clarifying questions, review evidence carefully.
            Be professional and fair. Keep responses to 2-3 sentences unless giving verdict.
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
            Goal: Defend client. Deny liability, point out evidence gaps, argue assumption of risk.
            Polite but firm. Concise (2-3 sentences).
            """

            if evidence_paths:
                system_instruction += f"""

EVIDENCE AVAILABLE:
{len(evidence_paths)} evidence file(s) submitted by plaintiff.
Challenge evidence credibility, point out inconsistencies, or argue insufficient proof.
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
        prompt_text = f"{system_instruction}\n\nTrial History:\n{history_context}\n\nGenerate the response for {role}."
        contents = [prompt_text]

        # Add evidence context and upload files directly from stored paths
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
            contents[0] = prompt_text + evidence_summary

            # Upload directly from stored paths (no temp files)
            for filepath in evidence_paths:
                try:
                    uploaded_file = self.client.files.upload(file=filepath)
                    contents.append(uploaded_file)
                except Exception as e:
                    print(f"Upload failed for {os.path.basename(filepath)}: {e}")

        try:
            response = self.client.models.generate_content(
                model=self.model_id,
                contents=contents,
                config={
                    "response_mime_type": "application/json",
                    "response_json_schema": CourtroomResponse.model_json_schema(),
                },
            )
            return CourtroomResponse.model_validate_json(response.text)

        except Exception as e:
            print(f"{role} response generation error: {e}")
            # Return an error object formatted correctly
            return CourtroomResponse(
                role=role,
                dialogue="[System Error: Unable to generate response]",
                inner_thought=str(e)
            )