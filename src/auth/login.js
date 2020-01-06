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
      errMessage: '',
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // consider fetching eror message from the backend

  onSubmit = (event) => {
    event.preventDefault();
    this.LoginApi();
  }

  LoginApi = async () => {
    Axios.post('https://service-mart-api.herokuapp.com/api/login', this.state)
      .then((res) => {
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        sessionStorage.setItem('token', token);
        // Set token to Auth header
        setAuthToken(token);
        if (res.data.status === 200) {
          this.props.history.push('/');
        } else {
          this.setState({ errMessage: res.data.message || res.data.errors[0].msg });
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { errMessage } = this.state;
    const token = sessionStorage.getItem('token');

    if (token) {
      return (
          <h4>You are logged in</h4>
      )
    }

    return (
      <div className='login_main_div'>
        <form onSubmit={this.onSubmit}>
        <p>Log in To Your Account!</p>
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
       <p>{errMessage}</p>
      </form>
      <div className='login_register_div'>
        <span>Don't have an account?</span>
        <Link to='/register' className='link'>Sign Up in a second</Link>
      </div>
      </div>
    );
  }
}
