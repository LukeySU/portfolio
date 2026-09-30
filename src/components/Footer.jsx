import React from "react";
import { OPEN_TERMINAL_EVENT } from "./Terminal";
import "../styles/Footer.css";

const commit = __BUILD_COMMIT__;

function Footer() {
  return (
    <footer className="footer" data-reveal>
      <a href="#home" className="footer-brand" aria-label="Back to top">
        <img src="/ls-mark.svg" alt="" />
      </a>
      <div className="footer-copy">
        <p>Designed &amp; built by Łukasz Sulowski</p>
        <p className="footer-build">
          {commit ? (
            <>
              deployed{" "}
              <a
                href={`https://github.com/LukeySU/portfolio/commit/${commit}`}
                target="_blank"
                rel="noreferrer"
              >
                {commit.slice(0, 7)}
              </a>{" "}
              · {__BUILD_DATE__} · GitHub Actions → Netlify
            </>
          ) : (
            "local build"
          )}
          <span className="footer-terminal-hint">
            {" "}
            ·{" "}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_TERMINAL_EVENT))}
            >
              press <kbd>~</kbd> for a terminal
            </button>
          </span>
        </p>
      </div>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
