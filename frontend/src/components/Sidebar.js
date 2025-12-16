import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#0b1d2d",
        color: "white",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: 0
      }}
    >
      <h2>SurakshaVerse</h2>

      <nav style={{ marginTop: "30px" }}>
        <p><Link to="/dashboard">Dashboard</Link></p>
        <p><Link to="/missions">Missions</Link></p>
        <p><Link to="/simulation">Simulation</Link></p>
        <p><Link to="/result">Results</Link></p>
      </nav>
    </div>
  );
}

export default Sidebar;
