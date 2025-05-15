import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Achivment from "./Achivment/Achivment";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";

const LandingPage = () => {
  return (
    <div>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skill"><Skill /></section>
      <section id="project"><Project /></section>
      <section id="achivment"><Achivment /></section>
      
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default LandingPage;
