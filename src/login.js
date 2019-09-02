/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginApi from '../service/index';

export default class Login extends Component {
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

  // consider axios for api calls

  async onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.text();
      this.setState({ apiResponse: res });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className='login_main_div'>
        <img className='login_img' src={'/public/05.png'} />
        <form onSubmit={this.onSubmit}>
        <h1>Login To Your Vendor Account!</h1>
        <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div>
       <input type="submit" value="Login" />
       </div>
       <p className="gapp-intro">{this.state.apiResponse}</p>
      </form>
      <div className='login_register_div'>
        <span>Don't have an account?</span>
        <Link to='/register'>Sign Up</Link>
      </div>
      </div>
    );
  }
}
