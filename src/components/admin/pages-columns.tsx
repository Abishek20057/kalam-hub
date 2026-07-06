"use client";

import { useState } from "react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { Page } from "@/lib/types/cms";
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

export const columns: ColumnDef<Page>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="font-medium">
        <Link href={`/admin/content/pages/${row.original.id}`} className="hover:underline">
          {row.getValue("title")}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => <div className="text-sm text-[var(--color-text-secondary)]">{row.getValue("slug")}</div>,
  },
  {
    accessorKey: "template",
    header: "Template",
    cell: ({ row }) => <div className="capitalize">{row.getValue("template")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Page["status"];
      const variant =
        status === "published"
          ? "free" // 'success' is not a valid variant, using 'free' (green)
          : status === "draft"
          ? "premium" // 'warning' is not a valid variant, using 'premium' (yellow)
          : "difficulty"; // 'secondary' is not a valid variant, using 'difficulty' (gray)
      return (
        <Badge variant={variant} className="capitalize">
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "visibility",
    header: "Visibility",
    cell: ({ row }) => <div className="capitalize">{row.getValue("visibility")}</div>,
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
    cell: ({ row }) => {
      const date = new Date(row.getValue("lastUpdated"));
      return <div className="text-sm text-[var(--color-text-secondary)]">{date.toLocaleDateString()}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const page = row.original;
      const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

      const handleDelete = () => {
        console.log(`Deleting page: ${page.title}`);
        // Placeholder for actual delete logic
        setIsDeleteDialogOpen(false);
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <Icon name="more-horizontal" className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href={`/admin/content/pages/${page.id}`}>
                  <Icon name="edit" className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("Duplicating page...")}>
                <Icon name="copy" className="mr-2 h-4 w-4" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setIsDeleteDialogOpen(true)} className="text-red-500 focus:text-red-500">
                <Icon name="trash-2" className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DeleteDialog
            isOpen={isDeleteDialogOpen}
            onClose={() => setIsDeleteDialogOpen(false)}
            onConfirm={handleDelete}
            title={`Delete "${page.title}"?`}
            description="This will permanently delete the page. This action cannot be undone."
          />
        </>
      );
    },
  },
];