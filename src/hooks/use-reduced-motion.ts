"use client";

import { useEffect, useState } from "react";

/**
 * KalamHub — useReducedMotion Hook
 *
 * Required by Architecture Doc Section 8.5: "Always wrap animations in
 * prefers-reduced-motion check via Framer Motion's useReducedMotion()
 * hook." This is a lightweight standalone version for places that need
 * the value outside a Framer Motion component (e.g. deciding whether to
 * mount a CSS-only background animation at all).
 *
 * Note: inside Framer Motion components, prefer importing
 * `useReducedMotion` directly from "framer-motion" — this hook is for
 * non-Framer contexts only, to avoid pulling the library in unnecessarily.
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}
