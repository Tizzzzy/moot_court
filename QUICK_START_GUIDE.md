# Quick Start: Court Simulator Integration

## What Was Built

✅ **Backend API** (Complete - Ready to use)
- 6 new files, ~1,350 lines
- REST endpoints + WebSocket
- Session management with database persistence
- Evidence upload with permission gating
- Wraps existing court simulator with Gemini AI

✅ **Frontend Services** (Complete - Ready to use)
- 5 new files, ~980 lines
- TypeScript types, API client, WebSocket manager
- `useCourtSession` React hook for session management
- Error handling, reconnection logic, state management

⏳ **App.tsx Integration** (Ready, not yet implemented)
- Documentation provided with step-by-step instructions
- Expected: ~100 lines of changes, removes ~200 lines of mock code

---

## Run It Now (Backend Only)

### 1. Start Backend

```bash
cd C:/Users/super/OneDrive/Desk_top/courtAI/moot_court

# Make sure GEMINI_API_KEY is set
export GEMINI_API_KEY=your_key_here

# Run backend
python -m backend.main
# ✅ Running on http://0.0.0.0:8000
```

### 2. Test API with curl

```bash
# Create a session
curl -X POST http://localhost:8000/api/court/sessions \
  -H "Content-Type: application/json" \
  -d '{"user_id": "user_1", "case_id": 1}'

# Response:
# {
#   "session_id": "uuid",
#   "opening_message": {
#     "role": "Judge",
#     "dialogue": "Good morning. This is a small claims case..."
#   }
# }
```

### 3. Start Frontend (Mock Data Still Active)

```bash
cd front_end/front_end_3
npm run dev
# ✅ Running on http://localhost:5173
```

---

## Next: Integrate App.tsx

### Three Options:

#### Option 1: Manual Integration (Recommended)
Follow `APP_MIGRATION_STEPS.md`:
1. Import `useCourtSession` hook
2. Remove hardcoded arrays (judge questions, defendant responses)
3. Replace `handleStartHearing` with hook call
4. Replace `setMessages` mutations with hook's messages
5. Update event handlers to use API instead of setTimeout

**Time**: 1-2 hours | **Difficulty**: Medium | **Result**: Full integration

#### Option 2: Guided Integration
1. Read `INTEGRATION_GUIDE.md` for complete overview
2. Compare mock functions with API alternatives
3. Copy/paste code snippets from `APP_MIGRATION_STEPS.md`

**Time**: 2-3 hours | **Difficulty**: Easy | **Result**: Full integration

#### Option 3: Wait for Template
Request a pre-refactored App.tsx with all changes applied.

**Time**: Instant | **Difficulty**: None | **Result**: Ready-to-use integration

---

## File References

### For Backend Understanding
- **Main Integration**: `backend/routers/court_simulator.py` (320 lines)
- **Session Management**: `backend/services/court_session_service.py` (230 lines)
- **API Types**: `backend/schemas/court_schemas.py` (200 lines)

### For Frontend Implementation
- **Complete Guide**: `INTEGRATION_GUIDE.md`
- **Step-by-Step**: `APP_MIGRATION_STEPS.md`
- **Hook Documentation**: `front_end_3/src/hooks/useCourtSession.ts`
- **Type Definitions**: `front_end_3/src/types/court.ts`

### API Reference
```
POST   /api/court/sessions                    → Create session
GET    /api/court/sessions/{id}               → Get state
POST   /api/court/sessions/{id}/messages      → Send message
POST   /api/court/sessions/{id}/objections/continue  → Handle objection
POST   /api/court/sessions/{id}/evidence      → Upload files
GET    /api/court/sessions/{id}/transcript    → Get history
DELETE /api/court/sessions/{id}               → End session
WS     /api/court/sessions/{id}/ws            → Real-time updates
```

---

## Key Features Implemented

| Feature | Backend | Frontend Services | App.tsx Integration |
|---------|---------|-------------------|---------------------|
| Session creation | ✅ | ✅ | ⏳ |
| Message handling | ✅ | ✅ | ⏳ |
| Objection detection | ✅ | ✅ | ⏳ |
| Evidence upload | ✅ | ✅ | ⏳ |
| Evidence gating | ✅ | ✅ | ⏳ |
| WebSocket comms | ✅ | ✅ | ⏳ |
| Session persistence | ✅ | ✅ | ⏳ |
| Auto-reconnection | ✅ | ✅ | ⏳ |
| Error handling | ✅ | ✅ | ⏳ |

