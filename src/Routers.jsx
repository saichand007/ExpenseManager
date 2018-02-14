import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage';
import NoPage from './NoPage';
import ExpenseDashboardPage from './ExpenseDashboardPage';

import Header from './Header';
import './App.css';

class Routers extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
        <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
        <Route path="/add" component={AddExpensePage}></Route>
        <Route path="/edit/:id" component={EditExpensePage}></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NoPage}></Route>
      </Switch>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default Routers;
