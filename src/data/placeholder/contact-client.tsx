"use client";

import { ContactSubmission } from "@/lib/types/cms";
import { DataTable } from "@/components/admin/data-table";
import { columns } from "./contact-columns";

interface ContactClientProps {
  data: ContactSubmission[];
}

export function ContactClient({ data }: ContactClientProps) {
  return <DataTable columns={columns} data={data} />;
}