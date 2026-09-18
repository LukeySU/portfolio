import React from "react";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="section-kicker">Have a project in mind?</p>
          <h2>Let’s build something <span>reliable.</span></h2>
          <p>I’m always glad to talk about infrastructure, automation, and good engineering.</p>
        </div>
        <a className="contact-email" href="mailto:lukasz.sulowski@outlook.pl">Say hello <FaArrowRight aria-hidden="true" /></a>
      </div>
      <div className="contact-socials" aria-label="Social profiles">
        <a href="https://www.linkedin.com/in/lukaszsulowski" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /><span>LinkedIn</span><span className="social-arrow" aria-hidden="true">↗</span></a>
        <a href="https://github.com/LukeySU" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /><span>GitHub</span><span className="social-arrow" aria-hidden="true">↗</span></a>
        <a href="mailto:lukasz.sulowski@outlook.pl"><FaEnvelope aria-hidden="true" /><span>Email</span><span className="social-arrow" aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}

export default Contact;
