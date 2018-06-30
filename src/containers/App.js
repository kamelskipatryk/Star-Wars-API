import React, { Component } from 'react';
import Clock from '../components/Clock';
import UsersArray from './UsersArray';
import './App.css';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     usersInformation: []
  //   }
  // }

  // componentDidMount(){
  //   this.fetchData();
  // }

  // fetchData(){
  //   fetch('https://swapi.co/api/people/?format=json')
  //   .then(response => response.json())
  //   .then(usersList => usersList.results.map(user => (
  //     {
  //       name: `${user.name}`,
  //       height: `${user.height}`,
  //       mass: `${user.mass}`,
  //       gender: `${user.gender}`,
  //       eye_color: `${user.eye_color}`
  //     }
  //   )))
  //   .then(usersInformation => this.setState({
  //     usersInformation
      
  //   }))
  //   .catch(error => console.log('parsing failed', error));
  // }
  
  render() {
    return (
      <div className='body'>
        <header>
          <h1>List of Star Wars heroes!</h1>
          <Clock />
          <UsersArray />
        </header>
      </div>
    );
  }
}

export default App;
