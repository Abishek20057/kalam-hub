"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Admin Layout
 *
 * This layout component provides a temporary, client-side authentication guard
 * for all routes under `/admin/*`.
 *
 * It checks for a flag in `sessionStorage`. If the flag is not present,
 * it redirects the user to the login page. This is a placeholder for
 * proper server-side authentication with middleware.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = typeof window !== "undefined" && sessionStorage.getItem("kalamhub-admin-auth") === "true";

  useEffect(() => {
    if (!isAuthenticated && pathname !== "/admin/login") {
      router.replace("/admin/login");
    }
  }, [pathname, router, isAuthenticated]);

  if (!isAuthenticated && pathname !== "/admin/login") {
    // Show a loading skeleton or a blank page while verifying auth
    return <Skeleton className="h-screen w-screen rounded-none" />;
  }

  return <>{children}</>;
}