"use client";

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

  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
      <Button
        size="lg"
        className="min-w-[12rem]"
        onClick={() => router.push(primaryCtaHref)}
      >
        {primaryCtaText}
      </Button>
      {secondaryCtaText && secondaryCtaHref ? (
        <Button
          size="lg"
          variant="secondary"
          className="min-w-[12rem]"
          onClick={() => router.push(secondaryCtaHref)}
        >
          {secondaryCtaText}
        </Button>
      ) : null}
    </div>
  );
}
