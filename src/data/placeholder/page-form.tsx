"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Page } from "@/lib/types/cms";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PageFormProps {
  initialData?: Page;
}

export function PageForm({ initialData }: PageFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [seoTitle, setSeoTitle] = useState(initialData?.seo.title || "");
  const [metaDescription, setMetaDescription] = useState(initialData?.seo.metaDescription || "");
  const [visibility, setVisibility] = useState<Page["visibility"]>(initialData?.visibility || "public");
  const [status, setStatus] = useState<Page["status"]>(initialData?.status || "draft");
  const [template, setTemplate] = useState<Page["template"]>(initialData?.template || "default");

  const inputClasses = "w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-primary)]";
  const labelClasses = "mb-2 block text-sm font-medium text-[var(--color-text-primary)]";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving page:", { title, slug, seoTitle, metaDescription, visibility, status, template });
    router.push("/admin/content/pages");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="p-6">
            <h3 className="text-lg font-medium">Page Details</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="title" className={labelClasses}>Title</label>
                <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., About Us" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="slug" className={labelClasses}>Slug</label>
                <input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="e.g., /about-us" className={inputClasses} />
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium">Search Engine Optimization</h3>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Customize how this page appears in search results.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="seoTitle" className={labelClasses}>SEO Title</label>
                <input id="seoTitle" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className={inputClasses} />
              </div>
              <div>
                <label htmlFor="metaDescription" className={labelClasses}>Meta Description</label>
                <textarea id="metaDescription" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} className={`${inputClasses} min-h-[100px]`} />
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-6 lg:col-span-1">
          <Card className="p-6">
            <h3 className="text-lg font-medium">Status</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="visibility" className={labelClasses}>Visibility</label>
                <select id="visibility" value={visibility} onChange={(e) => setVisibility(e.target.value as Page["visibility"])} className={inputClasses}>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div>
                <label htmlFor="status" className={labelClasses}>Status</label>
                <select id="status" value={status} onChange={(e) => setStatus(e.target.value as Page["status"])} className={inputClasses}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div>
                <label htmlFor="template" className={labelClasses}>Template</label>
                <select id="template" value={template} onChange={(e) => setTemplate(e.target.value as Page["template"])} className={inputClasses}>
                  <option value="default">Default</option>
                  <option value="full-width">Full Width</option>
                  <option value="landing">Landing</option>
                </select>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? "Save Changes" : "Create Page"}
        </Button>
      </div>
    </form>
  );
}