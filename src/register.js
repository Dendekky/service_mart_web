/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Login from './login';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      apiResponse: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3000/api/register', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  render() {
    return (
      <div className='login_main_div'>
      <img className='login_img' src={'/public/05.png'} />
        <form onSubmit={this.onSubmit}>
        <h1>Signup For Your Vendor Account!</h1>
        <div>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div>
       <input type="submit" value="Register" />
       </div>
       <p className="gapp-intro">{this.state.apiResponse}</p>
      </form>
      <div>
          <span>Already have an account</span>
          <Link to='/'>Login</Link>
      </div>
      {/* <Router>
      <Route path='/login' component={Login}></Route>
      </Router> */}
      </div>
    );
  }
}
