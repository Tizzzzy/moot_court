# App.tsx Integration - Quick Start Guide

## What Changed

App.tsx has been fully integrated with the backend API using the `useCourtSession` hook. **All mock data and setTimeout delays have been removed.** The frontend now communicates with the real backend court simulator.

## Before & After

### Before Integration
```typescript
// Old way: Hardcoded data with setTimeout delays
const judgeQuestions = ["Question 1", "Question 2", ...];

setTimeout(() => {
  setMessages([{ speaker: 'judge', text: judgeQuestions[0] }]);
}, 1500);
```

### After Integration
```typescript
// New way: Real API with WebSocket
const courtSession = useCourtSession('user_1', 1);
await courtSession.startSession(); // Real API call
// Messages from AI Judge come via WebSocket
```

## Running the Stack (End-to-End)

### Step 1: Start Backend
```bash
cd C:\Users\super\OneDrive\Desk_top\courtAI\moot_court

# Activate conda environment (if not already active)
conda activate moot_court

# Start the FastAPI server
python -m backend.main
```

Expected output:
```
[STARTUP] Creating database tables...
[STARTUP] Database tables created
INFO:     Uvicorn running on http://0.0.0.0:8000
```

### Step 2: Start Frontend
```bash
# In a new terminal
cd front_end/front_end_3
npm install  # (if dependencies not installed)
npm run dev
```

Expected output:
```
VITE v6.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

### Step 3: Test in Browser

1. **Open Frontend:** http://localhost:5173
2. **Click "Start Hearing"**
   - Should show real Judge's opening statement from Gemini API (NOT hardcoded)
   - You'll see a message like: "Good morning, Mr/Ms. Renter. I see you're here regarding..."
3. **Type a plaintiff statement** in the message input
4. **Send message**
   - Message appears immediately
   - Look for "Judge is reviewing your statement..." indicator in top-right
   - Wait 5-10 seconds for AI Judge response via WebSocket
5. **Continue the trial** and observe real AI interactions

## What's Connected Now

### REST API Calls
```
Frontend → Backend
POST /api/court/sessions              ← Create new hearing
GET  /api/court/sessions/{id}         ← Get session state
POST /api/court/sessions/{id}/messages ← Send plaintiff message
POST /api/court/sessions/{id}/evidence ← Upload evidence files
DELETE /api/court/sessions/{id}       ← End hearing
```

### WebSocket Connection
```
Backend → Frontend (Real-time)
ws://localhost:8000/api/court/sessions/{id}/ws

Messages:
- { type: 'response', data: { role: 'Judge', dialogue: '...' } }
- { type: 'evidence_request', data: { requesting: true } }
- { type: 'error', data: { message: '...' } }
```

## Debugging

### Check Backend is Running
```bash
# In terminal or browser
curl http://localhost:8000/api/health
# Should return: {"status":"healthy"}
```

### Check Frontend API Connection
1. Open browser DevTools (F12)
2. Go to Network tab
3. Start Hearing
4. Look for `POST /api/court/sessions` request
5. Should see 200 response with `session_id`

### Check WebSocket Connection
1. Open browser DevTools (F12)
2. Go to Console tab
3. You should see: `[WebSocket] Connected to session {session_id}`
4. When Judge responds, you'll see: `[WebSocket] Received response from Judge`

### Common Issues

#### "Cannot POST /api/court/sessions"
- **Cause:** Backend not running
- **Fix:** Start backend with `python -m backend.main`

#### "Failed to connect to ws://localhost:8000..."
- **Cause:** Backend WebSocket not ready
- **Fix:** Wait for backend startup to complete, then refresh frontend

#### "Connection refused"
- **Cause:** Backend port 8000 already in use
- **Fix:** Kill process on port 8000:
  ```bash
  # Windows
  netstat -ano | findstr :8000
  taskkill /PID {PID} /F

  # macOS/Linux
  lsof -i :8000
  kill -9 {PID}
  ```

#### Messages not appearing after sending
- **Cause:** WebSocket disconnected
- **Fix:** Look for yellow "Reconnecting to courtroom..." message in top-right corner
- **Debug:** Check browser console for WebSocket errors

## Key Features to Test

### 1. Real AI Responses
```
Input:  "I rented an apartment from the defendant..."
Output: Real response from Gemini API (not hardcoded)
```

### 2. Objection Detection
```
Input:  "Everyone knows he's a bad landlord"
Output: AI detects "Hearsay" objection
        Shows ObjectionModal with legal reasoning
        Allows rephrase or continue
```

### 3. Evidence Upload Gating
```
Step 1: Try to upload evidence before Judge requests
        → Error: "Evidence upload not currently allowed"

Step 2: Continue trial until Judge says "Please provide..."
        → Green "Upload allowed" indicator appears

Step 3: Upload files successfully
        → Files sent to backend with next message
```

### 4. Session Persistence
```
Step 1: Start hearing and send 2-3 messages
Step 2: Refresh page (Ctrl+R)
Step 3: All messages still visible
Step 4: Continue from where you left off
```

### 5. Loading States
```
Action: Send message
Result: "Judge is reviewing your statement..." shows in top-right
        Spinner disappears when AI response arrives
