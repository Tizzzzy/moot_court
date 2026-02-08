# Detailed Changes - Persistent Evidence Storage

## court_simulator/court_simulator.py

### Change 1: Configuration Constants (Lines 8-14)
**Replaced:**
```python
# --- Configuration ---
DATA_FILE = "data/user_1/ocr_output/extracted_data.json"
TRANSCRIPT_FILE = "court_simulator/cli_trial_transcript.json"
```

**With:**
```python
# --- Configuration ---
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
USER_ID = "user_1"
BASE_DATA_DIR = os.path.join(PROJECT_ROOT, "data", USER_ID)
DATA_FILE = os.path.join(BASE_DATA_DIR, "ocr_output", "extracted_data.json")
EVIDENCE_SUBMIT_DIR = os.path.join(BASE_DATA_DIR, "evidence", "court_submitted")
TRANSCRIPT_FILE = os.path.join(BASE_DATA_DIR, "evidence", "court_transcript.json")
```

### Change 2: Added sanitize_filename() Function (Lines 26-33)
**Added new function:**
```python
def sanitize_filename(filename: str) -> str:
    """
    Sanitize filename: lowercase, replace spaces, remove special chars.
    """
    name, ext = os.path.splitext(filename)
    name = name.lower().replace(' ', '_')
    name = ''.join(c for c in name if c.isalnum() or c in '-_')
    return name + ext.lower()
```

### Change 3: Replaced get_user_evidence() Function (Lines 36-88)
**Replaced entire function:**

Old version (22-63):
- Read files as binary data
- Stored binary in list of dicts
- Returned binary data to caller

New version (36-88):
- Copies files to persistent storage
- Takes evidence_submit_dir and turn_number parameters
- Returns list of file paths (strings)
- Handles duplicate filenames with _2, _3 suffix
- Creates directories as needed

### Change 4: Directory Creation and Session Initialization (Line 153-157)
**Added line 153:**
```python
os.makedirs(EVIDENCE_SUBMIT_DIR, exist_ok=True)
```

**Changed line 157 (was 129):**
```python
# Before:
session = CourtSession(case_data, api_key)

# After:
session = CourtSession(case_data, api_key, EVIDENCE_SUBMIT_DIR)
```

### Change 5: Evidence Upload Parameter Names (Lines 200, 210, 222)
**Changed all references from evidence_files to evidence_paths:**

Line 200:
```python
# Before: evidence = None
# After:  evidence_paths = None
```

Line 204:
```python
# Before: evidence = get_user_evidence()
# After:  evidence_paths = get_user_evidence(EVIDENCE_SUBMIT_DIR, session.turn_number)
```

Lines 210, 222:
```python
# Before: evidence_files=evidence
# After:  evidence_paths=evidence_paths
```

### Change 6: Transcript Save Location (Lines 272-278)
**Changed from:**
```python
session.save_transcript(TRANSCRIPT_FILE)
print(f"\n✓ Trial transcript saved to {TRANSCRIPT_FILE}")
print("\nSimulation complete.")
```

**To:**
```python
os.makedirs(os.path.dirname(TRANSCRIPT_FILE), exist_ok=True)
session.save_transcript(TRANSCRIPT_FILE)
print(f"\n✓ Transcript: {TRANSCRIPT_FILE}")
if os.path.exists(EVIDENCE_SUBMIT_DIR):
    count = len([f for f in os.listdir(EVIDENCE_SUBMIT_DIR)
                 if os.path.isfile(os.path.join(EVIDENCE_SUBMIT_DIR, f))])
    print(f"✓ Evidence: {count} file(s) in {EVIDENCE_SUBMIT_DIR}")
print("\nSimulation complete.")
```

---

## court_simulator/session.py

### Change 1: Constructor Signature and initialization (Lines 17-27)
**Changed from:**
```python
def __init__(self, case_data: Dict, api_key: str):
    self.case_data = case_data
    self.agents = CourtroomAgents(api_key)

    # State
    self.history: List[Dict] = []
    self.evidence_upload_allowed: bool = False
    self.current_speaker: str = "Judge"
    self.evidence_buffer: List[Dict] = []
    self.turn_number: int = 0
```

**To:**
```python
def __init__(self, case_data: Dict, api_key: str, evidence_submit_dir: str):
    self.case_data = case_data
    self.agents = CourtroomAgents(api_key)
    self.evidence_submit_dir = evidence_submit_dir

    # State
    self.history: List[Dict] = []
    self.evidence_upload_allowed: bool = False
    self.current_speaker: str = "Judge"
    self.evidence_buffer: List[str] = []  # Now stores file paths, not dicts
    self.turn_number: int = 0
```

Key changes:
- Added evidence_submit_dir parameter
- Store it as instance variable
- Changed evidence_buffer type hint from List[Dict] to List[str]

### Change 2: process_plaintiff_turn() Method Signature (Lines 29-32)
**Changed from:**
```python
def process_plaintiff_turn(
    self,
    statement: str,
    evidence_files: Optional[List] = None
) -> Tuple[bool, Optional[ObjectionDecision]]:
    """
    Process plaintiff statement with objection evaluation.

    Args:
        statement: The plaintiff's statement
        evidence_files: List of evidence files with metadata (name, mime_type, data)
```

