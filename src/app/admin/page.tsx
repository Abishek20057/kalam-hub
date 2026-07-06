import { AdminShell } from "@/components/admin/admin-shell";
import { PageForm } from "@/components/admin/page-form";
import { placeholderPages } from "@/data/placeholder/admin-pages";
import { notFound } from "next/navigation";

interface EditPageProps {
  params: {
    id: string;
  };
}

// This is a server component, but we're using placeholder data.
// In a real app, this would be an async function fetching from an API.
export default function AdminEditPage({ params }: EditPageProps) {
  const page = placeholderPages.find((p) => p.id === params.id);

  if (!page) {
    notFound();
  }

  return (
    <AdminShell
      title={`Edit: ${page.title}`}
      breadcrumb={[{ label: "Content", href: "/admin/content" }, { label: "Pages", href: "/admin/content/pages" }, { label: page.title }]}
    >
      <PageForm initialData={page} />
    </AdminShell>
  );
}