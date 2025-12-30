import joblib
import numpy as np
from pathlib import Path

from app.ml.preprocess import FEATURE_COLUMNS

MODEL_DIR = Path(__file__).resolve().parents[2] / "models"

MODEL_PATH = MODEL_DIR / "isolation_forest.pkl"
SCALER_PATH = MODEL_DIR / "scaler.pkl"

model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

def score_event(event: dict) -> int:
    """
    Returns threat score (0–100)
    """
    x = np.array([[event.get(col, 0) for col in FEATURE_COLUMNS]])
    x_scaled = scaler.transform(x)

    raw_score = model.decision_function(x_scaled)[0]
    anomaly_score = -raw_score

    threat_score = int(min(max(anomaly_score * 100, 0), 100))
    return threat_score
