from app.ml.model import RiskModel

CSV_PATH = "app/data/login_logs.csv"

model = RiskModel()
model.train(CSV_PATH)

results = model.predict(CSV_PATH)
print(results[["user_id", "login_attempts", "geo_distance", "device_change", "anomaly", "anomaly_score"]])
