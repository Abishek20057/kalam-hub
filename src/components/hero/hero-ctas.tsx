"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface HeroCtasProps {
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function HeroCtas({
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroCtasProps) {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center gap-3 sm:flex-row"
    >
      <Button
        type="button"
        size="lg"
        className="min-w-[12rem]"
        onClick={() => router.push(primaryCtaHref)}
      >
        {primaryCtaText}
      </Button>
      {secondaryCtaText && secondaryCtaHref ? (
        <Button
          type="button"
          size="lg"
          variant="secondary"
          className="min-w-[12rem]"
          onClick={() => router.push(secondaryCtaHref)}
        >
          {secondaryCtaText}
        </Button>
      ) : null}
    </motion.div>
  );
}
