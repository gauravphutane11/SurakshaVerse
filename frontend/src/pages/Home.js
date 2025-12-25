import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          padding: "50px",
          minHeight: "100vh"
        }}
      >
        {/* Page entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Welcome to SurakshaVerse</h1>

          <p style={{ maxWidth: "700px", marginTop: "10px" }}>
            An interactive cyber security awareness and AI-driven threat analysis
            platform.
          </p>
        </motion.div>

        {/* Module cards */}
        <div style={{ display: "flex", gap: "30px", marginTop: "50px" }}>
          {/* Module A */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Gamified Cyber Training</h2>
            <p>
              Experience realistic cybercrime simulations and learn correct
              response strategies.
            </p>
            <button onClick={() => navigate("/missions")}>
              Start Training
            </button>
          </motion.div>

          {/* Module B */}
          <motion.div
            className="glass-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h2>AI Threat Analysis</h2>
            <p>
              Monitor system risk levels and detect anomalous cyber behavior
              using AI.
            </p>
            <button onClick={() => navigate("/dashboard")}>
              View Dashboard
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