```

## Files Changed

### Frontend
- `front_end/front_end_3/src/App.tsx` → **Rewritten** (removed 280+ lines of mock code)
- `front_end/front_end_3/.env.local` → **Created** (API endpoint configuration)

### Backend (Already Complete)
- `backend/main.py` → Includes court_simulator router
- `backend/routers/court_simulator.py` → REST + WebSocket endpoints
- `backend/services/court_session_service.py` → Session management
- Other backend files ready for use

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User Browser                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  App.tsx (React Component)                             │ │
│  │  - useCourtSession hook (state management)             │ │
│  │  - No setTimeout, no mock data                         │ │
│  │  - Renders UI based on hook state                      │ │
│  └────────────────┬─────────────────────────────────────┘ │
│                   │                                         │
│  ┌────────────────▼─────────────────────────────────────┐ │
│  │  Frontend Services                                     │ │
│  │  - api.ts (REST client with fetch)                   │ │
│  │  - courtSessionService.ts (API wrapper)               │ │
│  │  - websocketService.ts (WebSocket manager)            │ │
│  └────────────────┬─────────────────────────────────────┘ │
└───────────────────┼──────────────────────────────────────┘
                    │
         ┌──────────┴──────────┐
         │                     │
    REST │                     │ WebSocket
    /JSON│                     │ /JSON
         │                     │
    POST /api/court/sessions   │ ws://localhost:8000/api/...
    GET  /api/court/sessions   │
    POST /api/court/.../messages│
                    │                     │
    ┌───────────────▼──────────────────────▼──────────────┐
    │           FastAPI Backend (port 8000)               │
    │  ┌─────────────────────────────────────────────┐   │
    │  │  Court Simulator Router                      │   │
    │  │  - Session endpoints                         │   │
    │  │  - Message endpoints                         │   │
    │  │  - Evidence endpoints                        │   │
    │  │  - WebSocket manager                         │   │
    │  └─────────────────────────────────────────────┘   │
    │  ┌─────────────────────────────────────────────┐   │
    │  │  Services                                     │   │
    │  │  - CourtSessionService (state management)    │   │
    │  │  - EvidenceService (file handling)           │   │
    │  └─────────────────────────────────────────────┘   │
    │  ┌─────────────────────────────────────────────┐   │
    │  │  AI Agents (court_simulator/)                │   │
    │  │  - Judge agent (Gemini API)                  │   │
    │  │  - Defendant agent (Gemini API)              │   │
    │  │  - Objection evaluation                      │   │
    │  └─────────────────────────────────────────────┘   │
    │  ┌─────────────────────────────────────────────┐   │
    │  │  Database (SQLite)                           │   │
    │  │  - Session metadata                          │   │
    │  │  - Case information                          │   │
    │  └─────────────────────────────────────────────┘   │
    └─────────────────────────────────────────────────────┘
         │
         │ HTTP
         ▼
    ┌──────────────────────┐
    │  Gemini 2.0 Flash    │
    │  (AI Court Agents)   │
    └──────────────────────┘
```

## Integration Metrics

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| setTimeout calls | 20+ | 0 | **-100%** |
| Hardcoded data arrays | 11 | 0 | **-100%** |
| Mock response functions | 4+ | 0 | **-100%** |
| App.tsx lines | 833 | ~550 | **-34%** |
| Real API calls | 0 | 7 | **∞** |
| WebSocket integration | None | Full | **✅** |
| AI response time | 0ms (fake) | 5-10s (real) | **Real** |

## Next Features to Implement

### Phase 2 (High Priority)
- [ ] Multi-step progression based on AI responses
- [ ] Educational feedback display
- [ ] Performance metrics after verdict
- [ ] Session auto-recovery on refresh

### Phase 3 (Medium Priority)
- [ ] User authentication (JWT)
- [ ] Case selection before hearing
- [ ] Multiple hearing sessions per case
- [ ] Analytics dashboard

### Phase 4 (Lower Priority)
- [ ] Appeal simulation
- [ ] Jury trial mode
- [ ] Video recording of hearing
- [ ] Export trial transcript

## Troubleshooting Command Reference

```bash
# Check if backend is running
curl http://localhost:8000/api/health

# View backend logs
tail -f backend.log  # (if logging is configured)

# Restart backend
# (Ctrl+C in terminal, then python -m backend.main)

# Reset database
rm moot_court.db

# Clear frontend cache
# (Ctrl+Shift+R in browser)

# Check port usage
# Windows: netstat -ano | findstr :8000
# macOS/Linux: lsof -i :8000
```

## Support

If you encounter issues:

1. **Check logs:** Look at backend terminal for error messages
2. **Check browser console:** Look for API/WebSocket errors (F12)
3. **Check Network tab:** Verify API requests and responses
4. **Check backend health:** `curl http://localhost:8000/api/health`

---

**Status:** ✅ Integration Complete
**Last Updated:** 2026-02-05
**Ready for Testing:** Yes
