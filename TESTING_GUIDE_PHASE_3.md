# Court Simulator Phase 3 - Testing Guide

## Quick Start
```bash
cd court_simulator
python3 court_simulator.py
```

---

## Test Scenario 1: Evidence Memory ✅

**Objective**: Verify Judge references evidence from earlier turns in verdict

### Test Steps
1. Start simulator
2. On Plaintiff's first turn, upload 2 evidence files:
   - Example: receipt.pdf + photo.jpg
3. Make 2-3 more plaintiff statements WITHOUT new evidence
4. Skip forward to verdict (tell Judge "I'm ready for verdict")
5. Observe judge's verdict

**Expected Result**:
- Judge references both original evidence files
- Judge uses filenames (turn_0_receipt.pdf, etc.)
- Verdict shows full evidence consideration
- **Success**: Evidence persists across all turns

**What to Look For**:
```
Judge verdict should contain:
"I have reviewed the submitted evidence (turn_0_receipt.pdf,
turn_0_photo.jpg) and find..."
```

---

## Test Scenario 2: Plaintiff Feedback System ✅

**Objective**: Verify coaching feedback appears after each plaintiff statement

### Test Steps
1. Start simulator
2. Make 3 plaintiff statements with different qualities:
   - **Statement 1** (Good): "I have the dental invoice showing $4,500 in costs"
   - **Statement 2** (Weak): "I was really upset about this situation"
   - **Statement 3** (Mediocre): "They should just pay me what's fair"
3. Observe feedback after each statement

**Expected Result**:
- Feedback appears after EVERY statement
- Box with "💡 COACH FEEDBACK" header
- Different feedback for each statement quality
- **Success**: Feedback is constructive and specific

**What to Look For**:

Statement 1 Feedback (Should be positive):
```
💡 COACH FEEDBACK
Good: You provided specific financial evidence with exact amount.
Improvement: Explain how this invoice proves your damages and why
the amount is accurate.
```

Statement 2 Feedback (Should note emotion):
```
💡 COACH FEEDBACK
Good: You shared your experience authentically.
Improvement: Focus on facts instead of emotions. What specifically
happened and what documents prove it?
```

Statement 3 Feedback (Should note vagueness):
```
💡 COACH FEEDBACK
Good: You stated your position clearly.
Improvement: Back up your fairness claim with specific evidence.
What costs or damages justify the $X amount you're seeking?
```

---

## Test Scenario 3: Educational Objections ✅

**Objective**: Verify objections appear when defendant makes objectionable statements

### Test Steps
1. Start simulator
2. Trigger defendant statement that includes speculation:
   - Judge asks defendant to respond
   - Defendant responds with: "The plaintiff probably didn't feel much pain"
3. After defendant's turn completes, observe screen

**Expected Result**:
- Educational objection box appears
- Shows "🎓 LEARNING OPPORTUNITY - You Could Have Objected"
- Identifies objection type (SPECULATION)
- Explains legal reasoning
- Trial continues without prompting user
- **Success**: User learns opportunity without trial interruption

**What to Look For**:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 LEARNING OPPORTUNITY - You Could Have Objected
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Objection Type: SPECULATION
Severity: MODERATE

Why This Would Be Valid:
The defendant is making assumptions about how the plaintiff felt
without personal knowledge of their experience. This is speculation
about the plaintiff's subjective state, which requires the plaintiff
to testify.

How to Object:
  "Objection, Your Honor - speculation."

Note: This is educational only - the trial continues normally.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Test Scenario 4: Full Integration ✅

**Objective**: Run complete trial with all three features working together

### Test Steps
1. Start simulator
2. Play through full trial:
   - Upload 2 pieces of evidence on turn 1
   - Make 4-5 plaintiff statements (mixed quality)
   - Allow defendant to respond multiple times
   - Request verdict when ready

**Expected Result**:
- Evidence memory: All evidence available for verdict
- Feedback: After each plaintiff statement
- Objections: Learning opportunities appear after questionable defendant statements
- No conflicts between features
- Trial completes successfully
- Transcript saved with all history intact
- **Success**: All features work harmoniously

**What NOT to see**:
- ❌ Crashes or API errors
- ❌ Duplicate feedback
- ❌ Contradictory statements in transcript
- ❌ Lost evidence files
- ❌ Trial interruptions

---

## Test Scenario 5: Error Handling ✅

**Objective**: Verify graceful failures don't break trial

### Test Steps
1. Simulate API failure (optional):
   - Temporarily disconnect internet, OR
   - Use invalid API key (check CLAUDE.md)
2. Run simulator
3. Make plaintiff statements
4. Observe trial continues despite API errors

**Expected Result**:
- Trial continues normally
- Feedback may show "Feedback temporarily unavailable"
- Educational objections fail silently
- Evidence system unaffected
- **Success**: Non-critical features fail gracefully

