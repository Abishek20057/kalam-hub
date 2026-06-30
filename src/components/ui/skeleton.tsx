import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * KalamHub — Skeleton
 * Animated shimmer loading placeholder per Architecture Doc 7.13:
 * "Use Skeleton components (animated shimmer) not spinners for content.
 * Loading skeletons match the exact shape of the content they replace."
 */
export function Skeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[var(--radius-md)] bg-[var(--color-neutral-200)]",
        className,
      )}
      {...props}
    />
  );
}
