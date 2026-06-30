/**
 * KalamHub — Site Content Type Definitions
 *
 * Backs every section whose content is "DB-driven via a content key"
 * per Architecture Doc Section 10 (Dynamic Content Strategy):
 *   Announcement Bar → site_announcements
 *   Hero             → site_content (key: hero)
 *   About            → site_content (key: about)
 *   Why Choose       → site_content (key: benefits)
 *   Innovation Journey → site_content (key: journey_steps)
 *   Final CTA        → site_content (key: final_cta)
 *   Footer           → footer_configuration
 *
 * Each section gets its own typed shape below rather than one loose
 * "any" content blob, so components keep full type safety while still
 * being swappable from placeholder data to DB-backed content in Phase 5.
 */

/* ── Announcement Bar (4.1) ───────────────────────────────────────── */
export interface AnnouncementContent {
  message: string;
  linkText?: string;
  linkHref?: string;
  isActive: boolean;
  isDismissable: boolean;
  startDate?: string;   /* ISO 8601 */
  endDate?: string;     /* ISO 8601 */
}

/* ── Hero Section (4.3) ───────────────────────────────────────────── */
export type HeroBackgroundVariant = "grid" | "gradient" | "none";

export interface HeroContent {
  badgeText?: string;
  headline: string;
  subHeadline: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundVariant: HeroBackgroundVariant;
}

/* ── About Section (4.6) ──────────────────────────────────────────── */
export interface Pillar {
  icon: string;          /* Lucide icon name */
  title: string;
  description: string;
}

export interface AboutContent {
  heading: string;
  subHeading: string;
  body: string;           /* sanitized HTML, rendered via DOMPurify in Phase 5 */
  pillars: Pillar[];
  imageUrl?: string;
  imageAlt?: string;
}

/* ── Why Choose KalamHub (4.9) ────────────────────────────────────── */
export interface Benefit {
  icon: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export interface WhyChooseContent {
  heading: string;
  subHeading: string;
  benefits: Benefit[];
}

/* ── Innovation Journey (4.10) ────────────────────────────────────── */
export interface JourneyStep {
  stepNumber: number;
  icon: string;
  title: string;
  description: string;
}

export interface InnovationJourneyContent {
  heading: string;
  subHeading: string;
  steps: JourneyStep[];   /* Locked order — see Architecture Doc 4.10 */
}

/* ── Final CTA (4.14) ─────────────────────────────────────────────── */
export interface FinalCtaContent {
  heading: string;
  subHeading: string;
  ctaText: string;
  ctaHref: string;
  secondaryLinkText?: string;
  secondaryLinkHref?: string;
  backgroundVariant?: "dark" | "gradient";
}

/* ── Footer (4.15) ────────────────────────────────────────────────── */
export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterColumnContent {
  title: string;
  links: FooterLinkItem[];
}

export interface FooterContent {
  columns: FooterColumnContent[];
  socialLinks: { platform: string; url: string }[];
  copyrightText: string;
  legalLinks: FooterLinkItem[];
}
