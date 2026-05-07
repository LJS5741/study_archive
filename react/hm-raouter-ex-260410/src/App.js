import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectLogin from "./2026.04.10/pages/ProjectLogin";
import ProjectSignup from "./2026.04.10/pages/ProjectSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectLogin />} />
        <Route path="/signup" element={<ProjectSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
