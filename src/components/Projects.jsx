import React from "react";
import "../styles/Projects.css";
import portoImg from "../assets/porto.png";
import appImg from "../assets/app.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and CSS, fully responsive. CI/CD pipeline with GitHub Actions and hosted on Netlify. Monitoring uptime with Shields.io and Sentry.",
    link: "https://your-portfolio.netlify.app",
    image: portoImg
  },
  {
    title: "Weather App (Streamlit)",
    description:
      "Weather forecast app built with Streamlit and OpenWeatherMap API. Dynamic backgrounds, animations, and SRE-inspired metrics. Hosted on Streamlit Cloud.",
    link: "https://your-weather-app.streamlit.app",
    image: appImg
  },
  // {
  //   title: "Todo List",
  //   description:
  //     "A simple Todo list with CRUD functionality and local storage.",
  //   link: "#",
  //   image: appImg
  // }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <img
              src={proj.image}
              alt={proj.title}
              className="project-image"
            />
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
            <a
              href={proj.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
