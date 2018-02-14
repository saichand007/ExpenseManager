import {connect} from 'react-redux';
import React from 'react';
import ExpenselistItem from './ExpenselistItem';
import selectExpenses from './Selectors/expenseSelector';

const Expenselist=(props)=> (
    <div>
        <h1>Expenses</h1>
     {props.expenses.map((expense)=>{
          return <ExpenselistItem key={expense.id} {...expense}/>;
      })}
    </div>
);

const mapStateToProps=(state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};


export default connect(mapStateToProps)(Expenselist);