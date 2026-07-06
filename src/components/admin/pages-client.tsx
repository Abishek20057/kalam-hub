"use client";

import { Page } from "@/lib/types/cms";
import { DataTable } from "@/components/admin/data-table";
import { columns } from "@/components/admin/pages-columns";

interface PagesClientProps {
  data: Page[];
}

export function PagesClient({ data }: PagesClientProps) {
  return <DataTable columns={columns} data={data} />;
}