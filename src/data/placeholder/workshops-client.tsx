"use client";

import { Workshop } from "@/lib/types/cms";
import { DataTable } from "@/components/admin/data-table";
import { columns } from "./workshops-columns";

interface WorkshopsClientProps {
  data: Workshop[];
}

export function WorkshopsClient({ data }: WorkshopsClientProps) {
  return <DataTable columns={columns} data={data} />;
}