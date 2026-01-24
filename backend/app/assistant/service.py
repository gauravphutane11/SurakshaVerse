import os
from openai import OpenAI
import logging

logger = logging.getLogger(__name__)

class AssistantService:
    def __init__(self):
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            logger.warning("OPENAI_API_KEY not found in environment variables")
            self.client = None
        else:
            self.client = OpenAI(api_key=api_key)

    def generate_response(self, message: str) -> str:
        if not self.client:
            return "Cyber Assistant is currently unavailable (Missing API Key)."

        try:
            response = self.client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are SurakshaVerse's Cyber Security Assistant. You help users understand cyber threats, risks, and security best practices. Keep answers concise and helpful."},
                    {"role": "user", "content": message}
                ],
                max_tokens=150
            )
            return response.choices[0].message.content.strip()
        except Exception as e:
            logger.error(f"OpenAI API Error: {e}")
            return "I encountered an error processing your request."
