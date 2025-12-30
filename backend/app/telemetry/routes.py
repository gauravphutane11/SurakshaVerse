from fastapi import APIRouter
from app.telemetry.generator import generate_event
from app.telemetry.storage import save_event, clear_events

router = APIRouter(prefix="/telemetry", tags=["Telemetry"])

@router.post("/generate")
def generate_telemetry():
    event = generate_event()
    save_event(event)
    return {"status": "event generated"}

@router.post("/clear")
def clear_telemetry():
    clear_events()
    return {"status": "telemetry cleared"}
