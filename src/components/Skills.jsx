import React from "react";
import { 
  FaDocker, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, 
  FaAws, FaGitAlt, FaLinux, FaCode, FaServer, FaTools, FaNetworkWired, FaShieldAlt, FaBell, FaChartLine, FaTerminal
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
      { name: "CI/CD", icon: <FaTools /> }
    ]
  },
  {
    title: "Programming & Scripting",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "SQL", icon: <FaCode /> },
      { name: "Shell", icon: <FaTerminal/> },
      { name: "Bash", icon: <FaTerminal/> }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "Responsive Design", icon: <FaCode /> },
      { name: "Next.js", icon: <FaReact /> },
    ]
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Server administration", icon: <FaLinux /> },
      { name: "Cloud services (AWS, GCP)", icon: <FaAws /> },
      { name: "Virtualization (VMware, Hyper-V)", icon: <FaServer /> },
      { name: "Windows/Linux administration", icon: <FaLinux /> },
      { name: "Networking", icon: <FaNetworkWired /> }
    ]
  },
  {
    title: "Monitoring",
    skills: [
    { name: "Performance & Metrics Monitoring", icon: <FaChartLine /> },
    { name: "Alerting & Incident Response", icon: <FaBell /> },
    { name: "Network & System Reliability", icon: <FaNetworkWired /> },
    { name: "Cloud Security & Access Control", icon: <FaShieldAlt /> },
    
    
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








