import pandas as pd
from pathlib import Path

DATA_PATH = Path(__file__).resolve().parents[2] / "data" / "telemetry_events.csv"

def load_telemetry():
    df = pd.read_csv(DATA_PATH)
    return df
