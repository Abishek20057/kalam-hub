"use client";

import { Internship } from "@/lib/types/cms";
import { DataTable } from "@/components/admin/data-table";
import { columns } from "./internships-columns";

interface InternshipsClientProps {
  data: Internship[];
}

export function InternshipsClient({ data }: InternshipsClientProps) {
  return <DataTable columns={columns} data={data} />;
}