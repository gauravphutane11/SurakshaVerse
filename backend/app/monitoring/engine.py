from app.telemetry.storage import get_recent_events
from app.monitoring.state import update_state
from app.ml.scoring import score_event

def evaluate_risk():
    events = get_recent_events(limit=20)

    if not events:
        update_state(0, "Low", 0)
        return

    scores = []
    anomaly_count = 0

    for event in events:
        score = score_event(event)
        scores.append(score)

        if score >= 70:
            anomaly_count += 1

    avg_score = int(sum(scores) / len(scores))

    if avg_score >= 70:
        level = "High"
    elif avg_score >= 30:
        level = "Medium"
    else:
        level = "Low"

    update_state(avg_score, level, anomaly_count)
