import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <h2 style={{ color: "#00e5ff", marginBottom: "30px" }}>
        SurakshaVerse
      </h2>

      <nav style={navStyle}>
        <Link style={linkStyle} to="/home">Home</Link>
        <Link style={linkStyle} to="/missions">Missions</Link>
        <Link style={linkStyle} to="/dashboard">Threat Analysis</Link>
        <Link style={linkStyle} to="/result">Results</Link>
      </nav>
    </div>
  );
}

const sidebarStyle = {
  width: "240px",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  padding: "30px 20px",
  backgroundColor: "rgba(5, 11, 20, 0.9)",
  backdropFilter: "blur(10px)",
  boxSizing: "border-box",
};

const navStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const linkStyle = {
  color: "#c9d6e3",
  textDecoration: "none",
  fontSize: "16px",
};

export default Sidebar;
