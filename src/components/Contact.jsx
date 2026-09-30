import React from "react";
import { FaCheck, FaEnvelope, FaGithub, FaLinkedin, FaRegCopy } from "react-icons/fa";
import TermLink from "./TermLink";
import "../styles/Contact.css";

const EMAIL = "lukasz.sulowski@outlook.pl";

function Contact() {
  const [copied, setCopied] = React.useState(false);
  const resetTimer = React.useRef();

  React.useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

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
        <div className="contact-actions">
          <TermLink variant="ink" className="contact-email" href={`mailto:${EMAIL}`}>
            Let’s connect
          </TermLink>
          <button type="button" className="contact-copy-email" onClick={copyEmail}>
            <span aria-live="polite">{copied ? "Copied to clipboard" : EMAIL}</span>
            {copied ? <FaCheck aria-hidden="true" /> : <FaRegCopy aria-hidden="true" />}
          </button>
        </div>
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
        <a href={`mailto:${EMAIL}`}>
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
