import random
from datetime import datetime

def generate_event():
    return {
        "failed_attempts_last_10_min": random.randint(0, 10),
        "is_from_unknown_folder": random.choice([0, 1]),
        "dest_port": random.choice([80, 443, 22, 3389]),
        "bytes_sent": random.randint(1_000, 5_000_000),
        "hour_of_day": datetime.utcnow().hour,
        "is_work_hours": 1 if 9 <= datetime.utcnow().hour <= 18 else 0,
        "user_risk_baseline": random.choice([0.2, 0.4, 0.6]),
        "timestamp": datetime.utcnow().isoformat()
    }
