/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login';
// import logo from './logo.svg';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Login}></Route>
    </Router>
  );
}

export default App;
