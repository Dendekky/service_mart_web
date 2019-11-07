/* eslint-disable linebreak-style */
import React from 'react';

export const LoginApi = async () => {
  try {
    const response = await fetch('api/api/login', {
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
};
