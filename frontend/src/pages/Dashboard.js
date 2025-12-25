import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import RiskGauge from "../components/RiskGauge";

const API_BASE = "http://127.0.0.1:8000";

function Dashboard() {
  const [riskLevel, setRiskLevel] = useState("Loading...");
  const [anomalies, setAnomalies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRiskData = async () => {
      try {
        await axios.post(`${API_BASE}/risk/train`);
        const response = await axios.get(`${API_BASE}/risk/predict`);

        setRiskLevel(response.data.risk_level);
        setAnomalies(response.data.anomalies);
      } catch (error) {
        console.error("Dashboard error:", error);
        setRiskLevel("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchRiskData();
  }, []);

  const getRiskColor = () => {
    if (riskLevel === "High") return "#ff4d4d";
    if (riskLevel === "Medium") return "#ffb84d";
    if (riskLevel === "Low") return "#4dff88";
    return "#ffffff";
  };

  const getRiskValue = () => {
    if (riskLevel === "High") return 85;
    if (riskLevel === "Medium") return 55;
    if (riskLevel === "Low") return 20;
    return 0;
  };

  const getHeartbeatClass = () => {
    if (riskLevel === "High") return "heartbeat high";
    if (riskLevel === "Medium") return "heartbeat medium";
    return "heartbeat low";
  };

  return (
    <div>
      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          padding: "40px",
          minHeight: "100vh"
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          AI Threat Analysis Dashboard
        </motion.h1>

        {/* Risk Level */}
        <motion.div className="glass-card" style={{ marginTop: "30px" }}>
          <h2>Current System Risk Level</h2>

          {loading ? (
            <p>Analyzing system behavior...</p>
          ) : (
            <p>
              Risk Status:{" "}
              <strong style={{ color: getRiskColor() }}>
                {riskLevel}
              </strong>
            </p>
          )}
        </motion.div>

        {/* Risk Gauge with Heartbeat */}
        <motion.div
          className="glass-card"
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}
          >
            AI Risk Confidence
            <span className={getHeartbeatClass()}></span>
          </h2>

          {!loading && (
            <RiskGauge
              value={getRiskValue()}
              level={riskLevel}
            />
          )}
        </motion.div>

        {/* Detected Anomalies */}
        <motion.div className="glass-card" style={{ marginTop: "30px" }}>
          <h2>Detected Anomalous Activities</h2>

          {!loading && anomalies.length === 0 && (
            <p>No anomalous activity detected.</p>
          )}

          {!loading &&
            anomalies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 }}
                style={{
                  marginBottom: "15px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <strong>User:</strong> {item.user_id}
                <br />
                <strong>Login Attempts:</strong> {item.login_attempts}
                <br />
                <strong>Geo Distance:</strong> {item.geo_distance} km
                <br />
                <strong>Device Change:</strong>{" "}
                {item.device_change ? "Yes" : "No"}
                <br />
                <strong>Severity Score:</strong> {item.anomaly_score}
              </motion.div>
            ))}
        </motion.div>

        {/* Footer */}
        <div
          style={{
            marginTop: "40px",
            fontSize: "14px",
            color: "#c9d6e3"
          }}
        >
          Note: Live animations indicate continuous monitoring. All values are
          generated from a real ML-based threat analysis backend.
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
