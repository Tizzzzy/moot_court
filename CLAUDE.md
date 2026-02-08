# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Moot Court Legal Assistant System** for small claims court case preparation. The system consists of a 4-stage Python pipeline (OCR, evidence recommendation, evidence validation, court simulation) and a React-based frontend. The backend uses multiple LLMs: local Qwen3-4B-Instruct for document extraction, OpenAI GPT-5-mini for evidence analysis, and Google Gemini 2.0 Flash for courtroom simulation.

## Common Commands

### Backend Pipeline

```bash
# Run the full 4-stage pipeline (PDF → OCR → Evidence Recommend → Evidence Feedback)
bash run.sh

# Run individual stages:
python ocr/info_extract.py --file data/user_1/ocr_output/SMC/txt/SMC.md --output extracted.json
python evidence_recommend/evidence_recommend.py --input_file extracted.json --conversation_json_path conv.json --evidence_folder_path evidence/
python evidence_feedback/monitor_evidence.py --case_info extracted.json --tracker_file tracker.json --boolean_file boolean.json --evidence_folder evidence/

# Run court simulator (standalone CLI)
python court_simulator/court_simulator.py
```

### Frontend Development

```bash
# Main dashboard (Vite + React)
cd front_end/front_end_1
npm install
npm run dev        # Development server
npm run build      # Production build
```

### Environment Setup

```bash
# Activate conda environment
conda activate moot_court

# Install Python dependencies
pip install -r requirements.txt
pip install flash-attn==2.7.3 --no-build-isolation

# Set environment variables for CUDA (required for MinerU)
export MINERU_DEVICE_MODE=cuda
export CUDA_VISIBLE_DEVICES=0
```

## Path Configuration

### Default Behavior (No Configuration Required)

By default, all user data is stored in `{project_root}/data/`. This works out of the box on any platform (Windows, Mac, Linux) without any configuration.

### Custom Data Directory (Optional)

To use a different location for user data, set `BASE_DATA_DIR` in `.env`:

```bash
# Windows (use forward slashes, include drive letter)
BASE_DATA_DIR=C:/custom/path/to/data

# Mac/Linux
BASE_DATA_DIR=/custom/path/to/data
```

**Requirements**:
- Must be an **absolute path** (includes drive letter on Windows: `C:/...`)
- Directory will be created automatically if it doesn't exist
- Use forward slashes even on Windows (not backslashes)

### Troubleshooting Path Errors

If you encounter the error:
```
FileNotFoundError: The system cannot find the path specified: '\Users\...'
```

**Root cause**: The `.env` file contains a Unix-style path (e.g., `/Users/mua/...`) on a Windows system.

**Fix**: Comment out or remove `BASE_DATA_DIR` in `.env` to use the default:
```bash
# Option 1: Use default (recommended)
# BASE_DATA_DIR=

# Option 2: Fix to Windows absolute path format
BASE_DATA_DIR=C:/Users/yourname/moot_court_data
```

**Common mistakes**:
- ❌ Unix paths on Windows: `/Users/...` (missing drive letter)
- ❌ Backslashes: `C:\Users\...` (use forward slashes: `C:/Users/...`)
- ❌ Relative paths: `./data` (must be absolute with drive letter on Windows)

## Architecture

### Data Flow: 4-Stage Pipeline

1. **OCR Stage** (`ocr/`): PDF → Markdown (MinerU) → Structured JSON (Qwen3-4B-Instruct + LangChain)
   - Input: `data/user_1/claims/SMC.pdf`
   - Output: `data/user_1/ocr_output/extracted_data.json`
   - Key: Uses Pydantic schema in `ocr/langchain_ulti.py` to extract case details

2. **Evidence Recommendation** (`evidence_recommend/`): Analyzes case → Recommends evidence types → Creates folder structure
   - Input: `extracted_data.json`
   - Output: `data/user_1/evidence/recommend_evidence/[Evidence_Name]/` folders + `description.txt`
   - LLM: OpenAI GPT-5-mini via `evidence_recommend/llm.py`

3. **Evidence Validation** (`evidence_feedback/`): Continuous monitoring loop → Validates uploaded evidence → Provides feedback
   - Input: User-uploaded files in `recommend_evidence/` folders
   - Output: `feedback.md` per evidence folder, `evidence_boolean.json` (ready status)
   - Runs until all evidence marked as ready (all True in boolean tracker)
   - Supports multimodal: PDFs (OpenAI Files API), images (base64), Excel (CSV conversion)

4. **Court Simulation** (`court_simulator/`): AI-powered trial with Judge, Defendant, and Clerk roles
   - Input: `extracted_data.json` + user interactions
   - Output: `cli_trial_transcript.json` + verdict
   - LLM: Google Gemini 2.0 Flash via `court_simulator/agent.py`

### Component Relationships

- **OCR → Evidence Recommend**: `extracted_data.json` provides case context
- **Evidence Recommend → Evidence Feedback**: Folders/descriptions from recommend become validation inputs
- **All → Court Simulator**: Uses same `extracted_data.json` as case background
- **Backend ⇄ Frontend**: Currently disconnected - frontend is a React mockup without API integration

