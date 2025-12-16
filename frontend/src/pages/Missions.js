import Sidebar from "../components/Sidebar";

function Missions() {
  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "20px" }}>
        <h1>Missions</h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
          <MissionCard
            title="UPI Fraud"
            description="Identify and respond to suspicious UPI transactions."
          />
          <MissionCard
            title="Phishing Attack"
            description="Detect fake emails and malicious links."
          />
          <MissionCard
            title="Ransomware"
            description="Handle a system locked by ransomware."
          />
          <MissionCard
            title="Identity Theft"
            description="Investigate stolen personal information cases."
          />
          <MissionCard
            title="Deepfake Detection"
            description="Analyze manipulated audio and video content."
          />
          <MissionCard
            title="Social Engineering"
            description="Recognize human manipulation techniques."
          />
        </div>
      </div>
    </div>
  );
}

function MissionCard({ title, description }) {
  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button style={buttonStyle}>Start Mission</button>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#112e42",
  padding: "20px",
  borderRadius: "8px",
  width: "250px",
  color: "white"
};

const buttonStyle = {
  marginTop: "10px",
  padding: "8px",
  backgroundColor: "#00e5ff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default Missions;
