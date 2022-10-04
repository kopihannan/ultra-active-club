import React, { useState } from 'react';
import './Working.css';
import Swal from 'sweetalert2'


const Working = ({ add }) => {

    let workingTime = 0;
    for (const worker of add) {
        workingTime = workingTime + worker.duration;

    }
    const [breaks, setBreaks] = useState([]);
    localStorage.setItem("min", breaks)
    const minuteString = localStorage.getItem('min');
    const minute = parseFloat(minuteString);


    const addBreakBtn = (event) => {
        setBreaks(event)
    }
    
    const workingActivity=()=>{
        Swal.fire(
            'Good job!',
            'You can do the job beautifully!',
            'success'
          )
    }

    return (
        <div className='main-working'>
            <h2>Working Summary</h2>
            <hr />
            <h3>Add a Break</h3>

            <div className='break-time'>
                <button onClick={(e) => addBreakBtn(e.target.innerText)}>10</button>
                <button onClick={(e) => addBreakBtn(e.target.innerText)}>20</button>
                <button onClick={(e) => addBreakBtn(e.target.innerText)}>30</button>
                <button onClick={(e) => addBreakBtn(e.target.innerText)}>40</button>
                <button onClick={(e) => addBreakBtn(e.target.innerText)}>50</button>
            </div>
            <div className='working-container1'>
                <h3>Working Time: </h3>
                <h3>{workingTime} <span>Min</span> </h3>
            </div>
            <div className='working-container2'>
                <h3>Breaking Time: </h3>
                <h3>{minute} <span>Min</span> </h3>
            </div>
           <button onClick={workingActivity}>Working Activity</button>
        </div>
    );
};

export default Working;