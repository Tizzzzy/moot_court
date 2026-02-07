# Enhanced Court Simulator - Quick Start Guide

## Installation & Setup (1 minute)

```bash
# 1. Navigate to project
cd C:/Users/super/OneDrive/Desk_top/courtAI/moot_court

# 2. Activate conda environment (if using)
conda activate moot_court

# 3. Verify Python 3.7+
python3 --version

# 4. Verify case data exists
ls data/user_1/ocr_output/extracted_data.json
```

## Running the Simulator (2 minutes)

```bash
# Run with API key in api_key.txt
python3 court_simulator/court_simulator.py

# OR set API key as environment variable
export GEMINI_API_KEY="your_key_here"
python3 court_simulator/court_simulator.py
```

## First Trial - What to Expect

### 1. **Opening** (~30 seconds)
```
[Judge]
"Good morning. This is a Small Claims Court proceeding.
Ms. Zirui Ye is suing Central East Asian Cuisine for $5,500..."
```

### 2. **Your Argument** (You type)
```
[Plaintiff - You]
Your Argument: I dined there on May 30 and the chicken had bones
that cracked my tooth...
```

### 3. **Objection Might Appear** ⚠️
If you say something objectionable (hearsay, speculation, etc.):
```
⚠️  OBJECTION RAISED BY DEFENSE
======================================================================
Type: Hearsay
Severity: MODERATE

Legal Reasoning:
[Judge's explanation]

Suggested Rephrasing:
"..."

Your Options:
[1] Rephrase your statement (original will be removed from record)
[2] Continue with current statement (objection will be noted)
```

Choose:
- **[1]** to rephrase (cleaner statement)
- **[2]** to override (keeps original in record)

### 4. **Judge's Turn**
```
[Judge]
"I see. Ms. Ye, can you describe the tooth damage more specifically?"
```

### 5. **Evidence Request** (Eventually)
```
[Judge]
"Please provide the dental invoice and any photos of the damaged dish.
Evidence upload is ALLOWED (Judge requested evidence)"

Your Argument: I have the invoice.
Upload evidence now? (y/n): y

--- EVIDENCE UPLOAD ---
You may upload multiple files (images or PDFs).
Enter file path (or 'done' to finish): dental_invoice.pdf
✓ Added: dental_invoice.pdf
Enter file path (or 'done' to finish): damaged_dish.jpg
✓ Added: damaged_dish.jpg
Enter file path (or 'done' to finish): done
```

### 6. **Arguments & Counter-arguments**
```
[Defendant]
"My client denies liability. The restaurant..."

[Judge]
"Does the plaintiff have anything else to add?"

[Plaintiff - You]
Your Argument: The staff saw the bone in my mouth...
```

### 7. **Verdict** 🏛️
```
[Judge - VERDICT]
"Based on the evidence presented, I find in favor of the plaintiff.
The defendant is liable for dental damages.
Judgment: $4,500 for dental implant, $500 for emotional distress.
Total Award: $5,000."

✓ Trial transcript saved to court_simulator/cli_trial_transcript.json

Simulation complete.
```

## Key Features to Try

### ✅ Test 1: Objection & Rephrasing (2 minutes)
Make a statement like:
> "My friend told me the restaurant doesn't maintain hygiene standards"

**Result**: Objection for HEARSAY raised
- Choose [1] to rephrase: "I personally observed unsanitary conditions..."
- Notice original statement is removed from transcript

### ✅ Test 2: Evidence Gating (3 minutes)
1. Try to upload evidence before Judge requests → **ERROR** (expected!)
2. Wait until Judge says "Please provide..."
3. Now upload works → **SUCCESS**
4. Try to upload again in next turn → **ERROR** (flag resets)

### ✅ Test 3: Complete Trial (5-10 minutes)
Run a full trial from opening to verdict, observing:
- Judge opens court
- You argue (objections may occur)
- Judge asks questions
- You respond (with or without objections)
- Judge requests evidence
- You upload files
- Defendant counters
- Judge gives verdict
- Transcript saved

## Transcript Location

After each trial:
```bash
# View saved transcript
cat court_simulator/cli_trial_transcript.json | python3 -m json.tool

# Or with Windows:
type court_simulator/cli_trial_transcript.json
```

**Expected format**:
```json
[
  {
    "role": "Judge",
    "content": "Good morning...",
    "turn": 0
  },
  {
    "role": "Plaintiff",
    "content": "I dined there...",
    "turn": 1
  },
  ...
]
```

## Common First-Run Scenarios

| Situation | What Happens | What You Do |
|-----------|--------------|------------|
| No evidence requested | Judge asks questions instead | Continue arguing normally |
| Objection appears | You choose rephrase or continue | Pick [1] or [2] |
| Evidence upload blocked | Try to upload → ERROR | Wait for "Please provide..." |
| API key error | "System Error" message | Check api_key.txt |
| Verdict seems low | Judge awards less than requested | Normal - judge decides amount |

## Keyboard Shortcuts

| Command | Result |
|---------|--------|
| `QUIT` | End simulation at any time |
| `done` | Finish uploading evidence files |
| `1` or `2` | Choose objection response |
| `y` or `n` | Upload evidence or not |

## Troubleshooting First Run

**Q: "Error: data/user_1/ocr_output/extracted_data.json not found"**
- A: Make sure you're in the `moot_court` directory

**Q: API key error appears**
- A: Create `api_key.txt` with your Gemini API key, or set `GEMINI_API_KEY` environment variable

**Q: "Evidence upload not allowed"**
- A: This is correct! Judge must request evidence. Continue the trial.

**Q: Trial ends unexpectedly**
- A: Type `QUIT` exits. Otherwise, let trial continue to verdict.

## Next Steps

1. **Run your first trial** (5-10 min)
2. **Try objection rephrasing** (2 min)
3. **Test evidence gating** (3 min)
4. **Read TESTING.md** for comprehensive test procedures
5. **Read IMPLEMENTATION_SUMMARY.md** for technical details

## What's Different from Original?

| Feature | Original | Enhanced |
|---------|----------|----------|
| Objections | None | Automatic evaluation + legal reasoning |
| Rephrasing | N/A | Interactive choice with history cleanup |
| Evidence | Always allowed | Gated - Judge must request |
| Evidence Files | Single | Multiple files per request |
| Judge Prompts | Generic | Evidence-aware with explicit requests |

## Tips for Best Experience

1. **Be specific**: Use dates, amounts, personal observations
2. **Avoid hearsay**: Don't say "someone told me...", say "I observed..."
3. **One objection**: If rephrasing, make significant changes
4. **Evidence ready**: Have files prepared before trial
5. **Let it finish**: Don't quit until Judge gives verdict

## File Structure

```
moot_court/
├── court_simulator/
│   ├── agent.py              # AI agents
│   ├── session.py            # State management
│   ├── court_simulator.py    # Main CLI
│   ├── cli_trial_transcript.json  # Output (created after run)
│   ├── QUICKSTART.md         # This file
│   ├── TESTING.md            # Detailed tests
│   └── IMPLEMENTATION_SUMMARY.md  # Technical details
├── data/
│   └── user_1/
│       └── ocr_output/
│           └── extracted_data.json  # Case data
└── api_key.txt               # Your Gemini API key
```

## Support

- For detailed test procedures: See `TESTING.md`
- For technical details: See `IMPLEMENTATION_SUMMARY.md`
- For API reference: See docstrings in `agent.py` and `session.py`

---

**Ready to simulate your first trial?**

```bash
cd C:/Users/super/OneDrive/Desk_top/courtAI/moot_court
python3 court_simulator/court_simulator.py
```

Good luck! 🏛️
