import React, { Component } from 'react';
import{NavLink} from 'react-router-dom';
import './App.css';

class Header extends Component {

  render() {
    return (
      <div>
      <h1>  Expensify </h1>
      <div >
    <NavLink to="/" activeClassName="is-active" exact={true}>  <h3>Home</h3> </NavLink>
    <NavLink to="/add"  activeClassName="is-active"> <h3>Add Expense</h3> </NavLink>
    <NavLink to="/edit/:id"  activeClassName="is-active">  <h3>Edit Expense</h3> </NavLink>
    <NavLink to="/help"  activeClassName="is-active"> <h3>Help</h3> </NavLink>

      </div>
      </div>
    );
  }
}

export default Header;
