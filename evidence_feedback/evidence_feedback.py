from llm import gpt
import json
import argparse
import os

def evidence_feedback(extracted_info, evidence_description, evidence_file_path):
    """
    Analyzes specific evidence against the case info and the expected description.
    """
    
    # Construct a concise prompt
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

    # Call GPT with the file
    print(f" -> Analyzing {os.path.basename(evidence_file_path)}...")
    response_text = gpt(prompt, evidence_file_path)

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

    # return feedback

# if __name__ == "__main__":
#     # Test execution
#     parser = argparse.ArgumentParser()
#     parser.add_argument("--case_info", type=str, required=True)
#     parser.add_argument("--description", type=str, required=True)
#     parser.add_argument("--evidence_path", type=str, required=True)
#     args = parser.parse_args()

#     with open(args.case_info, "r") as f:
#         info = json.load(f)
    
#     evidence_feedback(info, args.description, args.evidence_path)