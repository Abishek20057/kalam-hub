"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import type { Technology } from "@/lib/types";
import { cn } from "@/lib/utils";

interface HeroFloatersProps {
  technologies: Technology[];
}

type FloaterPosition = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: string;
  delay: number;
};

const positions: FloaterPosition[] = [
  { top: "8%", left: "4%", size: "w-36", delay: 0.1 },
  { top: "18%", right: "8%", size: "w-32", delay: 0.2 },
  { bottom: "18%", left: "10%", size: "w-40", delay: 0.15 },
  { bottom: "10%", right: "12%", size: "w-36", delay: 0.25 },
];

export function HeroFloaters({ technologies }: HeroFloatersProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <motion.div
        className="absolute inset-0"
        animate={prefersReducedMotion ? undefined : { rotate: [0, 360] }}
        transition={prefersReducedMotion ? undefined : { duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-1/4 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-primary)]/15 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 -z-10 h-72 w-72 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
      </motion.div>

      {technologies.slice(0, 4).map((technology, index) => {
        const position = positions[index] ?? positions[0]!;

        return (
          <motion.div
            key={technology.id}
            className={cn(
              "absolute rounded-[var(--radius-xl)] border border-white/10 bg-[var(--color-surface)]/80 p-4 shadow-xl backdrop-blur-xl",
              position.size,
            )}
            style={{
              top: position.top,
              left: position.left,
              right: position.right,
              bottom: position.bottom,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -8, 0] }}
            transition={{
              duration: 6,
              delay: position.delay,
              repeat: prefersReducedMotion ? 0 : Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] shadow-sm">
                <Icon name={technology.icon as any} size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {technology.name}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {technology.projectCount}+ projects
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
