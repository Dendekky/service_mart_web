/* eslint-disable linebreak-style */
import React, { Component } from 'react';


// const Login = () => <div>Hello React,Webpack 4 & Babel 7!</div>

// export default Login;
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' } 
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });
  }

  render() {
    return (
        <form onSubmit={this.onSubmit}>
        <h1>Login To Your Vendor Account!</h1>
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
       <input type="submit" value="Login" />
       </div>
       <h2>Don't have an account?</h2>
       <a href='#'>Sign Up</a>
      </form>
    );
  }
}
