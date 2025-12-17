import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { mission, score, feedback } = location.state || {};

  if (!mission) {
    return (
      <div style={{ padding: "50px" }}>
        <h2>No result data found</h2>
        <button onClick={() => navigate("/missions")}>
          Go to Missions
        </button>
      </div>
    );
  }

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "240px", padding: "50px" }}>
        <h1>Mission Result</h1>
        <h2>{mission}</h2>

        <h3>Score: {score}</h3>
        <p>{feedback}</p>

        <button onClick={() => navigate("/missions")}>
          Try Another Mission
        </button>
      </div>
    </div>
  );
}

export default Result;
