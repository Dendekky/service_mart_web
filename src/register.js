/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
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

  async onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/register', {
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
        <p>Signup For Your Vendor Account!</p>
        <div>
        <input
          type="text"
          name="fullname"
          placeholder="Enter Full name"
          value={this.state.fullname}
          onChange={this.handleInputChange}
          required
        />
        </div>
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
       <input className="button" type="submit" value="Register" />
       </div>
       <p className="gapp-intro">{this.state.apiResponse}</p>
      </form>
      <div className="register_login_div">
          <span>Already have an account?</span>
          <Link className="link" to='/login'>Login</Link>
      </div>
      </div>
    );
  }
}
