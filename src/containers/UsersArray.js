import React, { Component } from 'react';
import UserCard from '../components/UserCard';
import './UsersArray.css';

class UsersArray extends Component {

  constructor(props){
    super(props);
    this.state = {
        usersList: []
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('https://swapi.co/api/people/?format=json')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(user => (
      {
        name: `${user.name}`,
        height: `${user.height}`,
        mass: `${user.mass}`,
        gender: `${user.gender}`,
        eye_color: `${user.eye_color}`
      }
    )))
    .then(usersList => this.setState({
        usersList
    }))
    .catch(error => console.log('parsing failed', error));
  }
  
  render() {
    const {usersList} = this.state;
    return (
        <div className='userArray'>
            {
                usersList.map(userInformation =>{
                const {name, height, mass, gender, eye_color} = userInformation;
                return (
                  <div className='userCard'>
                    <UserCard
                      name={name}
                      height={height}
                      mass={mass}
                      gender={gender}
                      eye_color={eye_color}
                      key={name}
                    />
                    {/* <br /> */}
                  </div>
                )
              })
            }
          </div>
    )
  }
}

export default UsersArray;
