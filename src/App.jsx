import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage"; // New landing page showing all sections
import Home from "./Home/Home";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Achivment from "./Achivment/Achivment";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Show all sections together on the root path */}
        <Route path="/" element={<LandingPage />} />

        {/* Individual routes for each section */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/achivment" element={<Achivment />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
