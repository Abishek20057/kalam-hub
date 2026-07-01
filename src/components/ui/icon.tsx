import { icons, type LucideProps, type LucideIcon as LucideIconType } from "lucide-react";

/**
 * KalamHub — Icon
 *
 * Thin wrapper around Lucide React so the rest of the app references
 * icons by string name (matching the `icon: string` fields on Technology,
 * Pillar, Benefit, JourneyStep, Statistic types) instead of importing
 * each Lucide component individually at every call site.
 *
 * Accepts EITHER kebab-case ("brain-circuit") OR PascalCase ("BrainCircuit").
 * Internally converts kebab-case to PascalCase before looking up in the
 * `icons` map, which uses PascalCase keys in lucide-react ≥ 0.438.
 *
 * Tree-shaking note: importing from "lucide-react"'s `icons` map pulls
 * in the full icon set. For production, prefer importing only the
 * specific icons actually used per Architecture Doc 12 ("Icon
 * components: individual imports only — no icon barrel"). This wrapper
 * is intentionally for Module 1 placeholder/dev convenience; Module 2+
 * components should import their specific icons directly from
 * "lucide-react" where bundle size matters (e.g. above-the-fold Hero).
 */

/**
 * Converts a kebab-case string to PascalCase.
 * "brain-circuit" → "BrainCircuit"
 * "BrainCircuit"  → "BrainCircuit" (no-op for already-PascalCase strings)
 */
function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("");
}

/** Cast the icons map to allow any string key lookup without TS error. */
const iconsMap = icons as Record<string, LucideIconType | undefined>;

export interface IconProps extends Omit<LucideProps, "ref"> {
  /**
   * Lucide icon name. Accepts either:
   *   - kebab-case:  "brain-circuit", "chevron-down", "folder-kanban"
   *   - PascalCase:  "BrainCircuit", "ChevronDown", "FolderKanban"
   */
  name: string;
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  const pascalName = name.includes("-") ? toPascalCase(name) : name;
  const LucideIcon = iconsMap[pascalName];

  if (!LucideIcon) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Icon "${name}" (resolved to "${pascalName}") not found in lucide-react`);
    }
    return null;
  }

  return <LucideIcon size={size} aria-hidden="true" {...props} />;
}
