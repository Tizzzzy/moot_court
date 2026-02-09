# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Moot Court Legal Assistant System** for small claims court case preparation. The system consists of a 4-stage Python pipeline (OCR, evidence recommendation, evidence validation, court simulation) and a React-based frontend.

**Tech Stack:**
- **Backend**: FastAPI, SQLAlchemy (SQLite), Python 3.x
- **Frontend**: React 18.3.1, Vite 6.3.5, TypeScript, Tailwind CSS v4, Radix UI
- **LLMs**: Local Qwen3-4B-Instruct (document extraction), OpenAI GPT-4o-mini (evidence analysis), Google Gemini 2.0 Flash (courtroom simulation)

**Design Reference**: https://www.figma.com/design/bUH90dqJ9MlN5OAESvinsx/

## Quick Start

```bash
# 1. Setup Python environment
conda activate moot_court
pip install -r requirements.txt

# 2. Configure environment variables
cp .env.example .env
# Edit .env with your API keys (OPENAI_API_KEY, GEMINI_API_KEY, HUGGINGFACE_TOKEN)

# 3. Setup frontend (first time only)
cd front_end/front_end_1
npm install
cd ../..

# 4. Start full application
bash deploy_unified.sh

# Access application:
# - Frontend: http://localhost:3000
# - Backend API: http://localhost:8000
# - API Docs: http://localhost:8000/docs

# 5. Stop all services
bash stop.sh
```

## Common Commands

### Deployment

```bash
# Recommended: Start unified application (single frontend with all features)
bash deploy_unified.sh

# Alternative: Start multiple separate frontends
bash deploy.sh

# Stop all services
bash stop.sh

# Run backend pipeline only (no web UI)
bash run.sh
```

### Backend Development

```bash
# Activate Python environment
conda activate moot_court

# Start backend with auto-reload
python -m uvicorn backend.main:app --reload --port 8000

# Run individual pipeline stages
python ocr/info_extract.py --file data/user_1/ocr_output/SMC/txt/SMC.md --output extracted.json
python evidence_recommend/evidence_recommend.py --input_file extracted.json --conversation_json_path conv.json --evidence_folder_path evidence/
python evidence_feedback/monitor_evidence.py --case_info extracted.json --tracker_file tracker.json --boolean_file boolean.json --evidence_folder evidence/

# Run court simulator (standalone CLI)
python court_simulator/court_simulator.py
```

### Frontend Development

```bash
# Navigate to main frontend
cd front_end/front_end_1

# Install dependencies (first time only)
npm install

# Start development server (with HMR)
npm run dev        # Runs on http://localhost:3000

# Build for production
npm run build      # Output: build/
```

### Testing

```bash
# Basic backend integration test
python test_backend.py

# Court simulator verification
bash VERIFY_IMPLEMENTATION.sh

# Manual API testing
open http://localhost:8000/docs
```

## Environment Setup

### Python Backend

**Conda Environment**: `moot_court`

```bash
# Activate environment
conda activate moot_court

# Install dependencies
pip install -r requirements.txt

# Install flash-attention separately (requires CUDA)
pip install flash-attn==2.7.3 --no-build-isolation

# Set environment variables for GPU (required for MinerU)
export MINERU_DEVICE_MODE=cuda
export CUDA_VISIBLE_DEVICES=0
```

### Environment Variables

Create `.env` file in project root (use `.env.example` as template):

