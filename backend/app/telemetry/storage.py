# In-memory telemetry store (demo-safe)

EVENT_STORE = []

def save_event(event: dict):
    EVENT_STORE.append(event)

def get_recent_events(limit: int = 20):
    return EVENT_STORE[-limit:]

def clear_events():
    EVENT_STORE.clear()
