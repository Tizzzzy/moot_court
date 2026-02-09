from google import genai
import json
import os
from pydantic import BaseModel, Field
from typing import List, Literal, Optional
import logging

class CourtroomResponse(BaseModel):
    role: str = Field(description="The role of the speaker (e.g., Judge, Defendant).")
    dialogue: str = Field(description="The actual spoken words/response to the court.")
    inner_thought: Optional[str] = Field(description="The agent's internal reasoning or legal strategy.", default=None)
    citations: Optional[List[str]] = Field(description="List of legal precedents or evidence references if applicable.", default=None)

class CourtroomAgents:
    def __init__(self, api_key):
        # Initializing with requested version and model
        self.client = genai.Client(api_key=api_key, http_options={'api_version': 'v1alpha'})
        self.model_id = "gemini-3-flash-preview"

    def get_role_response(
        self,
        role: str,
        history: List,
        case_data: dict,
        evidence_paths: Optional[List[str]] = None,
    ) -> CourtroomResponse:
        """
        Generates response for Judge/Defendant returning a structured object.

        Args:
            role: The speaker role (Judge or Defendant)
            history: Conversation history
            case_data: Case information
            evidence_paths: List of file paths to evidence files
        """
        # case_context = json.dumps(case_data)
        history_context = json.dumps(history)

        if role == "Judge":

            system_instruction = f"""
            You are an impartial Judge in a Small Claims Court in {case_data['state']}.
            Case: {case_data['claim_summary']}
            Amount Sought: ${case_data['amount_sought']}

            To request evidence from plaintiff:
            1. Explicitly ask: "Please provide [specific evidence]"
            2. List specific evidence_types needed

            Do not request evidence from defendant.

            When verdict time comes, provide a detailed verdict with dollar amount.

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

            # Parse Gemini's response
            courtroom_response = CourtroomResponse.model_validate_json(response.text)

            # CRITICAL FIX: Override role to match input parameter
            # Gemini may set role based on context instead of parameter
            courtroom_response.role = role

            return courtroom_response

        except Exception as e:
            print(f"{role} response generation error: {e}")
            # Return an error object formatted correctly
            return CourtroomResponse(
                role=role,
                dialogue="[System Error: Unable to generate response]",
                inner_thought=str(e)
            )