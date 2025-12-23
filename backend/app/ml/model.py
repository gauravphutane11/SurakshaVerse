import pandas as pd
from sklearn.ensemble import IsolationForest
from app.ml.features import load_and_prepare_data

class RiskModel:
    def __init__(self):
        self.model = IsolationForest(
            n_estimators=100,
            contamination=0.25,
            random_state=42
        )
        self.is_trained = False

    def train(self, csv_path: str):
        features = load_and_prepare_data(csv_path)
        self.model.fit(features)
        self.is_trained = True

    def predict(self, csv_path: str) -> pd.DataFrame:
        if not self.is_trained:
            raise Exception("Model not trained")

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

        return df
