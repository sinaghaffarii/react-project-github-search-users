import React from "react";
import { Login, Dashboard, Error, PrivateRoute, AuthWrapper } from "./Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
};

export default App;
