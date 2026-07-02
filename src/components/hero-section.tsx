"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { HeroBackground } from "@/components/hero/hero-background";
import { HeroCtas } from "@/components/hero/hero-ctas";
import { HeroFloaters } from "@/components/hero/hero-floaters";
import { HeroStatsPreview } from "@/components/hero/hero-stats-preview";
import { ScrollIndicator } from "@/components/hero/scroll-indicator";
import { placeholderHero, placeholderTechnologies } from "@/data/placeholder";
import type { HeroContent } from "@/lib/types";

const backgroundStyles: Record<HeroContent["backgroundVariant"], string> = {
  grid: "bg-[var(--color-bg)]",
  gradient:
    "bg-gradient-to-br from-[var(--color-primary-light)] via-[var(--color-accent-light)] to-[var(--color-bg)]",
  none: "bg-[var(--color-bg)]",
};

export function HeroSection() {
  const hero = placeholderHero;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Homepage hero section"
      className={backgroundStyles[hero.backgroundVariant]}
    >
      <div className="relative overflow-hidden py-[var(--section-padding-mobile)] md:py-[var(--section-padding-tablet)] xl:py-[var(--section-padding-desktop)]">
        <HeroBackground />
        <HeroFloaters technologies={placeholderTechnologies} />

        <Container as="div" className="relative z-10">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto flex min-h-[calc(70vh-112px)] max-w-4xl flex-col items-center justify-center gap-8 text-center"
          >
            {hero.badgeText ? (
              <Badge
                variant="new"
                className="normal-case rounded-full border border-[var(--color-primary)] bg-[var(--color-primary-light)] px-4 py-1 text-sm font-semibold text-[var(--color-primary)]"
              >
                {hero.badgeText}
              </Badge>
            ) : null}

            <div className="space-y-6 px-4 sm:px-0">
              <h1 className="text-4xl font-bold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                <span className="block bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-text-primary)] bg-clip-text text-transparent">
                  {hero.headline}
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
                {hero.subHeadline}
              </p>
            </div>

            <HeroCtas
              primaryCtaText={hero.primaryCtaText}
              primaryCtaHref={hero.primaryCtaHref}
              secondaryCtaText={hero.secondaryCtaText}
              secondaryCtaHref={hero.secondaryCtaHref}
            />

            <HeroStatsPreview />
            <ScrollIndicator />
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
