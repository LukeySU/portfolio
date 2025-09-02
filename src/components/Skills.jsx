import React from "react";
import { 
  FaDocker, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, 
  FaAws, FaGitAlt, FaLinux, FaCode, FaServer, FaTools 
} from "react-icons/fa";
import "../styles/Skills.css";

const skillsGroups = [
  {
    title: "Containers & Automation",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Ansible", icon: <FaCode /> },
      { name: "Kubernetes", icon: <FaCode /> },
      { name: "Terraform", icon: <FaCode /> },
      { name: "CI/CD", icon: <FaGitAlt /> }
    ]
  },
  {
    title: "Programming & Scripting",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "SQL", icon: <FaCode /> },
      { name: "Bash/Shell scripting", icon: <FaLinux /> }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "Responsive Design", icon: <FaCode /> }
    ]
  },
  {
    title: "Infrastructure & Monitoring",
    skills: [
      { name: "System monitoring", icon: <FaServer /> },
      { name: "Application support", icon: <FaTools /> },
      { name: "Server administration", icon: <FaLinux /> },
      { name: "Cloud services", icon: <FaAws /> },
      { name: "Automation & scripting", icon: <FaCode /> },
      { name: "Infrastructure as Code", icon: <FaCode /> },
      { name: "CI/CD pipelines", icon: <FaGitAlt /> },
      { name: "Configuration management", icon: <FaCode /> },
      { name: "Advanced scripting", icon: <FaCode /> },
      { name: "Hybrid & multi-cloud", icon: <FaAws /> },
      { name: "IAM in AWS", icon: <FaAws /> }
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
            <div className="skills-cards">
              {group.skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;








