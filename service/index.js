/* eslint-disable linebreak-style */
import React from 'react';

export default class Service extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     apiResponse: '',
  //   };
  // }

  // async function
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
}
