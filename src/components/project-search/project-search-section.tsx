"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { TagChip } from "@/components/ui/tag-chip";
import { placeholderProjectSearch } from "@/data/placeholder/project-search";
import { cn } from "@/lib/utils";

export function ProjectSearchSection() {
  const {
    heading,
    subHeading,
    searchPlaceholder,
    filters,
    popularSearches,
    quickActions,
  } = placeholderProjectSearch;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-[calc(var(--section-padding-mobile)+4rem)] md:pt-[calc(var(--section-padding-tablet)+4rem)] xl:pt-[calc(var(--section-padding-desktop)+4rem)] pb-[var(--section-padding-mobile)] md:pb-[var(--section-padding-tablet)] xl:pb-[var(--section-padding-desktop)]">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <SectionHeading
            heading={heading}
            subHeading={subHeading}
            headingLevel="h2"
            align="center"
            className="mb-12"
          />

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] xl:gap-14">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-6 shadow-xl backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.1),transparent_26%)]" />
                <div className="relative space-y-6">
                  <label htmlFor="project-search" className="sr-only">
                    Search projects
                  </label>
                  <div className="relative rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-4 shadow-sm focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/10">
                    <Icon
                      name="search"
                      size={18}
                      className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]"
                    />
                    <input
                      id="project-search"
                      type="search"
                      aria-label="Search projects"
                      placeholder={searchPlaceholder}
                      className="w-full border-none bg-transparent pl-11 text-lg text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)] sm:text-xl"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {filters.map((filter) => (
                      <TagChip key={filter} label={filter} className="rounded-full bg-white/90" />
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-6 shadow-xl backdrop-blur-xl"
              >
                <div className="flex flex-wrap items-center gap-3">
                  {popularSearches.map((search) => (
                    <TagChip key={search} label={search} className="bg-[var(--color-bg)] text-[var(--color-text-body)]" />
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-5">
              {quickActions.map((action, index) => (
                <motion.article
                  key={action.id}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.08 }}
                  className={cn(
                    "group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl",
                  )}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.06),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] shadow-sm">
                      <Icon name={action.icon} size={20} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                        {action.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
