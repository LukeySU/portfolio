import React from "react";
import "../styles/Experience.css";

const roles = [
  {
    period: "Mar 2026 — Present",
    role: "Infrastructure Engineer",
    company: "Stock Spirits Group",
    description:
      "I administer hybrid infrastructure across VMware, Linux, Windows Server, and Microsoft Azure, with a focus on dependable day-to-day operations.",
    highlights: [
      "Developing infrastructure and operational automation with Terraform, PowerShell, and Python.",
      "Maintaining CI/CD workflows in GitLab CI and Azure DevOps Pipelines.",
      "Supporting monitoring, backups, upgrades, and core services including Active Directory, DNS, and IIS.",
    ],
    technologies: ["VMware", "Azure", "Linux", "Terraform", "GitLab CI"],
  },
  {
    period: "Oct 2022 — Feb 2026",
    role: "Associate Infrastructure Engineer",
    company: "Capgemini Poland",
    description:
      "I worked across cloud and on-premises environments, combining systems administration, observability, and automation.",
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
      "I supported critical infrastructure and cloud services in a 24/7 operations environment.",
    highlights: [
      "Investigated and escalated infrastructure incidents.",
      "Tracked data transfers and prepared performance reports.",
      "Maintained incident records and operational documentation.",
    ],
    technologies: ["Monitoring", "Incident response", "Operations"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-inner">
        <div className="experience-heading">
          <p className="section-kicker">Experience</p>
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
            <article className="experience-item" key={`${item.company}-${item.role}`}>
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
                  <div className="experience-technologies" aria-label="Technologies">
                    {item.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
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
