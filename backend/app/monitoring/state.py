from datetime import datetime

RISK_STATE = {
    "risk_score": 0,
    "risk_level": "Low",
    "active_anomalies": 0,
    "last_updated": None
}

def update_state(score, level, anomalies):
    RISK_STATE["risk_score"] = score
    RISK_STATE["risk_level"] = level
    RISK_STATE["active_anomalies"] = anomalies
    RISK_STATE["last_updated"] = datetime.utcnow().isoformat()

def get_state():
    return RISK_STATE
