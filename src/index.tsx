import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import ReactDOM from "react-dom";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import App from "./containers/App";
import rootSaga from "./sagas";
import rootReducer from "./slices";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
