import type { NavConfiguration } from "@/lib/types";

/**
 * KalamHub — Site-Wide Constants
 *
 * Values here back the sections marked "constants.ts" in the
 * Dynamic Content Strategy table (Architecture Doc Section 10):
 * Navbar, Contact, Announcement Bar defaults.
 *
 * Phase 5: these move to `nav_configuration` / `site_configuration`
 * DB tables. Components must keep reading from a typed object shaped
 * like these — only the data source changes.
 */

export const SITE_NAME = "KalamHub";

export const SITE_TAGLINE = "From Idea to Innovation";

export const SITE_DESCRIPTION =
  "KalamHub is an AI-powered innovation ecosystem that helps students, makers, and startups transform ideas into real-world products.";

export const SITE_URL = "https://kalamhub.com";

export const NAV_CONFIG: NavConfiguration = {
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Internships", href: "/internships" },
    { label: "Workshops", href: "/workshops" },
    { label: "Team", href: "/team" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "Start Building",
  ctaHref: "/projects",
  logoSrc: "/images/logo/kalam-hub-logo.png",
  logoAlt: "KalamHub logo",
  isSticky: true,
};

export const CONTACT_INFO = {
  email: "hello@kalamhub.com",
  phone: "+91 00000 00000",
  address: "Coimbatore, Tamil Nadu, India",
} as const;

export const SOCIAL_LINKS = [
  { platform: "linkedin", url: "https://linkedin.com/company/kalamhub" },
  { platform: "instagram", url: "https://instagram.com/kalamhub" },
  { platform: "github", url: "https://github.com/kalamhub" },
] as const;

/**
 * Breakpoints — mirrors Architecture Doc Section 9.
 * Kept here (not just in Tailwind) so JS-side logic (e.g. matchMedia
 * hooks) can reference the exact same values as CSS.
 */
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
