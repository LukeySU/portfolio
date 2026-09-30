import React from "react";
import "../styles/Experience.css";

const roles = [
  {
    period: "Mar 2026 — Present",
    role: "Infrastructure Engineer",
    company: "Stock Spirits Group",
    description:
      "Now responsible for the day-to-day reliability of a hybrid on-premises and Azure environment.",
    highlights: [
      "Develop infrastructure and operational automation with Terraform, PowerShell, and Python.",
      "Maintain CI/CD workflows in GitLab CI and Azure DevOps Pipelines.",
      "Support monitoring, backups, upgrades, and core services including Active Directory, DNS, and IIS.",
    ],
    technologies: [
      "VMware",
      "Azure",
      "Windows Server",
      "Linux",
      "Terraform",
      "PowerShell",
      "GitLab CI",
    ],
  },
  {
    period: "Oct 2022 — Feb 2026",
    role: "Associate Infrastructure Engineer",
    company: "Capgemini Poland",
    description:
      "Promoted from monitoring into engineering, working hands-on across cloud and on-premises systems.",
    highlights: [
      "Automated provisioning and maintenance with Python, Bash, Terraform, Ansible, and CI/CD pipelines.",
      "Maintained monitoring and alerting for AWS, Google Cloud, and on-premises systems.",
      "Investigated infrastructure and network incidents and implemented reliability improvements.",
    ],
    technologies: ["Python", "Terraform", "Ansible", "AWS", "Kubernetes"],
  },
  {
    period: "Feb 2022 — Oct 2022",
    role: "Infrastructure Monitoring Analyst",
    company: "Capgemini Poland",
    description:
      "Where it started: supporting critical infrastructure and cloud services in a 24/7 operations team.",
    highlights: [
      "Investigated and escalated infrastructure incidents.",
      "Tracked data transfers and prepared performance reports.",
      "Maintained incident records and operational documentation.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-inner">
        <div className="experience-heading" data-reveal>
          <p className="section-kicker"><span className="section-index" aria-hidden="true">03 /</span> Experience</p>
          <h2>
            From monitoring to <span>infrastructure ownership.</span>
          </h2>
          <p>
            A hands-on path through operations, automation, cloud, and hybrid
            infrastructure.
          </p>
        </div>

        <div className="experience-timeline">
          {roles.map((item, index) => (
            <article
              className="experience-item"
              key={`${item.company}-${item.role}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` }}
            >
              <div className="experience-marker" aria-hidden="true">
                <span>0{index + 1}</span>
              </div>
              <div className="experience-card">
                <div className="experience-meta">
                  <p className="experience-period">{item.period}</p>
                  <p className="experience-company">{item.company}</p>
                </div>
                <div className="experience-content">
                  <h3>{item.role}</h3>
                  <p className="experience-description">{item.description}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {item.technologies && (
                    <div className="experience-technologies" aria-label="Technologies">
                      {item.technologies.map((technology) => (
                        <span className="tech-chip" key={technology}>{technology}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
