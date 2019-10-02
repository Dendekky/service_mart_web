/* eslint-disable linebreak-style */
import React from 'react';

class VendorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: {},
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    fetch(`http://localhost:3000/api/vendors/${params.VendorId}`)
      .then(response => response.json())
      .then(data => this.setState({ vendor: data.vendor }));
  }

  render() {
    const { vendor } = this.state;
    return (
        <div className='VendorInfo'>
            <h1>{vendor.agency_name}</h1>
            <p>{vendor.service_category}</p>
            <p>{vendor.location}</p>
            <h2>About this Agency</h2>
            <p>{vendor.bio}</p>
            <h2>Contact</h2>
            <p>{vendor.agency_email}</p>
            <p>{vendor.tel_no}</p>
        </div>
    );
  }
};

export default VendorInfo;
