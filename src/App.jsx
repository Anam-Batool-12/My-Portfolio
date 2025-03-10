import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Main from "./components/Main.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Mobile from "./components/Mobile.jsx"
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <About />
      <Skills />
      <Mobile />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
