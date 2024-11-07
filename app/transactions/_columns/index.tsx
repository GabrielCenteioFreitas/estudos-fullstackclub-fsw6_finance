"use client";

import { TransactionTypeBadge } from "@/app/transactions/_components/transaction-type-badge";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
