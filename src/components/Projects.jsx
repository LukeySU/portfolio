import React from "react";
import "../styles/Projects.css";
import logoImg from "../assets/porto.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and CSS, fully responsive. CI/CD pipeline with GitHub Actions and hosted on Netlify. Monitoring uptime with Shields.io and Sentry."
  },
  /*
    {
    title: "Weather App",
    description: "A web app fetching live weather data using an API and React hooks.",
    link: "#"
  },
  {
    title: "Todo List",
    description: "A simple Todo list with CRUD functionality and local storage.",
    link: "#"
  }
    */
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <img src={logoImg} alt={proj.title} className="project-image" />
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
            <a href={proj.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
