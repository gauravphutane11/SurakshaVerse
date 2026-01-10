import logging
from typing import Dict
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.telemetry.generator import generate_event
from app.telemetry.storage import save_event, clear_events

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/telemetry", tags=["Telemetry"])

class StatusResponse(BaseModel):
    status: str

@router.post("/generate", response_model=StatusResponse)
async def generate_telemetry() -> Dict[str, str]:
    """Generate a new telemetry event."""
    try:
        logger.info("Generating telemetry event")
        event = generate_event()
        save_event(event)
        logger.info("Telemetry event generated and saved")
        return {"status": "event generated"}
    except Exception as e:
        logger.error(f"Error generating telemetry: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to generate telemetry: {str(e)}")

@router.post("/clear", response_model=StatusResponse)
async def clear_telemetry() -> Dict[str, str]:
    """Clear all telemetry events."""
    try:
        logger.info("Clearing telemetry events")
        clear_events()
        logger.info("Telemetry events cleared")
        return {"status": "telemetry cleared"}
    except Exception as e:
        logger.error(f"Error clearing telemetry: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to clear telemetry: {str(e)}")
