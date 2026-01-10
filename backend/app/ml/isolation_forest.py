import logging
import numpy as np
import joblib
from pathlib import Path
from sklearn.ensemble import IsolationForest

from app.ml.preprocess import prepare_autoencoder_data

logger = logging.getLogger(__name__)

# Model storage
MODEL_DIR = Path(__file__).resolve().parents[2] / "models"
MODEL_DIR.mkdir(exist_ok=True)

MODEL_PATH = MODEL_DIR / "isolation_forest.pkl"
SCALER_PATH = MODEL_DIR / "scaler.pkl"


def train_isolation_forest() -> None:
    """Train and save the Isolation Forest model."""
    try:
        logger.info("Starting Isolation Forest training")
        # Load and preprocess data
        X_train, scaler = prepare_autoencoder_data()

        # Isolation Forest model
        model = IsolationForest(
            n_estimators=200,
            contamination=0.07,   # matches dataset anomaly ratio
            random_state=42
        )

        model.fit(X_train)

        # Save model and scaler
        joblib.dump(model, MODEL_PATH)
        joblib.dump(scaler, SCALER_PATH)

        logger.info("Isolation Forest trained successfully")
        logger.info(f"Model saved to: {MODEL_PATH}")
        logger.info(f"Scaler saved to: {SCALER_PATH}")
    except Exception as e:
        logger.error(f"Error training Isolation Forest: {str(e)}")
        raise


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    train_isolation_forest()
