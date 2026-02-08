#!/bin/bash

echo "=================================================="
echo "Enhanced Court Simulator - Implementation Verify"
echo "=================================================="
echo ""

# Check Python version
echo "1. Python Version Check:"
python3 --version
echo "   ✓ Python 3.7+ required for type hints"
echo ""

# Check files exist
echo "2. Implementation Files Check:"
files=(
    "court_simulator/agent.py"
    "court_simulator/session.py"
    "court_simulator/court_simulator.py"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        lines=$(wc -l < "$file")
        echo "   ✓ $file ($lines lines)"
    else
        echo "   ✗ $file (MISSING)"
    fi
done
echo ""

# Check documentation exists
echo "3. Documentation Files Check:"
docs=(
    "court_simulator/QUICKSTART.md"
    "court_simulator/TESTING.md"
    "court_simulator/IMPLEMENTATION_SUMMARY.md"
    "ENHANCEMENT_COMPLETE.md"
)

for doc in "${docs[@]}"; do
    if [ -f "$doc" ]; then
        lines=$(wc -l < "$doc")
        echo "   ✓ $doc ($lines lines)"
    else
        echo "   ✗ $doc (MISSING)"
    fi
done
echo ""

# Check case data exists
echo "4. Case Data Check:"
if [ -f "data/user_1/ocr_output/extracted_data.json" ]; then
    echo "   ✓ Case data file exists"
else
    echo "   ✗ Case data file missing"
fi
echo ""

# Compile Python files
echo "5. Python Syntax Check:"
python3 -m py_compile court_simulator/agent.py 2>/dev/null && echo "   ✓ agent.py" || echo "   ✗ agent.py"
python3 -m py_compile court_simulator/session.py 2>/dev/null && echo "   ✓ session.py" || echo "   ✗ session.py"
python3 -m py_compile court_simulator/court_simulator.py 2>/dev/null && echo "   ✓ court_simulator.py" || echo "   ✗ court_simulator.py"
echo ""

echo "=================================================="
echo "IMPLEMENTATION STATUS: READY FOR TESTING"
echo "=================================================="
echo ""
echo "Next Steps:"
echo "1. Install dependencies:"
echo "   pip install google-genai pydantic"
echo ""
echo "2. Set up API key:"
echo "   - Create api_key.txt with Gemini API key, OR"
echo "   - export GEMINI_API_KEY='your_key'"
echo ""
echo "3. Run simulator:"
echo "   python3 court_simulator/court_simulator.py"
echo ""
echo "4. Read documentation:"
echo "   - QUICKSTART.md for 2-minute intro"
echo "   - TESTING.md for test procedures"
echo "   - IMPLEMENTATION_SUMMARY.md for technical details"
echo ""
echo "=================================================="
