import React, { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import "../styles/Header.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Expertise" },
  { href: "#projects", label: "Projects" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      ...links.map((link) => link.href.slice(1)),
      "contact",
    ];

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let currentSection = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

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
          <BrandMark />
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
            <a
              className={
                activeSection === link.href.slice(1) ? "active" : undefined
              }
              href={link.href}
              key={link.href}
              onClick={closeMenu}
              aria-current={
                activeSection === link.href.slice(1) ? "location" : undefined
              }
            >
              {link.label}
            </a>
          ))}
          <a
            className={`nav-contact ${activeSection === "contact" ? "active" : ""}`}
            href="#contact"
            onClick={closeMenu}
            aria-current={activeSection === "contact" ? "location" : undefined}
          >
            Let’s connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
