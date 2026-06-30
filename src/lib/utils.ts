import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicts
 * (e.g. cn("p-2", "p-4") => "p-4"). Required by shadcn/ui components
 * and used throughout the project instead of raw template strings.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format an ISO 8601 date string into a human-readable form.
 * Used by Activity cards, Project publishedAt, etc.
 */
export function formatDate(
  isoDate: string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
): string {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(isoDate));
}

/**
 * Truncate a string to a max length, appending an ellipsis if cut.
 * Used for card descriptions that must stay within a fixed number of lines.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

/**
 * Build initials from a full name, for Avatar fallback rendering
 * (Team cards when no photoUrl is provided).
 */
export function getInitials(fullName: string): string {
  return fullName
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Type-safe sleep utility — useful for skeleton/loading state testing
 * during development. Not for production data-fetching logic.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
