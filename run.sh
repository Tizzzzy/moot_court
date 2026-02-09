#!/bin/bash

# --- Configuration ---
BASE_DIR="data"
USER_ID="user_1"
# create a user_id folder inside data directory if it doesn't exist
mkdir -p "$BASE_DIR/$USER_ID"

CLAIM_FILE="SMC.pdf"

CLAIM_FOLDER="$BASE_DIR/$USER_ID/claims"
CLAIM_FILE_PATH="$CLAIM_FOLDER/$CLAIM_FILE"

OCR_SCRIPT="ocr/info_extract.py"
EVIDENCE_SCRIPT="evidence_recommend/evidence_recommend.py"
EVIDENCE_FEEDBACK_SCRIPT="evidence_feedback/monitor_evidence.py"
MODE="txt"

# Define the intermediate file path
# INTERMEDIATE_JSON="$OUTPUT_DIR/extracted_data.json"
# EVIDENCE_CONVERSATION="$OUTPUT_DIR/evidence_conversation.json"
# EVIDENCE_FOLDER="$INPUT_DIR/evidence"

# export CUDA_VISIBLE_DEVICES=0
# export ORT_DISABLE_THREAD_AFFINITY=1
# export ORT_SESSION_THREAD_POOL_SIZE=16
export MINERU_DEVICE_MODE=cuda

# --- Timer Setup ---
start_total=$SECONDS

format_time() {
    local T=$1
    local D=$((T/60/60/24))
    local H=$((T/60/60%24))
    local M=$((T/60%60))
    local S=$((T%60))
    if [ $D -gt 0 ]; then printf '%d days %d hours %d minutes %d seconds' $D $H $M $S
    elif [ $H -gt 0 ]; then printf '%d hours %d minutes %d seconds' $H $M $S
    elif [ $M -gt 0 ]; then printf '%d minutes %d seconds' $M $S
    else printf '%d seconds' $S; fi
}

# --- 1. Run Mineru (PDF -> Markdown) ---
echo "=========================================="
echo "Step 1: Converting PDF to Markdown (Mineru)"
echo "=========================================="
start_step1=$SECONDS

OCR_OUTPUT_DIR="$BASE_DIR/$USER_ID/ocr_output"
mkdir -p "$OCR_OUTPUT_DIR"
CUDA_VISIBLE_DEVICES=0 mineru -p "$CLAIM_FILE_PATH" -o "$OCR_OUTPUT_DIR" -m "$MODE" --device cuda

if [ $? -ne 0 ]; then
    echo "Error: Mineru conversion failed."
    exit 1
fi

# --- 2. Locate the OCR Markdown File ---
FILENAME_NO_EXT=$(basename "$CLAIM_FILE" .pdf)
EXPECTED_MD_PATH="$OCR_OUTPUT_DIR/$FILENAME_NO_EXT/$MODE/$FILENAME_NO_EXT.md"

if [ ! -f "$EXPECTED_MD_PATH" ]; then
    EXPECTED_MD_PATH=$(find "$OCR_OUTPUT_DIR" -name "*.md" | head -n 1)
    if [ -z "$EXPECTED_MD_PATH" ]; then
        echo "Critial Error: No Markdown file found in $OCR_OUTPUT_DIR"
        exit 1
    fi
fi

duration_step1=$((SECONDS - start_step1))
echo "Step 1 completed in: $(format_time $duration_step1)"

# --- 2. Run Python Extraction ---
echo ""
echo "=========================================="
echo "Step 2: Running LLM Extraction (Python)"
echo "=========================================="
start_step2=$SECONDS

EXTRACT_INFO_JSON="$OCR_OUTPUT_DIR/extracted_data.json"
# FIX: Save to file instead of capturing variable
python "$OCR_SCRIPT" \
    --file "$EXPECTED_MD_PATH" \
    --output "$EXTRACT_INFO_JSON"

duration_step2=$((SECONDS - start_step2))
echo "Step 2 completed in: $(format_time $duration_step2)"


# # --- 3. Run Evidence Recommendation ---
echo ""
echo "=========================================="
echo "Step 3: Running Evidence Recommendation (Python)"
echo "=========================================="
start_step3=$SECONDS

EVIDENCE_FOLDER="$BASE_DIR/$USER_ID/evidence"
mkdir -p "$EVIDENCE_FOLDER"

CONVERSATION_JSON="$EVIDENCE_FOLDER/evidence_conversation.json"
RECOMMEND_EVIDENCE_FOLDER="$EVIDENCE_FOLDER/recommend_evidence"
# FIX: Read from file instead of reading arg
python "$EVIDENCE_SCRIPT" --input_file "$EXTRACT_INFO_JSON" --conversation_json_path "$CONVERSATION_JSON" --evidence_folder_path "$RECOMMEND_EVIDENCE_FOLDER"


duration_step3=$((SECONDS - start_step3))
echo "Step 3 completed in: $(format_time $duration_step3)"

# # --- 4. Run Evidence feedback ---
echo ""
echo "=========================================="
echo "Step 4: Running Evidence feedback (Python)"
echo "=========================================="
start_step4=$SECONDS

TRACKER_FILE="$EVIDENCE_FOLDER/evidence_tracker.json"
BOOLEAN_FILE="$EVIDENCE_FOLDER/evidence_boolean.json"
python "$EVIDENCE_FEEDBACK_SCRIPT" --case_info "$EXTRACT_INFO_JSON" --tracker_file "$TRACKER_FILE" --boolean_file "$BOOLEAN_FILE" --evidence_folder "$RECOMMEND_EVIDENCE_FOLDER"

duration_step4=$((SECONDS - start_step4))
echo "Step 4 completed in: $(format_time $duration_step4)"

# --- Final Report ---
duration_total=$((SECONDS - start_total))
echo ""
echo "=========================================="
echo "          PIPELINE SUMMARY"
echo "=========================================="
echo "PDF Conversion    : $(format_time $duration_step1)"
echo "LLM Extraction    : $(format_time $duration_step2)"
echo "Evidence Recommend: $(format_time $duration_step3)"
echo "Evidence Feedback : $(format_time $duration_step4)"
echo "------------------------------------------"
echo "TOTAL TIME        : $(format_time $duration_total)"
echo "=========================================="

# bash ./run.sh 2>&1 | tee my_experiment.log