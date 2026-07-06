"use client";

import { Project } from "@/lib/types/cms";
import { DataTable } from "@/components/admin/data-table";
import { columns } from "./projects-columns";

interface ProjectsClientProps {
  data: Project[];
}

export function ProjectsClient({ data }: ProjectsClientProps) {
  return <DataTable columns={columns} data={data} />;
}