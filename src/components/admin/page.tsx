import Link from "next/link";
import { AdminShell } from "@/components/admin/admin-shell";
import { PagesClient } from "@/components/admin/pages/pages-client";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { placeholderPages } from "@/data/placeholder/admin-pages";

// This is a server component, but we're using placeholder data.
// In a real app, this would be an async function fetching from an API.
export default function AdminPagesListPage() {
  const pages = placeholderPages;

  return (
    <AdminShell
      title="Pages"
      subtitle="Manage all pages on your website. Create new pages, edit existing ones, and manage their status and visibility."
      breadcrumb={[{ label: "Content", href: "/admin/content" }, { label: "Pages" }]}
    >
      <div className="mb-4 flex items-center justify-end">
        <Button asChild>
          <Link href="/admin/content/pages/new">
            <Icon name="plus" className="mr-2 h-4 w-4" />
            Create Page
          </Link>
        </Button>
      </div>
      <PagesClient data={pages} />
    </AdminShell>
  );
}