```bash
# OpenAI API Key (for document extraction and evidence analysis)
OPENAI_API_KEY=your_openai_api_key_here

# Google Gemini API Key (for court simulator)
GEMINI_API_KEY=your_gemini_api_key_here

# HuggingFace Token (for model access)
HUGGINGFACE_TOKEN=your_hf_token_here

# Database (default: SQLite)
DATABASE_URL=sqlite:///./moot_court.db

# Optional: Custom data directory (defaults to {project_root}/data)
# BASE_DATA_DIR=C:/custom/path/to/data

# File upload size limit
MAX_UPLOAD_SIZE_MB=50
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

**Path Management**: All path operations use centralized utility `backend/utils/path_utils.py` which provides:
- `get_user_claims_dir(user_id)` → `data/{user_id}/claims/`
- `get_user_ocr_output_dir(user_id)` → `data/{user_id}/ocr_output/`
- `get_user_evidence_dir(user_id)` → `data/{user_id}/evidence/`
- `get_extracted_data_path(user_id)` → `data/{user_id}/ocr_output/extracted_data.json`

## Architecture

### Backend Architecture (FastAPI)

**Framework**: FastAPI on port 8000 (Uvicorn ASGI server)

**Entry Point**: `backend/main.py` (67 lines)
- Async lifespan context manager handles startup/shutdown
- CORS enabled for localhost:3000, localhost:5173, 127.0.0.1:5173

**Database**: SQLite (`moot_court.db`) with SQLAlchemy ORM
- Configuration: `backend/database.py` (20 lines)
- Models: `backend/models/case.py` (87 lines)
  - `ProcessingJob` - OCR job tracking
  - `Case` - Case information
  - `Party` - Plaintiff/defendant details
  - `CourtSessionModel` - Court simulator sessions (stores serialized state in JSON)

**Router Organization** (5 routers, 17 endpoints):
```
backend/routers/
├── ocr.py (85 lines)            → /api/ocr
│   ├── POST /upload             Upload PDF, trigger OCR
│   └── GET /status/{job_id}     Poll job status
├── cases.py (1,574 lines)       → /api/cases
│   └── GET /{case_id}           Get case details
├── evidence.py (248 lines)      → /api/evidence
│   ├── POST /submit-case/{user_id}      Manual case entry + recommendations
│   ├── GET /recommend/{user_id}         Generate evidence recommendations
│   ├── POST /upload/{user_id}/{folder}  Upload evidence file
│   └── POST /analyze/{user_id}/{folder} Get AI feedback
├── case_data.py (588 lines)     → /api/case-data
│   └── GET /{user_id}           Get extracted case data
└── court_simulator.py (552 lines) → /api/court
    ├── GET /case-data                         Get case data for court UI
    ├── POST /sessions                         Create court session
    ├── GET /sessions/{session_id}             Get/restore session
    ├── POST /sessions/{session_id}/messages   Send plaintiff statement
    ├── POST /sessions/{session_id}/evidence   Upload evidence during trial
    ├── GET /sessions/{session_id}/transcript  Get trial transcript
    ├── DELETE /sessions/{session_id}          Complete session
    └── WebSocket /sessions/{session_id}/ws    Real-time trial updates
```

**Service Layer** (`backend/services/`):
- `court_session_service.py` (288 lines) - Session lifecycle, state persistence
- `ocr_service.py` (117 lines) - Background OCR task execution
- `evidence_analysis.py` - Multimodal evidence validation
- `openai_evidence.py` - Evidence recommendation generation

**WebSocket Implementation** (`backend/websockets/court_ws.py`, 131 lines):
- Singleton manager: `ws_manager`
- Session-based connections: Multiple clients per session
- Message types: `connected`, `response`, `next_speaker`, `evidence_request`, `error`, `feedback`, `verdict`
- Auto-reconnection with exponential backoff

**LLM Integration Patterns**:

1. **OpenAI GPT-4o-mini** (OCR + Evidence):
   - Direct PDF processing via OpenAI API
   - JSON mode: `response_format={"type": "json_object"}`
   - Multimodal: PDFs (Files API), images (base64), Excel (CSV conversion)

2. **Google Gemini 2.0 Flash** (Court Simulator):
   - Model: `gemini-3-flash-preview` (API v1alpha)
   - Agent module: `court_simulator/agent.py` (416 lines)
   - Structured output via Pydantic JSON schemas
   - Functions: `judge_response()`, `defendant_response()`, `decide_next_speaker()`
   - Verdict detection: Controller AI returns "Verdict" when Judge makes decision

### Frontend Architecture (React + Vite)

**Primary Frontend**: `front_end/front_end_1` (159 TypeScript files)
- **Note**: 3 frontend directories exist, but `front_end_1` is the active unified application

**Entry Point**: `src/main.tsx` → `App.tsx` (React Router v6)

**Directory Structure**:
```
src/
├── components/
│   ├── court/          22 files (2,821 LOC) - Court simulator UI
│   ├── dashboard/      4 files - AI evidence dashboard
│   ├── evidence/       Evidence upload workflow
│   └── ui/             47 files (5,082 LOC) - Radix UI components
├── hooks/
│   └── useCourtSession.ts  (465 LOC) - Main state management hook
├── services/
│   ├── api.ts              (271 LOC) - HTTP API client
│   ├── courtSessionService.ts (116 LOC) - Court session API
│   └── websocketService.ts (197 LOC) - WebSocket handler
├── types/
│   └── court.ts            (192 LOC) - TypeScript definitions
├── main.tsx                Entry point
└── App.tsx                 Router configuration
```

**Routing** (React Router v6):
```
/ → CaseIntake.tsx              (1,288 LOC) - PDF upload + manual entry
/case/:userId → CaseSuccess.tsx  Case submission confirmation
/evidence/:userId → EvidencePage.tsx  Evidence upload flow
/dashboard/:userId → DashboardPage.tsx  AI evidence dashboard
/court/:userId → CourtPage.tsx   (289 LOC) - Court simulator
    ├── HearingOverview.tsx      Pre-hearing briefing
    └── ActiveHearing.tsx        (264 LOC) - Live courtroom
