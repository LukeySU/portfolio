import React, { useState } from "react";
import logoImg from "../assets/ls4.png";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <div className="logo-container">
          <img src={logoImg} alt="Logo" className="logo-img" />
        </div>

        {/* Nawigacja */}
        <nav className={`nav ${menuOpen ? "show" : ""}`}>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Hamburger */}
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