---

## Testing the Full Flow

### Manual Test (After App.tsx Integration)

```
1. Open http://localhost:5173
2. Click "Start Hearing"
3. See Judge's REAL opening (from Gemini AI)
4. Type a plaintiff statement
5. See objection evaluation (real AI)
6. Try to upload evidence (blocked - judge must request)
7. Continue until Judge says "Please provide evidence..."
8. Upload evidence (succeeds)
9. See Judge process evidence
10. Complete hearing and see real performance metrics
```

### Expected vs Actual

| Stage | Old (Mock) | New (Real) |
|-------|-----------|-----------|
| Judge opening | "Good morning... (hardcoded)" | AI response from Gemini (2-3 seconds) |
| Send message | Instant with hardcoded response | Immediate send, AI response in 5-10 seconds |
| Objection | Random decision | AI evaluation of statement |
| Evidence | Hardcoded 6 files | User uploads real files |
| Gating | No checking | Enforced - upload blocked until request |
| Performance | Hardcoded "78%" | Calculated from transcript |

---

## Environment Files

### Backend: `.env` (or export vars)
```
GEMINI_API_KEY=AIzaSy...  # Required
DATABASE_URL=sqlite:///./moot_court.db
BASE_DATA_DIR=./data
```

### Frontend: `front_end_3/.env.local`
```
VITE_API_BASE_URL=http://localhost:8000/api
VITE_WS_BASE_URL=ws://localhost:8000/api
```

---

## Troubleshooting

### Backend won't start
```bash
# Check Python version
python --version  # Need 3.9+

# Check dependencies
pip install -r requirements.txt

# Check GEMINI_API_KEY
echo $GEMINI_API_KEY  # Should print a key

# Check port 8000 is free
lsof -i :8000
```

### WebSocket not connecting
- Check backend is running: `curl http://localhost:8000/api/health`
- Check CORS: Browser console should show connection attempt
- Check firewall: May need to allow WebSocket on port 8000

### Messages not appearing
- Check WebSocket is connected: Browser DevTools → Network
- Check console for errors: Browser → F12 → Console
- Check backend logs: Look for "WebSocket" messages

---

## Success Indicators

✅ **Backend Ready When:**
- `python -m backend.main` starts without errors
- `curl http://localhost:8000/api/health` returns `{"status": "healthy"}`
- `curl` to create session returns session_id

✅ **Frontend Services Ready When:**
- TypeScript compiles without errors
- No red squiggles in `useCourtSession.ts`
- Can import types: `import type { ... } from './types/court'`

✅ **Full Integration Ready When:**
- App.tsx uses `useCourtSession` hook
- Real Judge opening appears (not hardcoded text)
- Messages appear via WebSocket (5-10s delays)
- No more `setTimeout` delays in frontend code

---

## Code Statistics

| Layer | Files | Lines | Purpose |
|-------|-------|-------|---------|
| Backend | 6 | 1,350 | REST API, WebSocket, Services |
| Frontend Services | 5 | 980 | API client, hooks, WebSocket |
| Documentation | 4 | 1,500+ | Integration guides, references |
| **Total** | **15** | **~2,330** | Complete integration layer |

---

## What's Next After Integration

**Phase 2 - Educational Features:**
- Display feedback after each plaintiff statement
- Show strengths and improvements
- Interactive tips during hearing

**Phase 3 - Persistence & Recovery:**
- Save sessions across page refreshes
- Resume interrupted hearings
- View past hearing transcripts

**Phase 4 - Analytics:**
- Performance over time
- Strength/weakness tracking
- Comparison with case outcomes

---

## Questions?

Check these in order:
1. `INTEGRATION_GUIDE.md` - Overview and architecture
2. `APP_MIGRATION_STEPS.md` - Detailed migration steps
3. `IMPLEMENTATION_STATUS.md` - Complete status report
4. Backend logs: `python -m backend.main 2>&1 | grep ERROR`
5. Browser console: F12 → Console tab
6. Network tab: F12 → Network tab (check API calls)

---

**Ready to integrate?** → See `APP_MIGRATION_STEPS.md`

**Want full reference?** → See `INTEGRATION_GUIDE.md`

**Need status report?** → See `IMPLEMENTATION_STATUS.md`
