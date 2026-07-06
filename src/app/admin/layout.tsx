"use client";

import { useEffect, useState } from "react";
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
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("kalamhub-admin-auth") === "true";

    if (!isAuthenticated && pathname !== "/admin/login") {
      router.replace("/admin/login");
    } else {
      setIsVerified(true);
    }
  }, [pathname, router]);

  if (!isVerified && pathname !== "/admin/login") {
    // Show a loading skeleton or a blank page while verifying auth
    return <Skeleton className="h-screen w-screen rounded-none" />;
  }

  return <>{children}</>;
}