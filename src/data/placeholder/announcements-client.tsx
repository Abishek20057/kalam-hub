"use client";

import { Announcement } from "@/lib/types/cms";
import { DataTable } from "@/components/admin/data-table";
import { columns } from "./announcements-columns";

interface AnnouncementsClientProps {
  data: Announcement[];
}

export function AnnouncementsClient({ data }: AnnouncementsClientProps) {
  return <DataTable columns={columns} data={data} />;
}