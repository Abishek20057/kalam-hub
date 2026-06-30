"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * KalamHub — StaggerChildren
 * Wraps a list/grid of items (cards, chips, journey steps) so each
 * child fades up in sequence per Architecture Doc Section 8.2.
 * Direct children should be plain elements — Framer Motion applies
 * the stagger via the parent's `variants` + `staggerChildren` transition,
 * and each child needs its own `motion.*` element with matching variants
 * to actually animate. Use the exported `staggerItem` variants below
 * on each child, e.g.:
 *
 *   <StaggerChildren>
 *     {items.map((item) => (
 *       <motion.div key={item.id} variants={staggerItem}>...</motion.div>
 *     ))}
 *   </StaggerChildren>
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export interface StaggerChildrenProps {
  children: ReactNode;
  /** Delay between each child's animation, in seconds. Default 0.08s per Architecture Doc 8.2. */
  staggerDelay?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  staggerDelay = 0.08,
  className,
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}
