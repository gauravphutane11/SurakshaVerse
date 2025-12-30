from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.telemetry.routes import router as telemetry_router
from app.monitoring.routes import router as monitoring_router

app = FastAPI(title="SurakshaVerse Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(telemetry_router)
app.include_router(monitoring_router)

@app.get("/")
def root():
    return {"status": "Backend running cleanly"}
