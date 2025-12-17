import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
// OPTIONAL icons (place images in src/assets/)
import bot from "../assets/bot.png";
import virus from "../assets/virus.png";

function Dashboard() {
  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "40px", position: "relative" }}>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SurakshaVerse
        </motion.h1>

        <p>Realtime Cyber Defense Readiness</p>

        {/* Floating decorative elements */}
        <img src={bot} className="floating" style={{ top: "100px", right: "120px", width: "60px" }} />
        <img src={virus} className="floating" style={{ bottom: "120px", right: "80px", width: "70px" }} />

        {/* Main glass cards */}
        <div style={{ maxWidth: "520px", marginTop: "40px" }}>
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2>Gamified training platform</h2>
            <p>
              Interactive simulations exposing users to cybercrime scenarios
              such as UPI fraud, phishing, and ransomware to build practical
              response skills.
            </p>
          </motion.div>

          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: "30px" }}
          >
            <h2>AI powered cyber defense and prediction</h2>
            <p>
              Predictive threat alerts based on unusual behavior patterns,
              including simulated zero-day attack indicators.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
