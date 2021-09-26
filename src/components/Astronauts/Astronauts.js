import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';
import './Astronauts.css'

const Astronauts = () => {
    const [astronauts, setAstonauts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('./Astrodata.json')
        .then(res=> res.json())
        .then(data=> setAstonauts(data))
    }, [])

    const handleClick = person => {
        const newCart = [...cart, person]
        setCart(newCart)
    }
    return (
        <div className='astronauts'>
            <div className="cards">
                {
                    astronauts.map(astronaut=> <Cards astronaut={astronaut}
                    handleClick={handleClick}></Cards>)
                }
            </div>
            <div className="details">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Astronauts;