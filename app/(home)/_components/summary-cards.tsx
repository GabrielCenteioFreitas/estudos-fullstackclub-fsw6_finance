import { db } from "@/app/_lib/prisma";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { SummaryCard } from "./summary-card";

interface SummaryCardsProps {
  month: string;
}

export const SummaryCards = async ({ month }: SummaryCardsProps) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      <SummaryCard
        icon={
          <div className="flex items-center justify-center rounded-lg bg-black p-2.5">
            <WalletIcon size={16} />
          </div>
        }
        title="Saldo"
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={
            <div className="flex items-center justify-center rounded-lg bg-white bg-opacity-10 p-2.5">
              <PiggyBankIcon size={16} />
            </div>
          }
          title="Investido"
          amount={investmentsTotal}
        />

        <SummaryCard
          icon={
            <div className="flex items-center justify-center rounded-lg bg-primary-15 p-2.5">
              <TrendingUpIcon size={16} className="text-primary" />
            </div>
          }
          title="Receita"
          amount={depositsTotal}
        />

        <SummaryCard
          icon={
            <div className="flex items-center justify-center rounded-lg bg-red-500 bg-opacity-10 p-2.5">
              <TrendingDownIcon size={16} className="text-red-500" />
            </div>
          }
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};