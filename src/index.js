import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import storeFactory from "./store"
import "./index.css";

const store = storeFactory()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
