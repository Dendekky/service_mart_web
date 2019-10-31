/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './vendor.scss';

export default class VendorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorlists: [],
    };
  }

  componentDidMount() {
    fetch('https://service-mart-api.herokuapp.com/api/vendors')
      .then(response => response.json())
      .then(data => this.setState({ vendorlists: data.vendorlists }));
  }

  render() {
    const { vendorlists } = this.state;
    return (
      <div className= 'disp-homepage-vendor'>
        {vendorlists.filter(vendorlist => vendorlist.id <= 3).map(vendorlist => <div className='homepage-vendor' key={vendorlist.id}>
          <Link to={`/vendorlist/${vendorlist.id}`} className='link'><p>{vendorlist.agency_name}</p></Link>
          <img className='vendor-images' src={'https://source.unsplash.com/random?effects'}/>
          <p>{vendorlist.service_category}</p>
          </div>)}
      </div>
    );
  }
}
