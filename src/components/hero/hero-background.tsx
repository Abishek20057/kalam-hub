"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[-20%] top-[-15%] h-[28rem] w-[28rem] rounded-full bg-[var(--color-primary)]/20 blur-3xl"
        animate={prefersReducedMotion ? undefined : { x: [0, 30, 0], y: [0, -20, 0], opacity: [0.7, 0.95, 0.7] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-18%] top-1/4 h-[24rem] w-[24rem] rounded-full bg-[var(--color-accent)]/20 blur-3xl"
        animate={prefersReducedMotion ? undefined : { x: [0, -30, 0], y: [0, 20, 0], opacity: [0.65, 0.9, 0.65] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.22),_transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_45%,rgba(255,255,255,0.02))]" />
    </div>
  );
}
