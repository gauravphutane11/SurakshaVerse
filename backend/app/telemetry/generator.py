import random
from datetime import datetime
from .schema import TelemetryEvent
from .storage import add_event

EVENT_TYPES = ["login", "process", "network", "device"]

def generate_event():
    event_type = random.choice(EVENT_TYPES)

    event = TelemetryEvent(
        timestamp=datetime.utcnow(),
        event_type=event_type,
        source_id=f"user_{random.randint(1,5)}",
        action=random.choice(["success", "failure", "start", "connect"]),
        severity=random.choices([0,1,2,3], weights=[70,20,8,2])[0],
        metadata={
            "ip": f"192.168.1.{random.randint(2,50)}",
            "geo_distance": random.choice([0, 0, 0, 500, 1200]),
            "device_change": random.choice([False, False, True]),
            "port": random.choice([22, 80, 443, 3389])
        }
    )

    add_event(event)
    return event
