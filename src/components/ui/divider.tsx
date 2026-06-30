import { cn } from "@/lib/utils";

/**
 * KalamHub — Divider
 * Thin horizontal/vertical rule using the shared border color token.
 * Used e.g. between Footer main content and bottom bar (Architecture Doc 4.15).
 */
export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Divider({
  orientation = "horizontal",
  className,
}: DividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "bg-[var(--color-border)]",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
    />
  );
}
