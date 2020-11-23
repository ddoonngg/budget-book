import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  Modal,
  InputNumber,
} from "antd";
import {
  setEditing,
  setEditingId,
  addTransaction,
  updateTransaction,
} from "../slices/transaction";
import { getCategories, getTransactions } from "../selectors";
import moment from "moment";
import { CategoryItem, CategoryType, TransactionItem } from "../types";
import { dateFormat } from "../constants";
import { v4 } from "uuid";
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const TransactionEditModal: React.FC = () => {
  const { editingId, editing, transactions } = useSelector(getTransactions);
  const { categories } = useSelector(getCategories);
  const [form] = Form.useForm();

  const getCategoryTypeById = (id: string, categories: CategoryItem[]) => {
    if (!id) {
      return CategoryType.EXPENSE;
    }
    return categories.find((cate) => cate.id === id) || CategoryType.EXPENSE;
  };

  const editingTransactionItem: TransactionItem = transactions.find(
    (item) => item.id === editingId
  ) || {
    id: v4(),
    category: "",
    amount: 0,
    date: moment(new Date()).format(dateFormat),
    memo: "",
  };

  const [activeCategoryType, setActiveCategoryType] = useState(
    getCategoryTypeById(editingId, categories)
  );

  React.useEffect(() => {
    form.resetFields();
  }, [activeCategoryType]);

  const filteredCategories = categories.filter(
    (cate) => cate.categoryType === activeCategoryType
  );

  const dispatch = useDispatch();
  const addingNew = editingId === "";
  const _addTransaction = (transaction: TransactionItem) =>
    dispatch(addTransaction(transaction));
  const _updateTransaction = (transaction: TransactionItem) =>
    dispatch(updateTransaction(transaction));
  const _closeModal = () => dispatch(setEditing(false));
  const handleModalClose = () => {
    _closeModal();
    setEditingId("");
  };

  const handleTransactionCreate = (transaction: TransactionItem) => {
    _addTransaction(transaction);
  };

  const handleTransactionUpdate = (transaction: TransactionItem) => {
    _updateTransaction(transaction);
  };

  const modalTitle = addingNew ? "New Transaction" : "Update Transaction";

  const modalOkText = addingNew ? "Create" : "Update";
  return (
    <React.Fragment>
      {editing ? (
        <Modal
          title={modalTitle}
          visible={true}
          okText={modalOkText}
          cancelText="Cancel"
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                handleModalClose();
                const {
                  category,
                  memo,
                  amount,
                  date: dateMoment,
                } = values as TransactionItem;

                const transactionToSolve = {
                  category,
                  id: editingId || v4(),
                  memo,
                  amount,
                  date: moment(dateMoment).format(dateFormat),
                };

                if (addingNew) {
                  handleTransactionCreate(transactionToSolve);
                } else {
                  handleTransactionUpdate(transactionToSolve);
                }
              })
              .catch((info) => {
                console.log(info);
              });
          }}
          onCancel={() => {
            form.resetFields();
            handleModalClose();
          }}
        >
          <Form
            form={form}
            initialValues={{ remember: false }}
            preserve={false}
            {...layout}
          >
            <Form.Item
              label="Transaction Type"
              name="transaction-type"
              rules={[{ required: true }]}
              initialValue={activeCategoryType}
            >
              <Radio.Group
                buttonStyle="outline"
                onChange={(event) => {
                  setActiveCategoryType(event.target.value);
                }}
              >
                <Radio.Button value={CategoryType.EXPENSE}>
                  EXPENSE
                </Radio.Button>
                <Radio.Button value={CategoryType.INCOME}>INCOME</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Category"
              rules={[{ required: true }]}
              name="category"
              initialValue={filteredCategories[0].id}
            >
              <Select placeholder="Select category">
                {filteredCategories.map((cate) => (
                  <Option value={cate.id} key={cate.id}>
                    {cate.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Amount"
              name="amount"
              rules={[{ required: true, message: "Please input your amount!" }]}
              initialValue={editingTransactionItem.amount}
            >
              <InputNumber
                style={{ minWidth: 200 }}
                formatter={(value: any) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value: any) => value.replace(/\$\s?|(,*)/g, "")}
              />
            </Form.Item>

            <Form.Item
              label="Date"
              name="date"
              initialValue={moment(editingTransactionItem.date, dateFormat)}
              rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              label="Memo"
              name="memo"
              rules={[{ message: "Please input your username!" }]}
              initialValue={editingTransactionItem.memo}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default TransactionEditModal;
