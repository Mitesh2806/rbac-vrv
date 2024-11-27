"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { categories, priorities, statuses } from "../data/data"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { Button } from "react-day-picker"

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { DialogHeader } from "@/components/ui/dialog"
import { HoverCardForDesc } from "@/components/hoverCardDesc"

export const columns: ColumnDef<Task>[] = [
  {

    // header: ({ table }) => (
    //   <Checkbox
    //     checked={table.getIsAllPageRowsSelected()}
    //     onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //     aria-label="Select all"
    //     className="translate-y-[2px]"
    //   />
    // ),
    // cell: ({ row }) => (




    //     <Checkbox
    //       // onClick={() => console.log(row.getValue("id"), row.getValue("title"), row.getValue("status"), row.getValue("priority"))}
    //       // onClick={() => {
    //       //   return <>
    //       //     <DialogDemo />
    //       //   </>
    //       // }}

    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //       className="translate-y-[2px]"
    //     />


    //   // <Button onClick={() => console.log(row)}>Click me</Button>
    // ),
    // enableSorting: false,
    // enableHiding: false,



    accessorKey: "task_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("task_id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "pow",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Proof Of Work" />
    ),
    cell: ({ row }) => {
      const label = categories.find((label) => label.value === row.original.category)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
          {/* <HoverCardForImage name={row.getValue("task_description")} img_url={row.getValue("assigner_image_url")} task_name={row.getValue("task_name")} task_description={row.getValue("task_description")} /> */}
            {/* {(row.getValue("task_description"))} */}
            <HoverCardForDesc task_description={row.getValue("pow")} />
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "assignee_id"
  },

  {
    accessorKey: "task_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task Name" />
    ),
    cell: ({ row }) => {
      const label = categories.find((label) => label.value === row.original.category)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("task_name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "deadline",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Deadline" />
    ),
    cell: ({ row }) => {


      return (
        <div className="flex w-[100px] items-center">

          <span>{row.getValue("deadline")}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },

  {
    accessorKey: "points"
  },
  
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      )

      if (!priority) {
        return null
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      console.log(row, id, value)
      return value.includes(row.getValue(id))
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]