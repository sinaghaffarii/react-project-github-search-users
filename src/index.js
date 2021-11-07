import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { GithubProvider } from "./Context/context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-7dfmq79h.us.auth0.com"
    clientId="hjlRCbv2x5bLDJxloujgWaB4r9iGfYpJ"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
