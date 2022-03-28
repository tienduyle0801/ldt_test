import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configStore from "./store";
import { Provider } from "react-redux";
import "./styles/global.scss";
const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
