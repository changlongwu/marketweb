import React from 'react';
import Content from './Content';

const FoodTruck = () =>{
    return (
        <div className='FoodTruck'>
            
            <div className='card-container'>
                <div className='card-item'>
                    <Content imgSrc="src/img/foodtruck1.jpeg" TruckName = "Birria-Landia" Country = "Mexican"/>

                </div>

                <div className='card-item'>
                    <img src="src/img/foodtruck2.jpeg" alt="" />
                    <h4>Mysttik Masala</h4>
                    <h5>Indian</h5>
                    <button>view Menu</button>
                </div>
                <div className='card-item'>
                    <img src="src/img/foodtruck3.jpeg" alt="" />
                    <h4>Mysttik Masala</h4>
                    <h5>Middle Eastern</h5>
                    <button>view Menu</button>
                </div>
            </div>
        </div>
    )
}

export default FoodTruck;