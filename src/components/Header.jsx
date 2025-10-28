import React, { useState } from "react";
import logoImg from "../assets/ls4.png";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-container">
          <a href="/">
            <img src={logoImg} alt="Logo" className="logo-img" />
          </a>
        </div>

        <nav className={`nav ${menuOpen ? "show" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Me</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;

