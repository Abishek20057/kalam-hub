"use client";

import { motion } from "framer-motion";
import { CountUpNumber } from "@/components/animations/count-up";
import { StaggerChildren, staggerItem } from "@/components/animations/stagger-children";
import { Icon } from "@/components/ui/icon";
import { placeholderStats } from "@/data/placeholder";
import { cn } from "@/lib/utils";

export function HeroStatsPreview() {
  return (
    <section className="mt-10">
      <StaggerChildren className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {placeholderStats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={staggerItem}
            className={cn(
              "glass rounded-[var(--radius-xl)] border border-white/10 bg-[var(--color-surface)]/85 p-5 shadow-lg",
            )}
          >
            <div className="flex flex-col gap-4 text-left">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                <Icon name={stat.icon ?? "circuit-board"} size={20} />
              </span>
              <div className="space-y-2">
                <p className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                  <CountUpNumber
                    value={stat.value}
                    suffix={stat.suffix ?? ""}
                    className="inline-flex"
                  />
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
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
