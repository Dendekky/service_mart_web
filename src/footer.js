import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Footer = () => <div className="footer-group" >
<div>
    <h3>Company</h3>
    <a href='#'>About</a>
    <a href='#'>How it works</a>
    <a href='#'>Login</a>
    <a href='#'>Available jobs</a>
</div>
<div>
    <h3>Popular Service</h3>
    <a href='#'>Makeup</a>
    <a href='#'>Photography</a>
    <a href='#'>Catering</a>
    <a href='#'>Plumbing</a>
    <a href='#'>Photocopying</a>
</div>
<div>
    <h3>Contact Us</h3>
    <a href='#'>Facebook</a>
    <a href='#'>Instagram</a>
    <a href='#'>Twitter</a>
    <a href='#'>Email</a>
    <a href='#'>Whatsapp</a>
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
