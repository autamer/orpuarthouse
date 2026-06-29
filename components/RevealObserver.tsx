"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observers: IntersectionObserver[] = [];

    // Mark elements as animatable before observer fires — keeps content visible by default
    els.forEach((el) => el.classList.add("will-animate"));

    els.forEach((el) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            obs.disconnect();
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return null;
}
