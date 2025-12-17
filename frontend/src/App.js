import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Missions from "./pages/Missions";
import Simulation from "./pages/Simulation";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
