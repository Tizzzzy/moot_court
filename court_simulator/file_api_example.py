from google import genai

client = genai.Client(api_key="AIzaSyDidgcddZDzZS59zPv4f8ztU_Bd7DyrDss")

myfile = client.files.upload(file="C:\\Users\\super\\OneDrive\\Desk_top\\courtAI\\moot_court\\data\\user_1\\claims\\SMC.pdf")

response = client.models.generate_content(
    model="gemini-3-flash-preview", contents=["Describe this document in one sentence", myfile]
)

print(response.text)