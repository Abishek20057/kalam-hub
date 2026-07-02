"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { placeholderAboutKalamHub } from "@/data/placeholder/about-kalamhub";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const {
    heading,
    subHeading,
    missionTitle,
    visionTitle,
    description,
    ctaPrimaryText,
    ctaPrimaryHref,
    ctaSecondaryText,
    ctaSecondaryHref,
    workflowSteps,
    coreValues,
  } = placeholderAboutKalamHub;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] xl:py-[var(--section-padding-desktop)]">
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

          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] xl:gap-12">
            <div className="space-y-6">
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-8 shadow-xl backdrop-blur-xl">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[var(--tracking-wide)] text-[var(--color-primary)]">
                      {missionTitle}
                    </p>
                    <p className="mt-3 text-xl font-semibold text-[var(--color-text-primary)]">
                      {description}
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-medium text-[var(--color-text-primary)]">
                      {visionTitle}
                    </p>
                    <p className="mt-2 text-[var(--color-text-secondary)]">
                      KalamHub combines AI intelligence with engineering workflows to streamline every innovation stage.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" className="w-full sm:w-auto" onClick={() => window.location.assign(ctaPrimaryHref)}>
                      {ctaPrimaryText}
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-full sm:w-auto"
                      onClick={() => window.location.assign(ctaSecondaryHref)}
                    >
                      {ctaSecondaryText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {workflowSteps.slice(0, 5).map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
                    className={cn(
                      "group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl",
                    )}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] shadow-sm">
                        <Icon name={step.icon} size={20} />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                          {step.label}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {workflowSteps.slice(5).map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: (index + 5) * 0.05 }}
                    className={cn(
                      "group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl",
                    )}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,0.08),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-light)] text-[var(--color-accent)] shadow-sm">
                        <Icon name={step.icon} size={20} />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                          {step.label}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="mt-14"
          >
            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                KalamHub Core Values
              </h3>
              <p className="mt-3 text-base text-[var(--color-text-secondary)]">
                Our values guide every product, partnership, and learning experience at KalamHub.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.id}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.06 }}
                  className={cn(
                    "group overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/90 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl",
                  )}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.06),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] shadow-sm">
                      <Icon name={value.icon} size={20} />
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">
                        {value.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
