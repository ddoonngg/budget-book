import { combineReducers, Reducer } from "redux";

import transactionReducer from "./transaction";
import categoryReducer from "./category";
import { RootState } from "../types";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  transactionState: transactionReducer,
  categoryState: categoryReducer,
});

export default rootReducer;
