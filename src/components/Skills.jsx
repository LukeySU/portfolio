import React from "react";
import "../styles/Skills.css";

const skillsGroups = [
  {
    title: "Virtualization & Backup",
    skills: ["VMware vSphere", "vCenter", "ESXi", "Proxmox VE", "Hyper-V", "Veeam Backup & Replication"],
  },
  {
    title: "Cloud & Platforms",
    skills: ["Microsoft Azure", "AWS", "IaaS / PaaS", "Azure networking", "Cloud access & security"],
  },
  {
    title: "Systems & Networking",
    skills: ["Linux: SUSE, Debian", "Windows Server", "Active Directory", "Group Policy (GPO)", "DNS", "IIS", "TCP/IP, VPNs & Firewalls"],
  },
  {
    title: "Automation & Delivery",
    skills: ["Terraform", "Docker", "Ansible", "Kubernetes", "CI/CD", "GitLab CI", "Azure DevOps Pipelines", "PowerShell"],
  },
  {
    title: "Observability & Operations",
    skills: ["Zabbix", "Grafana", "LibreNMS", "Datadog", "Alerting & incident response", "Performance monitoring"],
  },
  {
    title: "Development & Scripting",
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Responsive Design", "Python", "Bash / Shell scripting", "SQL"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">
            <span className="section-index" aria-hidden="true">04 /</span> What I work with
          </p>
          <h2>The tools behind <span>reliable systems.</span></h2>
          <p className="section-intro">
            Hands-on experience across infrastructure, cloud platforms,
            automation, observability, and software development.
          </p>
        </div>
        <div className="skills-groups-container">
          {skillsGroups.map((group, index) => (
            <article className="skills-group" key={group.title} data-reveal>
              <h3>
                <span className="group-index" aria-hidden="true">0{index + 1}</span>
                {group.title}
              </h3>
              <ul className="skills-list" aria-label={group.title}>
                {group.skills.map((skill) => <li className="tech-chip" key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
