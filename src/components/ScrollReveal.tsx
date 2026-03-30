"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.07 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      obs.observe(el);
    });

    document
      .querySelectorAll(".sector-card, .pakket-card, .stap-card")
      .forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = `${i * 0.06}s`;
      });

    return () => obs.disconnect();
  }, []);

  return null;
}
