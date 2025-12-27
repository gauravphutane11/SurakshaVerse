from pydantic import BaseModel
from typing import Dict
from datetime import datetime

class TelemetryEvent(BaseModel):
    timestamp: datetime
    event_type: str
    source_id: str
    action: str
    severity: int
    metadata: Dict
