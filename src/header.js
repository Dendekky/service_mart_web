import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => <div className="nav-group" >
    <Link to='/'>
        <img src={'/public/05.png'}/>
        </Link>
    <Link to='#'>
    <FontAwesomeIcon icon={faSearch} />
    </Link>
    <h1>Job Listings</h1>
    <Link to='#'>
    <FontAwesomeIcon icon={faBars} />
    </Link>
    </div>;

export default NavBar;
