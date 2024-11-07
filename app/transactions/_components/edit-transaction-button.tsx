"use client";

import { Button } from "@/app/_components/ui/button";
import { UpsertTransactionDialog } from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface EditTransactionButtonProps {
  transaction: Transaction;
}

export const EditTransactionButton = ({
  transaction,
}: EditTransactionButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsDialogOpen(true)}
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
      >
        <PencilIcon />
      </Button>

      <UpsertTransactionDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        transactionId={transaction.id}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
      />
    </>
  );
};
