from fastapi import APIRouter
from app.ml.model import RiskModel

CSV_PATH = "app/data/login_logs.csv"

router = APIRouter(prefix="/risk", tags=["Risk Analysis"])
model = RiskModel()

@router.post("/train")
def train_model():
    model.train(CSV_PATH)
    return {"status": "Model trained successfully"}

@router.get("/predict")
def predict_risk():
    results = model.predict(CSV_PATH)

    anomalies = results[results["anomaly"] == True]

    # Risk logic
    count = len(anomalies)
    if count >= 3:
        risk_level = "High"
    elif count >= 1:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return {
        "risk_level": risk_level,
        "anomaly_count": count,
        "anomalies": anomalies[
            ["user_id", "login_attempts", "geo_distance", "device_change", "anomaly_score"]
        ].to_dict(orient="records")
    }
