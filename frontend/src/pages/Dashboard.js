import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "20px" }}>
        <h1>Dashboard</h1>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <div style={cardStyle}>
            <h3>Threat Alerts</h3>
            <p>3 Suspicious Activities Detected</p>
          </div>

          <div style={cardStyle}>
            <h3>Risk Level</h3>
            <p>Medium</p>
          </div>

          <div style={cardStyle}>
            <h3>Training Progress</h3>
            <p>2 / 6 Missions Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#112e42",
  padding: "20px",
  borderRadius: "8px",
  width: "220px",
  color: "white"
};

export default Dashboard;
