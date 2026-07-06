"use client";

import { TeamMember } from "@/lib/types/cms";
import { DataTable } from "@/components/admin/data-table";
import { columns } from "./team-columns";

interface TeamClientProps {
  data: TeamMember[];
}

export function TeamClient({ data }: TeamClientProps) {
  return <DataTable columns={columns} data={data} />;
}