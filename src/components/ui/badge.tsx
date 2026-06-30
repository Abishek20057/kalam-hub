import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * KalamHub — Badge
 * Used for project category, difficulty, Free/Premium, and "New" labels
 * across Featured Projects, Activity Gallery, Announcement Bar.
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5 text-xs font-medium tracking-[var(--tracking-wide)] uppercase",
  {
    variants: {
      variant: {
        category:
          "bg-[var(--color-primary-light)] text-[var(--color-primary)]",
        difficulty:
          "bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)]",
        free: "bg-[var(--color-success-light)] text-[var(--color-free)]",
        premium: "bg-[var(--color-warning-light)] text-[var(--color-premium)]",
        new: "bg-[var(--color-accent-light)] text-[var(--color-accent)]",
      },
    },
    defaultVariants: {
      variant: "category",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
