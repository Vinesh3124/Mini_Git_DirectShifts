import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'
import IssueListView from './Components/IssueListView/IssueListView'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/list-issues" exact component={IssueListView} />
      </Switch>
    </Router>
  );
}

export default App;
