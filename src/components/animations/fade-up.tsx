"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * KalamHub — FadeUp
 * Reusable scroll/load fade-up wrapper per Architecture Doc Section 8.
 * Respects prefers-reduced-motion (Section 8.5) by skipping the
 * transform when the user has motion reduction enabled.
 */
export interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  /** Animate on scroll into view (default) vs. immediately on mount. */
  viewportTriggered?: boolean;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  viewportTriggered = true,
  className,
}: FadeUpProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={viewportTriggered ? undefined : "visible"}
      whileInView={viewportTriggered ? "visible" : undefined}
      viewport={viewportTriggered ? { once: true, amount: 0.2 } : undefined}
      variants={variants}
      transition={{
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
