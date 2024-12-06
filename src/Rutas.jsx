import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import MySkills from "./MySkills";
import NoPage from "./NoPage";

export default function Rutas() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* tenemos las rutas principales */}
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/usuario/:nombre" element={<MySkills />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
