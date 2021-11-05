import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { GithubProvider } from "./Context/context";

ReactDOM.render(
  <GithubProvider>
    <App />
  </GithubProvider>,
  document.getElementById("root")
);