```

**State Management**: Custom hooks pattern (no Redux/Zustand)
- Primary hook: `useCourtSession.ts` encapsulates all court session logic
- Component-level state with React `useState`
- No global Context providers

**API Communication**: Service layer singletons
- `apiClient` - Base HTTP client (GET, POST, DELETE, uploadFiles)
- `courtSessionService` - Court-specific API methods
- `websocketService` - Real-time WebSocket with auto-reconnection (max 5 attempts)

**UI Components**: Radix UI + shadcn/ui pattern
- 23 Radix UI primitive packages installed
- 47 custom wrapper components in `components/ui/`
- Styled with Tailwind CSS v4 and `class-variance-authority`
- Icons: lucide-react v0.487.0

**Build System**: Vite 6.3.5 with SWC compiler
- Dev server on port 3000 with API proxy to backend (port 8000)
- Path alias: `@/` maps to `src/`
- Hot Module Replacement (HMR) enabled

### Data Flow: 4-Stage Pipeline

1. **OCR Stage** (`ocr/`): PDF → Markdown (MinerU) → Structured JSON (Qwen3-4B-Instruct + LangChain)
   - Input: `data/user_1/claims/SMC.pdf`
   - Output: `data/user_1/ocr_output/extracted_data.json`
   - Key: Uses Pydantic schema in `ocr/langchain_ulti.py` to extract case details

2. **Evidence Recommendation** (`evidence_recommend/`): Analyzes case → Recommends evidence types → Creates folder structure
   - Input: `extracted_data.json`
   - Output: `data/user_1/evidence/recommend_evidence/[Evidence_Name]/` folders + `description.txt`
   - LLM: OpenAI GPT-4o-mini via `evidence_recommend/llm.py`

3. **Evidence Validation** (`evidence_feedback/`): Continuous monitoring loop → Validates uploaded evidence → Provides feedback
   - Input: User-uploaded files in `recommend_evidence/` folders
   - Output: `feedback.md` per evidence folder, `evidence_boolean.json` (ready status)
   - Runs until all evidence marked as ready (all True in boolean tracker)
   - Supports multimodal: PDFs (OpenAI Files API), images (base64), Excel (CSV conversion)

4. **Court Simulation** (`court_simulator/`): AI-powered trial with Judge, Defendant roles
   - Input: `extracted_data.json` + user interactions
   - Output: Trial transcript JSON + verdict
   - LLM: Google Gemini 2.0 Flash via `court_simulator/agent.py`

### Court Simulator Flow (HTTP + WebSocket)

```
1. Frontend → POST /api/court/sessions {user_id, case_id}
2. Backend creates CourtSession, Judge generates opening
3. Backend saves to database + cache
4. Return {session_id, opening_message}

--- Trial Begins ---

