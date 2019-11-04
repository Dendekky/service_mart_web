/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import PaystackButton from 'react-paystack';

export default class Payment extends Component {
  state = {
    key: 'pk_live_71a092a31c69652695373a1a9b91b70ded60414b', // PAYSTACK PUBLIC KEY
    email: 'foobar@example.com', // customer email
    amount: '',
  }

  callback = (response) => {
    console.log(response); // card charged successfully, get reference here
  }

  close = () => {
    console.log('Payment closed');
  }

  getReference = () => {
    // you can put any unique reference implementation code here
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';

    for (let i = 0; i < 15; i++)
    { text += possible.charAt(Math.floor(Math.random() * possible.length)); }

    return text;
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <p>Pay and Rate</p>
        <input
          type="number"
          name="amount"
          placeholder="Enter the amount"
          value={this.state.amount}
          onChange={this.handleInputChange}
          required
        />
        <p>
          <PaystackButton
            text="Make Payment"
            class="payButton"
            callback={this.callback}
            close={this.close}
            disabled={true}
            // {/*disable payment button*/}
            embed={true}
            // {/*payment embed in your app instead of a pop up*/}
            reference={this.getReference()}
            email={this.state.email}
            amount={this.state.amount}
            paystackkey={this.state.key}
            tag="button"
            // {/*it can be button or a or input tag */}
          />
        </p>
      </div>
    );
  }
}
