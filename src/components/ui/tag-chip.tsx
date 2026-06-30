import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

/**
 * KalamHub — TagChip
 * Used for technology chips, popular search tags, and project tag lists.
 * Renders as a Next.js Link when href is provided (crawlable, per SEO
 * strategy 4.5/4.4), otherwise as a button for client-side filter actions.
 */
const chipClassName =
  "inline-flex items-center gap-1.5 rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-text-body)] transition-[var(--transition-all)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]";

interface TagChipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
}

interface TagChipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  label: string;
}

export type TagChipProps = TagChipLinkProps | TagChipButtonProps;

export function TagChip({ label, href, className, ...props }: TagChipProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(chipClassName, className)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(chipClassName, className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {label}
    </button>
  );
}
