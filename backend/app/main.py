from fastapi import FastAPI
from app.api import risk

app = FastAPI(title="SurakshaVerse Backend")

app.include_router(risk.router)

@app.get("/")
def root():
    return {"status": "Backend running"}