5. Frontend → WebSocket /api/court/sessions/{session_id}/ws
6. Frontend → POST /api/court/sessions/{session_id}/messages {message}
7. Backend: Controller AI decides next speaker (Gemini API)
8. If "Defendant": Generate response → Broadcast via WebSocket
9. If "Judge": Generate response → Broadcast via WebSocket
10. If "Verdict": Generate verdict → Mark complete → Save transcript
11. Update session state in database
```

## Critical Files

### Backend Core Logic
- `backend/main.py` (67 lines) - FastAPI application entry point
- `backend/database.py` (20 lines) - SQLAlchemy configuration
- `backend/models/case.py` (87 lines) - Database schema
- `backend/config.py` (20 lines) - Pydantic settings
- `backend/utils/path_utils.py` (188 lines) - Centralized path management
- `backend/routers/court_simulator.py` (552 lines) - Court simulator endpoints
- `backend/services/court_session_service.py` (288 lines) - Session management
- `backend/websockets/court_ws.py` (131 lines) - WebSocket manager
- `court_simulator/agent.py` (416 lines) - Gemini API wrapper
- `court_simulator/session.py` - CourtSession state class
- `ocr/langchain_ulti.py` - Pydantic `SmallClaimsCase` schema
- `evidence_recommend/llm.py` - OpenAI API wrapper with JSON mode
- `evidence_feedback/monitor_evidence.py` - File watcher orchestrator

### Frontend Core Components
- `front_end/front_end_1/src/App.tsx` - Router configuration
- `front_end/front_end_1/src/hooks/useCourtSession.ts` (465 LOC) - State management
- `front_end/front_end_1/src/services/api.ts` (271 LOC) - HTTP client
- `front_end/front_end_1/src/services/websocketService.ts` (197 LOC) - WebSocket
- `front_end/front_end_1/src/types/court.ts` (192 LOC) - TypeScript types
- `front_end/front_end_1/src/components/CaseIntake.tsx` (1,288 LOC) - Main case input
- `front_end/front_end_1/src/components/court/ActiveHearing.tsx` (264 LOC) - Courtroom UI
- `front_end/front_end_1/src/components/ui/` - 47 Radix UI wrapper components

### Configuration & Orchestration
- `deploy_unified.sh` - Unified deployment script (recommended)
- `deploy.sh` - Multi-frontend deployment script
- `run.sh` - Backend pipeline orchestration
- `stop.sh` - Service shutdown script
- `requirements.txt` - Python dependencies
- `.env` - Environment variables (create from `.env.example`)
- `vite.config.ts` - Frontend build configuration

## Important Patterns

### API Key Management
- OpenAI API key: Read from `.env` via `backend/config.py` (Pydantic Settings)
- Gemini API key: Read from `.env` via settings
- HuggingFace token: Read from `.env` via settings
- **Security Note**: Keys properly externalized to environment variables

### LLM Interaction Patterns
- **Structured Extraction**: LangChain + Pydantic schemas for JSON parsing
- **JSON Mode**: `response_format={"type": "json_object"}` in OpenAI calls
- **Multimodal**: Image/PDF support via base64 encoding or Files API
- **Structured Output (Gemini)**: All Gemini calls use Pydantic JSON schemas with `response_json_schema`

### File Monitoring Pattern
Evidence feedback uses continuous polling (1-second interval):
```python
while True:
    detect_new_files()
    analyze_evidence()
    check_if_all_ready()
    time.sleep(1)
```

### Data Persistence
- **Database**: SQLite with SQLAlchemy ORM for structured data
- **File-based**: JSON files in `data/user_id/` for pipeline outputs
- **Session State**: Serialized to database TEXT field as JSON
- **Evidence**: Folder structure serves as both storage and task queue

### Background Task Pattern
```python
@router.post("/upload")
async def upload_pdf(..., background_tasks: BackgroundTasks):
    # Save PDF to disk
    # Create database job record
    background_tasks.add_task(run_ocr_pipeline, job_id, file_path, user_id)
    return {"job_id": job_id, "status": "pending"}
