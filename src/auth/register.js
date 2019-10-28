/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      password: '',
      errmessage: '',
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit = async (event) => {
    event.preventDefault();
    Axios.post('https://service-mart-api.herokuapp.com/api/register', this.state)
      .then((res) => {
        // console.log(res.data.message),
        if (res.status === 201) {
          this.props.history.push('/login');
        } else {
          this.setState({ errmessage: res.data.message || res.data.errors[0].msg });
          // const error = new Error(res.error);
          // throw error;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };


  render() {
    const { errmessage } = this.state;
    return (
      <div className='login_main_div'>
        <form onSubmit={this.onSubmit}>
        <p>Signup for free to enjoy Servicemart</p>
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
      <p>{errmessage}</p>
      <div className="register_login_div">
          <span>Already have an account?</span>
          <Link className="link" to='/login'>Login</Link>
      </div>
      </div>
    );
  }
}
