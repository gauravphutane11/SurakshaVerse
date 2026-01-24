import os
from dotenv import load_dotenv
from app.assistant.service import AssistantService

# Load env vars
load_dotenv()

print("Testing AssistantService...")
service = AssistantService()
if not service.client:
    print("FAILED: No Client created (Check API Key)")
else:
    print("Client created successfully.")
    print("Sending test message...")
    try:
        reply = service.generate_response("Hello, are you online?")
        print(f"Reply: {reply}")
    except Exception as e:
        print(f"Error: {e}")
