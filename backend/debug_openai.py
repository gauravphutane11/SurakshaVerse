import os
import traceback
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
print(f"API Key present: {bool(api_key)}")

try:
    client = OpenAI(api_key=api_key)
    print("Client initialized")
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": "test"}],
        max_tokens=10
    )
    print(response.choices[0].message.content)
except Exception:
    traceback.print_exc()
