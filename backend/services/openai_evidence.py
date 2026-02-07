import json
import os
from openai import OpenAI


def recommend_evidence(extracted_info: dict, api_key: str) -> dict:
    """
    Uses OpenAI GPT-5-mini to recommend evidence based on extracted case info.
    Replicates the exact logic from evidence_recommend/evidence_recommend.py
    and evidence_recommend/llm.py.
    Returns a dict of evidence_name -> description.
    """
    client = OpenAI(api_key=api_key)

    prompt = f"""
    You are a legal strategist. Based on the extracted case information below, recommend relevant pieces of evidence that would support the plaintiff's claims.

    CASE INFO:
    {json.dumps(extracted_info)}

    INSTRUCTIONS:
    Provide the output strictly as a JSON object (a dictionary).
    - The Keys must be short, valid file names for the evidence (e.g., "Lease_Agreement_PDF", "Email_Thread_Nov2023"). Avoid spaces or special characters in keys.
    - The Values must be a description of what information this evidence contains and why it helps the case.
    """

    messages = [
        {"role": "system", "content": "You are a helpful legal assistant."},
        {"role": "user", "content": prompt},
    ]

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=messages,
        response_format={"type": "json_object"},
    )

    raw = response.choices[0].message.content
    return json.loads(raw)


def create_evidence_folders(evidence_dict: dict, evidence_folder_path: str):
    """
    Creates folder structure with description.txt for each recommended evidence.
    """
    os.makedirs(evidence_folder_path, exist_ok=True)
    for folder_name, description in evidence_dict.items():
        safe_name = "".join(c for c in folder_name if c.isalnum() or c in ("_", "-"))
        path = os.path.join(evidence_folder_path, safe_name)
        os.makedirs(path, exist_ok=True)
        with open(os.path.join(path, "description.txt"), "w", encoding="utf-8") as f:
            f.write(description)
