"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/lib/types";

/**
 * KalamHub — Mobile Menu
 * Architecture Doc 4.2: "Mobile: Hamburger replaces links. Full drawer
 * opens on tap." Focus trap, Escape-to-close, body scroll lock, and
 * aria-expanded/aria-controls per the Accessibility requirements.
 */
export interface MobileMenuProps {
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export function MobileMenu({ navLinks, ctaText, ctaHref }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape, return focus to trigger.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Basic focus trap: move focus into the drawer when it opens.
  useEffect(() => {
    if (isOpen) {
      const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
        "a, button",
      );
      firstFocusable?.focus();
    }
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-drawer"
        aria-label="Open main menu"
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)]",
          "text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-neutral-100)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
        )}
      >
        <Menu size={22} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
              className="fixed inset-0 z-[var(--z-overlay)] bg-[var(--color-neutral-900)]/40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              id="mobile-menu-drawer"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              initial={{ x: prefersReducedMotion ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: prefersReducedMotion ? 0 : "100%" }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.25,
                ease: "easeOut",
              }}
              className={cn(
                "fixed inset-y-0 right-0 z-[var(--z-modal)] flex w-full max-w-xs flex-col gap-1",
                "bg-[var(--color-surface)] p-6 shadow-[var(--shadow-xl)]",
              )}
            >
              <div className="mb-4 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)]",
                    "text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-neutral-100)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]",
                  )}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "block rounded-[var(--radius-md)] px-3 py-3 text-base font-medium transition-colors",
                            isActive
                              ? "bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                              : "text-[var(--color-text-body)] hover:bg-[var(--color-neutral-100)]",
                          )}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <Link
                href={ctaHref}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "mt-4 inline-flex h-11 items-center justify-center rounded-[var(--radius-md)]",
                  "bg-[var(--color-primary)] px-4 text-base font-medium text-white transition-colors",
                  "hover:bg-[var(--color-primary-hover)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2",
                )}
              >
                {ctaText}
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
