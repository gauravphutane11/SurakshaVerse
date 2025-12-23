import pandas as pd

FEATURE_COLUMNS = [
    "login_attempts",
    "geo_distance",
    "device_change"
]

def load_and_prepare_data(csv_path: str) -> pd.DataFrame:
    df = pd.read_csv(csv_path)

    # Select only numeric behavioral features
    features = df[FEATURE_COLUMNS]

    return features
