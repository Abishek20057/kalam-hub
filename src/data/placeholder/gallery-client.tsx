"use client";

import { GalleryItem } from "@/lib/types/cms";
import { DataTable } from "@/components/admin/data-table";
import { columns } from "./gallery-columns";

interface GalleryClientProps {
  data: GalleryItem[];
}

export function GalleryClient({ data }: GalleryClientProps) {
  return <DataTable columns={columns} data={data} />;
}