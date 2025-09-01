import React from "react";
import "../styles/Skills.css";

const skillsGroups = [
  {
    title: "Containers & Automation:",
    skills: ["Docker", "Ansible", "Kubernetes", "Terraform", "CI/CD"]
  },
  {
    title: "Programming Languages:",
    skills: ["Python", "JavaScript", "SQL", "Bash/Shell scripting"]
  },
  {
    title: "Frontend:",
    skills: ["React", "CSS", "HTML:", "Responsive Design", ]
  },
  {
    title: "Infrastructure & Monitoring:",
    skills: [
      "System monitoring and performance optimization",
      "Application support and incident resolution",
      "Server administration (Linux, Windows)",
      "Cloud services and virtualization (AWS, GCP, VMware)",
      "Automation and scripting for efficient operations",
      "Infrastructure as Code",
      "CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins)",
      "Configuration management (Ansible)",
      "Bash, Python, PowerShell advanced scripting",
      "Hybrid & multi-cloud environments",
      "IAM (Identity & Access Management) in AWS"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h3>Skills & Technologies</h3>

      <div className="skills-groups-container">
        {skillsGroups.map((group, gIndex) => (
          <div key={gIndex} className="skills-group">
            <h4>{group.title}</h4>
            <ul className="skills-list">
              {group.skills.map((skill, i) => (
                <li key={i}>{skill}</li>   
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;






