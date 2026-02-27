import os
import json
import argparse
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
from google import genai  # Use the updated client

# Load .env file if dotenv is available
try:
    from dotenv import load_dotenv
    env_path = Path(__file__).parent.parent / ".env"
    load_dotenv(env_path)
except ImportError:
    pass

gemini_api_key = os.getenv("GEMINI_API_KEY")
if not gemini_api_key:
    raise ValueError("GEMINI_API_KEY not found in environment")

# Initialize Gemini client
client = genai.Client(api_key=gemini_api_key, http_options={'api_version': 'v1alpha'})
MODEL_ID = "gemini-3-flash-preview"

# ============================================================================
# Pydantic Schema for Structured Output
# ============================================================================

class PartyInfo(BaseModel):
    name: str = Field(description="Full name of the party")
    address: Optional[str] = Field(default=None, description="Full address if available")

class SmallClaimsCaseExtraction(BaseModel):
    case_number: Optional[str] = Field(default=None, description="Case number if stamped/assigned")
    case_type: str = Field(description="Type: contract, property, debt, landlord-tenant, personal-injury, and other")
    # case_type: str = Field(description="Type: Contract Dispute, Property Damage, Debt Collection, Landlord-Tenant, Personal Injury, and Other")
    state: str = Field(description="State abbreviation (e.g., CA, NY)")
    county: Optional[str] = Field(default=None, description="County inferred from court/addresses")
    filing_date: Optional[str] = Field(default=None, description="Filing date in YYYY-MM-DD format")
    hearing_date: Optional[str] = Field(default=None, description="Hearing date in YYYY-MM-DD format")
    plaintiffs: List[PartyInfo] = Field(description="List of plaintiff names and addresses")
    defendants: List[PartyInfo] = Field(description="List of defendant names and addresses")
    claim_summary: str = Field(description="Original string describing the case")
    amount_sought: Optional[float] = Field(default=None, description="Monetary amount claimed")
    incident_date: Optional[str] = Field(default=None, description="Date of incident in YYYY-MM-DD format")
    demand_letter_sent: bool = Field(default=False, description="Whether demand letter was sent before filing")
    agreement_included: bool = Field(default=False, description="Whether agreement/contract is referenced or attached")




def info_extract(input_pdf_file):
    """Extract case information from PDF using Gemini API"""

    print(f"[OCR] Extracting from PDF: {input_pdf_file}")

    if not os.path.exists(input_pdf_file):
        raise FileNotFoundError(f"PDF not found: {input_pdf_file}")
    
    # Define extraction prompt
    prompt = """Extract all relevant information from this small claims court filing.

For each field:
- Use exact values from the document
- Format dates as YYYY-MM-DD
- If information is not found, use null
- Extract all plaintiffs and defendants mentioned
- Include full addresses if available

Pay special attention to:
- Case number (if stamped/assigned)
- Filing date and incident date
- Amount being claimed (monetary damages)
- Whether a demand letter was sent before filing
- Whether an agreement/contract is referenced or attached

Return a JSON object with exactly these fields with the correct types."""

    try:
        # 1. Upload PDF file directly using the client
        print("[OCR] Uploading PDF to Gemini...")
        uploaded_file = client.files.upload(file=input_pdf_file)
        print(f"[OCR] File uploaded successfully: {uploaded_file.name}")

        # 2. Generate content with specific JSON configuration
        print("[OCR] Requesting structured extraction...")
        response = client.models.generate_content(
            model=MODEL_ID,
            contents=[prompt, uploaded_file],
            config={
                "response_mime_type": "application/json",
                "response_json_schema": SmallClaimsCaseExtraction.model_json_schema(),
            },
        )

        # 3. Parse and validate response text into Pydantic model
        extraction = SmallClaimsCaseExtraction.model_validate_json(response.text)
        print(f"[OCR] Extraction complete")

        # Convert to dictionary for downstream usage
        return extraction.model_dump()

    except Exception as e:
        print(f"[OCR] Error during extraction: {str(e)}")
        raise

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Extract info from PDF file using Gemini API.")
    parser.add_argument("--file", type=str, required=True, help="Path to the input PDF file")
    parser.add_argument("--output", type=str, required=True, help="Path to save JSON output")
    args = parser.parse_args()

    result = info_extract(args.file)

    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=4, ensure_ascii=False)

    print(f"Extraction saved to {args.output}")