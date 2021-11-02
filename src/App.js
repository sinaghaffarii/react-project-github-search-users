import React from 'react';
import { Login, Dashboard, Error} from './Pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Dashboard/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  )
}


export default App