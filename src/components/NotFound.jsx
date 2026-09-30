import React from "react";
import BrandMark from "./BrandMark";
import TermLink from "./TermLink";
import "../styles/NotFound.css";

function NotFound({ path }) {
  React.useEffect(() => {
    const previousTitle = document.title;
    document.title = "404 — Page not found | Łukasz Sulowski";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="not-found">
      <a className="brand not-found-brand" href="/" aria-label="Łukasz Sulowski home">
        <BrandMark />
        <span className="brand-name">Łukasz Sulowski</span>
      </a>

      <main className="not-found-main">
        <div className="not-found-window">
          <div className="not-found-bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>~/404</span>
          </div>
          <div className="not-found-output">
            <p>
              <span className="not-found-prompt">$</span> cd {path}
            </p>
            <p className="not-found-error">
              bash: cd: {path}: No such file or directory
            </p>
            <p>
              <span className="not-found-prompt">$</span>
              <span className="not-found-cursor" aria-hidden="true" />
            </p>
          </div>
        </div>

        <h1>
          Page not found. <span>Let’s get you back.</span>
        </h1>
        <div className="not-found-actions">
          <TermLink variant="primary" href="/">
            cd ~
          </TermLink>
          <TermLink href="/#projects">See projects</TermLink>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
