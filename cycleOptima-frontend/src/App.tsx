import "./App.css";
import MainLayout from "./MainLayout";
import AiAssistant from "./pages/aiAssistant/AiAssistant";
import CycleManager from "./pages/cycleManager/CycleManager";
import Home from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SystemMonitor from "./pages/monitor/SystemMonitor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="cycle-manager" element={<CycleManager />} />
          <Route path="ai-assistant" element={<AiAssistant />} />
          <Route path="system-monitor" element={<SystemMonitor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
