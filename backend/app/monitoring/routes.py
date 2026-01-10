import logging
from typing import Dict
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.monitoring.engine import evaluate_risk
from app.monitoring.state import get_state

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/monitor", tags=["Monitoring"])

class StatusResponse(BaseModel):
    status: str

class MonitorStatus(BaseModel):
    state: Dict

@router.post("/update", response_model=StatusResponse)
async def update_monitor() -> Dict[str, str]:
    """Update the monitoring system by evaluating risks."""
    try:
        logger.info("Updating monitor")
        evaluate_risk()
        logger.info("Monitor updated successfully")
        return {"status": "monitor updated"}
    except Exception as e:
        logger.error(f"Error updating monitor: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to update monitor: {str(e)}")

@router.get("/status", response_model=MonitorStatus)
async def get_monitor_status():
    """Get the current monitoring status."""
    try:
        logger.info("Retrieving monitor status")
        state = get_state()
        return {"state": state}
    except Exception as e:
        logger.error(f"Error retrieving monitor status: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to get monitor status: {str(e)}")
