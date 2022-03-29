import "./App.css";
import About from "./Pages/Aboutme.js";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Upload from "./Pages/Upload";
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}
export default App;
