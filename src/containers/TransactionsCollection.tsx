import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTransactions } from "../selectors";
import {
  addTransaction,
  loadTransactions,
  setEditing,
  setEditingId,
  deleteTransaction,
} from "../slices/transaction";
import { TransactionItem } from "../types";
import { groupTransactionByDate } from "../util/transaction";
import {
  PlusOutlined,
  StarFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import TransactionPanel from "../components/TransactionsCollection/TransactionPanel";
import TransactionEditModal from "./TransactionEditModal";
import { Button, Space, message, Modal, Pagination, Divider } from "antd";
import { dateFormat } from "../constants";
import moment from "moment";
import _ from "lodash";

const { confirm } = Modal;

const TransactionsCollection: React.FC = () => {
  const { transactions, editing, editingId } = useSelector(getTransactions);

  const orderedTransactions = transactions.slice();

  orderedTransactions.sort((t1, t2) =>
    moment(t1.date).isSameOrAfter(moment(t2.date), "D") ? -1 : 1
  );

  const dispatch = useDispatch();
  const _loadTransactions = () => dispatch(loadTransactions());
  const _setEditing = (editing: boolean) => dispatch(setEditing(editing));
  const _setEditingId = (id: string) => dispatch(setEditingId(id));
  const _deleteTransaction = (id: string) => dispatch(deleteTransaction(id));

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  const success = () => {
    message.success("Successful deleted");
  };

  React.useEffect(() => {
    _loadTransactions();
  }, []);

  const handleEdit = (event: any, id: string) => {
    _setEditingId(id);
    _setEditing(true);
  };

  const handleDelete = (event: any, id: string) => {
    _deleteTransaction(id);
    _setEditingId("");
    _setEditing(false);
    success();
  };

  const chunkedOrderedTransactions = _.chunk(orderedTransactions, pageSize);
  const {
    todayTransactions,
    yesterdayTransactions,
    monthsTransaction,
  } = groupTransactionByDate(
    chunkedOrderedTransactions[currentPage - 1],
    moment(new Date()).format(dateFormat)
  );

  const groupTransactionByMonth = (transactions: TransactionItem[]) => {
    const map = new Map();
    const getKey = (dateString: string) => {
      return dateString.split("-").slice(0, 2).join("-");
    };
    transactions.forEach((transaction) => {
      const { date: dateString } = transaction;
      const k = getKey(dateString);
      if (map.has(k)) {
        map.get(k).push(transaction);
      } else {
        map.set(k, [transaction]);
      }
    });
    return map;
  };
  function showCategoryDeleteConfirm(event: any, id: string) {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDelete(event, id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }
  const transactionsByMonth = groupTransactionByMonth(monthsTransaction);
  return (
    <div>
      <header></header>
      <div>
        <Button
          icon={<PlusOutlined />}
          onClick={(e) => {
            _setEditing(true);
            _setEditingId("");
          }}
          type="primary"
        >
          New Transaction
        </Button>
      </div>
      {/* today */}
      {todayTransactions.length > 0 && (
        <TransactionPanel
          onDelete={showCategoryDeleteConfirm}
          onEdit={handleEdit}
          heading={
            <Space size={8}>
              <span>Today</span>
              <span>
                <StarFilled style={{ fontSize: 20, color: "#FFD700" }} />
              </span>
            </Space>
          }
          transactions={todayTransactions}
          getDateView={(dateStr) => "today"}
        />
      )}
      {/* yesterday */}
      {yesterdayTransactions.length > 0 && (
        <TransactionPanel
          onDelete={showCategoryDeleteConfirm}
          onEdit={handleEdit}
          heading="Yesterday"
          transactions={yesterdayTransactions}
          getDateView={(dateStr) => "yesterday"}
        />
      )}
      {/* previous months */}
      {monthsTransaction.length > 0 &&
        [...transactionsByMonth.keys()].map((key, index) => {
          return (
            <TransactionPanel
              key={index}
              onDelete={showCategoryDeleteConfirm}
              onEdit={handleEdit}
              heading={moment(key).format("YYYY MMMM")}
              transactions={transactionsByMonth.get(key)}
              getDateView={(dateStr) => moment(dateStr).format("MMM DD")}
            />
          );
        })}
      <TransactionEditModal />
      <Divider></Divider>

      <footer>
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          onChange={(page, pageSize) => {
            setCurrentPage(page);
            setPageSize(pageSize || 8);
          }}
          total={orderedTransactions.length}
          defaultPageSize={pageSize}
        />
      </footer>
    </div>
  );
};

export default TransactionsCollection;