```

### WebSocket Message Types
- `connected` - Connection confirmation
- `response` - AI courtroom response (Judge/Defendant)
- `next_speaker` - Turn indicator ("plaintiff", "judge", "defendant")
- `evidence_request` - Judge requests evidence
- `error` - Error notifications
- `feedback` - Educational feedback (disabled via feature flag)
- `verdict` - Trial conclusion with verdict

### Session State Management
- In-memory cache with database persistence
- State serialization to JSON in `CourtSessionModel.state_snapshot`
- Automatic restoration on backend restart
- Evidence directory path persistence fix applied

## Development Workflows

### Full Stack Development

```bash
# Start all services (unified frontend)
bash deploy_unified.sh

# Access:
# - Frontend: http://localhost:3000
# - Backend API: http://localhost:8000
# - API Docs: http://localhost:8000/docs

# Stop all services
bash stop.sh
```

### Backend-Only Development

```bash
# Activate environment
conda activate moot_court

# Start with auto-reload
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload

# Test endpoints
curl http://localhost:8000/api/health
open http://localhost:8000/docs
```

### Frontend-Only Development

```bash
cd front_end/front_end_1
npm run dev  # Starts on http://localhost:3000 with HMR
```

### Pipeline Development

```bash
# Run 4-stage pipeline
bash run.sh 2>&1 | tee pipeline_log.txt

# Individual stages
python ocr/info_extract.py --file data/user_1/ocr_output/SMC/txt/SMC.md --output extracted.json
python evidence_recommend/evidence_recommend.py --input_file extracted.json --conversation_json_path conv.json --evidence_folder_path evidence/
python evidence_feedback/monitor_evidence.py --case_info extracted.json --tracker_file tracker.json --boolean_file boolean.json --evidence_folder evidence/
```

### Court Simulator Development

```bash
# Standalone CLI testing
python court_simulator/court_simulator.py

# Ensure case data exists first
ls data/user_1/ocr_output/extracted_data.json
```

## Enhanced Court Simulator Features

The court simulator has been enhanced with sophisticated legal reasoning capabilities:

### Feature Flags (Currently Disabled)
```python
ENABLE_FEEDBACK = False      # Plaintiff feedback disabled
ENABLE_OBJECTIONS = False    # Objection system disabled
```

### Core Features (Enabled)
1. **Verdict Detection**: Controller AI returns "Verdict" when Judge makes decision (automatic trial termination)
2. **Multi-file Evidence**: Support for multiple evidence files per request with MIME type detection
3. **Intelligent Judge**: Evidence-aware responses with structured requests

### Session State (`court_simulator/session.py`)
- `CourtSession` class manages trial state
- Evidence buffer management
- Turn tracking

### New Files
- `court_simulator/session.py` - Session state management
- `backend/services/court_session_service.py` - Database persistence layer
- `backend/websockets/court_ws.py` - Real-time communication

## Known Architecture Gaps

### Testing Infrastructure
1. **No automated testing framework** (pytest, Jest)
2. **No unit tests** for individual functions
3. **No integration tests** for API endpoints
4. **No end-to-end tests** for user flows
5. **No load/performance testing**
6. **Manual testing only** via API docs and browser

### Deployment & Production
1. **No Docker containerization** (environment inconsistencies possible)
2. **No CI/CD pipeline** (manual deployment only)
3. **No production deployment scripts** (only local dev)
4. **No database migrations** (Alembic not configured)
5. **No monitoring/logging infrastructure** (basic console logs only)
6. **SQLite database** (not suitable for production multi-user)

### Security
1. **No authentication/authorization** (user_id in requests is not validated)
2. **No rate limiting** on API endpoints
3. **No input validation middleware** (relies on Pydantic per-endpoint)
4. **CORS allows all localhost origins** (broad access during development)

### Scalability
1. **File-based monitoring** (1-second polling not scalable)
2. **In-memory session cache** (lost on server restart, though restored from DB)
3. **No message queue** for background tasks (FastAPI BackgroundTasks not persistent)
4. **No caching layer** (Redis/Memcached)
5. **Single-file database** (SQLite lock contention with concurrent access)
