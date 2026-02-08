import os
import time
import json
import glob
from evidence_feedback import evidence_feedback
import argparse


def load_json(file_path):
    if os.path.exists(file_path):
        with open(file_path, "r") as f:
            return json.load(f)
    return {}

def save_json(data, file_path):
    with open(file_path, "w") as f:
        json.dump(data, f, indent=4)

def init_boolean_tracker(boolean_file, evidence_folder):
    """
    Ensures the boolean tracker exists. 
    If not, it creates it with all current folders set to False.
    """
    if os.path.exists(boolean_file):
        return load_json(boolean_file)
    
    print("Initializing boolean tracker...")
    tracker = {}
    subfolders = [f.name for f in os.scandir(evidence_folder) if f.is_dir()]
    
    for folder in subfolders:
        tracker[folder] = False
        
    save_json(tracker, boolean_file)
    return tracker

def get_description_from_folder(folder_path):
    """
    Tries to read the description.txt file created in the previous step.
    If not found, returns a generic prompt.
    """
    desc_path = os.path.join(folder_path, "description.txt")
    if os.path.exists(desc_path):
        with open(desc_path, "r", encoding="utf-8") as f:
            return f.read().strip()
    return "Relevant evidence for the case."

def cleanup_old_files(folder_path, files):
    """
    If there are multiple evidence files, keep only the newest one 
    and delete the rest. Returns the path to the newest file.
    """
    # 1. Sort files by modification time (newest last)
    full_paths = [os.path.join(folder_path, f) for f in files]
    full_paths.sort(key=os.path.getmtime)

    # 2. Identify the winner (newest) and losers (old ones)
    newest_file = full_paths[-1]
    old_files = full_paths[:-1]

    # 3. Delete the losers
    for old_f in old_files:
        try:
            print(f" -> Deleting old version: {os.path.basename(old_f)}")
            os.remove(old_f)
        except OSError as e:
            print(f"Error deleting {old_f}: {e}")

    return newest_file

def scan_and_process(case_info, tracker_file, boolean_file, recommend_evidence_folder):
    
    # Load Trackers
    processed_tracker = load_json(tracker_file)
    boolean_tracker = init_boolean_tracker(boolean_file, recommend_evidence_folder)
    
    print(f"Scanning directories in {recommend_evidence_folder}...")
    
    # Get all subfolders
    subfolders = [f.path for f in os.scandir(recommend_evidence_folder) if f.is_dir()]
    
    data_changed = False # Flag to know if we need to re-save the boolean tracker

    for folder in subfolders:
        folder_name = os.path.basename(folder)
        
        # Identify evidence files (exclude system files)
        system_files = ["description.txt", "feedback.md", "processed_tracker.json", ".DS_Store"]
        files = [f for f in os.listdir(folder) if f not in system_files]
        
        # If folder is empty, ensure it is False in tracker
        if not files:
            if boolean_tracker.get(folder_name, False) is True:
                boolean_tracker[folder_name] = False
                data_changed = True
            continue 

        # Clean up multiples
        evidence_file = cleanup_old_files(folder, files)
        
        # Generate unique key for processing history
        file_mod_time = os.path.getmtime(evidence_file)
        file_key = f"{folder_name}/{os.path.basename(evidence_file)}"

        # --- PROCESS CONDITION ---
        # Process if: (New file OR Modified file)
        if file_key not in processed_tracker or processed_tracker[file_key] != file_mod_time:
            print(f"\n[PROCESSING] Evidence in '{folder_name}': {os.path.basename(evidence_file)}")
            
            description = get_description_from_folder(folder)
            
            # CALL LLM
            ready_to_use, feedback = evidence_feedback(case_info, description, evidence_file)
            
            # Save Feedback locally
            with open(os.path.join(folder, "feedback.md"), "w", encoding="utf-8") as f:
                f.write(f"STATUS: {'READY' if ready_to_use else 'NOT READY'}\n\n{feedback}")
            
            print(f" -> Feedback saved. Status: {ready_to_use}")

            # Update Processed Tracker (to avoid re-running same file)
            processed_tracker[file_key] = file_mod_time
            save_json(processed_tracker, tracker_file)

            # Update Boolean Tracker (Global Status)
            boolean_tracker[folder_name] = ready_to_use
            save_json(boolean_tracker, boolean_file)
            
            data_changed = True
        
        else:
            # If file hasn't changed, strictly ensure tracker is in sync (optional safety check)
            # This handles case where user manually edited the boolean json by mistake
            pass

    # --- STOP CONDITION ---
    # Check if ALL evidences are True
    total_evidences = len(boolean_tracker)
    ready_evidences = sum(boolean_tracker.values())
    
    print(f"Progress: {ready_evidences}/{total_evidences} evidence files ready.")

    if total_evidences > 0 and ready_evidences == total_evidences:
        print("\nAll evidence files are marked as READY. Stopping monitor.")
        return True # Return True to signal "Stop"

    return False # Continue looping

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--case_info", type=str, required=True)
    parser.add_argument("--tracker_file", type=str, required=True)
    parser.add_argument("--boolean_file", type=str, required=True)
    parser.add_argument("--evidence_folder", type=str, required=True)
    args = parser.parse_args()

    # Load case info once
    with open(args.case_info, "r") as f:
        info = json.load(f)

    # Main Loop
    while True:
        should_stop = scan_and_process(info, args.tracker_file, args.boolean_file, args.evidence_folder)
        
        if should_stop:
            break
        
        time.sleep(1) # Wait 1 second before next scan