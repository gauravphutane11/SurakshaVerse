import Sidebar from "../components/Sidebar";

function Result() {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: "240px", padding: "20px" }}>
        <h1>Result</h1>
        <p>Mission outcome, score, and feedback will be displayed here.</p>
      </div>
    </div>
  );
}

export default Result;
