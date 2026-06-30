"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/lib/types";

/**
 * KalamHub — Desktop Nav Links
 * Architecture Doc 4.2: "Active link underline or accent color."
 * Client Component because usePathname() requires it.
 */
export interface NavLinksProps {
  links: NavLink[];
}

export function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-body)] hover:text-[var(--color-primary)]",
              )}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--color-primary)]",
                  "origin-left scale-x-0 transition-transform duration-200 ease-out",
                  isActive ? "scale-x-100" : "group-hover:scale-x-100",
                )}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
