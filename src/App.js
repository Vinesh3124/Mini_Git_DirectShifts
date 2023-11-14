import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from './Components/HeaderBar/Header'
import PullDetailsPage from "./Components/PullDetailsPage/PullDetailsPage";
import "./App.css";

function App() {

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/list-pull-request" exact component={PullDetailsPage} />
          <Route path="/list-issues" exact component={PullDetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
