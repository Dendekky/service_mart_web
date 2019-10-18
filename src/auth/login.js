/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import setAuthToken from './setAuthToken';
// import { LoginApi } from '../service/apihandler';

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

  LoginApi = async () => {
    Axios.post('http://localhost:3000/api/login', this.state)
      .then((res) => {
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem('token', token);
        // Set token to Auth header
        setAuthToken(token);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
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
       <p>{this.state.apiResponse}</p>
      </form>
      <div className='login_register_div'>
        <span>Don't have an account?</span>
        <Link to='/register' className='link'>Sign Up in a second</Link>
      </div>
      </div>
    );
  }
}