### Frontend Architecture

**Entry Point**: `front_end/front_end_1/src/main.tsx` → `App.tsx`

**Key Components**:
- `CaseIntake.tsx` (1568 lines): Main case input form with PDF upload (OCR simulation) and manual entry
- `MootCourtRoom.tsx` (353 lines): Courtroom simulator UI
- `ScriptSuggestions.tsx` (288 lines): AI script generation
- 40+ Radix UI components in `ui/` directory

**Tech Stack**: React 18.3.1, Vite 6.3.5, Tailwind CSS, Radix UI, Recharts

**Design Reference**: https://www.figma.com/design/bUH90dqJ9MlN5OAESvinsx/

## Critical Files

### Backend Core Logic
- `ocr/langchain_ulti.py`: Pydantic `SmallClaimsCase` schema for structured extraction
- `evidence_recommend/llm.py`: OpenAI API wrapper with JSON mode
- `evidence_feedback/monitor_evidence.py`: File watcher orchestrator (1-second polling loop)
- `court_simulator/agent.py`: Gemini API wrapper with multimodal support

### Frontend Core Components
- `front_end/front_end_1/src/components/CaseIntake.tsx`: Main case input flow
- `front_end/front_end_1/src/components/ui/`: Reusable Radix UI components

### Configuration & Orchestration
- `run.sh`: Main pipeline orchestration script with timing
- `requirements.txt`: Python dependencies (PyTorch 2.6.0, transformers, LangChain)
- `api_key.txt`: OpenAI API key (used by multiple scripts)

## Important Patterns

### API Key Management
- OpenAI API key: Read from `api_key.txt` in multiple scripts
- Gemini API key: Hardcoded in `court_simulator.py` (search for "AIzaSy")
- **Security Note**: Keys should be externalized to environment variables in production

### LLM Interaction Patterns
- **Structured Extraction**: LangChain + Pydantic schemas for JSON parsing
- **JSON Mode**: `response_format={"type": "json_object"}` in OpenAI calls
- **Multimodal**: Image/PDF support via base64 encoding or Files API

### File Monitoring Pattern
Evidence feedback uses continuous polling:
```python
while True:
    detect_new_files()
    analyze_evidence()
    check_if_all_ready()
    time.sleep(1)
```

### Data Persistence
- All data stored as JSON files in `data/user_id/` directory structure
- No database - file-based state management
- Evidence folders serve as both storage and task queue

## Enhanced Court Simulator Features

The court simulator has been enhanced with sophisticated legal reasoning capabilities:

### New Features (Phase 2 Implementation)
1. **Objection System**: Defendant automatically evaluates plaintiff statements
   - 5 legal grounds: Hearsay, Speculation, Relevance, Foundation, Narrative
   - Returns structured `ObjectionDecision` with legal reasoning and rephrasing suggestions
   - Method: `evaluate_for_objection()` in `court_simulator/agent.py`

2. **Interactive Rephrasing**: Plaintiff can rephrase objectionable statements
   - Original statement removed from history if rephrased
   - Re-checked after rephrasing
   - Handler: `handle_objection()` in `court_simulator/court_simulator.py`

3. **Evidence Gating**: Evidence upload only allowed when Judge explicitly requests
   - Flag-based permission system: `evidence_upload_allowed`
   - Clear error messages if violated
   - Detection: Parses `evidence_request` field from Judge's response

4. **Multi-file Evidence**: Support for multiple evidence files per request
   - MIME type detection (PDF, JPEG, PNG)
   - Evidence buffer management
   - Upload interface: `get_user_evidence()` function

5. **Intelligent Judge**: Evidence-aware responses with structured requests
   - Judge system prompt includes evidence permission status
   - Explicit evidence request instructions
   - Context on uploaded evidence

### New Files
- `court_simulator/session.py`: Session state management (`CourtSession` class)
- `court_simulator/QUICKSTART.md`: 2-minute quick start guide
- `court_simulator/TESTING.md`: 5 comprehensive test scenarios
- `court_simulator/IMPLEMENTATION_SUMMARY.md`: Technical reference
- `ENHANCEMENT_COMPLETE.md`: Implementation summary

### Modified Files
- `court_simulator/agent.py`: +121 lines (new models, objection evaluation, enhanced Judge)
- `court_simulator/court_simulator.py`: +103 lines (refactored for session-based architecture)

### Running Enhanced Simulator
```bash
# Run enhanced court simulator with all new features
python3 court_simulator/court_simulator.py
```

See `court_simulator/QUICKSTART.md` for detailed usage guide.

## Known Architecture Gaps

1. **No Backend API**: Frontend and Python pipeline are disconnected - need Flask/FastAPI layer
2. **Hardcoded API Keys**: Should use environment variables instead of `api_key.txt`
3. **File-Based Monitoring**: 1-second polling not scalable; consider WebSocket/queue-based approach
4. **No Database**: JSON files limit multi-user support and concurrent access
5. **No Tests**: No visible test files or documentation for testing strategies
