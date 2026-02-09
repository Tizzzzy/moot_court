import os
from google import genai
from google.genai import types

def gemini(prompt, model="gemini-3-flash-preview", json_mode=True):
    """
    Sends a prompt to Gemini and returns the text content.
    If json_mode is True, enforces valid JSON output.
    """
    
    # Load API key - prefer environment variable, fallback to file for compatibility
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        # Assuming you might store the Gemini key in the same directory structure on Quest
        key_path = "/projects/p32143/moot_court/gemini_api_key.txt" 
        if os.path.exists(key_path):
            with open(key_path, "r") as f:
                api_key = f.read().strip()
    
    if not api_key:
        print("Error: GEMINI_API_KEY not found.")
        return "{}"

    client = genai.Client(api_key=api_key, http_options={'api_version': 'v1alpha'})

    # Configure generation settings
    config = types.GenerateContentConfig(
        system_instruction="You are a helpful legal assistant.",
        temperature=0.7, 
    )

    # Enforce JSON mode if requested
    if json_mode:
        config.response_mime_type = "application/json"
        # Note: For dynamic keys (filenames) as requested in your prompt, 
        # using mime_type="application/json" is more flexible than a strict Pydantic schema.

    try:
        response = client.models.generate_content(
            model=model,
            contents=[prompt],
            config=config
        )
        return response.text
        
    except Exception as e:
        print(f"Error calling Gemini: {e}")
        return "{}"



# import os
# from openai import OpenAI
# import json


# def gpt(prompt, model="gpt-5-mini-2025-08-07", json_mode=True):
#     """
#     Sends a prompt to OpenAI and returns the text content.
#     If json_mode is True, enforces valid JSON output.
#     """
    
#     # Load API key - prefer environment variable, fallback to file for compatibility
#     api_key = os.getenv("OPENAI_API_KEY")
#     if not api_key:
#         key_path = "/projects/p32143/moot_court/api_key.txt"
#         if os.path.exists(key_path):
#             with open(key_path, "r") as f:
#                 api_key = f.read().strip()

#     client = OpenAI(api_key=api_key)

#     messages = [
#         {"role": "system", "content": "You are a helpful legal assistant."},
#         {"role": "user", "content": prompt}
#     ]

#     # Prepare arguments
#     kwargs = {
#         "model": model,
#         "messages": messages,
#     }
    
#     # Enforce JSON mode if requested (Supported on gpt-4-turbo, gpt-4o, gpt-3.5-turbo-0125)
#     if json_mode:
#         kwargs["response_format"] = {"type": "json_object"}

#     try:
#         response = client.chat.completions.create(**kwargs)
#         return response.choices[0].message.content
#     except Exception as e:
#         print(f"Error calling OpenAI: {e}")
#         return "{}"