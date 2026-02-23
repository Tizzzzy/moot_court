# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Moot Court Legal Assistant System** for small claims court case preparation. The system consists of a 4-stage Python pipeline (OCR, evidence recommendation, evidence feedback, court simulation) and a React-based frontend.

**Tech Stack:**
- **Backend**: FastAPI, SQLAlchemy (SQLite), Python 3.x
- **Frontend**: React 18.3.1, Vite 6.3.5, TypeScript, Tailwind CSS v4, Radix UI
- **LLMs**: All 4 stages use **Google Gemini 3.0 Flash**
- **Conda Environment**: `moot_court`

**Design Reference**: https://www.figma.com/design/bUH90dqJ9MlN5OAESvinsx/

## Quick Start

```bash
# 1. Setup Python environment
conda activate moot_court
pip install -r requirements.txt

# 2. Configure environment variables
cp .env
# Edit .env with your API keys (GEMINI_API_KEY, HUGGINGFACE_TOKEN)

# 3. Setup backend
python -m uvicorn backend.main:app --reload --port 8000

# 4. Setup frontend (first time only)
cd front_end/front_end_1
npm install
npm run dev

# Access application:
# - Frontend: http://localhost:3000
# - Backend API: http://localhost:8000
# - API Docs: http://localhost:8000/docs
```

## Architecture Overview

### Backend Structure

**Entry Point**: `backend/main.py` (67 lines)
- FastAPI application with CORS middleware
- Database initialization via SQLAlchemy ORM
- Path configuration validation on startup

**Routers** (5 routers, 17 endpoints):
- `/api/ocr` - PDF upload & OCR job tracking
- `/api/cases` - Case data retrieval
- `/api/evidence` - Evidence upload/analysis
- `/api/case-data` - Get case data from extracted_data.json
- `/api/court` - Court simulator (REST + WebSocket)

**Services**:
- `court_session_service.py` - Court session lifecycle & state persistence
- `ocr_service.py` - Background OCR task execution
- `evidence_service.py` - Evidence file handling
- `evidence_analysis.py` - Multimodal evidence validation (uses Gemini API)
- `openai_evidence.py` - Legacy OpenAI integration (deprecated in favor of Gemini)

**Database Models** (`backend/models/case.py`):
- `ProcessingJob` - OCR job tracking
- `Case` - Case information
- `Party` - Plaintiff/defendant details
- `CourtSessionModel` - Court sessions with serialized state (JSON)

**WebSocket** (`backend/websockets/court_ws.py`):
- Session-based message routing
- Multi-client support per session
- Message types: `connected`, `response`, `next_speaker`, `evidence_request`, `error`, `verdict`

### Frontend Structure

**Primary Frontend**: `front_end/front_end_1` (unified single-page application)
- **Entry Point**: `src/main.tsx` with React Router v6
- **Routing**:
  - `/` → CaseIntake (case submission)
  - `/case/:userId` → CaseSuccess (confirmation + navigation)
  - `/evidence/:userId` → EvidencePage (evidence collection)
  - `/dashboard/:userId` → DashboardPage (AI evidence review)
  - `/court/:userId` → CourtPage (court simulator)

**Key Files**:
- `src/hooks/useCourtSession.ts` (465 LOC) - Main state management hook
  - Manages session creation, WebSocket connection, message history
  - Handles objection detection and evidence uploads
  - Auto-reconnection with exponential backoff
- `src/services/api.ts` (271 LOC) - HTTP client (GET, POST, DELETE, uploadFiles)
- `src/services/courtSessionService.ts` (116 LOC) - Court API wrapper
- `src/services/websocketService.ts` (197 LOC) - WebSocket with reconnection
- `src/types/court.ts` (192 LOC) - TypeScript type definitions
- `src/components/CaseIntake.tsx` (1,288 LOC) - Case submission form
- `src/components/court/ActiveHearing.tsx` (264 LOC) - Live courtroom UI

**UI Components**: 47 Radix UI wrapper components in `src/components/ui/`

**Build System**: Vite 6.3.5 with SWC compiler
- Dev server on port 3000 with `/api` proxy to `http://localhost:8000`
- HMR enabled
- Path alias: `@/` → `src/`

### 4-Stage Data Pipeline

