/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './login';
import Register from './register';
// import logo from './logo.svg';

function App() {
  // callAPI() {
  //   fetch('http://localhost:3000/api/')
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }))
  //     .catch(err => err);
  // }

  // componentDidMount() {
  //   this.callAPI();
  // }
  return (
      <Router>
      <Route path='/register' component={Register}></Route>
      <Route exact path='/' component={Login}></Route>
      </Router>
  );
}
// function App() {
//   return (
//     <Router>
//       <Route exact path='/' component={Login}></Route>
//     </Router>
//   );
// }

export default App;
