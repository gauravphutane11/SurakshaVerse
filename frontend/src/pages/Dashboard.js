import Sidebar from "../components/Sidebar";

function Dashboard() {
  const riskLevel = "Medium"; // Simulated AI output

  const threats = [
    {
      id: 1,
      title: "Suspicious Login Activity",
      description: "Multiple failed login attempts detected from unknown locations."
    },
    {
      id: 2,
      title: "Potential Phishing Campaign",
      description: "Unusual email patterns indicating possible phishing attempts."
    },
    {
      id: 3,
      title: "Anomalous Transaction Behavior",
      description: "Irregular transaction timing observed in recent activity."
    }
  ];

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
          This dashboard demonstrates simulated AI-based cyber threat analysis.
          It highlights early indicators of suspicious behavior and potential
          cyber attacks, including unknown or zero-day threats.
        </p>

        {/* Risk Level Section */}
        <div className="glass-card" style={{ marginTop: "30px" }}>
          <h2>Current System Risk Level</h2>
          <p>
            Risk Status:{" "}
            <strong style={{ color: getRiskColor() }}>
              {riskLevel}
            </strong>
          </p>
          <p>
            The risk level is derived from behavioral pattern analysis and
            anomaly indicators generated using simulated AI logic.
          </p>
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

        {/* Zero-Day Warning */}
        <div className="glass-card" style={{ marginTop: "30px" }}>
          <h2>Early Warning Alert</h2>
          <p>
            Unrecognized behavioral patterns have been detected that do not
            match known attack signatures. This may indicate a potential
            zero-day cyber threat.
          </p>
          <p>
            Early alerts allow preventive action before significant damage
            occurs.
          </p>
        </div>

        {/* Explanation Note */}
        <div style={{ marginTop: "40px", fontSize: "14px", color: "#c9d6e3" }}>
          Note: This module uses simulated data to demonstrate how AI-based
          predictive threat detection systems operate in real-world cyber
          security environments.
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
