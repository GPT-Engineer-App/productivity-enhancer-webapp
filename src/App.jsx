import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
