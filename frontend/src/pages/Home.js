import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar />

      <div style={container}>
        <h1>SurakshaVerse</h1>
        <p style={{ color: "#c9d6e3", marginBottom: "40px" }}>
          Realtime Cyber Defense Readiness
        </p>

        <div style={grid}>
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.05 }}
          >
            <h2>Gamified Training Platform</h2>
            <p>
              Interactive cybercrime simulations like phishing, UPI fraud,
              ransomware, and identity theft through missions.
            </p>
            <button onClick={() => navigate("/missions")}>
              Start Training
            </button>
          </motion.div>

          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.05 }}
          >
            <h2>AI Threat Analysis & Protection</h2>
            <p>
              Simulated AI-based anomaly detection and early zero-day
              attack indicators.
            </p>
            <button onClick={() => navigate("/dashboard")}>
              View Threat Analysis
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const container = {
  marginLeft: "240px",
  padding: "50px",
  minHeight: "100vh",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "40px",
  maxWidth: "900px",
};

export default Home;
