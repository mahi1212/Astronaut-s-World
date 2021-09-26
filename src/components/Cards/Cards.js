import React from 'react';
import './Cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cards = (props) => {
    console.log(props.astronaut)
    const {picture, name, gender, company, email, phone, city, selary} = props.astronaut
    return (
        <div className='card'>
            <div className="card-inner">
                <img className='image' src={picture} alt="" />
                <div className='info-div'>
                    <h3>Name : {name}</h3>
                    <p>Gender : {gender}</p>
                    <p>City : {city}</p>
                    <p>Selary : {selary} $</p>
                    <p>Company : {company}</p>
                    <p><small>Email : {email}</small></p>
                    <p>Phone : {phone}</p>
                    <button className='add-btn'
                    onClick={()=> props.handleClick(props.astronaut)}
                    >
                    <i class="fas fa-check-square"></i>
                    Choose {(gender==='male')?'him':'her'}</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;