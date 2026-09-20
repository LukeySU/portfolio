import React from "react";

function BrandMark({ className = "" }) {
  return (
    <svg
      className={`brand-mark ${className}`.trim()}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="brand-mark-frame"
        d="M17 4h30l13 13v30L47 60H17L4 47V17L17 4Z"
        fill="#101712"
        stroke="#d5fb59"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        className="brand-mark-prompt"
        d="m17.5 20.5 11.5 11-11.5 11"
        fill="none"
        stroke="#d5fb59"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="brand-mark-cursor"
        d="M34 43h13"
        fill="none"
        stroke="#f4f4ec"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default BrandMark;
