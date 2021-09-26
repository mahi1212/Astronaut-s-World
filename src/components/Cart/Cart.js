import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props)
    const {cart} = props
    let cost = 0
    for(const person of cart){
        cost = cost + person.selary
    }
    return (
        <div>
            <h2>Astronaut Added : {props.cart.length}</h2>
            <p className='cost'>
                <i class="fas fa-money-bill-alt"></i>
                Cost : {cost} <strong>$</strong>
            </p>
            
        </div>
    );
};

export default Cart;