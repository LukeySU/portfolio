import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="#about" className="footer-brand">
        LS<span>.</span>
      </a>
      <p>Designed &amp; built by Łukasz Sulowski</p>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
