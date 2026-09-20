import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useInteractiveMotion from "./hooks/useInteractiveMotion";
import useRevealOnScroll from "./hooks/useRevealOnScroll";
import "./App.css";

function App() {
  useInteractiveMotion();
  useRevealOnScroll();

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
