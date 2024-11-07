"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../_components/ui/button";
import { UpsertTransactionDialog } from "./upsert-transaction-dialog";

export const AddTransactionButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className="rounded-full font-bold"
      >
        Adicionar transação
        <ArrowDownUpIcon />
      </Button>

      <UpsertTransactionDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
      />
    </>
  );
};
