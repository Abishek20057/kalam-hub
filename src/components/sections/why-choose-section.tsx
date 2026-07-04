"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { placeholderWhyChoose } from "@/data/placeholder/why-choose";
import { cn } from "@/lib/utils";

export function WhyChooseSection() {
  const { heading, subHeading, benefits } = placeholderWhyChoose;
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" role="list">
            {benefits.map((benefit, index) => (
              <motion.article
                key={benefit.title}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.06 }}
                role="listitem"
                className={cn(
                  "group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/85 p-6 shadow-xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl",
                  benefit.isHighlighted && "border-[var(--color-primary)]/30 bg-gradient-to-br from-[var(--color-surface)] via-white/90 to-[var(--color-primary-light)]",
                )}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),rgba(124,58,237,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] shadow-sm">
                      <Icon name={benefit.icon} size={20} />
                    </span>
                    <Badge variant={benefit.isHighlighted ? "new" : "category"}>
                      {benefit.isHighlighted ? "Featured" : "Core"}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--color-text-secondary)]">
                      {benefit.description}
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