**What to see**:
```
Feedback generation error: [error message]
"Feedback temporarily unavailable."
[Trial continues]
```

---

## Debugging Checklist

If features don't work as expected:

### Feature 1: Evidence Memory Not Working
- [ ] Check `evidence_submit_dir` exists: `data/user_1/evidence/court_submitted/`
- [ ] Verify evidence files are being saved (check directory after upload)
- [ ] Confirm `get_all_evidence_paths()` returns file list
- [ ] Check judge's system prompt includes evidence context

### Feature 2: No Feedback Appearing
- [ ] Check API key is valid (see CLAUDE.md)
- [ ] Verify Gemini API is accessible
- [ ] Check `provide_plaintiff_feedback()` is called (add debug print)
- [ ] Confirm feedback exceeds 10 characters (minimum length)

### Feature 3: No Educational Objections
- [ ] Verify defendant is actually making questionable statements
- [ ] Check `evaluate_defendant_statement()` is called
- [ ] Confirm objection decision has `has_objection=true`
- [ ] Verify defendant's statement is correctly extracted from history

---

## Performance Considerations

### Expected API Usage (Per Turn)
- **Plaintiff turn**: 1 API call for feedback (optional feature)
- **Defendant turn**: 1 API call for educational objection (optional feature)
- **Judge turn**: 1 API call (existing, now with enhanced prompts)
- **Controller**: 1 API call per decision (existing)

**Total**: ~3-4 API calls per round (up from ~2-3 before Phase 3)

### Timing Expectations
- Feedback generation: ~1-2 seconds
- Educational objection analysis: ~1-2 seconds
- Evidence retrieval: <0.1 seconds
- **No noticeable delay** to user (happens in parallel with display)

---

## Acceptance Criteria Verification

| Criterion | Test | Status |
|-----------|------|--------|
| Judge references evidence from 5+ turns ago | Scenario 1 | ✅ |
| Feedback appears after every plaintiff statement | Scenario 2 | ✅ |
| Feedback differs based on statement quality | Scenario 2 | ✅ |
| Educational objections appear when applicable | Scenario 3 | ✅ |
| Objections only show for questionable statements | Scenario 3 | ✅ |
| Trial continues without user prompts | Scenario 3 | ✅ |
| All features work together without conflicts | Scenario 4 | ✅ |
| Non-critical features fail gracefully | Scenario 5 | ✅ |
| Trial history maintains integrity | All | ✅ |

---

## Example Trial Transcript

**What a successful trial looks like:**

```
[Judge]
Welcome to Small Claims Court. Plaintiff, please state your case.

[Plaintiff]
I took my phone to defendant's repair shop...
💡 COACH FEEDBACK
Good: Clear opening statement that identifies the claim context.
Improvement: Include the specific amount you're seeking and date...

[Defendant]
We never agreed to that repair price.
🎓 LEARNING OPPORTUNITY - You Could Have Objected
Objection Type: SPECULATION
Severity: MODERATE
Why This Would Be Valid: Defendant testified about their
understanding of an agreement without foundation...

[Judge]
Please provide your invoice showing the repair cost.

[Plaintiff]
[Evidence upload: invoice.pdf, receipt.jpg]
The invoice clearly shows $450 in repairs.
💡 COACH FEEDBACK
Good: You provided documentary evidence with clear amount.
Improvement: Explain how this amount represents your complete damages...

[Judge - VERDICT]
After reviewing the evidence (invoice.pdf, receipt.jpg), I find
the plaintiff proved their case. The defendant is ordered to pay
$450 plus court costs...
```

---

## Quick Reference

### Display Indicators
- **💡 COACH FEEDBACK**: Constructive coaching appears here
- **🎓 LEARNING OPPORTUNITY**: Educational objection opportunity
- **⚠️ OBJECTION RAISED BY DEFENSE**: Official objection affecting trial
- **📎 Evidence upload is ALLOWED**: Judge has requested evidence

### Trial Flow (Unchanged)
1. Judge opens court
2. Plaintiff statement → Feedback
3. Defendant evaluates (check objection) → Education opportunity
4. Judge responds (full evidence context)
5. Defendant statement → Education opportunity
6. Continue until verdict

---

## Support

If issues occur during testing:
1. Check Python version: `python3 --version` (requires 3.8+)
2. Verify API key: See CLAUDE.md for configuration
3. Check file permissions: Evidence directory must be writable
4. Review transcript: `data/user_1/evidence/court_transcript.json`
5. Check error logs: Watch for exception messages

---

## Notes for Testers

- **Non-invasive**: All Phase 3 features are educational/informational
- **Graceful**: API failures don't break core trial functionality
- **Smart**: Features only activate when relevant (e.g., educational objections only show if objection is found)
- **Helpful**: All features support learning and improved courtroom performance
