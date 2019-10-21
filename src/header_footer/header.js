/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faCapsules } from '@fortawesome/free-solid-svg-icons';
import ResponsiveMenu from 'react-responsive-navbar';

const NavBar = () => <div className="nav-group" >
    <Link to='/'>
        <img src={'/public/05.png'}/>
    </Link>
    <Link className="search-icon" to='/search'>
    <FontAwesomeIcon icon={faSearch} />
    </Link>
    <Link className="jobs link">Jobs</Link>
    <ResponsiveMenu
        menuOpenButton={<div className="open-menu-icon"> <FontAwesomeIcon icon={faBars} /> </div>}
        menuCloseButton={<div className="close-menu-icon"> <FontAwesomeIcon icon={faCapsules} /> </div>}
        changeMenuOn="500px"
        largeMenuClassName="desktop-menu"
        smallMenuClassName="mobile-menu"
        menu={
          <div>
    <Link to='/howitworks'className="span link">How it Works</Link>
    <Link to='/vendorcategory'className="span link">Categories</Link>
    <Link to='/login' className="span link">Login</Link>
    <Link to='register'className="span link">Signup</Link>
    <Link to='/vendor' className="span link">Become a Vendor</Link>
          </div>
        }
    />
  </div>;

export default NavBar;
