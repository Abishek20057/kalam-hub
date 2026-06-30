"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionOptions extends IntersectionObserverInit {
  /** Once true, stop observing (default true — most scroll-reveal animations only fire once). */
  triggerOnce?: boolean;
}

/**
 * KalamHub — useIntersection Hook
 *
 * Wraps IntersectionObserver for scroll-triggered animations (Architecture
 * Doc Section 8.2 — fade-up cards, count-up stats, journey steps, etc.)
 * and for lazy-mounting client components like CountUpNumber only when
 * they enter the viewport (Performance Strategy, Section 12).
 */
export function useIntersection<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionOptions = {},
) {
  const { triggerOnce = true, threshold = 0.2, root, rootMargin } = options;
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
  if (!entry) return;

  if (entry.isIntersecting) {
    setIsIntersecting(true);

    if (triggerOnce) {
      observer.unobserve(node);
    }
  } else if (!triggerOnce) {
    setIsIntersecting(false);
  }
});

    observer.observe(node);
    return () => observer.disconnect();
  }, [triggerOnce, threshold, root, rootMargin]);

  return { ref, isIntersecting };
}