**To:**
```python
def process_plaintiff_turn(
    self,
    statement: str,
    evidence_paths: Optional[List[str]] = None
) -> Tuple[bool, Optional[ObjectionDecision]]:
    """
    Process plaintiff statement with objection evaluation.

    Args:
        statement: The plaintiff's statement
        evidence_paths: List of file paths to evidence files
```

### Change 3: Evidence Buffer Update (Lines 51-52)
**Changed from:**
```python
if evidence_files:
    self.evidence_buffer.extend(evidence_files)
```

**To:**
```python
if evidence_paths:
    self.evidence_buffer.extend(evidence_paths)
```

### Change 4: process_ai_turn() Method (Line 94)
**Changed from:**
```python
evidence_files=self.evidence_buffer if self.evidence_buffer else None
```

**To:**
```python
evidence_paths=self.evidence_buffer if self.evidence_buffer else None
```

---

## court_simulator/agent.py

### Change 1: Remove Unused Imports (Lines 1-5)
**Changed from:**
```python
from google import genai
import json
import base64
import os
import tempfile
from pydantic import BaseModel, Field
from typing import List, Literal, Optional
```

**To:**
```python
from google import genai
import json
import os
from pydantic import BaseModel, Field
from typing import List, Literal, Optional
```

Removed:
- import base64 (no longer needed)
- import tempfile (no longer needed)

### Change 2: get_role_response() Method Signature (Lines 139-156)
**Changed from:**
```python
def get_role_response(
    self,
    role: str,
    history: List,
    case_data: dict,
    evidence_paths=None,
    evidence_upload_allowed: bool = False,
    evidence_files=None
) -> CourtroomResponse:
    """
    Generates response for Judge/Defendant returning a structured object.

    Args:
        role: The speaker role (Judge or Defendant)
        history: Conversation history
        case_data: Case information
        evidence_paths: (deprecated) File paths for evidence
        evidence_upload_allowed: Whether evidence upload is currently allowed
        evidence_files: List of uploaded evidence files with metadata
    """
```

**To:**
```python
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
```

Key changes:
- Removed evidence_files parameter
- Added type hint to evidence_paths: Optional[List[str]]
- Updated docstring to match new behavior

### Change 3: Evidence Handling (Lines 203-240)
**Changed from:**
```python
# Add evidence context and upload files using Files API
if evidence_files:
    evidence_summary = f"\n\nPLAINTIFF SUBMITTED EVIDENCE ({len(evidence_files)} file(s)):"
    for file_info in evidence_files:
        evidence_summary += f"\n- {file_info.get('name', 'unknown')}: {file_info.get('mime_type', 'unknown')}"
    contents[0] = prompt_text + evidence_summary

    # Upload files using the Files API
    for file_info in evidence_files:
        try:
            # Create a temporary file to upload
            with tempfile.NamedTemporaryFile(delete=False, suffix=file_info.get('name', '')) as tmp:
                tmp.write(file_info.get('data', b''))
                tmp_path = tmp.name

            # Upload using Files API
            uploaded_file = self.client.files.upload(file=tmp_path)
            contents.append(uploaded_file)

            # Clean up temporary file
            os.unlink(tmp_path)

        except Exception as e:
            print(f"File upload failed for {file_info.get('name', 'unknown')}: {e}")

# Handle legacy file paths (if provided)
if evidence_paths:
    for path in evidence_paths:
        try:
            uploaded_file = self.client.files.upload(file=path)
            contents.append(uploaded_file)
        except Exception as e:
            print(f"File upload failed for {path}: {e}")
```

**To:**
```python
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
```

Key changes:
- Removed temp file creation with NamedTemporaryFile
- Removed file cleanup with os.unlink
- Upload directly from stored paths
- MIME type detection from file extension instead of dict
- Simplified error handling

---

## Summary of Changes

| File | Lines Changed | Type | Purpose |
|------|---|------|---------|
| court_simulator.py | 8-14 | Config | Add path configuration constants |
| court_simulator.py | 26-33 | New Function | Add sanitize_filename() |
| court_simulator.py | 36-88 | Function Replacement | Replace get_user_evidence() |
| court_simulator.py | 153 | New Code | Create evidence directory |
| court_simulator.py | 157 | Parameter | Pass EVIDENCE_SUBMIT_DIR to session |
| court_simulator.py | 200-222 | Parameter Updates | Use evidence_paths instead of evidence |
| court_simulator.py | 272-278 | Transcript Handling | New location and summary output |
| session.py | 17-27 | Constructor | Add evidence_submit_dir, change evidence_buffer type |
| session.py | 29-32 | Method Signature | Change evidence_files to evidence_paths |
| session.py | 51-52 | Logic | Update evidence buffer reference |
| session.py | 94 | Method Call | Pass evidence_paths to agent |
| agent.py | 1-5 | Imports | Remove tempfile and base64 |
| agent.py | 139-156 | Method Signature | Consolidate evidence parameters |
| agent.py | 203-240 | Implementation | Remove temp files, direct upload |

**Total Changes: 14 distinct modifications across 3 files**
