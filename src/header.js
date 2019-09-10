import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => <div className="nav-group" >
    <Link to='/'>
        <img src={'/public/05.png'}/>
        </Link>
    <a href='hdgh.html'>
        <button>search</button>
    </a>
    <h1>Job Listings</h1>
    <a href='hdgh.html'>
        <button>Menu Bar</button>
        </a>
    </div>;

export default NavBar;
