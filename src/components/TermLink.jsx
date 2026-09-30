import React from "react";

function TermLink({ children, variant, size, className = "", ...props }) {
  const classes = [
    "term-btn",
    variant && `term-btn--${variant}`,
    size && `term-btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...props}>
      <span className="term-prompt" aria-hidden="true">&gt;</span>
      <span className="term-label">
        {children}
        <span className="term-cursor" aria-hidden="true" />
      </span>
    </a>
  );
}

export default TermLink;
