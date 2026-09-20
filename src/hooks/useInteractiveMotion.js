import { useEffect } from "react";

const clamp = (value, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

function useInteractiveMotion() {
  useEffect(() => {
    const header = document.querySelector(".header");
    const timeline = document.querySelector(".experience-timeline");
    const hero = document.querySelector(".hero");
    const projectCards = [...document.querySelectorAll(".project-card")];
    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: fine)").matches;
    const requestFrame = window.requestAnimationFrame?.bind(window) ??
      ((callback) => window.setTimeout(callback, 16));
    const cancelFrame = window.cancelAnimationFrame?.bind(window) ??
      window.clearTimeout.bind(window);

    let scrollFrame;
    let heroFrame;

    const updateScrollEffects = () => {
      if (scrollFrame) {
        return;
      }

      scrollFrame = requestFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const pageProgress =
          scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

        header?.style.setProperty(
          "--scroll-progress",
          `${clamp(pageProgress) * 100}%`,
        );

        if (timeline) {
          if (prefersReducedMotion) {
            timeline.style.setProperty("--timeline-progress", "100%");
          } else {
            const rect = timeline.getBoundingClientRect();
            const start = window.innerHeight * 0.82;
            const end = window.innerHeight * 0.18;
            const distance = rect.height + start - end;
            const progress = distance > 0 ? (start - rect.top) / distance : 0;

            timeline.style.setProperty(
              "--timeline-progress",
              `${clamp(progress) * 100}%`,
            );
          }
        }

        scrollFrame = undefined;
      });
    };

    updateScrollEffects();
    window.addEventListener("scroll", updateScrollEffects, { passive: true });
    window.addEventListener("resize", updateScrollEffects);

    const cleanups = [];

    if (!prefersReducedMotion && hasFinePointer && hero) {
      const handleHeroPointer = (event) => {
        const rect = hero.getBoundingClientRect();
        const x = clamp((event.clientX - rect.left) / rect.width);
        const y = clamp((event.clientY - rect.top) / rect.height);

        if (heroFrame) {
          cancelFrame(heroFrame);
        }

        heroFrame = requestFrame(() => {
          hero.classList.add("is-pointer-active");
          hero.style.setProperty("--pointer-x", `${x * 100}%`);
          hero.style.setProperty("--pointer-y", `${y * 100}%`);
          hero.style.setProperty("--portrait-shift-x", `${(x - 0.5) * 10}px`);
          hero.style.setProperty("--portrait-shift-y", `${(y - 0.5) * 8}px`);
          heroFrame = undefined;
        });
      };

      const resetHeroPointer = () => {
        hero.classList.remove("is-pointer-active");
        hero.style.setProperty("--portrait-shift-x", "0px");
        hero.style.setProperty("--portrait-shift-y", "0px");
      };

      hero.addEventListener("pointermove", handleHeroPointer);
      hero.addEventListener("pointerleave", resetHeroPointer);
      cleanups.push(() => {
        hero.removeEventListener("pointermove", handleHeroPointer);
        hero.removeEventListener("pointerleave", resetHeroPointer);
      });
    }

    if (!prefersReducedMotion && hasFinePointer) {
      projectCards.forEach((card) => {
        const handleCardPointer = (event) => {
          const rect = card.getBoundingClientRect();
          const x = clamp((event.clientX - rect.left) / rect.width);
          const y = clamp((event.clientY - rect.top) / rect.height);

          card.classList.add("is-pointer-active");
          card.style.setProperty("--card-rotate-x", `${(0.5 - y) * 3}deg`);
          card.style.setProperty("--card-rotate-y", `${(x - 0.5) * 3.6}deg`);
          card.style.setProperty("--card-glow-x", `${x * 100}%`);
          card.style.setProperty("--card-glow-y", `${y * 100}%`);
        };

        const resetCardPointer = () => {
          card.classList.remove("is-pointer-active");
          card.style.setProperty("--card-rotate-x", "0deg");
          card.style.setProperty("--card-rotate-y", "0deg");
        };

        card.addEventListener("pointermove", handleCardPointer);
        card.addEventListener("pointerleave", resetCardPointer);
        cleanups.push(() => {
          card.removeEventListener("pointermove", handleCardPointer);
          card.removeEventListener("pointerleave", resetCardPointer);
        });
      });
    }

    return () => {
      window.removeEventListener("scroll", updateScrollEffects);
      window.removeEventListener("resize", updateScrollEffects);
      cleanups.forEach((cleanup) => cleanup());

      if (scrollFrame) {
        cancelFrame(scrollFrame);
      }
      if (heroFrame) {
        cancelFrame(heroFrame);
      }
    };
  }, []);
}

export default useInteractiveMotion;
