import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h3>Contact Me</h3>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>lukasz.sulowski@outlook.com</span>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>+48 733 944 049</span>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Lublin, Poland</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;




