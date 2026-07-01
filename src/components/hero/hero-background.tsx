"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const animationProps = prefersReducedMotion
    ? {}
    : {
        animate: { rotate: [0, 12, 0, -12, 0] },
        transition: { duration: 24, repeat: Infinity, ease: "easeInOut" },
      };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_22%)]"
        {...animationProps}
      />
      <motion.div
        className="absolute left-[-18%] top-[-18%] h-[30rem] w-[30rem] rounded-full bg-[var(--color-primary)]/18 blur-3xl"
        animate={prefersReducedMotion ? undefined : { x: [0, 24, 0], y: [0, -16, 0], opacity: [0.7, 0.95, 0.7] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-16%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-[var(--color-accent)]/18 blur-3xl"
        animate={prefersReducedMotion ? undefined : { x: [0, -24, 0], y: [0, 16, 0], opacity: [0.66, 0.92, 0.66] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent_45%,rgba(255,255,255,0.02))]" />
    </div>
  );
}
