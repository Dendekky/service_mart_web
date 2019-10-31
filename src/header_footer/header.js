/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faCapsules } from '@fortawesome/free-solid-svg-icons';
import ResponsiveMenu from 'react-responsive-navbar';
import Search from './search';

const NavBar = () => <div>
  <div className="nav-group" >
      <Link to='/'>
      <FontAwesomeIcon icon={faCapsules} />
        {/* <img className='image' src={'/src/public/05.png'}/> */}
        </Link>
    <ResponsiveMenu
        menuOpenButton={<div className="open-menu-icon"> <FontAwesomeIcon icon={faBars} /> </div>}
        menuCloseButton={<div className="close-menu-icon"> <FontAwesomeIcon icon={faBars} /> </div>}
        changeMenuOn="500px"
        largeMenuClassName="desktop-menu"
        smallMenuClassName="mobile-menu"
        menu={
          <div>
    <Link className="jobs link">Jobs</Link>
    <Link to='/vendorcategory'className="span link">Categories</Link>
    <Link to='/login' className="span link">Login</Link>
    <Link to='/vendor' className="span link">Become a Vendor</Link>
          </div>
        }
      />
    </div>
    <Search />
    </div>;
export default NavBar;
