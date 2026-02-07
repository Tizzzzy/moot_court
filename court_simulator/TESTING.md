# Enhanced Court Simulator - Testing Guide

## Overview

This document outlines testing procedures for the enhanced court simulator with:
- Objection system (defendant evaluates statements)
- Interactive rephrasing (plaintiff can rephrase objectionable statements)
- Evidence gating (uploads only when Judge requests)
- Multi-file evidence support
- Intelligent Judge responses

## Environment Setup

### Prerequisites

```bash
# Activate conda environment (if using conda)
conda activate moot_court

# Verify Python 3.7+
python3 --version

# Verify dependencies installed
python3 -c "import google, pydantic; print('✓ Dependencies installed')"
```

### Configuration

- Ensure `api_key.txt` contains your Gemini API key, OR
- Set environment variable: `export GEMINI_API_KEY="your_key_here"`
- Case data file: `data/user_1/ocr_output/extracted_data.json`
- Output transcript: `court_simulator/cli_trial_transcript.json`

## Running the Simulator

```bash
cd /path/to/moot_court
python3 court_simulator/court_simulator.py
```

## Test Scenarios

### Test 1: Evidence Gating (CRITICAL)

**Objective**: Verify evidence uploads are blocked until Judge explicitly requests them

**Steps**:
1. Start simulator
2. Wait for Judge to open court
3. When prompted for plaintiff argument, try to upload evidence:
   - Answer 'y' when asked "Upload evidence now?"
   - Provide a file path
   - **Expected**: System should raise ERROR: "Evidence upload not allowed - Judge must request evidence first"

4. Continue with arguments (NO evidence upload)
5. Eventually Judge should ask: "Please provide the dental invoice..." (or similar)
6. **Expected**: "📎 Evidence upload is ALLOWED (Judge requested evidence)" message appears
7. Now try uploading evidence again:
   - Answer 'y' when asked "Upload evidence now?"
   - Provide file path(s)
   - **Expected**: Evidence uploads successfully, message shows "✓ Added: [filename]"

8. After upload, verify flag resets:
   - Judge processes evidence
   - Your next turn, NO evidence upload message should appear
   - Attempting to upload should fail with same permission error

**Pass Criteria**:
✓ Evidence blocked before Judge request
✓ Evidence allowed after Judge request
✓ Flag resets after upload
✓ Multiple uploads work in same session

---

### Test 2: Objection with Rephrasing (CRITICAL)

**Objective**: Verify objection evaluation and rephrasing flow

