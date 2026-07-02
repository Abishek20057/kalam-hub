"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { TagChip } from "@/components/ui/tag-chip";
import { placeholderTechnologies } from "@/data/placeholder/technologies";
import type { Technology } from "@/lib/types";
import { cn } from "@/lib/utils";

const categoryTabs = [
  "All",
  "Basic Electronics",
  "Embedded Systems",
  "IoT",
  "PCB Design",
  "Power Electronics",
] as const;

type CategoryTab = (typeof categoryTabs)[number];

function matchesCategory(technology: Technology, category: CategoryTab) {
  if (category === "All") return true;
  return technology.name === category;
}

export function TechnologyExplorerSection() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<CategoryTab>("All");

  const visibleTechnologies = useMemo(
    () => placeholderTechnologies.filter((technology) => matchesCategory(technology, activeTab)),
    [activeTab],
  );

  return (
    <section className="relative overflow-hidden py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] xl:py-[var(--section-padding-desktop)]">
      <Container>
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10"
          >
            <SectionHeading
              heading="Technology Explorer"
              subHeading="Browse curated technology domains with interactive cards, icon-driven categories, and instant filtering for your next engineering project."
              headingLevel="h2"
              align="center"
            />
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mb-8 overflow-x-auto pb-2"
          >
            <div className="flex gap-3 min-w-[min(100%,_720px)]">
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "inline-flex whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-[var(--transition-all)]",
                    activeTab === tab
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-body)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
                  )}
                  aria-pressed={activeTab === tab}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {visibleTechnologies.map((technology, index) => (
              <motion.article
                key={technology.id}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
                className={cn(
                  "group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl",
                )}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] shadow-sm">
                      <Icon name={technology.icon} size={20} />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                        {technology.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                        {technology.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <TagChip label={`${technology.projectCount}+ projects`} className="bg-[var(--color-bg)] text-[var(--color-text-body)]" />
                    <TagChip label={technology.isActive ? "Active" : "Hidden"} className="bg-[var(--color-primary-light)] text-[var(--color-primary)]" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