**Stage 1: OCR** (`ocr/info_extract.py`)
- Extracts case data from PDF using Gemini 3.0 Flash
- Output: `data/{user_id}/ocr_output/extracted_data.json`
- Pydantic schema: `SmallClaimsCaseExtraction` (13 fields)
- Also saved to database `Case` table

**Stage 2: Evidence Recommendation** (`evidence_recommend/evidence_recommend.py`)
- Analyzes case → Recommends evidence types
- Creates folder structure: `data/{user_id}/evidence/recommend_evidence/{Evidence_Name}/`
- Each folder has: `description.txt` (guidelines for collection)
- Uses Gemini API with structured JSON output

**Stage 3: Evidence Validation** (`evidence_feedback/monitor_evidence.py`)
- Continuous monitoring (1-second polling) of uploaded evidence
- Validates files against recommendations using Gemini API
- Outputs: `feedback.md` per evidence folder
- Tracks completion status in `evidence_boolean.json`
- Runs until all evidence marked ready (all True)

**Stage 4: Court Simulation** (`court_simulator/`)
- AI-powered trial with Judge and Defendant roles
- Gemini API with structured JSON responses
- Session-based state management with database persistence
- Verdict detection: Trial ends when Judge says "Verdict"
- WebSocket for real-time updates

### LLM Integration: Gemini 3.0 Flash

All 4 pipeline stages now use **Gemini 3.0 Flash** (`gemini-3-flash-preview`):

**OCR Stage** (`ocr/info_extract.py`):
```python
# Uses Pydantic JSON schema for structured extraction
client = genai.Client(api_key=api_key, http_options={'api_version': 'v1alpha'})
response = client.models.generate_content(
    model="gemini-3-flash-preview",
    contents=[...],
    config=GenerateContentConfig(
        response_mime_type="application/json",
        response_schema=SmallClaimsCaseExtraction
    )
)
```

**Court Simulator** (`court_simulator/agent.py`):
```python
# Structured output with Pydantic schemas
CourtroomResponse, ObjectionDecision, ControllerDecision models
client.models.generate_content(
    model="gemini-3-flash-preview",
    contents=[...],
    config=GenerateContentConfig(response_schema=CourtroomResponse)
)
```

**Evidence Validation** (`evidence_feedback/llm.py`):
```python
# Validates uploaded evidence against recommendations
Uses Gemini structured JSON for structured validation
```

## Important Patterns

### Session-Based Architecture
- Session ID is single source of truth
- Stored in database (CourtSessionModel.state_snapshot as JSON)
- Replicated in React hook state for UI
- Automatic restoration on backend restart

### REST + WebSocket Hybrid
- **REST** for request/response (create session, send message, upload evidence)
- **WebSocket** for push notifications (AI responses, turn changes, verdict)
- Combines reliability of REST with efficiency of WebSocket

### Type-Safe API Boundaries
- Backend Pydantic models match frontend TypeScript interfaces
- Adapter/mapper functions convert between API and UI formats
- Example: `mapChatMessageToMessage()` handles field transformations

### Custom Hook for Backend Integration
- `useCourtSession` hook abstracts all API communication
- Clean separation: UI components only call hook, never services directly
- Handles loading states, errors, WebSocket reconnection
- Mock vs real API swappable by changing service implementation

### Feature Flags
In `backend/routers/court_simulator.py`:
```python
ENABLE_FEEDBACK = True    # Plaintiff feedback during trial
ENABLE_OBJECTIONS = False # Defendant objection system
```

## Critical Files Not to Break

- `useCourtSession` hook - integration layer between UI and API
- `courtSessionService` - API contract definition
- `websocketService` - real-time connection manager
- `types/court.ts` - shared data format
- `backend/services/court_session_service.py` - session persistence
- `ocr/info_extract.py` - PDF extraction (migrated to Gemini)
- `court_simulator/agent.py` - Gemini integration for trial simulation

## Environment Configuration

### Required API Keys (.env file)
```bash
GEMINI_API_KEY=your_gemini_api_key_here
HUGGINGFACE_TOKEN=your_hf_token_here
DATABASE_URL=sqlite:///./moot_court.db
MAX_UPLOAD_SIZE_MB=50
```

### Optional: Custom Data Directory
```bash
# Default: {project_root}/data/
# Custom (must be absolute path with drive letter on Windows):
BASE_DATA_DIR=C:/custom/path/to/data
```

