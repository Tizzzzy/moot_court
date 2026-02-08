import os
import json
import argparse
import base64
from pathlib import Path
from openai import OpenAI

# Load .env file if dotenv is available
try:
    from dotenv import load_dotenv
    # Load from project root
    env_path = Path(__file__).parent.parent / ".env"
    load_dotenv(env_path)
except ImportError:
    pass

# Use environment variable for API key
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    # Fallback to file for compatibility
    api_key_path = Path(__file__).parent.parent / "api_key.txt"
    try:
        with open(api_key_path, "r") as f:
            api_key = f.read().strip()
    except FileNotFoundError:
        # Try loading from .env file directly
        env_path = Path(__file__).parent.parent / ".env"
        if env_path.exists():
            with open(env_path, "r") as f:
                for line in f:
                    if line.startswith("OPENAI_API_KEY="):
                        api_key = line.strip().split("=", 1)[1]
                        break
        if not api_key:
            raise ValueError("OPENAI_API_KEY not found in environment or api_key.txt")

client = OpenAI(api_key=api_key)
MODEL = "gpt-4o-mini"


def pdf_to_base64_images(pdf_path: str, max_pages: int = 5):
    """Convert PDF pages to base64 encoded images"""
    try:
        import fitz  # PyMuPDF
    except ImportError:
        # Fallback: try to extract text directly
        return None

    images = []
    doc = fitz.open(pdf_path)

    for page_num in range(min(len(doc), max_pages)):
        page = doc[page_num]
        # Render page to image at 150 DPI
        pix = page.get_pixmap(matrix=fitz.Matrix(150/72, 150/72))
        img_bytes = pix.tobytes("png")
        base64_img = base64.b64encode(img_bytes).decode("utf-8")
        images.append(base64_img)

    doc.close()
    return images


def extract_text_from_pdf(pdf_path: str):
    """Fallback: Extract text directly from PDF"""
    try:
        import fitz  # PyMuPDF
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()
        doc.close()
        return text
    except ImportError:
        try:
            from pypdf import PdfReader
            reader = PdfReader(pdf_path)
            text = ""
            for page in reader.pages:
                text += page.extract_text() or ""
            return text
        except ImportError:
            raise ImportError("Please install PyMuPDF (fitz) or pypdf: pip install PyMuPDF pypdf")


def info_extract(input_pdf_file):
    """Extract case information from PDF using OpenAI API"""

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

Return a JSON object with exactly these fields:
{
    "case_number": "string or null",
    "case_type": "string (e.g., 'Small Claims')",
    "state": "string (state abbreviation)",
    "filing_date": "YYYY-MM-DD or null",
    "hearing_date": "YYYY-MM-DD or null",
    "plaintiffs": [{"name": "string", "address": "string or null"}],
    "defendants": [{"name": "string", "address": "string or null"}],
    "claim_summary": "string describing the case",
    "amount_sought": number or null,
    "incident_date": "YYYY-MM-DD or null",
    "demand_letter_sent": boolean,
    "agreement_included": boolean
}"""

    # Try to convert PDF to images for vision processing
    print("[OCR] Converting PDF to images...")
    images = pdf_to_base64_images(input_pdf_file)

    if images:
        # Use vision model with images
        print(f"[OCR] Processing {len(images)} page(s) with vision model...")

        content = [{"type": "text", "text": prompt}]
        for i, img_base64 in enumerate(images):
            content.append({
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/png;base64,{img_base64}",
                    "detail": "high"
                }
            })

        response = client.chat.completions.create(
            model=MODEL,
            messages=[{"role": "user", "content": content}],
            response_format={"type": "json_object"},
            max_tokens=4096
        )
    else:
        # Fallback: extract text and send to model
        print("[OCR] Using text extraction fallback...")
        text = extract_text_from_pdf(input_pdf_file)

        response = client.chat.completions.create(
            model=MODEL,
            messages=[
                {"role": "user", "content": f"{prompt}\n\nDocument text:\n{text}"}
            ],
            response_format={"type": "json_object"},
            max_tokens=4096
        )

    # Parse response
    result = json.loads(response.choices[0].message.content)
    print(f"[OCR] Extraction complete: {result}")

    return result


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Extract info from PDF file using OpenAI API.")
    parser.add_argument("--file", type=str, required=True, help="Path to the input PDF file")
    parser.add_argument("--output", type=str, required=True, help="Path to save JSON output")
    args = parser.parse_args()

    result = info_extract(args.file)

    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=4, ensure_ascii=False)

    print(f"Extraction saved to {args.output}")
