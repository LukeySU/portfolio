import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import MyPhoto from "../assets/lukasz-hero.png";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-text">
          <p className="eyebrow"><span className="status-dot" /> Infrastructure engineer <span className="eyebrow-divider">/</span> Cloud &amp; reliability</p>
          <h1>Reliable systems.<br /><span>Room to build.</span></h1>
          <p className="hero-description">
            I design and maintain dependable infrastructure, automate the repetitive work, and help teams ship with confidence.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <FaArrowRight aria-hidden="true" /></a>
            <a className="button button-quiet" href="#contact">Get in touch <FaArrowDown aria-hidden="true" /></a>
          </div>
          <div className="hero-focus">
            <span>Focused on</span>
            <p>Cloud infrastructure <i /> Automation <i /> Reliability</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-portrait-card">
            <img src={MyPhoto} alt="Portrait of Łukasz Sulowski" />
            <div className="portrait-caption"><span>Łukasz Sulowski</span><span>Infrastructure Engineer</span></div>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#skills" aria-label="Scroll to skills"><span>Scroll to explore</span><FaArrowDown aria-hidden="true" /></a>
    </section>
  );
}

export default Hero;
