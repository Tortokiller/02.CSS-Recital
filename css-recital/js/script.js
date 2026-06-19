/**
 * CSS Recital — script.js
 * ------------------------------------------------------------
 * This file exists on purpose, and only for what CSS genuinely
 * can't do alone: persist a click across time (the transpose
 * button) and watch the page scroll (the reveal-on-scroll).
 * Everything else — the spinning vinyl, the pause toggle, the
 * stage lights — is plain CSS. No frameworks, no build step.
 */

(() => {
  "use strict";

  const root = document.documentElement;

  // ---- 1. Transpose: nudge the shared --hue custom property ----
  // The same --hue variable also drives the hero title and the
  // stage lights, so one click recolours the whole performance.
  const transposeBtn = document.getElementById("transpose-btn");
  let hue = 32;

  if (transposeBtn) {
    transposeBtn.addEventListener("click", () => {
      hue = (hue + 40) % 360;
      root.style.setProperty("--hue", hue);
    });
  }

  // ---- 2. Reveal each movement as it enters the viewport ----
  const movements = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && movements.length && !reduceMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    movements.forEach((section) => observer.observe(section));
  } else {
    // No observer support, or the audience asked for stillness —
    // show every movement immediately instead of leaving it hidden.
    document.body.classList.add("no-js");
  }
})();
