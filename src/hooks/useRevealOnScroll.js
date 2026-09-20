import { useEffect } from "react";

function useRevealOnScroll() {
  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-reveal]")];

    if (elements.length === 0) {
      return undefined;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (
      prefersReducedMotion ||
      typeof window.IntersectionObserver !== "function"
    ) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

export default useRevealOnScroll;
