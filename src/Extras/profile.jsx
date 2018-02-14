import React, { Component } from 'react';
import './App.css';

class Profile extends Component {

  constructor(props){
    super(props);
    console.log(props);
  }


  render() {
   
    return (
      
      <div>
      <h1>Porfile </h1>
      <h2> Profile  {this.props.match.params.id}</h2>

      </div>
    );
  }
}

export default Profile;
