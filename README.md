# 🔐 SurakshaVerse  
## DIPEX 2026 – Cyber Security Awareness & AI Threat Monitoring Platform

SurakshaVerse is a **full-stack cyber security project** developed for **DIPEX 2026** by a team of Computer Engineering students.  
The project focuses on **cybercrime awareness, user training, and AI-based threat monitoring** using real backend logic and machine learning.

This repository contains both:
- **Module A** – Gamified Cybercrime Training (in progress)
- **Module B** – AI-Based Cyber Threat Monitoring (completed & stable)

---

## 🎯 Project Vision

Most users fall victim to cyber attacks due to lack of awareness and delayed threat detection.  
SurakshaVerse addresses this problem by combining:

- **Learning by simulation (Module A)**
- **Predictive, AI-driven threat monitoring (Module B)**

The goal is to provide a **safe, educational, and intelligent cyber security platform**, suitable for real-world demonstration and national-level exhibitions.

---

## 🧩 Project Modules

---

### 🎮 Module A – Gamified Cybercrime Training *(Under Active Development)*

A scenario-based cybercrime training engine where users learn by making decisions.

**Planned Features:**
- Multi-step cybercrime scenarios (Phishing, UPI fraud, Ransomware, Identity Theft)
- Decision-tree–based mission flow
- Each decision affects:
  - Next stage
  - Final outcome
  - User score
- Persistent user progress tracking
- Analytics on common mistakes

**Purpose:**  
Train users to respond correctly to real cyber incidents, not just read theory.

---

### 🤖 Module B – AI-Based Cyber Threat Monitoring *(Completed)*

A real backend-driven AI system that detects abnormal system behavior using machine learning.

**Key Capabilities:**
- Telemetry event generation and storage
- Anomaly detection using **Isolation Forest**
- Real-time risk score generation (0–100)
- Risk classification: **Low / Medium / High**
- Live monitoring APIs
- React dashboard with **live risk trend graph**

This module uses **real ML inference**, not simulated logic.

---

## 🏗️ System Architecture (Module B)

Telemetry Events
↓
Isolation Forest (ML Model)
↓
Threat Score (0–100)
↓
Risk Evaluation Engine
↓
Live Dashboard + Risk Trend Graph


---

## 🛠️ Technology Stack

### Frontend
- React.js
- Axios
- Recharts (live graphs)
- HTML5, CSS3

### Backend
- Python 3.9+
- FastAPI
- Uvicorn

### Machine Learning
- scikit-learn
- Isolation Forest (Anomaly Detection)
- NumPy, Pandas

### Development Tools
- VS Code
- Git & GitHub
- Virtual Environment (venv)

---

## 📂 Project Structure (Simplified)

backend/
├── app/
│ ├── main.py
│ ├── telemetry/
│ ├── monitoring/
│ ├── ml/
│ └── api/
├── models/
│ ├── isolation_forest.pkl
│ └── scaler.pkl
└── requirements.txt

frontend/
├── src/
│ ├── pages/
│ ├── components/
│ └── assets/


---

## ▶️ How to Run the Project

### 🔹 Backend Setup

```bash
cd backend
venv\Scripts\activate      # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload

Backend URL:

http://127.0.0.1:8000

Swagger API Docs:

http://127.0.0.1:8000/docs

🔹 Frontend Setup

cd frontend
npm install
npm start

Frontend URL:

http://localhost:3000