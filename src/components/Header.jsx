import React, { useState } from "react";
import "../styles/Header.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Expertise" },
  { href: "#projects", label: "Projects" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Łukasz Sulowski home"
        >
          <img className="brand-mark" src="/ls-mark.svg" alt="" />
          <span className="brand-name">Łukasz Sulowski</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`nav ${menuOpen ? "show" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let’s connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
