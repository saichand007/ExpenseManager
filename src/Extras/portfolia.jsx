import React, { Component } from 'react';
import './App.css';
import{NavLink} from 'react-router-dom';


class Portfolia extends Component {

  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
   
    return (
      
      <div>
    <h1>Portfolio </h1>
    <NavLink to="/profile/1"  activeClassName="is-active"> <h3>profile-1</h3> </NavLink>
      </div>
    );
  }
}

export default Portfolia;
