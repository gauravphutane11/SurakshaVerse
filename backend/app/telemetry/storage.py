from typing import List
from .schema import TelemetryEvent

TELEMETRY_BUFFER: List[TelemetryEvent] = []

def add_event(event: TelemetryEvent):
    TELEMETRY_BUFFER.append(event)

def get_recent_events(limit: int = 50):
    return TELEMETRY_BUFFER[-limit:]

def clear_events():
    TELEMETRY_BUFFER.clear()
