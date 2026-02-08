# App.tsx Migration to API Integration

## Summary

This document provides step-by-step instructions to migrate `front_end_3/src/App.tsx` from 100% mock data to using the real backend API via the new `useCourtSession` hook.

**Current App.tsx**: 833 lines of code with:
- Hardcoded judge questions array (lines 68-74)
- Hardcoded defendant responses array (lines 77-83)
- Hardcoded evidence files (lines 400-450 area)
- `setTimeout` delays simulating AI responses (90+ instances)
- Mock performance data (lines 173-178)

## Migration Strategy

### Approach: Minimal Refactoring

We keep ALL existing UI components and structure intact. Only replace:
1. The hardcoded data arrays → removed (comes from server)
2. The `setMessages` with setTimeout → replaced with `useCourtSession` hook
3. The `handleStartHearing` function → simplified
4. The evidence upload logic → use API instead of mock

### Expected Outcome

- Same UI and user experience
- Real AI responses instead of hardcoded text
- Real evidence upload instead of mock
- Real objection detection instead of random
- Real performance metrics calculated from transcript

## Migration Steps

### Step 1: Import the Hook (Line 1)

**BEFORE:**
```typescript
import { useState } from 'react';
```

**AFTER:**
```typescript
import { useState } from 'react';
import { useCourtSession } from './hooks/useCourtSession';
```

### Step 2: Remove Type Exports & Use Hook Types (Lines 11-44)

**BEFORE:**
```typescript
export type HearingStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface ObjectionType {
  id: string;
  name: string;
  description: string;
}

export interface Message {
  speaker: 'judge' | 'plaintiff' | 'defendant' | 'clerk' | 'system';
  text: string;
  // ... more fields
}

export interface EvidenceFile {
  name: string;
  type: string;
  size: number;
}
```

**AFTER:**
```typescript
import type { ChatMessage, ObjectionDecision, HearingStep, EvidenceFile } from './types/court';

// Keep these for backward compatibility with child components
export type { HearingStep, ObjectionDecision, EvidenceFile };
export interface Message extends ChatMessage {
  // Extends the type for backward compat
}
export interface ObjectionType {
  id: string;
  name: string;
  description: string;
}
```

### Step 3: Initialize Hook in App Function (Line ~46)

**BEFORE:**
```typescript
export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'overview' | 'hearing' | 'feedback'>('overview');
  const [currentStep, setCurrentStep] = useState<HearingStep>(1);
  const [showObjectionModal, setShowObjectionModal] = useState(false);
  // ... 10+ more useState calls
  const [messages, setMessages] = useState<Message[]>([]);
  // ... more state
```

**AFTER:**
```typescript
export default function App() {
  // Screen state
  const [currentScreen, setCurrentScreen] = useState<'overview' | 'hearing' | 'feedback'>('overview');
  const [currentStep, setCurrentStep] = useState<HearingStep>(1);
  const [showObjectionModal, setShowObjectionModal] = useState(false);
  // ... keep all other useState calls for UI state

  // Initialize hook with real user/case IDs
  // TODO: Get these from context or props in production
  const court = useCourtSession('user_1', 1);

  // Use hook's messages instead of local state
  // Remove: const [messages, setMessages] = useState<Message[]>([]);

  // Keep other UI state variables for modals, etc.
  const [lastObjection, setLastObjection] = useState<ObjectionDecision | null>(null);
  // ... keep rest
```

### Step 4: Replace handleStartHearing (Line ~85-120)

**BEFORE:**
```typescript
const handleStartHearing = () => {
  setCurrentScreen('hearing');
  setCurrentStep(1);
  setMessages([]);

  // Add messages one by one like a chatbot
  setTimeout(() => {
    setMessages([{
      speaker: 'system',
      text: 'Both parties approach the bench.'
    }]);
  }, 500);

  setTimeout(() => {
    setMessages(prev => [...prev, {
      speaker: 'clerk',
      text: 'Case number SC-12345: J. Renter versus L. Landlord. Please come forward.'
    }]);
  }, 1500);

  // ... 8 more setTimeout blocks
};
```

**AFTER:**
```typescript
const handleStartHearing = async () => {
  setCurrentScreen('hearing');
  setCurrentStep(1);

  // Real API call - replaces all the setTimeout delays
  await court.startSession();
  // Messages automatically populated via WebSocket
};
```

**REMOVED**: Delete all lines 90-119 (30 lines of setTimeout calls)

### Step 5: Remove Hardcoded Arrays (Lines 68-83)

