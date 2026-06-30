"use client";

import { useEffect, useState } from "react";

/**
 * KalamHub — useScrollAnimation Hook
 *
 * Tracks whether the page has been scrolled past a threshold. Backs the
 * Navbar's scroll-triggered background transition (Architecture Doc 4.2:
 * "background fades from transparent to blur/surface on scroll past 80px").
 *
 * Uses a passive scroll listener per the Performance Strategy requirement
 * ("Scroll listener uses passive event listener").
 */
export function useScrollAnimation(threshold = 80) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
