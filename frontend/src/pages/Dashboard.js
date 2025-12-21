import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [riskLevel, setRiskLevel] = useState("Medium");

  const threatsByRisk = {
    Low: [
      {
        id: 1,
        title: "Normal System Activity",
        description: "System behavior is within normal operational limits."
      }
    ],
    Medium: [
      {
        id: 1,
        title: "Suspicious Login Activity",
        description: "Multiple failed login attempts detected from unknown locations."
      },
      {
        id: 2,
        title: "Potential Phishing Campaign",
        description: "Unusual email patterns indicate a possible phishing attempt."
      }
    ],
    High: [
      {
        id: 1,
        title: "Credential Abuse Detected",
        description: "Possible account compromise due to abnormal access behavior."
      },
      {
        id: 2,
        title: "Anomalous Transaction Behavior",
        description: "High-risk transaction patterns detected."
      },
      {
        id: 3,
        title: "Unknown Behavior Pattern",
        description: "Unrecognized activity may indicate a zero-day cyber threat."
      }
    ]
  };

  const riskScoreMap = {
    Low: 20,
    Medium: 55,
    High: 85
  };

  const threats = threatsByRisk[riskLevel];
  const riskScore = riskScoreMap[riskLevel];

  const getRiskColor = () => {
    if (riskLevel === "High") return "#ff4d4d";
    if (riskLevel === "Medium") return "#ffb84d";
    return "#4dff88";
  };

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "50px", minHeight: "100vh" }}>
        <h1>AI Threat Analysis Dashboard</h1>
        <p style={{ maxWidth: "700px" }}>
          This module demonstrates simulated AI-based cyber threat analysis by
          identifying abnormal behavior patterns and predicting potential cyber
          attacks, including zero-day threats.
        </p>

        {/* Risk Level */}
        <div className="glass-card" style={{ marginTop: "30px" }}>
          <h2>Current System Risk Level</h2>

          <p>
            Risk Status:{" "}
            <strong style={{ color: getRiskColor() }}>{riskLevel}</strong>
          </p>

          <p>
            Threat Severity Score: <strong>{riskScore}%</strong>
          </p>

          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <button onClick={() => setRiskLevel("Low")}>Low Risk</button>
            <button onClick={() => setRiskLevel("Medium")}>Medium Risk</button>
            <button onClick={() => setRiskLevel("High")}>High Risk</button>
          </div>
        </div>

        {/* Active Threats */}
        <div className="glass-card" style={{ marginTop: "30px" }}>
          <h2>Active Threat Indicators</h2>
          {threats.map((threat) => (
            <div key={threat.id} style={{ marginBottom: "15px" }}>
              <strong>{threat.title}</strong>
              <p style={{ margin: "5px 0" }}>{threat.description}</p>
            </div>
          ))}
        </div>

        {/* Early Warning */}
        <div className="glass-card" style={{ marginTop: "30px" }}>
          <h2>Early Warning Alert</h2>
          <p>
            {riskLevel === "High"
              ? "Multiple unknown behavior patterns detected. Immediate investigation is recommended. Possible zero-day attack."
              : riskLevel === "Medium"
              ? "Some unusual behavior detected. Continuous monitoring is advised."
              : "System behavior is normal. No immediate cyber threats detected."}
          </p>
        </div>

        {/* Explanation */}
        <div style={{ marginTop: "40px", fontSize: "14px", color: "#c9d6e3" }}>
          Note: This dashboard uses simulated data to demonstrate how AI-based
          predictive threat detection systems work in real-world cyber security
          environments.
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
