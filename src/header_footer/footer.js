/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => <div className="footer">
<div className="footer-group" >
<div>
    <h3>Company</h3>
    <Link to='/howitworks' className='link'>About</Link>
    <Link to='/howitworks' className='link'>How it works</Link>
    <Link to='/register' className='link'>Sign up</Link>
    <Link to='/vendorlist' className='link'>Available jobs</Link>
</div>
<div>
    <h3>Contact Us</h3>
    <Link to='/' className='link'>Facebook</Link>
    <Link to='/' className='link'>Instagram</Link>
    <Link to='/' className='link'>Twitter</Link>
    <Link to='/' className='link'>Whatsapp</Link>
</div>
</div>
        <p>2019 - Servicemart All Rights Reserved</p>
</div>;

export default Footer;
