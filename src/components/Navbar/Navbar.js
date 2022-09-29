import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='nav-logo'>
                <FontAwesomeIcon icon={faBuilding} size="2xl" />
                <h1 className='logo'>Factory Life</h1>
            </div>
        </div>
    );
};

export default Navbar;