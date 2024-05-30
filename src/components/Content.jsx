import React from 'react';

const Content = (props) =>{
    return (
        <div className='Content'>

        <img src={props.imgSrc} alt="" />
        <h4>{props.TruckName}</h4>
        <h5>{props.Country}</h5>
        <button>view Menu</button>

        </div>

    )

}

export default Content;