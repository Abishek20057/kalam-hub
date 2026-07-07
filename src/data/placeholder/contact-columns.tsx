"use client";

import { useState } from "react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { ContactSubmission } from "@/lib/types/cms";
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

type Status = ContactSubmission["status"];

const getStatusBadgeVariant = (status: Status) => {
  switch (status) {
    case "new": return "new";
    case "read": return "free";
    case "archived": return "difficulty";
    default: return "difficulty";
  }
};

function ActionsCell({ item }: { item: ContactSubmission }) {
  "use no memo";
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <Icon name="more-horizontal" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link href={`/admin/content/contact/${item.id}`}>
              <Icon name="eye" className="mr-2 h-4 w-4" />
              View
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsDeleteDialogOpen(true)} className="text-red-500 focus:text-red-500">
            <Icon name="trash-2" className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteDialog isOpen={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)} onConfirm={() => { console.log("Deleting..."); setIsDeleteDialogOpen(false); }} title={`Delete submission from "${item.name}"?`} />
    </>
  );
}

export const columns: ColumnDef<ContactSubmission>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "subject",
    header: "Subject",
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
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => new Date(row.getValue("date")).toLocaleDateString(),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <ActionsCell item={row.original} />;
    },
  },
];