**Steps**:
1. Start simulator
2. When your turn arrives, provide a statement that invokes objection:
   - **Good test case**: "My friend told me they saw the restaurant owner putting expired ingredients in food"
   - **Why it triggers**: Contains HEARSAY (friend told me) + SPECULATION (guessing about owner's intent)

3. **Expected Response**:
   ```
   ⚠️  OBJECTION RAISED BY DEFENSE
   ======================================================================
   Type: Hearsay
   Severity: MODERATE

   Legal Reasoning:
   [Judge's explanation of why this is hearsay]

   Suggested Rephrasing:
   "I personally observed spoiled ingredients being used when I dined there on [date]"

   Your Options:
   [1] Rephrase your statement (original will be removed from record)
   [2] Continue with current statement (objection will be noted)
   ```

4. **Test Rephrasing (Choice 1)**:
   - Enter choice: `1`
   - Enter rephrased statement: `"I personally observed the chicken had small bones on May 30, 2024"`
   - **Expected**: "✓ Statement rephrased (original removed from record)"
   - Verify in transcript: Original hearsay statement is NOT in history
   - Verify in transcript: Only rephrased statement appears

5. **Verify Rephrased Statement Check**:
   - If rephrased statement is acceptable → "✓ Rephrased statement accepted"
   - If still has issues → Warn user and proceed anyway
   - **Expected**: Turn advances, history updated with rephrased statement only

6. **Test Continue Anyway (Choice 2)** - In another attempt:
   - Make objectionable statement again
   - Enter choice: `2`
   - **Expected**: "→ Continuing with original statement (objection noted)"
   - Verify in transcript:
     - Objection record appears: "OBJECTION: [Type]. [Legal Reasoning]"
     - Original statement appears after objection

**Pass Criteria**:
✓ Objection system evaluates statements
✓ Legal reasoning provided with objection
✓ Suggested rephrasing provided
✓ Rephrasing removes original from history
✓ Continue option records objection and statement together
✓ No duplicate statements in final transcript

---

### Test 3: Objection - Continue Anyway (IMPORTANT)

**Objective**: Verify objections can be overridden with proper recording

**Steps**:
1. Make a clear objectionable statement
2. When objection appears, choose [2] Continue with current statement
3. **Expected**: Objection and statement both added to history in order
4. Check transcript:
   ```json
   {"role": "Defendant", "content": "OBJECTION: Hearsay. ..."},
   {"role": "Plaintiff", "content": "My friend told me..."}
   ```

**Pass Criteria**:
✓ Both objection and statement in history
✓ Objection appears before statement
✓ Full legal reasoning preserved

---

### Test 4: Multiple Evidence Files (IMPORTANT)

**Objective**: Verify multiple files can be uploaded per request

**Test Files Required**:
- Create test files:
  ```bash
  echo "Invoice content" > test_invoice.pdf
  echo "[PNG binary]" > test_photo.png
  ```

**Steps**:
1. Wait for Judge to request evidence
2. When evidence upload is allowed:
   - Upload first file: `test_invoice.pdf`
   - When prompted for next file, upload second file: `test_photo.png`
   - Type `done` to finish

3. **Expected**:
   ```
   --- EVIDENCE UPLOAD ---
   You may upload multiple files (images or PDFs).
   Enter file path (or 'done' to finish): test_invoice.pdf
   ✓ Added: test_invoice.pdf
   Enter file path (or 'done' to finish): test_photo.png
   ✓ Added: test_photo.png
   Enter file path (or 'done' to finish): done
   ```

4. Judge processes evidence:
   - **Expected**: Judge reads both file names and acknowledges
   - Check response includes comments on multiple pieces of evidence

5. Verify in next AI turn:
   - Evidence buffer should be cleared
   - Only current speaker's response appears

**Pass Criteria**:
✓ Multiple files uploaded in single session
✓ All files listed in Judge's evidence context
✓ Evidence buffer cleared after AI processing
✓ Transcript shows all evidence interactions

---

### Test 5: Complete Trial Flow (COMPREHENSIVE)

**Objective**: Verify entire trial completes with all features working

**Steps**:

1. **Opening**:
   - Judge opens court (AI turn)
   - Judge outlines case
   - **Expected**: Judge sets scene and calls on plaintiff

2. **Plaintiff Argument (No Evidence)**:
   - You provide opening argument (2-3 sentences)
   - No objection expected
   - **Expected**: Statement accepted, turn advances

3. **Defendant Response**:
   - Defendant responds to your opening
   - **Expected**: Defense denies liability, points out gaps

4. **Judge Questions**:
   - Judge asks clarifying questions
   - Could include evidence request here (Test evidence gating)
   - **Expected**: 2-3 sentence question with clear direction

5. **Second Plaintiff Turn** (With Potential Objection):
   - Provide answer to Judge's question
   - Make it potentially objectionable (e.g., include hearsay)
   - **Expected**: Objection system triggers if appropriate

6. **Handle Objection**:
   - Rephrase statement (removes original)
   - **Expected**: Cleaner statement enters history

7. **Evidence Request and Upload**:
   - Judge should request evidence at some point
   - Upload test evidence file
   - **Expected**: Judge acknowledges and comments on evidence

8. **Continued Arguments**:
   - Defendant rebuts your evidence
   - Judge asks follow-up questions
   - You respond with clear, factual statements

9. **Verdict**:
   - When sufficient info, Judge declares verdict
   - **Expected**: Judge rules with specific dollar amount
   - Verdict should reference evidence and arguments presented

10. **Transcript Verification**:
    - File saved to `court_simulator/cli_trial_transcript.json`
    - Open with: `python3 -c "import json; t=json.load(open('court_simulator/cli_trial_transcript.json')); print(json.dumps(t, indent=2))"`
    - **Expected**:
      - No duplicate statements
      - Rephrased statements don't have originals
      - All roles represented: Judge, Defendant, Plaintiff
      - Verdict at end with dollar amount
      - Evidence interactions recorded

**Pass Criteria**:
✓ Trial completes to verdict
✓ All turns processed in logical order
✓ Objections and rephrasing handled correctly
✓ Evidence gating enforced
✓ Evidence uploads recorded properly
✓ Judge reaches verdict with dollar amount
✓ Transcript is valid JSON with complete history

---

## Debugging

### Check Objection Decision

When an objection appears, note:
- **has_objection**: true/false
- **objection_type**: Specific type (Hearsay, Speculation, etc.)
- **legal_reasoning**: Judge's explanation
- **suggested_rephrasing**: Optional rephrase suggestion
- **severity**: minor/moderate/severe

### Check Evidence Status

At any plaintiff turn, look for:
- "📎 Evidence upload is ALLOWED" = can upload
- No message = cannot upload (try anyway to see error)

### Check Transcript Structure

```json
{
  "role": "Judge|Defendant|Plaintiff",
  "content": "The actual words spoken",
  "turn": 1
}
```

Each entry should have these 3 fields. Verify:
- No "data" or "mime_type" in main history
- Evidence metadata only in evidence_buffer
- One statement per plaintiff turn (original removed if rephrased)

### API Errors

If you see "System Error: Unable to generate response":
1. Verify API key is valid
2. Check API quota
3. Verify internet connection
4. Try again (may be temporary)

---

## Expected Behaviors Summary

| Feature | Before Implementation | After Implementation |
|---------|----------------------|----------------------|
| Evidence Upload | Always allowed | Blocked until Judge requests |
| Objections | Not evaluated | Defendant evaluates each statement |
| Rephrasing | N/A | Original removed from history |
| Evidence Files | Single file | Multiple files per request |
| Judge Prompts | General questions | Evidence requests detected |
| Transcript | Simple history | Clean history with proper objection handling |

---

## Quick Test Checklist

Use this checklist for rapid testing:

- [ ] Test 1: Evidence gating works (blocked then allowed)
- [ ] Test 2: Objection raised with legal reasoning
- [ ] Test 2: Rephrasing removes original from transcript
- [ ] Test 3: Continue anyway records objection
- [ ] Test 4: Multiple files upload in one request
- [ ] Test 5: Complete trial runs to verdict
- [ ] Test 5: Transcript is valid JSON
- [ ] Test 5: Judge verdict includes dollar amount

---

## Known Limitations

1. **Rephrasing Re-check**: If plaintiff rephrases to another objectionable statement, system warns but continues
2. **Evidence Files**: Binary data stored in memory; not suitable for very large files
3. **API Rate Limits**: Rapid API calls may hit rate limits; 1-second delay added between turns
4. **Case Context**: Limited to last 10 turns in controller decision to manage token usage

---

## Troubleshooting

**Problem**: "FileNotFoundError: data/user_1/ocr_output/extracted_data.json"
- **Solution**: Ensure you're running from moot_court root directory

**Problem**: "ValueError: Evidence upload not allowed"
- **Solution**: This is expected! Judge must request evidence first. Continue trial.

**Problem**: "System Error: Unable to generate response"
- **Solution**: Check API key and internet connection, retry

**Problem**: Transcript missing or incomplete
- **Solution**: Check console output for errors; file should be at `court_simulator/cli_trial_transcript.json`

---

## Contact & Notes

- Report issues with the implementation to the development team
- Check console output for detailed error messages
- Use verbose mode if available (add `--debug` flag when available)
