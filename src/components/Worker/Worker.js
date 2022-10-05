import React from 'react';
import './Worker.css'
const Worker = (props) => {
    const {addList, worker} = props;
    const {name, image, description, age,duration } = props.worker;
    return (
        <div className='worker-details'>
            <img src={image} alt="" />
            <h4 className='pt-1 fw-bolder'>{name}</h4>
            <p className='p-2'><small>{description}</small></p>
            <div className='age-time'>
                <p><small>Age: {age}</small></p>
                <p><small>Time Spent: {duration}</small></p>
            </div>
            <button className='btn btn-success' onClick={()=>addList(worker)}>Add Worker</button>
        </div>
    );
};

export default Worker;