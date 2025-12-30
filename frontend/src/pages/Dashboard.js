import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const API_BASE = "http://127.0.0.1:8000";

function Dashboard() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchStatus = async () => {
    try {
      const res = await axios.get(`${API_BASE}/monitor/status`);
      setStatus(res.data);
    } catch (err) {
      console.error("Failed to fetch monitoring status", err);
    }
  };

  const runScan = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_BASE}/monitor/update`);
      await fetchStatus();
    } catch (err) {
      console.error("Scan failed", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const riskColor = () => {
    if (!status) return "#aaa";
    if (status.risk_level === "High") return "#ff4d4d";
    if (status.risk_level === "Medium") return "#ffb84d";
    return "#4dff88";
  };

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "40px" }}>
        <h1>AI Threat Analysis Dashboard</h1>

        {!status && <p>Loading AI risk status...</p>}

        {status && (
          <>
            {/* Risk Overview */}
            <div className="glass-card" style={{ marginTop: "30px" }}>
              <h2>System Risk Overview</h2>

              <p>
                Risk Level:{" "}
                <strong style={{ color: riskColor() }}>
                  {status.risk_level}
                </strong>
              </p>

              <p>Threat Score: {status.risk_score} / 100</p>
              <p>Active Anomalies: {status.active_anomalies}</p>

              <p style={{ fontSize: "12px", opacity: 0.7 }}>
                Last Updated: {status.last_updated}
              </p>

              <button
                onClick={runScan}
                disabled={loading}
                style={{ marginTop: "15px" }}
              >
                {loading ? "Scanning..." : "Run AI Scan"}
              </button>
            </div>

            {/* Explanation */}
            <div className="glass-card" style={{ marginTop: "30px" }}>
              <h2>How This Works</h2>
              <p>
                This dashboard is connected to a live backend that uses an
                Isolation Forest model trained on normal telemetry behavior.
                Incoming events are scored in real time, and the system risk
                level updates dynamically based on model output.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
