import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useInteractiveMotion from "./hooks/useInteractiveMotion";
import useRevealOnScroll from "./hooks/useRevealOnScroll";
import "./App.css";

function App() {
  useInteractiveMotion();
  useRevealOnScroll();

  React.useEffect(() => {
    const sectionId = window.location.hash.slice(1);

    if (!sectionId) {
      return undefined;
    }

    const requestFrame = window.requestAnimationFrame?.bind(window) ??
      ((callback) => window.setTimeout(callback, 0));
    const cancelFrame = window.cancelAnimationFrame?.bind(window) ??
      window.clearTimeout.bind(window);
    const frame = requestFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
    });

    return () => cancelFrame(frame);
  }, []);

  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  if (currentPath === "/case-study/kubernetes-reliability-lab") {
    return <CaseStudy />;
  }

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
