import React from "react";
import "../styles/About.css";

const principles = [
  "Reliability first",
  "Automation-minded",
  "Operations-focused",
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-heading">
          <p className="section-kicker">About me</p>
          <h2>
            Infrastructure with a <span>practical mindset.</span>
          </h2>
        </div>

        <div className="about-copy">
          <p className="about-lead">
            I’m an infrastructure engineer focused on building and maintaining
            stable, secure, and observable environments.
          </p>
          <p>
            I work across virtualization, cloud platforms, automation,
            monitoring, and CI/CD, with a practical approach to reliability and
            continuous improvement. I enjoy turning repetitive operational work
            into repeatable processes and building systems that are easier to
            operate, troubleshoot, and scale.
          </p>

          <ul className="about-principles" aria-label="Engineering principles">
            {principles.map((principle, index) => (
              <li key={principle}>
                <span>0{index + 1}</span>
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
