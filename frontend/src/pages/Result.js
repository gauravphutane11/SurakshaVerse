import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { mission, score, feedback } = location.state || {};

  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "50px", minHeight: "100vh" }}>
        {!mission ? (
          <>
            <h2>No result data found</h2>
            <p>Please complete a mission to view results.</p>
            <button onClick={() => navigate("/missions")}>
              Go to Missions
            </button>
          </>
        ) : (
          <>
            <h1>Mission Result</h1>
            <h2>{mission}</h2>

            <p><strong>Score:</strong> {score}</p>
            <p>{feedback}</p>

            <button onClick={() => navigate("/missions")}>
              Try Another Mission
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Result;
