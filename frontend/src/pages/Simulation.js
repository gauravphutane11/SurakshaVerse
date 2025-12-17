import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Simulation() {
  const navigate = useNavigate();
  const location = useLocation();
  const mission = location.state?.mission || "UPI Fraud";

  const handleDecision = (choice) => {
    let score = 0;
    let feedback = "";

    if (choice === "analyze") {
      score = 80;
      feedback = "Good analysis. You identified the threat early.";
    } else if (choice === "report") {
      score = 100;
      feedback = "Excellent response. Reporting prevented damage.";
    } else {
      score = 40;
      feedback = "Ignoring the threat allowed it to escalate.";
    }

    navigate("/result", {
      state: { mission, score, feedback },
    });
  };

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "50px" }}>
        <h1>Mission: {mission}</h1>
        <p>
          A suspicious cyber activity has been detected. Choose how you want to
          respond.
        </p>

        <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
          <button onClick={() => handleDecision("analyze")}>Analyze</button>
          <button onClick={() => handleDecision("ignore")}>Ignore</button>
          <button onClick={() => handleDecision("report")}>Report</button>
        </div>
      </div>
    </div>
  );
}

export default Simulation;
