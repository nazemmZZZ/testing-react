import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { Provider } from "react-redux";
import { createStore } from "redux";
import reduser from "./reduser";

ReactDOM.render(
  <Provider store={createStore(reduser,{})}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
