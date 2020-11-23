import { TransactionItem } from "../types";
export function groupTransactionByDate(
  transactions: TransactionItem[],
  start: string
): {
  todayTransactions: TransactionItem[];
  yesterdayTransactions: TransactionItem[];
  monthsTransaction: TransactionItem[];
} {
  if (!transactions || transactions.length === 0) {
    return {
      todayTransactions: [],
      yesterdayTransactions: [],
      monthsTransaction: [],
    };
  }
  const today: TransactionItem[] = [];
  const yesterday: TransactionItem[] = [];
  const months: TransactionItem[] = [];
  const startDate = new Date(start);
  const startYesterday = new Date(start);
  startYesterday.setDate(startDate.getDate() - 1);

  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();

  transactions.forEach((transaction) => {
    const { date: created } = transaction;
    const createdDate = new Date(created);

    const createdYear = createdDate.getFullYear();
    const createdMonth = createdDate.getMonth();
    const createdDay = createdDate.getDate();

    if (
      createdYear === startYear &&
      startMonth === createdMonth &&
      startDay === createdDay
    ) {
      today.push(transaction);
    } else if (
      createdYear === startYear &&
      startMonth === createdMonth &&
      startYesterday.getDate() === createdDay
    ) {
      yesterday.push(transaction);
    } else if (
      createdYear < startYear ||
      (createdYear === startYear && createdMonth <= startMonth)
    ) {
      months.push(transaction);
    }
  });

  return {
    todayTransactions: today,
    yesterdayTransactions: yesterday,
    monthsTransaction: months,
  };
}
