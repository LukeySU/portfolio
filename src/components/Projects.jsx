import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import portoImg from "../assets/nowe-port.png";
import appImg from "../assets/app.png";
import "../styles/Projects.css";

const projects = [
  {
    number: "01",
    category: "FRONTEND · SRE",
    title: "Portfolio Website",
    description: "A responsive React portfolio with a GitHub Actions deployment pipeline, uptime monitoring, and Sentry error tracking.",
    tags: ["React", "CI/CD", "Sentry"],
    link: "https://github.com/LukeySU/portfolio",
    image: portoImg,
    imageAlt: "Screenshot of the portfolio website",
  },
  {
    number: "02",
    category: "PYTHON · DATA",
    title: "Weather Forecast App",
    description: "A Streamlit weather dashboard using live forecast data, with dynamic backgrounds and a five-day outlook.",
    tags: ["Python", "Streamlit", "OpenWeatherMap"],
    image: appImg,
    imageAlt: "Weather forecast dashboard showing a five-day forecast",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-heading">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2>Built to be <span>useful.</span></h2>
        </div>
        <p>Small projects, practical ideas, and a focus on making things work reliably.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.number} className="project-card">
            <a className="project-visual" href={project.link || "#contact"} target={project.link ? "_blank" : undefined} rel={project.link ? "noreferrer" : undefined} aria-label={project.link ? `View ${project.title} on GitHub` : `Contact me about ${project.title}`}>
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
              <span className="project-number">{project.number}</span>
              <span className="project-arrow"><FaArrowUpRightFromSquare aria-hidden="true" /></span>
            </a>
            <div className="project-copy">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags" aria-label="Technologies">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a className="project-link" href={project.link || "#contact"} target={project.link ? "_blank" : undefined} rel={project.link ? "noreferrer" : undefined}>
                {project.link ? "View source" : "Ask about this project"} <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
