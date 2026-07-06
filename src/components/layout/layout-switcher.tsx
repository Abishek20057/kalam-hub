"use client";

import { usePathname } from "next/navigation";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

/**
 * LayoutSwitcher
 *
 * This client component inspects the current route via `usePathname` and
 * decides whether to render the full public-facing layout (with Navbar,
 * Footer, etc.) or a minimal layout for the admin section.
 */
export function LayoutSwitcher({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}