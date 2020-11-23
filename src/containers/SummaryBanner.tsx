import React from "react";
import SummaryBoard from "../components/Summary/SummaryBoard";
import { useSelector, useDispatch } from "react-redux";
import { getTransactions, getCategories } from "../selectors";
import {
  addTransaction,
  loadTransactions,
  setEditing,
  setEditingId,
} from "../slices/transaction";
import { CategoryType, TransactionItem } from "../types";
import { groupTransactionByDate } from "../util/transaction";
import { PlusOutlined, StarFilled } from "@ant-design/icons";
import TransactionPanel from "../components/TransactionsCollection/TransactionPanel";
import TransactionEditModal from "./TransactionEditModal";
import { Button, Space } from "antd";
import { dateFormat } from "../constants";
import { getCategoryItemById } from "../util/category";
import moment from "moment";
import "./SummaryBanner.scss";

const SummaryBanner = () => {
  const { transactions } = useSelector(getTransactions);
  const { categories } = useSelector(getCategories);

  const thisMonthTransactions = transactions.filter((transaction) =>
    moment(transaction.date).isSame(moment(new Date(), "YYYY-MM"), "M")
  );

  let thisMonthExpense = 0;
  let thisMonthIncome = 0;
  thisMonthTransactions.forEach((transaction) => {
    const cateItem = getCategoryItemById(transaction.category, categories);
    if (cateItem && cateItem.categoryType === CategoryType.EXPENSE) {
      thisMonthExpense += transaction.amount;
    } else if (cateItem && cateItem.categoryType === CategoryType.INCOME) {
      thisMonthIncome += transaction.amount;
    }
  });

  return (
    <div className="summary-banner">
      <div className="summary-banner__inner">
        <SummaryBoard
          thisMonthExpense={thisMonthExpense}
          thisMonthIncome={thisMonthIncome}
        />
      </div>
    </div>
  );
};

export default SummaryBanner;
