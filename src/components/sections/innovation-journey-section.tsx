"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { placeholderInnovationJourney } from "@/data/placeholder/innovation-journey";
import { cn } from "@/lib/utils";

export function InnovationJourneySection() {
  const { heading, subHeading, steps } = placeholderInnovationJourney;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] xl:py-[var(--section-padding-desktop)]">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-6xl"
        >
          <SectionHeading
            heading={heading}
            subHeading={subHeading}
            headingLevel="h2"
            align="center"
            className="mb-12"
          />

          <div className="relative hidden xl:block">
            <div className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)] opacity-70" />
            <div className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-[radial-gradient(circle_at_left,rgba(37,99,235,0.18),transparent_45%)] animate-pulse" />
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.article
                    key={step.title}
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.05 }}
                    whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
                    className={cn(
                      "group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl",
                      isEven ? "mt-8" : "mb-8",
                    )}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),rgba(124,58,237,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex flex-col gap-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] shadow-sm">
                          <Icon name={step.icon} size={20} />
                        </span>
                        <Badge variant="new">0{step.stepNumber}</Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="relative mt-8 hidden gap-6 md:grid xl:hidden md:grid-cols-2">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.05 }}
                whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),rgba(124,58,237,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] shadow-sm">
                      <Icon name={step.icon} size={20} />
                    </span>
                    <Badge variant="new">0{step.stepNumber}</Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="relative mt-8 flex flex-col gap-5 md:hidden">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.05 }}
                whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),rgba(124,58,237,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] shadow-sm">
                      <Icon name={step.icon} size={20} />
                    </span>
                    <span className="h-full w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-transparent" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <Badge variant="new">0{step.stepNumber}</Badge>
                      <h3 className="text-lg font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
