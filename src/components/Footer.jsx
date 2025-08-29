import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Lukasz Sulowski
    </footer>
  );
}

export default Footer;
