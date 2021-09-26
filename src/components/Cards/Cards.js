import React from 'react';
import './Cards.css'

const Cards = (props) => {
    console.log(props)
    const {picture, name, gender, company, email, phone, city} = props.astronaut
    return (
        <div className='card'>
            <div className="card-inner">
                <img className='image' src={picture} alt="" />
                <div className='info-div'>
                    <h3>Name : {name}</h3>
                    <p>Gender : {gender}</p>
                    <p>City : {city}</p>
                    <p>Company : {company}</p>
                    <p><small>Email : {email}</small></p>
                    <p>Phone : {phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;