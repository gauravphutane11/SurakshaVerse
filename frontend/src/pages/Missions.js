import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
            delay={0.1}
          />
          <MissionCard
            title="Phishing Attack"
            description="Detect fake emails and malicious links."
            delay={0.2}
          />
          <MissionCard
            title="Ransomware"
            description="Handle a system locked by ransomware."
            delay={0.3}
          />
          <MissionCard
            title="Identity Theft"
            description="Investigate stolen personal information cases."
            delay={0.4}
          />
          <MissionCard
            title="Deepfake Detection"
            description="Analyze manipulated audio and video content."
            delay={0.5}
          />
          <MissionCard
            title="Social Engineering"
            description="Recognize human manipulation techniques."
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
}

function MissionCard({ title, description, delay }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -8 }}
      style={cardStyle}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => navigate("/simulation", { state: { mission: title } })}>
        Start Mission
      </button>
    </motion.div>
  );
}

const cardStyle = {
  backgroundColor: "#112e42",
  padding: "20px",
  borderRadius: "8px",
  width: "250px",
  color: "white",
  cursor: "pointer"
};

export default Missions;
