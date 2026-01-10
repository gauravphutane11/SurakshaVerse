import logging
from pathlib import Path
from typing import Dict, List, Any
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.ml.model import RiskModel

logger = logging.getLogger(__name__)

# Use absolute path
CSV_PATH = Path(__file__).resolve().parents[2] / "app" / "data" / "login_logs.csv"

router = APIRouter(prefix="/risk", tags=["Risk Analysis"])

class TrainResponse(BaseModel):
    status: str

class AnomalyData(BaseModel):
    user_id: Any
    login_attempts: Any
    geo_distance: Any
    device_change: Any
    anomaly_score: float

class PredictResponse(BaseModel):
    risk_level: str
    anomaly_count: int
    anomalies: List[AnomalyData]

# Initialize model
model = RiskModel()

@router.post("/train", response_model=TrainResponse)
async def train_model() -> Dict[str, str]:
    """Train the risk analysis model."""
    try:
        logger.info("Starting model training")
        model.train(str(CSV_PATH))
        logger.info("Model trained successfully")
        return {"status": "Model trained successfully"}
    except FileNotFoundError:
        logger.error(f"Training data file not found: {CSV_PATH}")
        raise HTTPException(status_code=404, detail="Training data file not found")
    except Exception as e:
        logger.error(f"Error during model training: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Training failed: {str(e)}")

@router.get("/predict", response_model=PredictResponse)
async def predict_risk():
    """Predict risk based on login data."""
    try:
        logger.info("Starting risk prediction")
        results = model.predict(str(CSV_PATH))

        anomalies = results[results["anomaly"] == True]

        # Risk logic
        count = len(anomalies)
        if count >= 3:
            risk_level = "High"
        elif count >= 1:
            risk_level = "Medium"
        else:
            risk_level = "Low"

        anomaly_list = anomalies[
            ["user_id", "login_attempts", "geo_distance", "device_change", "anomaly_score"]
        ].to_dict(orient="records")

        logger.info(f"Risk prediction completed: {risk_level} risk with {count} anomalies")
        return {
            "risk_level": risk_level,
            "anomaly_count": count,
            "anomalies": anomaly_list
        }
    except FileNotFoundError:
        logger.error(f"Prediction data file not found: {CSV_PATH}")
        raise HTTPException(status_code=404, detail="Prediction data file not found")
    except Exception as e:
        logger.error(f"Error during risk prediction: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")
