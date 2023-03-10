import { useState } from "react";
import Head from "next/head";
import { Heading, IconButton, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { HiDotsHorizontal } from "react-icons/hi";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import Layout from "../components/layout/layout";

import { Reservation, reservations } from "../data/reservations";

const columnHelper = createColumnHelper<Reservation>();

const columns = [
  columnHelper.accessor("unit.number", {
    header: () => "Room",
    cell: (info) => info.row.original.unit.roomType.type.slice(0, 3) + "-" + info.getValue(),
  }),
  columnHelper.accessor("dates.start", {
    header: () => "Check In",
  }),
  columnHelper.accessor("dates.end", {
    header: () => "Check Out",
  }),
  columnHelper.accessor(
    (row) => Math.floor((new Date(row.dates.end).getTime() - new Date(row.dates.start).getTime()) / 86400000),
    {
      id: "days",
      header: () => "No. of Days",
      cell: (info) => info.getValue() + " days",
    }
  ),
  columnHelper.accessor("meals", {
    header: () => "Meals",
  }),
  columnHelper.accessor("guest.name", {
    header: () => "Guest",
  }),
  columnHelper.accessor("payment.amount", {
    header: () => "Price",
    cell: (info) => "$" + info.getValue().toLocaleString(),
    footer: (info) =>
      "$" +
      info.table
        .getFilteredRowModel()
        .rows.reduce((sum, row) => (sum += Number(row.getValue("payment_amount"))), 0)
        .toLocaleString(),
  }),
  columnHelper.accessor("payment.isPaid", {
    header: () => "Status",
    cell: (info) =>
      info.getValue() ? (
        <>
          <span>Paid</span> <span>{info.row.original.payment.method}</span>
        </>
      ) : (
        "Pending"
      ),
  }),
];

export default function Reservations() {
  const [data, setData] = useState(reservations);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <Head>
        <title>Concierge - Reservations</title>
      </Head>

      <Heading as="h2" size="lg" mb="5">
        Reservations
      </Heading>
      <TableContainer>
        <Table size="sm" variant="striped">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </Th>
                ))}
                <Th>Actions</Th>
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell, index) =>
                  index === 0 ? (
                    <Th key={cell.id} bgColor="gray.100">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Th>
                  ) : (
                    <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
                  )
                )}
                <Td py="1" textAlign="center">
                  <IconButton aria-label="actions" variant="ghost" icon={<HiDotsHorizontal />} />
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <Tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                  </Th>
                ))}
              </Tr>
            ))}
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

Reservations.getLayout = function (page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
