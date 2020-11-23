import { all, put, takeLatest } from "redux-saga/effects";
import { requestTransactions, requestCategoies } from "../api/index";
import {
  loadTransactions,
  loadTransactionsError,
  loadTransactionsSuccess,
} from "../slices/transaction";

import {
  loadCategories,
  loadCategoriesError,
  loadCategoriesSuccess,
} from "../slices/category";
import { CategoryItem, TransactionItem } from "../types";

function* fetchTransactions() {
  let data: TransactionItem[];
  try {
    data = yield requestTransactions();
    yield put(loadTransactionsSuccess(data));
  } catch (error) {
    yield put(loadTransactionsError(error.message));
  }
}

function* fetchCategories() {
  let data: CategoryItem[];
  try {
    data = yield requestCategoies();
    yield put(loadCategoriesSuccess(data));
  } catch (error) {
    yield put(loadCategoriesError(error.message));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(loadTransactions.type, fetchTransactions),
    takeLatest(loadCategories.type, fetchCategories),
  ]);
}

export default rootSaga;
