import React from "react";
import "../styles/About.css";

const principles = [
  {
    title: "Reliability first",
    text: "Stable, observable systems over quick fixes.",
  },
  {
    title: "Automation-minded",
    text: "Repetitive work becomes code and pipelines.",
  },
  {
    title: "Operations-focused",
    text: "Built to be run, debugged, and scaled.",
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-heading" data-reveal>
          <p className="section-kicker"><span className="section-index" aria-hidden="true">01 /</span> About me</p>
          <h2>
            Infrastructure with a <span>practical mindset.</span>
          </h2>
        </div>

        <div
          className="about-copy"
          data-reveal
          style={{ "--reveal-delay": "100ms" }}
        >
          <p className="about-lead">
            I started in a 24/7 operations team, watching alerts, chasing
            incidents, and learning what actually keeps systems running.
          </p>
          <p>
            Today I look after hybrid infrastructure day to day and automate
            anything I find myself doing twice. I care about the unglamorous
            parts: clear monitoring, reliable backups, and documented changes,
            because they make the next incident shorter. I also build small
            labs, like the Kubernetes Reliability Lab below, to test ideas
            before they reach production.
          </p>

          <ul className="about-principles" aria-label="Engineering principles">
            {principles.map((principle, index) => (
              <li key={principle.title}>
                <span>0{index + 1}</span>
                <strong>{principle.title}</strong>
                <p>{principle.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
