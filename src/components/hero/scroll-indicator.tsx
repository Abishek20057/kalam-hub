"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/icon";

export function ScrollIndicator() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-2 text-sm text-[var(--color-text-secondary)] shadow-sm backdrop-blur-xl">
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white"
        >
          <Icon name="chevron-down" size={18} />
        </motion.div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
}