All path operations use centralized `backend/utils/path_utils.py`:
- `get_user_claims_dir(user_id)` → `data/{user_id}/claims/`
- `get_user_ocr_output_dir(user_id)` → `data/{user_id}/ocr_output/`
- `get_user_evidence_dir(user_id)` → `data/{user_id}/evidence/`
- `get_extracted_data_path(user_id)` → `data/{user_id}/ocr_output/extracted_data.json`

## Known Limitations & Gaps

### Testing Infrastructure
- No automated testing framework (pytest, Jest)
- No unit/integration/E2E tests
- Manual testing only via API docs and browser

### Deployment & Production
- No Docker containerization
- No CI/CD pipeline
- No database migrations (Alembic not configured)
- SQLite not suitable for production multi-user scenarios

### Security
- No authentication/authorization (user_id not validated)
- No rate limiting on API endpoints
- CORS allows localhost origins only (development-appropriate)

### Scalability
- File-based monitoring with 1-second polling (not scalable)
- In-memory session cache (lost on restart, restored from DB)
- No message queue for background tasks
- No caching layer (Redis/Memcached)

## Integration Notes

### Migrating from OpenAI to Gemini (Completed 2026-02-09)
All pipeline stages now consolidated on Gemini 3.0 Flash:
- OCR stage: Pydantic schemas for structured JSON extraction
- Evidence validation: Gemini structured output
- Court simulator: Gemini agents for Judge/Defendant roles
- Benefits: Single vendor, cost efficiency, no base64 encoding overhead

### Database-to-Filesystem Sync
- OCR service writes `extracted_data.json` to filesystem after saving to DB
- Evidence pipeline reads from filesystem (no DB queries)
- Ensures backward compatibility with legacy file-based workflows

### WebSocket Reconnection Strategy
- Exponential backoff: 2s → 4s → 8s → 16s → 32s
- Max 5 attempts (160 seconds total)
- Connection status available to UI for feedback

## Useful Git Commands

```bash
# Check git status (see all modified files)
git status

# View recent commits
git log --oneline -10

# View changes in a specific file
git diff backend/main.py
```

## Debugging Tips

### Backend Debugging
1. Check logs in terminal where uvicorn is running
2. Use `http://localhost:8000/docs` to test endpoints
3. Enable DEBUG logging: `logging.basicConfig(level=logging.DEBUG)`
4. Check database: Open `moot_court.db` with SQLite viewer

### Frontend Debugging
1. Browser console (F12) shows WebSocket logs `[WebSocket]`
2. Network tab shows API calls and WebSocket frames
3. React DevTools extension helpful for state inspection
4. Check that env variables are loaded: `import.meta.env.VITE_API_BASE_URL`

### Common Issues

**Issue**: "GEMINI_API_KEY not found in environment"
- **Fix**: Ensure `.env` file exists in project root and is sourced by shell

**Issue**: Frontend shows "Failed to load case data"
- **Fix**: Ensure `extracted_data.json` exists in `data/{user_id}/ocr_output/`

**Issue**: WebSocket disconnects after message
- **Check**: Backend error logs for uncaught exceptions in message handlers

**Issue**: Evidence upload fails
- **Check**: File permissions in `data/{user_id}/evidence/` directory

## Next Developer Checklist

When starting work:
- [ ] Activate conda environment: `conda activate moot_court`
- [ ] Read MEMORY.md in `~/.claude/` directory for integration patterns
- [ ] Run `bash deploy_unified.sh` to verify full stack works
- [ ] Check `.env` file for required API keys
- [ ] Review test case data in `data/user_1/` directory
- [ ] Understand session flow: Create → Judge Opens → Plaintiff → Judge → Defendant → Verdict

When modifying:
- [ ] Make changes incrementally, not wholesale rewrites
- [ ] Test REST endpoints before WebSocket integration
- [ ] Verify no hardcoded user IDs (use `:userId` from URL)
- [ ] Check that both database AND filesystem are updated (dual write for compatibility)
- [ ] Don't break critical files listed above

When troubleshooting:
- [ ] Start with backend API: `curl http://localhost:8000/api/health`
- [ ] Check frontend console for WebSocket `[WebSocket]` logs
- [ ] Verify API endpoint exists in `backend/routers/`
- [ ] Check that types match between Pydantic (backend) and TypeScript (frontend)
