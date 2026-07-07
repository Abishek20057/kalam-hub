"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const auth =
      sessionStorage.getItem("kalamhub-admin-auth") === "true";

    if (!auth && pathname !== "/admin/login") {
      router.replace("/admin/login");
    } else {
      setAuthenticated(auth);
      setLoading(false);
    }
  }, [pathname, router]);

  if (loading) {
    return <Skeleton className="h-screen w-screen rounded-none" />;
  }

  if (!authenticated && pathname !== "/admin/login") {
    return null;
  }

  return <>{children}</>;
}