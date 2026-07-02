"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const animationProps = prefersReducedMotion
    ? {}
    : {
        animate: { rotate: [0, 10, 0, -10, 0] },
        transition: { duration: 30, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.14),transparent_20%)]"
        {...animationProps}
      />
      <motion.div
        className="absolute left-[-14%] top-[-14%] h-[26rem] w-[26rem] rounded-full bg-[var(--color-primary)]/18 blur-2xl"
        animate={prefersReducedMotion ? undefined : { x: [0, 12, 0], y: [0, -10, 0], opacity: [0.75, 0.96, 0.75] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-14%] top-1/4 h-[24rem] w-[24rem] rounded-full bg-[var(--color-accent)]/18 blur-2xl"
        animate={prefersReducedMotion ? undefined : { x: [0, -12, 0], y: [0, 10, 0], opacity: [0.7, 0.94, 0.7] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_45%,rgba(255,255,255,0.03))]" />
    </div>
  );
}
