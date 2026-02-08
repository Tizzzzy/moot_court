# Court Simulator Backend-Frontend Integration Guide

## Overview

This document describes the integration of the court simulator backend with the React frontend (`front_end_3`). The integration consists of:

1. **Backend**: FastAPI REST API + WebSocket layer wrapping the court simulator
2. **Frontend**: React services + hooks replacing hardcoded mock data with real API calls

## Phase 1: MVP Implementation (Complete)

### Backend Files Created/Modified

**Created:**
- `backend/models/case.py` - Added `CourtSessionModel` for database persistence
- `backend/services/court_session_service.py` - Wraps `CourtSession`, manages session lifecycle
- `backend/services/evidence_service.py` - Handles evidence file uploads
- `backend/routers/court_simulator.py` - REST API endpoints + WebSocket
- `backend/schemas/court_schemas.py` - Pydantic request/response models
- `backend/websockets/court_ws.py` - WebSocket connection manager

**Modified:**
- `backend/main.py` - Added court simulator router

### Frontend Files Created

**Created:**
- `front_end_3/src/types/court.ts` - TypeScript type definitions
- `front_end_3/src/services/api.ts` - Base HTTP client
- `front_end_3/src/services/courtSessionService.ts` - Court API wrapper
- `front_end_3/src/services/websocketService.ts` - WebSocket manager
- `front_end_3/src/hooks/useCourtSession.ts` - React hook for session management

## How to Use the Integration

### 1. Starting a Session

Instead of:
```typescript
// OLD: Hardcoded
const handleStartHearing = () => {
  setCurrentScreen('hearing');
  setMessages([...hardcodedMessages]);
};
```

Use:
```typescript
// NEW: Real API
const { startSession, messages, sessionId } = useCourtSession(userId, caseId);

const handleStartHearing = async () => {
  await startSession();
  setCurrentScreen('hearing');
};
```

### 2. Sending Messages

Instead of:
```typescript
// OLD: Mock delay
const handleSendMessage = (text: string) => {
  setMessages(prev => [...prev, { speaker: 'plaintiff', text }]);
  setTimeout(() => {
    setMessages(prev => [...prev, { speaker: 'judge', text: 'Your response...' }]);
  }, 3000);
};
```

Use:
```typescript
// NEW: Real API + WebSocket
const result = await sendMessage(userMessage);
if (result.hasObjection) {
  // Show objection modal
} else {
  // Messages will appear via WebSocket
}
```

### 3. Evidence Upload

Instead of:
```typescript
// OLD: Mock
const handlePresentEvidence = () => {
  setEvidencePresented(true);
  setEvidenceFiles([...hardcodedFiles]);
};
```

Use:
```typescript
// NEW: Real API
try {
  const uploaded = await uploadEvidence(files);
  // Files stored on server
} catch (error) {
  console.error(error.message); // "Evidence upload not currently allowed"
}
```

## REST API Endpoints

### Session Management

**POST /api/court/sessions** - Create session
```typescript
Request: { user_id: string, case_id: number }
Response: {
  session_id: string,
  opening_message: { role, dialogue, inner_thought?, evidence_request? }
}
```

**GET /api/court/sessions/{session_id}** - Get session state
```typescript
Response: {
  session_id: string,
  current_speaker: string,
  turn_number: number,
  evidence_upload_allowed: boolean,
  history: { role, content, turn }[]
}
```

**POST /api/court/sessions/{session_id}/messages** - Send plaintiff message
```typescript
Request: { message: string }
Response: {
  status: "success" | "objection_raised",
  objection?: { has_objection, objection_type, legal_reasoning, ... },
  feedback?: { positive, improvements[] }
}
Note: AI responses come via WebSocket
```

**POST /api/court/sessions/{session_id}/objections/continue** - After objection
```typescript
Request: { use_original: boolean }
Response: { status: "success" }
```

**POST /api/court/sessions/{session_id}/evidence** - Upload evidence
```typescript
Request: FormData with files[]
Response: {
  uploaded_files: [
    { filename, path, size_bytes, mime_type, upload_time }
  ]
}
```

**GET /api/court/sessions/{session_id}/transcript** - Get transcript
```typescript
Response: {
  history: { role, content, turn }[],
  evidence_count: number
}
```

**DELETE /api/court/sessions/{session_id}** - End session
```typescript
Response: { status: "completed" }
```

### WebSocket Endpoint

**WS /api/court/sessions/{session_id}/ws** - Real-time updates

Messages:
```typescript
{ type: "connected", data: { session_id } }
{ type: "response", data: { role, dialogue, inner_thought?, evidence_request? } }
{ type: "next_speaker", data: { speaker } }
{ type: "evidence_request", data: { requesting, types[] } }
{ type: "error", data: { message } }
```

## Integration Checklist for App.tsx

The following changes are needed to fully integrate the API:

### 1. Import the Hook (Line ~1)
```typescript
import { useCourtSession } from './hooks/useCourtSession';
```

### 2. Initialize Hook (Line ~46, in App function)
```typescript
const {
  startSession,
  sendMessage,
  uploadEvidence,
  endSession,
  messages,
  sessionId,
  isLoading,
  error,
  evidenceUploadAllowed,
  wsConnected,
} = useCourtSession('user_1', 1); // Replace with real user/case IDs
```

