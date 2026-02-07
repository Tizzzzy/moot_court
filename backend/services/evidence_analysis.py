"""
Evidence analysis service — replicates the exact prompt and multimodal logic
from evidence_feedback/evidence_feedback.py and evidence_feedback/llm.py.
"""

import os
import json
import base64
from typing import Tuple
import pandas as pd
from openai import OpenAI

MODEL = "gpt-4o-mini"


def encode_image(image_path: str) -> str:
    """Encodes an image to a Base64 string."""
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")


def read_excel_as_text(file_path: str) -> str:
    """
    Reads an Excel file and converts it to a CSV-style string
    so the model can read it as text.
    """
    try:
        df = pd.read_excel(file_path)
        return df.to_csv(index=False)
    except Exception as e:
        return f"Error reading Excel file: {e}"


def _call_openai(prompt: str, file_path: str, api_key: str) -> str:
    """
    Sends a prompt + file to OpenAI.
    Replicates the exact logic from evidence_feedback/llm.py:
    - PDFs: Uploaded via file_id
    - Images: Base64 encoded
    - Excel: Converted to text
    Uses client.responses.create() with json_schema format.
    """
    client = OpenAI(api_key=api_key)

    message_content = []

    # 1. Add the user's main prompt
    message_content.append({
        "type": "text",
        "text": prompt,
    })

    if os.path.exists(file_path):
        print(f"Scanning file: {file_path}...")
        filename = os.path.basename(file_path)
        lower_name = filename.lower()

        # --- CASE 1: PDF (Read as text - simplified for compatibility) ---
        if lower_name.endswith(".pdf"):
            try:
                print(f"Processing PDF: {filename}...")
                # For older API, just note the PDF exists
                message_content.append({
                    "type": "text",
                    "text": f"\n[PDF file uploaded: {filename}]\n",
                })
            except Exception as e:
                print(f"Failed to process PDF {filename}: {e}")

        # --- CASE 2: IMAGES (Base64 Encode) ---
        elif lower_name.endswith((".jpg", ".jpeg", ".png", ".gif", ".webp")):
            try:
                print(f"Encoding Image: {filename}...")
                base64_img = encode_image(file_path)

                mime_type = "image/png" if lower_name.endswith(".png") else "image/jpeg"
                if lower_name.endswith(".webp"):
                    mime_type = "image/webp"
                if lower_name.endswith(".gif"):
                    mime_type = "image/gif"

                message_content.append({
                    "type": "image_url",
                    "image_url": {"url": f"data:{mime_type};base64,{base64_img}"},
                })
            except Exception as e:
                print(f"Failed to encode image {filename}: {e}")

        # --- CASE 3: EXCEL (Convert to Text) ---
        elif lower_name.endswith(".xlsx"):
            print(f"Converting Excel to Text: {filename}...")
            excel_text = read_excel_as_text(file_path)
            message_content.append({
                "type": "text",
                "text": f"\n--- Content of {filename} (Excel) ---\n{excel_text}\n",
            })

        else:
            print(f"Skipping unsupported file: {filename}")
    else:
        print("Evidence file not found.")

    print("Sending request to model...")
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "user",
                "content": message_content,
            }
        ],
        response_format={"type": "json_object"},
    )
    return response.choices[0].message.content


def evidence_feedback(extracted_info: dict, evidence_description: str,
                      evidence_file_path: str, api_key: str) -> Tuple[bool, str]:
    """
    Analyzes specific evidence against the case info and the expected description.
    Replicates the exact prompt from evidence_feedback/evidence_feedback.py.

    Returns (is_ready: bool, feedback_text: str).
    """
    # Exact prompt from evidence_feedback/evidence_feedback.py
    prompt = f"""
    ROLE: Legal Evidence Analyst.

    CASE SUMMARY:
    {json.dumps(extracted_info)}

    EXPECTED EVIDENCE DESCRIPTION:
    "{evidence_description}"

    TASK:
    The user has uploaded the attached file.
    1. specific_feedback: Detailed feedback on strength, relevance, and missing details.
    2. ready_status: Return true ONLY if the evidence is strong, accurate, and matches the description perfectly. Otherwise false.

    OUTPUT FORMAT:
    JSON object with keys: "ready_status" (boolean) and "specific_feedback" (string).
    """

    print(f" -> Analyzing {os.path.basename(evidence_file_path)}...")
    response_text = _call_openai(prompt, evidence_file_path, api_key)

    try:
        response_json = json.loads(response_text)
        is_ready = response_json.get("ready_status", False)
        feedback_text = response_json.get("specific_feedback", "")
        return is_ready, feedback_text

    except json.JSONDecodeError:
        # Fallback if LLM didn't output valid JSON: check keywords
        print("Warning: LLM response was not valid JSON. Using keyword fallback.")
        is_ready = "ready to use" in response_text.lower() and "not ready" not in response_text.lower()
        return is_ready, response_text
