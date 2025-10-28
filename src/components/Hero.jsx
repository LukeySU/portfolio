import React from "react";
import "../styles/Hero.css";
import MyPhoto from "../assets/lukasz.png";
import { FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      
      <div id="about" style={{ position: "relative", top: "-140px" }}></div>

      <div className="hero-content">
        <div className="hero-text">
          <h2>Hello! I’m Lukasz👋</h2>
          <p>
            I am an Infrastructure Engineer with extensive experience in designing, maintaining, and optimizing IT systems to ensure maximum performance, reliability, and stability. I specialize in monitoring applications, resolving incidents proactively, and streamlining operations through automation and efficient workflows. Skilled in Linux and Windows server administration, cloud platforms like AWS and GCP, virtualization with VMware, Hyper-V, and scripting with Python and Bash, I focus on building robust, scalable infrastructure that empowers teams to work without disruption. I am passionate about implementing solutions that combine technical excellence with practical reliability, enabling organizations to achieve their goals smoothly and efficiently.
          </p>
        </div>
        <div className="hero-image">
          <img src={MyPhoto} alt="Lukasz Sulowski" />
        </div>
      </div>
    </section>
  );
}

export default Hero;


