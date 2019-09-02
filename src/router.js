/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login';
import Register from './register';
import NavBar from './header';
import Footer from './footer';

const RouterFile = () => <Router>
    <div>
    <NavBar />
    <Route path='/register' component={Register}></Route>
    <Route exact path='/' component={Login}></Route>
    <Footer />
    </div>
    </Router>;

export default RouterFile;