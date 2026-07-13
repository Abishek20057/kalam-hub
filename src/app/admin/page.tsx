import { redirect } from "next/navigation";

/**
 * Route: /admin  (root admin route)
 *
 * Immediately redirects to the dashboard. Previously this file contained a
 * misplaced PageForm edit component that expected `params.id`, which doesn't
 * exist at this route (it was likely copy-pasted from an [id] dynamic segment
 * by mistake). Because `params.id` is always undefined here, `notFound()` was
 * always called, resulting in a 404 for anyone visiting /admin directly.
 */
export default function AdminRootPage() {
  redirect("/admin/dashboard");
}
