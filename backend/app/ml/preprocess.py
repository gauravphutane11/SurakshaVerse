import numpy as np
from sklearn.preprocessing import MinMaxScaler
from .data_loader import load_telemetry

FEATURE_COLUMNS = [
    "failed_attempts_last_10_min",
    "is_from_unknown_folder",
    "dest_port",
    "bytes_sent",
    "hour_of_day",
    "is_work_hours",
    "user_risk_baseline",
]

def prepare_autoencoder_data():
    df = load_telemetry()

    # Keep only normal data for training
    normal_df = df[df["is_anomalous"] == 0]

    X = normal_df[FEATURE_COLUMNS].fillna(0)

    scaler = MinMaxScaler()
    X_scaled = scaler.fit_transform(X)

    return X_scaled, scaler
