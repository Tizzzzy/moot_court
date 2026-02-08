import os
import json
import argparse
from llm import gpt

def prove_recommend(extracted_info, conversation_json_path, evidence_folder_path, create_folders=True):
    # 1. Construct the prompt with strict formatting instructions
    prompt = f"""
    You are a legal strategist. Based on the extracted case information below, recommend relevant pieces of evidence that would support the plaintiff's claims.

    CASE INFO:
    {json.dumps(extracted_info)}

    INSTRUCTIONS:
    Provide the output strictly as a JSON object (a dictionary). 
    - The Keys must be short, valid file names for the evidence (e.g., "Lease_Agreement_PDF", "Email_Thread_Nov2023"). Avoid spaces or special characters in keys.
    - The Values must be a description of what information this evidence contains and why it helps the case.
    """

    # 2. Call the LLM with json_mode=True
    print("Generating evidence recommendations...")
    response_text = gpt(prompt, model="gpt-5-mini-2025-08-07", json_mode=True)
    
    # 3. Parse the response into a Python Dictionary
    try:
        evidence_dict = json.loads(response_text)
    except json.JSONDecodeError:
        print("Failed to parse JSON response. Raw output:\n", response_text)
        return

    # 4. Save the conversation/result to file
    with open(conversation_json_path, "w", encoding="utf-8") as f:
        json.dump(evidence_dict, f, indent=4)
    
    print(f"Conversation saved to {conversation_json_path}")

    # 5. Create Folders based on keys
    if create_folders:
        os.makedirs(evidence_folder_path, exist_ok=True)
        
        print(f"\nCreating {len(evidence_dict)} evidence folders in '{evidence_folder_path}/'...")
        
        for folder_name, description in evidence_dict.items():
            # Sanitize folder name just in case
            safe_name = "".join([c for c in folder_name if c.isalnum() or c in ('_', '-')])
            path = os.path.join(evidence_folder_path, safe_name)
            
            os.makedirs(path, exist_ok=True)
            
            # OPTIONAL: Create a text file inside explaining the evidence
            with open(os.path.join(path, "description.txt"), "w", encoding="utf-8") as desc_f:
                desc_f.write(description)
                
            print(f" -> Created: {path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--input_file", type=str, required=True, help="Path to the extracted case info JSON")
    parser.add_argument("--conversation_json_path", type=str, default="evidence_output.json", help="Where to save the raw LLM response")
    parser.add_argument("--evidence_folder_path", type=str, default="evidence_folders", help="Where to create evidence folders")
    args = parser.parse_args()

    # Load the data from the file
    if os.path.exists(args.input_file):
        with open(args.input_file, "r", encoding="utf-8") as f:
            try:
                extracted_info = json.load(f)
                prove_recommend(extracted_info, conversation_json_path=args.conversation_json_path, evidence_folder_path=args.evidence_folder_path)
            except json.JSONDecodeError:
                print("Error: Input file contains invalid JSON.")
    else:
        print(f"Error: Input file '{args.input_file}' not found.")