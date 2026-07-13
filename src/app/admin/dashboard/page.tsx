import type { Metadata } from "next";
import AdminDashboardPage from "@/components/admin/page";

export const metadata: Metadata = {
  title: "Dashboard | KalamHub Admin",
  description: "KalamHub admin dashboard — manage content, media, and settings.",
};

/**
 * Route: /admin/dashboard
 *
 * This route segment renders the AdminDashboardPage component which lives in
 * src/components/admin/page.tsx. The component is kept in components/ (rather
 * than inlined here) so it can be independently tested and reused.
 *
 * Previously this file contained `redirect("/admin/dashboard")`, which created
 * a self-referential redirect loop causing the page to render blank. Fixed by
 * importing and rendering the actual dashboard component.
 */
export default function DashboardRoute() {
  return <AdminDashboardPage />;
}