### 3. Replace `handleStartHearing` (Line ~85)
OLD: Full of setTimeout calls (~90-130)
NEW:
```typescript
const handleStartHearing = async () => {
  setCurrentScreen('hearing');
  setCurrentStep(1);
  await startSession();
};
```

### 4. Replace `handleSendMessage` (Line ~200-220)
OLD: Manually adds both messages with delays
NEW:
```typescript
const handleSendMessage = async (text: string) => {
  try {
    const result = await sendMessage(text);
    if (result.hasObjection) {
      setShowObjectionModal(true);
      setLastObjection({
        id: 'objection',
        name: result.objection.objection_type,
        description: result.objection.legal_reasoning,
      });
    }
  } catch (error) {
    // Error handling
  }
};
```

### 5. Remove Hardcoded Message Lists (Lines ~68-83)
DELETE:
- `judgeQuestions` array
- `defendantResponses` array

These come from the server now.

### 6. Replace `setMessages` (Remove all direct array mutations)
OLD: `setMessages([...messages, newMessage])`
NEW: Use `useCourtSession` hook's `messages` state instead

### 7. Evidence Upload (Line ~400-450)
OLD: Returns hardcoded file list
NEW:
```typescript
const handlePresentEvidence = async () => {
  if (!evidenceUploadAllowed) {
    setError('Judge must request evidence first');
    return;
  }
  try {
    const uploaded = await uploadEvidence(files);
    setSubmittedEvidenceNames(uploaded.map(f => f.filename));
  } catch (error) {
    setError(error.message);
  }
};
```

### 8. Replace Hardcoded Performance Report (Line ~550-600)
OLD: Returns hardcoded metrics
NEW:
```typescript
const getPerformanceReport = async () => {
  const transcript = await courtSessionService.getTranscript(sessionId);
  // Generate metrics from real transcript data
};
```

### 9. End Session Cleanup (Line ~800)
OLD: Just sets state
NEW:
```typescript
const handleEndSession = async () => {
  await endSession();
  setCurrentScreen('overview');
};
```

## Environment Variables

Create `.env.local` in `front_end/front_end_3/`:
```
VITE_API_BASE_URL=http://localhost:8000/api
VITE_WS_BASE_URL=ws://localhost:8000/api
```

## Running the Integration

### 1. Start Backend
```bash
cd C:/Users/super/OneDrive/Desk_top/courtAI/moot_court
python -m backend.main
# Running on http://0.0.0.0:8000
```

### 2. Start Frontend
```bash
cd front_end/front_end_3
npm install  # If needed
npm run dev
# Running on http://localhost:5173
```

### 3. Test Flow

1. Open http://localhost:5173
2. Click "Start Hearing"
3. Should see Judge's real opening (from Gemini API)
4. Send a message
5. Should see AI response within 10 seconds (via WebSocket)
6. Try to upload evidence without Judge's request
7. Should see error: "Judge must request evidence first"
8. Continue trial until Judge says "Please provide..."
9. Upload should succeed

## What Changed

### Key Differences from Mock

| Feature | Old (Mock) | New (Real) |
|---------|-----------|-----------|
| Judge opening | Hardcoded string | Gemini AI response |
| Messages | Immediate with setTimeout | WebSocket push (5-10s) |
| Evidence list | Hardcoded 6 items | Real file upload |
| Evidence gating | No checking | Enforced by backend |
| Objections | Hardcoded | AI evaluation |
| Transcript | Mock data | Real conversation history |
| Performance report | Hardcoded metrics | Calculated from transcript |

### Performance Impact

- **Initial load**: +500ms (API call to create session)
- **Message sending**: +5-10s (Gemini API processing)
- **Evidence upload**: +1-2s (File transfer + AI processing)
- **Reconnection**: Auto-retry with exponential backoff (max 5 attempts)

## Troubleshooting

### WebSocket Not Connecting
- Check if backend is running on port 8000
- Check browser console for connection errors
- Verify CORS is enabled on backend
- Check firewall rules

### API Calls Failing
- Verify `VITE_API_BASE_URL` env var is correct
- Check backend error logs
- Test with curl: `curl http://localhost:8000/api/health`

### Objections Not Working
- Check backend log for Gemini API errors
- Verify GEMINI_API_KEY is set in environment
- Try a clearly objectionable statement: "Everyone knows he's bad"

### Evidence Upload Blocked
- Judge must explicitly request evidence first
- Check `evidenceUploadAllowed` state
- Wait for "Please provide evidence..." message from Judge

## Next Steps

After MVP is working:

1. **Phase 2**: Implement educational feedback display
2. **Phase 3**: Session persistence across page refresh
3. **Phase 4**: Error recovery and reconnection UI
4. **Phase 5**: Performance analytics dashboard

## Contact

For issues with integration:
1. Check backend logs: `tail -f /logs/backend.log`
2. Check frontend console: F12 → Console
3. Test API directly: `curl -X POST http://localhost:8000/api/court/sessions ...`
