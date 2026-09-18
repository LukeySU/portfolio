import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer-brand" aria-label="Back to top">
        <img src="/ls-mark.svg" alt="" />
      </a>
      <p>Designed &amp; built by Łukasz Sulowski</p>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
