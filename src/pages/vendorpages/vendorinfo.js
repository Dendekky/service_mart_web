/* eslint-disable linebreak-style */
import React from 'react';
import Loader from 'react-loader-spinner';
import Payment from './payment';

class VendorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const { match: { params } } = this.props;
    fetch(`https://service-mart-api.herokuapp.com/api/vendors/${params.VendorId}`)
      .then(response => response.json())
      .then(data => this.setState({ vendor: data.vendor, isLoading: false }));
  }

  render() {
    const { vendor, isLoading } = this.state;

    if (isLoading) {
      return <Loader
      className='loader'
      type="Puff"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={10000}
   />;
    }

    return (
        <div className='VendorInfo'>
            <img className='vendor-images' src={'https://source.unsplash.com/random?effects'}/>
            <h1>{vendor.agency_name}</h1>
            <p>{vendor.service_category}</p>
            <p>{vendor.location}</p>
            <h2>About this Agency</h2>
            <p>{vendor.bio}</p>
            <h2>Contact</h2>
            <p>{vendor.agency_email}</p>
            <p>{vendor.tel_no}</p>
            <Payment email= {vendor.agency_email} />
        </div>
    );
  }
};

export default VendorInfo;
