import React, { FC, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppStoreProvider from "contextStore/StoreProvider";
import App from "App";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
import "./index.css";

const root = document.getElementById("root");
const render = (Cmp: FC) =>
  ReactDOM.render(
    <AppStoreProvider>
      <Router>
        <Suspense fallback={<div>...loading</div>}>
          <Cmp />
        </Suspense>
      </Router>
    </AppStoreProvider>,
    root
  );

if (root) {
  render(App);
}

if (module.hot) {
  module.hot.accept("./App", () => {
    render(require("./App").default);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
