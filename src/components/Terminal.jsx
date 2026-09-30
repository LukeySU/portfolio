import React from "react";
import "../styles/Terminal.css";

export const OPEN_TERMINAL_EVENT = "open-terminal";

const EMAIL = "lukasz.sulowski@outlook.pl";
const SECTIONS = ["about", "projects", "experience", "skills", "contact"];
const LINKS = {
  github: "https://github.com/LukeySU",
  linkedin: "https://www.linkedin.com/in/lukaszsulowski",
};
const COMMANDS = [
  "help",
  "whoami",
  "ls",
  ...SECTIONS,
  "case-study",
  "email",
  "github",
  "linkedin",
  "date",
  "clear",
  "exit",
];
const WELCOME = [
  { type: "out", text: "Welcome to lukaszsulowski.eu" },
  { type: "out", text: "Type `help` to see available commands." },
];

const HINT_DELAY_MS = 12000;
const HINT_DURATION_MS = 10000;

const isTypingTarget = (element) =>
  element instanceof HTMLElement &&
  (element.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(element.tagName));

function Terminal() {
  const [open, setOpen] = React.useState(false);
  const [lines, setLines] = React.useState(WELCOME);
  const [value, setValue] = React.useState("");
  const [history, setHistory] = React.useState([]);
  const [historyIndex, setHistoryIndex] = React.useState(-1);
  const [showHint, setShowHint] = React.useState(false);
  const inputRef = React.useRef(null);
  const outputRef = React.useRef(null);
  const returnFocusRef = React.useRef(null);

  const dismissHint = React.useCallback(() => setShowHint(false), []);

  const openTerminal = React.useCallback(() => {
    returnFocusRef.current = document.activeElement;
    dismissHint();
    setOpen(true);
  }, [dismissHint]);

  // "psst" hint on every page load: desktop only (the terminal needs a keyboard), after the visitor stays a while.
  React.useEffect(() => {
    const hasKeyboardPointer =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasKeyboardPointer) return undefined;

    let hideTimer;
    const showTimer = window.setTimeout(() => {
      if (document.visibilityState !== "visible") return;
      setShowHint(true);
      hideTimer = window.setTimeout(() => setShowHint(false), HINT_DURATION_MS);
    }, HINT_DELAY_MS);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const closeTerminal = React.useCallback(() => {
    setOpen(false);
    returnFocusRef.current?.focus?.();
  }, []);

  React.useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape" && open) {
        closeTerminal();
        return;
      }
      // event.code catches layouts where the backquote/tilde key is a dead key (event.key === "Dead").
      const isTildeKey = event.key === "~" || event.key === "`" || event.code === "Backquote";
      if (isTildeKey && !open && !isTypingTarget(event.target)) {
        event.preventDefault();
        openTerminal();
      }
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener(OPEN_TERMINAL_EVENT, openTerminal);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener(OPEN_TERMINAL_EVENT, openTerminal);
    };
  }, [open, openTerminal, closeTerminal]);

  React.useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  React.useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [lines]);

  const goToSection = (section) => {
    window.setTimeout(() => {
      closeTerminal();
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
    return [{ type: "out", text: `Opening ${section}...` }];
  };

  const run = (raw) => {
    const input = raw.trim();
    const [command, ...args] = input.toLowerCase().split(/\s+/);
    const target = command === "cd" ? args[0]?.replace(/^\.?\//, "") : command;

    if (!input) return [];
    if (SECTIONS.includes(target)) return goToSection(target);

    switch (command) {
      case "help":
        return [
          { type: "out", text: "Available commands:" },
          { type: "out", text: "  whoami             who is behind this site" },
          { type: "out", text: "  ls                 list sections" },
          { type: "out", text: "  about | projects | experience | skills | contact" },
          { type: "out", text: "                     jump to a section (or: cd <section>)" },
          { type: "out", text: "  case-study         open the Kubernetes Reliability Lab case study" },
          { type: "out", text: "  email              copy my email address" },
          { type: "out", text: "  github | linkedin  open my profiles" },
          { type: "out", text: "  date | clear | exit" },
        ];
      case "whoami":
        return [
          { type: "out", text: "Łukasz Sulowski — Infrastructure Engineer" },
          { type: "out", text: "Hybrid infrastructure, automation, and observability. Based in Poland." },
        ];
      case "ls":
        return [{ type: "out", text: [...SECTIONS, "case-study"].join("   ") }];
      case "case-study":
        window.setTimeout(() => {
          window.location.href = "/case-study/kubernetes-reliability-lab";
        }, 350);
        return [{ type: "out", text: "Opening case study..." }];
      case "email":
        navigator.clipboard?.writeText(EMAIL).catch(() => {});
        return [{ type: "out", text: `${EMAIL} (copied to clipboard)` }];
      case "github":
      case "linkedin":
        window.open(LINKS[command], "_blank", "noopener,noreferrer");
        return [{ type: "out", text: `Opening ${LINKS[command]}` }];
      case "date":
        return [{ type: "out", text: new Date().toString() }];
      case "sudo":
        return [{ type: "err", text: "Permission denied. Try `contact` instead." }];
      case "exit":
        window.setTimeout(closeTerminal, 150);
        return [{ type: "out", text: "Bye." }];
      default:
        return [{ type: "err", text: `command not found: ${command}. Type \`help\`.` }];
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = value;
    setValue("");
    setHistoryIndex(-1);
    if (input.trim()) setHistory((previous) => [input, ...previous].slice(0, 20));

    if (input.trim().toLowerCase() === "clear") {
      setLines([]);
      return;
    }
    setLines((previous) => [...previous, { type: "in", text: input }, ...run(input)]);
  };

  const handleInputKey = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const matches = COMMANDS.filter((command) => command.startsWith(value.trim().toLowerCase()));
      if (value.trim() && matches.length === 1) setValue(matches[0]);
      else if (value.trim() && matches.length > 1) {
        setLines((previous) => [...previous, { type: "in", text: value }, { type: "out", text: matches.join("   ") }]);
      }
    } else if (event.key === "ArrowUp" && history.length) {
      event.preventDefault();
      const next = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(next);
      setValue(history[next]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = historyIndex - 1;
      setHistoryIndex(Math.max(next, -1));
      setValue(next >= 0 ? history[next] : "");
    }
  };

  if (!open) {
    if (!showHint) return null;
    return (
      <div className="terminal-hint" role="status">
        <button type="button" className="terminal-hint-open" onClick={openTerminal}>
          <span className="terminal-prompt">psst…</span> press <kbd>~</kbd> to open a terminal
        </button>
        <button
          type="button"
          className="terminal-hint-close"
          onClick={dismissHint}
          aria-label="Dismiss terminal hint"
        >
          ×
        </button>
      </div>
    );
  }

  return (
    <div className="terminal-overlay" onMouseDown={(event) => event.target === event.currentTarget && closeTerminal()}>
      <div className="terminal-window" role="dialog" aria-modal="true" aria-label="Terminal">
        <div className="terminal-bar">
          <button type="button" className="terminal-close" onClick={closeTerminal} aria-label="Close terminal" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <span>guest@lukaszsulowski: ~</span>
        </div>
        <div className="terminal-output" ref={outputRef} aria-live="polite" onClick={() => inputRef.current?.focus()}>
          {lines.map((line, index) => (
            <p key={index} className={`terminal-line terminal-line--${line.type}`}>
              {line.type === "in" && <span className="terminal-prompt">guest@lukaszsulowski:~$ </span>}
              {line.text}
            </p>
          ))}
          <form className="terminal-input-row" onSubmit={handleSubmit}>
            <label className="terminal-prompt" htmlFor="terminal-input">
              guest@lukaszsulowski:~$
            </label>
            <input
              id="terminal-input"
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={handleInputKey}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
