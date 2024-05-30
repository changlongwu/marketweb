import React from 'react';
import Content from './Content';
import foodTruckImage1 from './img/foodtruck1.jpeg';
import foodTruckImage2 from './img/foodtruck2.jpeg';
import foodTruckImage3 from './img/foodtruck3.jpeg';
const FoodTruck = () =>{
    return (
        <div className='FoodTruck'>
            
            <div className='card-container'>
                <div className='card-item'>
                    <Content imgSrc={foodTruckImage1} TruckName = "Birria-Landia" Country = "Mexican"/>

                </div>

                <div className='card-item'>
                    <img src={foodTruckImage2} alt="" />
                    <h4>Mysttik Masala666</h4>
                    <h5>Indian</h5>
                    <button>view Menu</button>
                </div>
                <div className='card-item'>
                    <img src={foodTruckImage3} alt="" />
                    <h4>Mysttik Masala</h4>
                    <h5>Middle Eastern</h5>
                    <button>view Menu</button>
                </div>
            </div>
        </div>
    )
}

export default FoodTruck;