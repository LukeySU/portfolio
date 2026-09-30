import React from "react";
import { FaArrowDown } from "react-icons/fa";
import MyPhoto from "../assets/lukasz-hero.webp";
import TermLink from "./TermLink";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-signal" aria-hidden="true">
        <span />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-boot" aria-hidden="true">
            <span className="hero-boot-prompt">&gt;</span>
            <span className="hero-boot-command">deploy --reliable</span>
            <span className="hero-boot-status">ready</span>
          </div>
          <p className="eyebrow">
            <span className="status-dot" /> Infrastructure engineer{" "}
            <span className="eyebrow-divider" aria-hidden="true">/</span>{" "}
            <span className="eyebrow-secondary">Cloud &amp; reliability</span>
          </p>
          <h1>
            Reliable systems.
            <br />
            <span>Built for growth.</span>
          </h1>
          <p className="hero-description">
            I build reliable infrastructure and automate the work that slows
            teams down.
          </p>
          <div className="hero-actions">
            <TermLink variant="primary" href="#experience">
              View experience
            </TermLink>
            <TermLink href="#projects">See projects</TermLink>
          </div>
          <div className="hero-focus">
            <span>Focused on</span>
            <p>
              Cloud infrastructure <i /> Automation <i /> Reliability
            </p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-portrait-card">
            <div className="portrait-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>~/whoami</span>
            </div>
            <img
              src={MyPhoto}
              alt="Portrait of Łukasz Sulowski"
              width="640"
              height="960"
              fetchPriority="high"
            />
            <div className="portrait-caption">
              <p className="portrait-command" aria-hidden="true">
                <span>&gt;</span> whoami
              </p>
              <p className="portrait-name">Łukasz Sulowski</p>
              <p className="portrait-role">
                Infrastructure engineer
                <i className="portrait-cursor" aria-hidden="true" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <FaArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
