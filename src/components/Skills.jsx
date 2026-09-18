import React from "react";
import { 
  FaDocker, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaAws,
  FaLinux, FaCode, FaServer, FaTools, FaNetworkWired, FaShieldAlt,
  FaBell, FaChartLine, FaTerminal, FaWindows, FaCloud
} from "react-icons/fa";
import "../styles/Skills.css";

const skillsGroups = [
  {
    title: "Virtualization & Backup",
    skills: [
      { name: "VMware vSphere", icon: <FaServer /> },
      { name: "vCenter", icon: <FaServer /> },
      { name: "ESXi", icon: <FaServer /> },
      { name: "Proxmox VE", icon: <FaServer /> },
      { name: "Hyper-V", icon: <FaServer /> },
      { name: "Veeam Backup & Recovery", icon: <FaShieldAlt /> }
    ]
  },
  {
    title: "Cloud & Platform",
    skills: [
      { name: "Microsoft Azure", icon: <FaCloud /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "IaaS / PaaS", icon: <FaCloud /> },
      { name: "Azure networking", icon: <FaNetworkWired /> },
      { name: "Cloud access & security", icon: <FaShieldAlt /> }
    ]
  },
  {
    title: "Systems & Network",
    skills: [
      { name: "Linux: SUSE, Debian", icon: <FaLinux /> },
      { name: "Windows Server", icon: <FaWindows /> },
      { name: "Active Directory", icon: <FaWindows /> },
      { name: "Group Policy (GPO)", icon: <FaWindows /> },
      { name: "DNS", icon: <FaNetworkWired /> },
      { name: "IIS", icon: <FaServer /> },
      { name: "TCP/IP, VPN & Firewall", icon: <FaNetworkWired /> }
    ]
  },
  {
    title: "Automation & Delivery",
    skills: [
      { name: "Terraform", icon: <FaCode /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Ansible", icon: <FaCode /> },
      { name: "Kubernetes", icon: <FaCode /> },
      { name: "CI/CD", icon: <FaTools /> },
      { name: "GitLab CI", icon: <FaTools /> },
      { name: "Azure DevOps Pipelines", icon: <FaTools /> },
      { name: "PowerShell", icon: <FaTerminal /> }
    ]
  },
  {
    title: "Observability & Network",
    skills: [
      { name: "Zabbix", icon: <FaChartLine /> },
      { name: "Grafana", icon: <FaChartLine /> },
      { name: "Elastic", icon: <FaBell /> },
      { name: "LibreNMS", icon: <FaChartLine /> },
      { name: "Datadog", icon: <FaChartLine /> },
      { name: "Alerting & incident response", icon: <FaBell /> },
      { name: "Performance monitoring", icon: <FaChartLine /> }
    ]
  },
  {
    title: "Development & Scripting",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Responsive Design", icon: <FaCode /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Bash & Shell", icon: <FaTerminal /> },
      { name: "SQL", icon: <FaCode /> }
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p className="section-kicker">What I work with</p>
        <h2>Tools for building <span>what lasts.</span></h2>
        <p className="section-intro">Infrastructure administration, cloud platforms, automation, observability, and frontend development.</p>
      </div>
      <div className="skills-groups-container">
        {skillsGroups.map((group, gIndex) => (
          <article key={gIndex} className="skills-group">
            <h3><span className="group-index">0{gIndex + 1}</span>{group.title}</h3>
            <div className="skills-cards">
              {group.skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;








