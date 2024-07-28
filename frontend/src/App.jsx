import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Get from "./components/Get";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/get" element={<Get />} />
      </Routes>
    </Router>
  );
}

export default App;
