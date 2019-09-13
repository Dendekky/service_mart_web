/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login';
import Register from './register';
import NavBar from './header';
import Footer from './footer';
import HowItWorks from './howitworks';
import Homepage from './homepage';
import Vendor from './vendor';
import VendorDisp from './vendorlist';
import VendorInfo from './vendorinfo';

// TODO: Switch API call handlers to the service directory
const RouterFile = () => <Router>
    <div>
    <NavBar />
    <Route path='/vendor' component={Vendor}></Route>
    <Route exact path='/vendorlist' component={VendorDisp}></Route>
    <Route path='/vendorlist/:VendorId' component={VendorInfo}></Route>
    <Route path='/howitworks' component={HowItWorks}></Route>
    <Route path='/register' component={Register}></Route>
    <Route path='/login' component={Login}></Route>
    <Route exact path='/' component={Homepage}></Route>
    <Footer />
    </div>
    </Router>;

export default RouterFile;
