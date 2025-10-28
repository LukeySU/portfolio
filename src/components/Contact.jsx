import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h3>Contact Me</h3>
      <div className="contact-cards">
        {/* Mail */}
        <div className="contact-card">
          <a
            href="mailto:lukasz.sulowski@data.pl"
            aria-label="Wyślij e-mail do Łukasza"
            title="Wyślij e-mail"
            className="contact-link"
          >
            <FaEnvelope className="contact-icon" />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <FaLinkedin
            className="contact-icon"
            title="Odwiedź LinkedIn"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/lukaszsulowski", "_blank", "noopener,noreferrer")
            }
          />
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <FaGithub
            className="contact-icon"
            title="Zobacz profil GitHub"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://github.com/LukeySU", "_blank", "noopener,noreferrer")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;







