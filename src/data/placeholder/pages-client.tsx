"use client";

import { Page } from "@/lib/types/cms";
import { DataTable } from "@/components/admin/tables/data-table";
import { columns } from "./pages-columns";

interface PagesClientProps {
  data: Page[];
}

export function PagesClient({ data }: PagesClientProps) {
  return <DataTable columns={columns} data={data} />;
}