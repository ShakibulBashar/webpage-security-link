"use client";
import { useEffect, useRef } from "react";

let globalObserver = null;

function getObserver() {
  if (typeof window === "undefined") return null;
  if (!globalObserver) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          } else {
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
  }
  return globalObserver;
}

export function useScrollReveal() {
  useEffect(() => {
    const obs = getObserver();
    if (!obs) return;

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((el) => obs.observe(el));

    return () => elements.forEach((el) => obs.unobserve(el));
  }, []);
}

export function useStaggerReveal(staggerMs = 120) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-reveal-child]");
    children.forEach((child, i) => {
      child.style.setProperty("--stagger-delay", `${i * staggerMs}ms`);
    });
    const obs = getObserver();
    if (obs) children.forEach((child) => obs.observe(child));
    return () => { if (obs) children.forEach((child) => obs.unobserve(child)); };
  }, []);
  return ref;
}
