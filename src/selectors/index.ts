import { RootState } from "../types";

export const getTransactions = (state: RootState) => state.transactionState;
export const getCategories = (state: RootState) => state.categoryState;
