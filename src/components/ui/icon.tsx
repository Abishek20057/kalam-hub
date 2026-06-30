import { icons, type LucideProps } from "lucide-react";

/**
 * KalamHub — Icon
 *
 * Thin wrapper around Lucide React so the rest of the app references
 * icons by string name (matching the `icon: string` fields on Technology,
 * Pillar, Benefit, JourneyStep, Statistic types) instead of importing
 * each Lucide component individually at every call site.
 *
 * Tree-shaking note: importing from "lucide-react"'s `icons` map pulls
 * in the full icon set. For production, prefer importing only the
 * specific icons actually used per Architecture Doc 12 ("Icon
 * components: individual imports only — no icon barrel"). This wrapper
 * is intentionally for Module 1 placeholder/dev convenience; Module 2+
 * components should import their specific icons directly from
 * "lucide-react" where bundle size matters (e.g. above-the-fold Hero).
 */
export interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof icons;
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Icon "${name}" not found in lucide-react`);
    }
    return null;
  }

  return <LucideIcon size={size} aria-hidden="true" {...props} />;
}
