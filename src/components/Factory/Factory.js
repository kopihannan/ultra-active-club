import React, { useEffect, useState } from 'react';

import Worker from '../Worker/Worker';
import Working from '../Working/Working';
import './Factory.css'
const Factory = () => {
    const [workers, setWorkers] = useState([]);
    const [add, setAdd] = useState([]);

    useEffect(()=>{
        fetch('workerdb.json')
        .then(rel => rel.json())
        .then(data => setWorkers(data))
    },[])
    const addList =(worker)=>{
        const newAdd = [...add, worker];
        setAdd(newAdd)
    }
    return (
        <div className='factory-container'>
            <div className='worker-list'>
                {
                    workers.map(worker => <Worker 
                        worker={worker} 
                        addList={addList} key={worker.id}></Worker>)
                }
            </div>
            <div className='summary'>
 
                <Working add={add}></Working>

            </div>
        </div>
    );
};

export default Factory;