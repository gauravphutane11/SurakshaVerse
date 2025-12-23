import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const API_BASE = "http://127.0.0.1:8000";

function Dashboard() {
  const [riskLevel, setRiskLevel] = useState("Loading...");
  const [anomalies, setAnomalies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRiskData = async () => {
      try {
        // Ensure model is trained
        await axios.post(`${API_BASE}/risk/train`);

        // Fetch predictions
        const response = await axios.get(`${API_BASE}/risk/predict`);

        setRiskLevel(response.data.risk_level);
        setAnomalies(response.data.anomalies);
      } catch (error) {
        console.error("Error fetching risk data:", error);
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

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "50px", minHeight: "100vh" }}>
        <h1>AI Threat Analysis Dashboard</h1>

        <p style={{ maxWidth: "700px" }}>
          This dashboard displays real-time risk analysis based on machine
          learning anomaly detection over login behavior data.
        </p>

        {/* Risk Level */}
        <div className="glass-card" style={{ marginTop: "30px" }}>
          <h2>Current System Risk Level</h2>

          {loading ? (
            <p>Analyzing system behavior...</p>
          ) : (
            <p>
              Risk Status:{" "}
              <strong style={{ color: getRiskColor() }}>{riskLevel}</strong>
            </p>
          )}
        </div>

        {/* Active Threats */}
        <div className="glass-card" style={{ marginTop: "30px" }}>
          <h2>Detected Anomalous Activities</h2>

          {loading && <p>Loading threat data...</p>}

          {!loading && anomalies.length === 0 && (
            <p>No anomalous activity detected.</p>
          )}

          {!loading &&
            anomalies.map((item, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
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
              </div>
            ))}
        </div>

        {/* Explanation */}
        <div style={{ marginTop: "40px", fontSize: "14px", color: "#c9d6e3" }}>
          Note: This analysis is generated using a real machine-learning-based
          anomaly detection model trained on behavioral login data.
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
