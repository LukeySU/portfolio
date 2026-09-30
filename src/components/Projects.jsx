import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import portoImg from "../assets/portfolio-current.webp";
import portoImgSmall from "../assets/portfolio-current-700.webp";
import appImg from "../assets/weather-app-preview.webp";
import appImgSmall from "../assets/weather-app-preview-700.webp";
import reliabilityImg from "../assets/reliability-lab.svg";
import TermLink from "./TermLink";
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
    caseStudy: "/case-study/kubernetes-reliability-lab",
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
    imageSrcSet: `${portoImgSmall} 700w, ${portoImg} 1400w`,
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
    imageSrcSet: `${appImgSmall} 700w, ${appImg} 1400w`,
    imageWidth: 1400,
    imageHeight: 760,
    imageAlt: "Weather forecast dashboard showing a five-day forecast",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-heading" data-reveal>
        <div>
          <p className="section-kicker"><span className="section-index" aria-hidden="true">02 /</span> Selected work</p>
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
        {projects.map((project, index) => (
          <article
            key={project.number}
            className={`project-card ${project.featured ? "featured" : ""}`}
            data-reveal
            style={{ "--reveal-delay": `${index * 80}ms` }}
          >
            <a
              className="project-visual"
              href={project.caseStudy || project.link || "#contact"}
              target={!project.caseStudy && project.link ? "_blank" : undefined}
              rel={!project.caseStudy && project.link ? "noreferrer" : undefined}
              aria-label={
                project.caseStudy
                  ? `Read the ${project.title} case study`
                  : project.link
                  ? `View ${project.title} on GitHub`
                  : `Contact me about ${project.title}`
              }
            >
              <img
                src={project.image}
                srcSet={project.imageSrcSet}
                sizes={project.imageSrcSet ? "(max-width: 760px) 88vw, 610px" : undefined}
                alt={project.imageAlt}
                width={project.imageWidth}
                height={project.imageHeight}
                loading="lazy"
                decoding="async"
              />
              <span className="project-arrow">
                {project.caseStudy ? (
                  <FaArrowRight aria-hidden="true" />
                ) : (
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                )}
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
                  <span className="tech-chip" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.caseStudy && (
                  <TermLink variant="primary" size="small" href={project.caseStudy}>
                    View case study
                  </TermLink>
                )}
                <TermLink
                  size="small"
                  href={project.link || "#contact"}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noreferrer" : undefined}
                >
                  {project.link ? "View source" : "Ask about this project"}
                </TermLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
