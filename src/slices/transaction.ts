import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionState, TransactionItem } from "../types";

export const initialState: TransactionState = {
  transactions: [],
  loading: true,
  editing: false,
  editingId: "",
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, { payload }: PayloadAction<TransactionItem>) => {
      state.transactions.push(payload);
    },
    updateTransaction: (state, { payload }: PayloadAction<TransactionItem>) => {
      state.transactions = state.transactions.map((transaction) =>
        transaction.id === payload.id
          ? { ...transaction, ...payload }
          : transaction
      );
    },
    deleteTransaction: (state, { payload }: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== payload
      );
    },
    loadTransactions: (state) => {
      state.loading = true;
    },
    loadTransactionsError: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
    loadTransactionsSuccess: (
      state,
      { payload }: PayloadAction<TransactionItem[]>
    ) => {
      state.transactions = payload;
      state.loading = false;
    },
    setEditing: (state, { payload }: PayloadAction<boolean>) => {
      state.editing = payload;
    },
    setEditingId: (state, { payload }: PayloadAction<string>) => {
      state.editingId = payload;
    },
  },
});

export const {
  addTransaction,
  loadTransactions,
  loadTransactionsError,
  loadTransactionsSuccess,
  updateTransaction,
  deleteTransaction,
  setEditing,
  setEditingId,
} = transactionSlice.actions;

export default transactionSlice.reducer;
