import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Łukasz Sulowski</h1>
      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
