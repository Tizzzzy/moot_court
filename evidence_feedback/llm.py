import os
import base64
import pandas as pd
from openai import OpenAI

MODEL="gpt-5-mini-2025-08-07"
# Use environment variable for API key
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    # Fallback to file for compatibility
    try:
        with open("/projects/p32143/moot_court/api_key.txt", "r") as f:
            api_key = f.read().strip()
    except FileNotFoundError:
        api_key = None
client = OpenAI(api_key=api_key) if api_key else None

def encode_image(image_path):
    """Encodes an image to a Base64 string."""
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

def read_excel_as_text(file_path):
    """
    Reads an Excel file and converts it to a CSV-style string 
    so the model can read it as text.
    """
    try:
        df = pd.read_excel(file_path)
        # Convert to CSV string, avoiding index numbers to save tokens
        return df.to_csv(index=False)
    except Exception as e:
        return f"Error reading Excel file: {e}"

def gpt(prompt, file_path):
    """
    Scans a file.
    - PDFs: Uploaded -> file_id
    - Images: Base64 encoded -> image_url
    - Excel: Converted to text -> input_text
    """
    message_content = []

    # 1. Add the user's main prompt
    message_content.append({
        "type": "input_text",
        "text": prompt
    })

    if os.path.exists(file_path):
        print(f"Scanning file: {file_path}...")
        
        filename = os.path.basename(file_path)
            

        lower_name = filename.lower()

        # --- CASE 1: PDF (Upload via File ID) ---
        # The error message confirmed .pdf is a supported format.
        if lower_name.endswith('.pdf'):
            try:
                print(f"Uploading PDF: {filename}...")
                with open(file_path, "rb") as f:
                    uploaded_file = client.files.create(
                        file=f,
                        purpose="user_data"
                    )
                message_content.append({
                    "type": "input_file",
                    "file_id": uploaded_file.id
                })
            except Exception as e:
                print(f"Failed to upload PDF {filename}: {e}")

        # --- CASE 2: IMAGES (Base64 Encode) ---
        elif lower_name.endswith(('.jpg', '.jpeg', '.png', '.gif', '.webp')):
            try:
                print(f"Encoding Image: {filename}...")
                base64_img = encode_image(file_path)
                
                # Determine mime type (simple check)
                mime_type = "image/png" if lower_name.endswith('.png') else "image/jpeg"
                if lower_name.endswith('.webp'): mime_type = "image/webp"
                if lower_name.endswith('.gif'): mime_type = "image/gif"

                message_content.append({
                    "type": "input_image",
                    "image_url": f"data:{mime_type};base64,{base64_img}"
                })
            except Exception as e:
                print(f"Failed to encode image {filename}: {e}")

        # --- CASE 3: EXCEL (Convert to Text) ---
        # The API error explicitly rejected .xlsx, so we convert it to text.
        elif lower_name.endswith('.xlsx'):
            print(f"Converting Excel to Text: {filename}...")
            excel_text = read_excel_as_text(file_path)
            message_content.append({
                "type": "input_text",
                "text": f"\n--- Content of {filename} (Excel) ---\n{excel_text}\n"
            })

        else:
            print(f"Skipping unsupported file: {filename}")

    else:
        print("Evidence file not found.")

    print("Sending request to model...")
    response = client.responses.create(
        model=MODEL,  # Use a standard vision-capable model
        input=[
            {
                "role": "user",
                "content": message_content
            }
        ],
        text={
            "format": {
                "type": "json_schema",
                "name": "evidence_feedback_response",
                "schema": {
                    "type": "object",
                    "properties": {
                        "ready_status": {"type": "boolean"},
                        "specific_feedback": {"type": "string"}
                    },
                    "required": ["ready_status", "specific_feedback"],
                    "additionalProperties": False
                },
                "strict": True
            }
        }
    )
    return response.output_text
