from fastapi import APIRouter
from .generator import generate_event
from .storage import get_recent_events, clear_events

router = APIRouter(prefix="/telemetry", tags=["Telemetry"])

@router.post("/generate")
def generate_telemetry():
    return generate_event()

@router.get("/recent")
def recent_telemetry(limit: int = 20):
    return get_recent_events(limit)

@router.delete("/clear")
def clear_telemetry():
    clear_events()
    return {"status": "cleared"}
