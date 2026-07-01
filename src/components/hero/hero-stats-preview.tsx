"use client";

import { motion } from "framer-motion";
import { CountUpNumber } from "@/components/animations/count-up";
import { StaggerChildren, staggerItem } from "@/components/animations/stagger-children";
import { Icon } from "@/components/ui/icon";
import { placeholderStats } from "@/data/placeholder";
import { cn } from "@/lib/utils";

export function HeroStatsPreview() {
  return (
    <section className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StaggerChildren className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {placeholderStats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={staggerItem}
            className={cn(
              "glass rounded-[var(--radius-xl)] border border-white/10 bg-[var(--color-surface)]/85 p-5 shadow-lg",
            )}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                <Icon name={stat.icon as any} size={20} />
              </span>
              <div>
                <p className="text-2xl font-semibold text-[var(--color-text-primary)]">
                  <CountUpNumber
                    value={stat.value}
                    suffix={stat.suffix ?? ""}
                    className=""
                  />
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  {stat.label}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerChildren>
    </section>
  );
}
