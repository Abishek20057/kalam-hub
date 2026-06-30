"use client";

import Link from "next/link";
import { NAV_CONFIG } from "@/constants";
import { useScrollAnimation } from "@/hooks";
import { cn } from "@/lib/utils";
import { NavLinks } from "./nav-links";
import { MobileMenu } from "./mobile-menu";

/**
 * KalamHub — Navbar
 * Architecture Doc 4.2.
 *
 * Sticky, transparent at scroll top, glassmorphism + shadow once
 * scrolled past 80px (useScrollAnimation, from Module 1's hooks).
 *
 * This component is a Client Component because the scroll-driven
 * background transition requires the useScrollAnimation hook. NavLinks
 * and MobileMenu are separately marked 'use client' for their own
 * reasons (usePathname / interactive state) — splitting them out keeps
 * each concern isolated even though the parent is already client here.
 */
export function Navbar() {
  const isScrolled = useScrollAnimation(80);

  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] w-full transition-[var(--transition-all)]",
        isScrolled
          ? "glass shadow-[var(--shadow-sm)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 md:px-5 xl:grid xl:grid-cols-3 xl:px-6"
      >
        {/* Logo — left */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          aria-label={`${NAV_CONFIG.logoAlt} — Home`}
        >
          <span className="text-lg font-bold tracking-[var(--tracking-tight)] text-[var(--color-text-primary)]">
            Kalam<span className="text-[var(--color-primary)]">Hub</span>
          </span>
        </Link>

        {/* Links — centered */}
        <div className="hidden justify-center xl:flex">
          <NavLinks links={NAV_CONFIG.navLinks} />
        </div>

        {/* CTA — right (desktop only, matches where nav links appear) + hamburger (mobile/tablet/small laptop) */}
        <div className="flex items-center justify-end gap-2">
          <Link
            href={NAV_CONFIG.ctaHref}
            className={cn(
              "hidden h-10 items-center justify-center rounded-[var(--radius-md)] px-4 text-sm font-medium text-white transition-colors xl:inline-flex",
              "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
            )}
          >
            {NAV_CONFIG.ctaText}
          </Link>

          <MobileMenu
            navLinks={NAV_CONFIG.navLinks}
            ctaText={NAV_CONFIG.ctaText}
            ctaHref={NAV_CONFIG.ctaHref}
          />
        </div>
      </nav>
    </header>
  );
}
