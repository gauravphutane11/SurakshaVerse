from fastapi import FastAPI

app = FastAPI(title="SurakshaVerse Backend")

@app.get("/")
def root():
    return {"status": "Backend running"}
