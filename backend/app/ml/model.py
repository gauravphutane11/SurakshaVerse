import logging
import pandas as pd
from pathlib import Path
from typing import Optional
from sklearn.ensemble import IsolationForest
import joblib
from app.ml.features import load_and_prepare_data

logger = logging.getLogger(__name__)

class RiskModel:
    """Risk analysis model using Isolation Forest for anomaly detection."""

    def __init__(self):
        self.model: Optional[IsolationForest] = None
        self.is_trained: bool = False
        self.model_path = Path(__file__).resolve().parents[2] / "models" / "isolation_forest.pkl"

    def train(self, csv_path: str) -> None:
        """Train the Isolation Forest model on the provided CSV data."""
        try:
            logger.info(f"Training model with data from {csv_path}")
            features = load_and_prepare_data(csv_path)
            self.model = IsolationForest(
                n_estimators=100,
                contamination=0.25,
                random_state=42
            )
            self.model.fit(features)
            self.is_trained = True
            # Save the trained model
            self.model_path.parent.mkdir(exist_ok=True)
            joblib.dump(self.model, self.model_path)
            logger.info(f"Model trained and saved to {self.model_path}")
        except Exception as e:
            logger.error(f"Error training model: {str(e)}")
            raise

    def load_model(self) -> None:
        """Load the trained model from disk."""
        if self.model_path.exists():
            try:
                self.model = joblib.load(self.model_path)
                self.is_trained = True
                logger.info(f"Model loaded from {self.model_path}")
            except Exception as e:
                logger.error(f"Error loading model: {str(e)}")
                raise
        else:
            logger.warning(f"Model file not found: {self.model_path}")

    def predict(self, csv_path: str) -> pd.DataFrame:
        """Predict anomalies in the provided CSV data."""
        if not self.is_trained:
            logger.info("Model not trained, attempting to load from disk")
            self.load_model()
            if not self.is_trained:
                raise Exception("Model not trained and no saved model found")

        try:
            logger.info(f"Predicting on data from {csv_path}")
            df = pd.read_csv(csv_path)
            features = load_and_prepare_data(csv_path)

            predictions = self.model.predict(features)
            scores = self.model.decision_function(features)

            # Raw anomaly score
            df["raw_score"] = -scores

            # Normalize to 0–100
            min_s = df["raw_score"].min()
            max_s = df["raw_score"].max()
            df["anomaly_score"] = ((df["raw_score"] - min_s) / (max_s - min_s)) * 100

            df["anomaly"] = predictions == -1
            df["anomaly_score"] = df["anomaly_score"].round(2)

            logger.info(f"Prediction completed: {sum(predictions == -1)} anomalies detected")
            return df
        except Exception as e:
            logger.error(f"Error during prediction: {str(e)}")
            raise
