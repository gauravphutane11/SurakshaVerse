from fastapi import APIRouter
from app.assistant.schemas import ChatRequest
from app.assistant.service import AssistantService

router = APIRouter(prefix="/assistant", tags=["Assistant"])
service = AssistantService()

@router.post("/chat")
def chat(request: ChatRequest):
    reply = service.generate_response(request.message)
    return {"reply": reply}
