import React from 'react';
import './Working.css'
const Working = () => {
    return (
        <div className='main-working'>
            <h2>Working Summary</h2>
            <hr />
            <div className='working-container1'>
                <h3>Working Time: </h3>
                <h3>Working Time: </h3>
            </div>
            <div className='working-container2'>
                <h3>Break Time: </h3>
                <h3>Break Time: </h3>
            </div>
            <button>Calculate Total</button>
        </div>
    );
};

export default Working;