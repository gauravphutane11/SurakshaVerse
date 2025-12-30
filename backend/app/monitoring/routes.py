from fastapi import APIRouter
from app.monitoring.engine import evaluate_risk
from app.monitoring.state import get_state

router = APIRouter(prefix="/monitor", tags=["Monitoring"])

@router.post("/update")
def update_monitor():
    evaluate_risk()
    return {"status": "monitor updated"}

@router.get("/status")
def get_monitor_status():
    return get_state()
