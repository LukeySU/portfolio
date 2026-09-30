import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import TermLink from "./TermLink";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-panel" data-reveal>
        <div className="contact-copy">
          <p className="section-kicker"><span className="section-index" aria-hidden="true">05 /</span> Open to new opportunities</p>
          <h2>
            Let’s build systems <span>teams can trust.</span>
          </h2>
          <p>
            Looking for an infrastructure engineer focused on automation,
            reliability, and practical operations? Let’s talk.
          </p>
          <p className="contact-availability">
            <span aria-hidden="true" /> Based in Poland · Open to remote &amp; hybrid
          </p>
        </div>
        <TermLink
          variant="ink"
          className="contact-email"
          href="mailto:lukasz.sulowski@outlook.pl"
        >
          Let’s connect
        </TermLink>
      </div>
      <div
        className="contact-socials"
        aria-label="Social profiles"
        data-reveal
        style={{ "--reveal-delay": "100ms" }}
      >
        <a
          href="https://www.linkedin.com/in/lukaszsulowski"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin aria-hidden="true" />
          <span>LinkedIn</span>
          <span className="social-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
        <a href="https://github.com/LukeySU" target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" />
          <span>GitHub</span>
          <span className="social-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
        <a href="mailto:lukasz.sulowski@outlook.pl">
          <FaEnvelope aria-hidden="true" />
          <span>Email</span>
          <span className="social-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
