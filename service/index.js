/* eslint-disable linebreak-style */
import React from 'react';

const LoginApi = () => {
  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }))
    .catch(err => err);
};
export default LoginApi;
