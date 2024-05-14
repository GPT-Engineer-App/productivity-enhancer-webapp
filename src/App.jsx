import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import LowStress from "./pages/LowStress.jsx";
import MediumStress from "./pages/MediumStress.jsx";
import HighStress from "./pages/HighStress.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/index" element={<Index />} />
        <Route path="/low-stress" element={<LowStress />} />
        <Route path="/medium-stress" element={<MediumStress />} />
        <Route path="/high-stress" element={<HighStress />} />
      </Routes>
    </Router>
  );
}

export default App;
