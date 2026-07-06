"use client";

import { FAQ } from "@/lib/types/cms";
import { DataTable } from "@/components/admin/data-table";
import { columns } from "./faqs-columns";

interface FAQsClientProps {
  data: FAQ[];
}

export function FAQsClient({ data }: FAQsClientProps) {
  return <DataTable columns={columns} data={data} />;
}