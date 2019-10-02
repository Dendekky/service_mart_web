/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Service from '../service/index';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // consider axios for api calls

  onSubmit = (event) => {
    event.preventDefault();
    this.LoginApi();
  }

  // So this is the api method exported to the service directory
  async LoginApi() {
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
        <form onSubmit={this.onSubmit}>
        <p>Login To Your Vendor Account!</p>
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
       <input className="button" type="submit" value="Login" />
       </div>
       <p className="gapp-intro">{this.state.apiResponse}</p>
      </form>
      <div className='login_register_div'>
        <span>Don't have an account?</span>
        <Link to='/register' className='link'>Sign Up in a second</Link>
      </div>
      </div>
    );
  }
}
