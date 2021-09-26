import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Astronauts.css'

const Astronauts = () => {
    const [astronauts, setAstonauts] = useState([])
    useEffect(()=>{
        fetch('./Astrodata.json')
        .then(res=> res.json())
        .then(data=> setAstonauts(data))
    }, [])
    return (
        <div className='astronauts'>
            <div className="cards">
                {
                    astronauts.map(astronaut=> <Cards astronaut={astronaut}></Cards>)
                }
            </div>
            <div className="details">
                sdas
            </div>
        </div>
    );
};

export default Astronauts;