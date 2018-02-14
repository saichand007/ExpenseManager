import React, { Component } from 'react';
import './App.css';
import ExpenselistFilter from './ExpenselistFilter';
import ExpenseList from './ExpenseList'

class ExpenseDashboardPage extends Component {

  render() {
    return (
      <div>
      <h1>Home Page</h1>
      <ExpenselistFilter/>
      <ExpenseList/>
      </div>
    );
  }
}

export default ExpenseDashboardPage;
