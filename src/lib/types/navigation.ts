/**
 * KalamHub — Navigation Type Definitions
 * Backs the Navbar (Architecture Doc 4.2).
 */
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavConfiguration {
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
  logoSrc: string;
  logoAlt: string;
  isSticky: boolean;
}
