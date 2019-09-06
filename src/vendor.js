/* eslint-disable linebreak-style */
import React from 'react';

export default class Vendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agency_name: '',
      location: '',
      email: '',
      tel_no: '',
      service_category: '',
      bio: '',
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
  //   consider axios for api calls

  onSubmit(event) {
    event.preventDefault();
    this.VendorApi();
  }

  // So this is the api method exported to the service directory
  async VendorApi() {
    try {
      const response = await fetch('http://localhost:3000/api/create_vendor', {
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
            <div className="vendor_signup_div">

            <div>
                <img src={'/public/05.png'}/>
            </div>
            <div>
                <form onSubmit={this.onSubmit}>
                <p>Agency Name </p>
                <input
                type="text"
                name="agency_name"
                placeholder=" e.g Ibrahim Photography"
                value={this.state.agency_name}
                onChange={this.handleInputChange}
                /><br/>

                <p>Location </p>
                <input
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleInputChange}
                placeholder="e.g Zaria, Kaduna "/><br/>

                <p>Email Address </p>
                <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Email Address (e.g Joe@yahoo.com)"
                required/><br/>

                <p>Phone Number</p>
                <input
                type="number"
                name="tel_no"
                value={this.state.tel_no}
                onChange={this.handleInputChange}
                placeholder="Phone Number"/><br/>

                <p>Service Category</p>
                <input
                type="text"
                name="service_category"
                value={this.state.service_category}
                onChange={this.handleInputChange}
                placeholder="Service Category"/><br/>

                <p>Short Bio (Sell yourself in 120 characters or less) </p>
                <input
                type="text"
                name="bio"
                value={this.state.bio}
                onChange={this.handleInputChange}
                placeholder="Sell yourself in 120 characters or less"
                required/><br/>

                <input type="submit" value="Finish"/><br/>
                <p className="gapp-intro">{this.state.apiResponse}</p>

            </form>
            </div>
        </div>
    );
  }
}
