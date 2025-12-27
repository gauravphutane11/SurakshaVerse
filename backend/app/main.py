from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI app FIRST
app = FastAPI(
    title="SurakshaVerse Backend",
    description="NEURAL-SHIELD – AI-Based Early Warning & Cyber Threat Analysis",
    version="1.0.0"
)

# CORS (Frontend connection)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import routers AFTER app is created
from app.api import risk
from app.telemetry.routes import router as telemetry_router

# Register routers
app.include_router(risk.router)
app.include_router(telemetry_router)

# Root health check
@app.get("/")
def root():
    return {
        "status": "Backend running",
        "project": "SurakshaVerse / NEURAL-SHIELD",
        "phase": "Phase 2 – Telemetry Pipeline"
    }
