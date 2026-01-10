import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.telemetry.routes import router as telemetry_router
from app.monitoring.routes import router as monitoring_router
from app.api.risk import router as risk_router

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

app = FastAPI(title="SurakshaVerse Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(telemetry_router)
app.include_router(monitoring_router)
app.include_router(risk_router)

@app.get("/")
async def root():
    logger.info("Root endpoint accessed")
    return {"status": "Backend running cleanly"}
