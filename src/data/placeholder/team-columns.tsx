"use client";

import { useState } from "react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { TeamMember } from "@/lib/types/cms";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteDialog } from "@/components/admin/delete-dialog";

type Status = TeamMember["status"];

const getStatusBadgeVariant = (status: Status) => {
  switch (status) {
    case "active": return "free";
    case "inactive": return "difficulty";
    default: return "difficulty";
  }
};

export const columns: ColumnDef<TeamMember>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Status;
      return <Badge variant={getStatusBadgeVariant(status)} className="capitalize">{status}</Badge>;
    },
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
    cell: ({ row }) => new Date(row.getValue("lastUpdated")).toLocaleDateString(),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;
      const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0"><Icon name="more-horizontal" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href={`/admin/content/team/${item.id}`}><Icon name="edit" className="mr-2 h-4 w-4" />Edit</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsDeleteDialogOpen(true)} className="text-red-500 focus:text-red-500">
                <Icon name="trash-2" className="mr-2 h-4 w-4" />Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DeleteDialog
            isOpen={isDeleteDialogOpen}
            onClose={() => setIsDeleteDialogOpen(false)}
            onConfirm={() => { console.log("Deleting..."); setIsDeleteDialogOpen(false); }}
            title={`Delete "${item.name}"?`}
          />
        </>
      );
    },
  },
];