**DELETE THESE ENTIRELY:**
```typescript
// Judge's questions for Step 5
const judgeQuestions = [
  "Mr/Ms. Renter, did you receive a move-in inspection report...",
  "Can you describe the condition of the apartment...",
  // ... 3 more
];

// Defendant's responses during questioning
const defendantResponses = [
  "Your Honor, we conducted a move-in inspection...",
  // ... 4 more
];
```

**REASON**: These now come from the AI on the backend. The frontend will receive them via WebSocket when the backend processes turns.

### Step 6: Update Message Rendering (Line ~400-500)

**BEFORE:**
```typescript
{messages.map((msg, i) => (
  <ChatMessage
    key={i}
    speaker={msg.speaker}
    text={msg.text}
    isUser={msg.isUser}
    // ... other props
  />
))}
```

**AFTER:**
```typescript
{court.messages.map((msg) => (
  <ChatMessage
    key={msg.id}
    speaker={msg.speaker}
    text={msg.text}
    isUser={msg.isUser}
    // ... other props
  />
))}
```

### Step 7: Update handleSendMessage (Line ~200-250)

**BEFORE:**
```typescript
const handleSendMessage = (text: string) => {
  setMessages(prev => [...prev, {
    speaker: 'plaintiff',
    text
  }]);

  setTimeout(() => {
    // Simulate defendant objecting randomly
    if (Math.random() > 0.7) {
      setShowObjectionModal(true);
      // ... more logic
    }
  }, 2000);

  setTimeout(() => {
    // Add defendant/judge response
    setMessages(prev => [...prev, {
      speaker: defendantResponses[randomIndex]
    }]);
  }, 5000);
};
```

**AFTER:**
```typescript
const handleSendMessage = async (text: string) => {
  try {
    // Call API - returns immediately with objection check
    const result = await court.sendMessage(text);

    if (result.hasObjection && result.objection) {
      // Show objection modal
      setShowObjectionModal(true);
      setLastObjection(result.objection);
    }
    // AI response comes via WebSocket automatically
  } catch (error) {
    console.error('Error sending message:', error);
  }
};
```

### Step 8: Update handleRaiseObjection (Line ~186-250)

**BEFORE:**
```typescript
const handleRaiseObjection = () => {
  setShowObjectButton(false);
  setWaitingForObjectionDecision(false);

  // Randomly pick objection type
  const objectionTypes = ['Speculation', 'Hearsay', 'Irrelevant', 'Leading'];
  const randomObjection = objectionTypes[Math.floor(Math.random() * objectionTypes.length)];

  setTimeout(() => {
    setMessages(prev => [...prev, {
      speaker: 'system',
      text: '',
      isObjection: true,
      objectionType: `Plaintiff Objection - ${randomObjection}`
    }]);
  }, 500);

  // ... more setTimeout
};
```

**AFTER:**
```typescript
const handleRaiseObjection = async (rephrase: boolean, newText?: string) => {
  try {
    const objection = court.getPendingObjection();
    if (!objection) return;

    // Send objection response
    await court.handleObjection(rephrase, newText);

    setShowObjectionModal(false);
    // Response comes via WebSocket
  } catch (error) {
    console.error('Error handling objection:', error);
  }
};
```

### Step 9: Update handlePresentEvidence (Line ~400-450)

**BEFORE:**
```typescript
const handlePresentEvidence = () => {
  // Return hardcoded files
  const availableEvidenceItems = [
    { id: '1', name: 'Lease Agreement.pdf', size: 245600 },
    { id: '2', name: 'Move-out photos.zip', size: 1536000 },
    // ... 4 more hardcoded files
  ];

  setEvidenceFiles(availableEvidenceItems);
  setEvidencePresented(true);
  setEvidenceCount(6);
};
```

**AFTER:**
```typescript
const handlePresentEvidence = async (selectedFiles: File[]) => {
  try {
    // Check permission first
    if (!court.evidenceUploadAllowed) {
      alert('Judge must request evidence first');
      return;
    }

    // Upload to server
    const uploaded = await court.uploadEvidence(selectedFiles);

    // Update local state
    setEvidencePresented(true);
    setEvidenceCount(uploaded.length);
    setSubmittedEvidenceNames(uploaded.map(f => f.filename));
  } catch (error) {
    alert(`Upload failed: ${error.message}`);
  }
};
```

### Step 10: Update Performance Report (Line ~550-600)

**BEFORE:**
```typescript
// In handleNextStep when nextStep === 7:
setTimeout(() => {
  setMessages(prev => [...prev, {
    speaker: 'system',
    text: '',
    isPerformanceReport: true,
    performanceData: {
      overallScore: 78,
      strengths: 3,
      toImprove: 3,
      difficulty: 'Medium'
    }
  }]);
}, 4000);
```

