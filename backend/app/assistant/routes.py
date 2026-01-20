from fastapi import APIRouter

router = APIRouter(prefix="/assistant", tags=["Assistant"])

@router.post("/chat")
def chat_placeholder():
    return {
        "reply": "Cyber Security Assistant is initializing."
    }
