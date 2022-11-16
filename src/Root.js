import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reduxPromise from "redux-promise";
import reduser from "./reduser";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reduser,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>;
};