**AFTER:**
```typescript
// In handleNextStep when nextStep === 7:
const generatePerformanceReport = async () => {
  try {
    if (!court.sessionId) return;

    // Get transcript from server
    const transcript = await courtSessionService.getTranscript(court.sessionId);

    // Calculate metrics from real data
    const metrics = calculateMetricsFromTranscript(transcript);

    // Add to messages
    // setMessages(prev => [...prev, {
    //   speaker: 'system',
    //   isPerformanceReport: true,
    //   performanceData: metrics
    // }]);
  } catch (error) {
    console.error('Error generating report:', error);
  }
};
```

### Step 11: Update EventHandlers Using Messages (Scattered)

**Find and replace all instances of:**
```typescript
setMessages(prev => [...prev, { speaker: ..., text: ... }])
```

**With:**
```typescript
// Messages now come from API
// Use court.messages instead of local messages state
```

## Files to Modify

1. **front_end_3/src/App.tsx**
   - Lines 1: Add import
   - Lines 11-44: Update types
   - Lines 46-66: Initialize hook
   - Lines 68-83: DELETE hardcoded arrays
   - Lines 85-120: Replace handleStartHearing
   - Lines 186-250: Replace handleRaiseObjection
   - Lines 200-250: Replace handleSendMessage
   - Lines 400-450: Replace handlePresentEvidence
   - Lines ~100+: Remove all other setTimeout calls
   - Line ~550: Update performance report logic
   - Line ~800: Simplify endSession

2. **front_end_3/src/.env.local** (CREATE)
   ```
   VITE_API_BASE_URL=http://localhost:8000/api
   VITE_WS_BASE_URL=ws://localhost:8000/api
   ```

## Expected Line Count Changes

- **Before**: 833 lines
- **After**: ~600-650 lines (removed ~200 lines of setTimeout + hardcoded data)
- **Reduction**: 30-35% smaller code

## Component Props That Change

### HearingOverview
```typescript
// No changes needed - still receives same props
<HearingOverview ... />
```

### ActiveHearing
```typescript
// Before: messages={messages}
// After: messages={court.messages}
<ActiveHearing
  messages={court.messages}
  onSendMessage={handleSendMessage}
  isLoading={court.isLoading}
  // ... other props same
/>
```

### ChatMessage
```typescript
// No changes needed - still receives same props
<ChatMessage
  speaker={msg.speaker}
  text={msg.text}
  // ... props unchanged
/>
```

### ObjectionModal
```typescript
// Before: objection from hardcoded type
// After: objection from API
<ObjectionModal
  isOpen={showObjectionModal}
  objection={lastObjection}  // Now from API
  onContinue={() => handleRaiseObjection(false)}
  onRephrase={(newText) => handleRaiseObjection(true, newText)}
/>
```

### EvidenceModal
```typescript
// Before: files hardcoded
// After: files from FormData
<EvidenceModal
  isOpen={showEvidenceModal}
  evidenceUploadAllowed={court.evidenceUploadAllowed}
  onUpload={handlePresentEvidence}
  // ... other props same
/>
```

## Testing Checklist After Migration

- [ ] Start hearing → See real Judge opening (not hardcoded)
- [ ] Send message → Message appears in UI immediately
- [ ] Wait 5-10s → Judge response appears (from WebSocket)
- [ ] Try objectionable statement → See real objection modal
- [ ] Choose rephrase → Re-send with new statement
- [ ] Try upload before judge asks → See "not allowed" error
- [ ] Continue trial until Judge requests evidence
- [ ] Upload evidence → File sent to server
- [ ] Page refresh → Session state persists
- [ ] Complete trial → See real performance metrics
- [ ] No setTimeout remaining in console logs

## Known Issues to Address

1. **Message ID**: New system uses `id` field. Ensure ChatMessage component uses it
2. **Speaker Names**: API returns "Judge" but component expects "judge" (lowercase)
   - Fix in `mapSpeakerName()` function in hook
3. **Feedback Display**: PlaintiffFeedback now separate from Message
   - May need to update ChatMessage component to show feedback
4. **Evidence Files**: Now stored on server with different structure
   - Update evidence list display logic

## Rollback Plan

If integration breaks:
1. Keep original App.tsx as App.tsx.backup
2. Revert imports
3. Restore hardcoded arrays
4. Restore setTimeout logic
5. Use `git checkout src/App.tsx` to fully revert

## Next Steps After App.tsx Migration

1. **Test all UI flows** - Hearing steps 1-7
2. **Test error scenarios** - Network errors, timeouts
3. **Optimize WebSocket** - Add reconnection UI
4. **Add analytics** - Track user performance
5. **Phase 2 features** - Educational feedback display
