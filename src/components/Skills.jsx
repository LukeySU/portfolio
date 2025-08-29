import React from "react";
import "../styles/Skills.css";

const skillsGroups = [
  {
    title: "Containers & Automation",
    skills: ["Docker", "Ansible", "Kubernetes", "Terraform"]
  },
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript"]
  },
  {
    title: "Frontend",
    skills: ["React", "CSS", "HTML"]
  },
  {
    title: "Infrastructure & Monitoring",
    skills: [
      "System monitoring and performance optimization",
      "Application support and incident resolution",
      "Server administration (Linux, Windows)",
      "Cloud services and virtualization (AWS, Azure, VMware)",
      "Automation and scripting for efficient operations"
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
                <li key={i}>
                  <span className="bullet"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;





