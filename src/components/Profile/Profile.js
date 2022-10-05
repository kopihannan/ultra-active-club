import React from 'react';
import profile from '../Images/profile.png';
import './Profile.css'
const Profile = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='profle'>
                    <img src={profile} alt="" />
                </div>
                <div className='text-align'>
                    <h6 className='fw-bolder'>KOPI HANNAN</h6>
                    <p className='fw-semibold'><small>Lakshmipur, Bangladesh</small></p>
                </div>
            </div>
            <div className='my-3 rounded pt-3 d-flex justify-content-evenly bg-success p-2 text-dark bg-opacity-25 align-items-center text-center'>
                <div>
                    <h4 className='fw-bold'>53 kg</h4>
                    <p className='fw-bolder'>Weight</p>
                </div>
                <div>
                    <h4 className='fw-bold'>53 kg</h4>
                    <p className='fw-bolder'>Weight</p>
                </div>
                <div>
                    <h4 className='fw-bold'>53 kg</h4>
                    <p className='fw-bolder'>Weight</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;