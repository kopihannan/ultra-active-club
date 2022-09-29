import React, { useEffect, useState } from 'react';
import Worker from '../Worker/Worker';
import './Factory.css'
const Factory = () => {
    const [workers, setWorkers] = useState([]);
    useEffect(()=>{
        fetch('workerdb.json')
        .then(rel => rel.json())
        .then(data => setWorkers(data))
    },[])
    return (
        <div className='factory-container'>
            <div className='worker-list'>
                {
                    workers.map(worker => <Worker worker={worker}></Worker>)
                }
            </div>
            <div className='summary'>
                <h2>Working Summary</h2>
            </div>
        </div>
    );
};

export default Factory;