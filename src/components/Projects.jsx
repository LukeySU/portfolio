import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import portoImg from "../assets/portfolio-current.jpg";
import appImg from "../assets/weather-app-preview.jpg";
import reliabilityImg from "../assets/reliability-lab.svg";
import "../styles/Projects.css";

const projects = [
  {
    number: "01",
    category: "KUBERNETES · OBSERVABILITY",
    title: "Kubernetes Reliability Lab",
    description:
      "A local Kubernetes environment with repeatable Helm deployments, health checks, monitoring, alerting, and automated recovery validation.",
    tags: ["Kubernetes", "Helm", "Prometheus", "Grafana", "GitHub Actions"],
    link: "https://github.com/LukeySU/kubernetes-reliability-lab",
    image: reliabilityImg,
    imageWidth: 1400,
    imageHeight: 760,
    imageAlt: "Architecture of the Kubernetes reliability lab",
    featured: true,
  },
  {
    number: "02",
    category: "FRONTEND · SRE",
    title: "Portfolio Website",
    description:
      "A responsive React portfolio delivered through GitHub Actions, with health checks, uptime monitoring, and Sentry-based error tracking.",
    tags: ["React", "CI/CD", "Sentry"],
    link: "https://github.com/LukeySU/portfolio",
    image: portoImg,
    imageWidth: 1400,
    imageHeight: 760,
    imageAlt: "Screenshot of the portfolio website",
  },
  {
    number: "03",
    category: "PYTHON · DATA",
    title: "Weather Forecast App",
    description:
      "A Streamlit dashboard that retrieves live weather data and presents a five-day forecast with condition-based visuals.",
    tags: ["Python", "Streamlit", "OpenWeatherMap"],
    link: "https://github.com/LukeySU/weather-app-streamlit",
    image: appImg,
    imageWidth: 1400,
    imageHeight: 760,
    imageAlt: "Weather forecast dashboard showing a five-day forecast",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-heading">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2>
            <span>Useful</span> by design.
          </h2>
        </div>
        <p>
          Practical projects combining automation, observability, and
          thoughtful engineering.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.number}
            className={`project-card ${project.featured ? "featured" : ""}`}
          >
            <a
              className="project-visual"
              href={project.link || "#contact"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noreferrer" : undefined}
              aria-label={
                project.link
                  ? `View ${project.title} on GitHub`
                  : `Contact me about ${project.title}`
              }
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                width={project.imageWidth}
                height={project.imageHeight}
                loading="lazy"
                decoding="async"
              />
              <span className="project-arrow">
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </span>
            </a>
            <div className="project-copy">
              <div className="project-copy-meta">
                <p className="project-category">{project.category}</p>
                <span className="project-number">{project.number}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="project-link"
                href={project.link || "#contact"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noreferrer" : undefined}
              >
                {project.link ? "View source" : "Ask about this project"}{" "}
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
