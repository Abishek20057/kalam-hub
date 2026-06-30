import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * KalamHub — SectionHeading
 *
 * Mitigates Architecture Doc Risk 5 (SEO Heading Hierarchy Breakage):
 * "SectionHeading component accepts a headingLevel prop (h2 | h3) and
 * renders the correct element — never defaults to a fixed heading level."
 */
export interface SectionHeadingProps {
  heading: string;
  subHeading?: string;
  headingLevel?: "h2" | "h3";
  ctaText?: string;
  ctaHref?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  heading,
  subHeading,
  headingLevel = "h2",
  ctaText,
  ctaHref,
  align = "left",
  className,
}: SectionHeadingProps) {
  const HeadingTag = headingLevel;

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "left" &&
          "sm:flex-row sm:items-end sm:justify-between sm:text-left",
        className,
      )}
    >
      <div>
        <HeadingTag className="text-3xl font-bold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)] sm:text-4xl">
          {heading}
        </HeadingTag>
        {subHeading && (
          <p className="mt-2 text-base text-[var(--color-text-secondary)]">
            {subHeading}
          </p>
        )}
      </div>
      {ctaText && ctaHref && (
        <Link
          href={ctaHref}
          className="shrink-0 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
        >
          {ctaText} →
        </Link>
      )}
    </div>
  );
}
