import React from "react";
import logoImg from "../assets/LS3.png";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
  <div className="logo-container">
    <img src={logoImg} alt="Logo" className="logo-img" />
    <h1 className="logo">Łukasz Sulowski</h1>
  </div>
  <nav className="nav">
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
  );
}

export default Header;
