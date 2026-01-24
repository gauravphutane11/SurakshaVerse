import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Missions from "./pages/Missions";
import Simulation from "./pages/Simulation";
import Result from "./pages/Result";
import CyberAssistant from "./components/CyberAssistant";


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
      <CyberAssistant />
    </BrowserRouter>
  );
}

export default App;
