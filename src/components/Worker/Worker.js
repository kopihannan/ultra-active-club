import React from 'react';
import './Worker.css'
const Worker = (props) => {
    console.log(props);
    const {name, image, description, age,duration } = props.worker;
    return (
        <div className='worker-details'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <div className='age-time'>
                <p><small>Age: {age}</small></p>
                <p><small>Time Spent: {duration}</small></p>
            </div>
            <button>Add Worker</button>
        </div>
    );
};

export default Worker;