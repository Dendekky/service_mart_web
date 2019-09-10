import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Footer = () => <div className="footer-group" >
<div>
    <h3>Company</h3>
    <Link to='/howitworks'>About</Link>
    <Link to='/howitworks'>How it works</Link>
    <Link to='/login'>Login</Link>
    <Link to='/vendorlist'>Available jobs</Link>
</div>
<div>
    <h3>Popular Service</h3>
    <Link to='/vendorlist'>Makeup</Link>
    <Link to='/vendorlist'>Photography</Link>
    <Link to='/vendorlist'>Catering</Link>
    <Link to='/vendorlist'>Plumbing</Link>
    <Link to='/vendorlist'>Photocopying</Link>
</div>
<div>
    <h3>Contact Us</h3>
    <Link to='/'>Facebook</Link>
    <Link to='/'>Instagram</Link>
    <Link to='/'>Twitter</Link>
    <Link to='/'>Email</Link>
    <Link to='/'>Whatsapp</Link>
</div>
<div className="footer-form">
    <p>Don’t tell anyone, Enter your email address to receive secret deals on both Job listings and vendor offerings.</p>
    <form className="signup" name="signup">
        <p><input type="email" name="email" className="inputText" required placeholder="Enter your email address"/></p>
        <input type="submit" value="Subscribe"/>
        <p>2019 - Servicemart All Rights Reserved</p>
    </form>
</div>
</div>;

export default Footer;
