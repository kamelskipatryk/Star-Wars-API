import React from 'react';
import './UserCard.css'

const UserCard = (props) => {
    return(
        <div>
            <p>Name : {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Gender: {props.gender}</p>
            <p>Eye color: {props.eye_color}</p>
        </div>
    )
}

export default UserCard;