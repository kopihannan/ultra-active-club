import React, { useState } from 'react';
import './Working.css';
import Swal from 'sweetalert2'
import Profile from '../Profile/Profile';


const Working = ({ add }) => {

    let workingTime = 0;
    for (const worker of add) {
        workingTime = workingTime + worker.duration;

    }
    const [breaks, setBreaks] = useState([]);



    const minuteString = localStorage.getItem("min", breaks);
    const minute = parseFloat(minuteString);

    const addBreakBtn = (breaks) => {

        setBreaks(breaks)
        localStorage.setItem("min", breaks)

    }

    const workingActivity = () => {
        Swal.fire(
            'Good job!',
            'You can do the job beautifully!',
            'success'
        )
    }

    return (
        <div className='main-working mb-3'>
            <Profile></Profile>
            <hr />
            <h5 className='fw-bolder'>Working Break</h5>

            <div className='break-time d-flex justify-content-evenly my-3'>
                <button className='btn btn-danger' onClick={(e) => addBreakBtn(e.target.innerText)}>10</button>
                <button className='btn btn-danger' onClick={(e) => addBreakBtn(e.target.innerText)}>20</button>
                <button  className='btn btn-danger' onClick={(e) => addBreakBtn(e.target.innerText)}>30</button>
                <button  className='btn btn-danger' onClick={(e) => addBreakBtn(e.target.innerText)}>40</button>
                <button className='btn btn-danger' onClick={(e) => addBreakBtn(e.target.innerText)}>50</button>
            </div>
            <div className='working-container1 my-3 py-3'>
                <h6 className='fw-semibold'>Working Time: </h6>
                <h6 className='fw-semibold'>{workingTime} <span>Min</span> </h6>
            </div>
            <div className='working-container2 mb-3 py-3'>
                <h6 className='fw-semibold'>Breaking Time: </h6>
                <h6 className='fw-semibold'>{minute} <span>Min</span> </h6>
            </div>
            <button className='btn btn-success' onClick={workingActivity}>Working Activity</button>
        </div>
    );
};

export default Working;