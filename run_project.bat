@echo off
echo ==========================================
echo    Starting SurakshaVerse Project
echo ==========================================

echo.
echo [1/2] Starting Backend Server...
start "SurakshaVerse Backend" cmd /k "cd backend && if exist venv\Scripts\activate (call venv\Scripts\activate) else (echo Virtual environment not found! Please check setup.) && uvicorn app.main:app --reload"

echo.
echo [2/2] Starting Frontend Server...
start "SurakshaVerse Frontend" cmd /k "cd frontend && npm start"

echo.
echo ==========================================
echo    Servers are starting...
echo    Backend: http://127.0.0.1:8000
echo    Frontend: http://localhost:3000
echo ==========================================
pause
