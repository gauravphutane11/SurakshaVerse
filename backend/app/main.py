from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import risk

app = FastAPI(title="SurakshaVerse Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(risk.router)

@app.get("/")
def root():
    return {"status": "Backend running"}
