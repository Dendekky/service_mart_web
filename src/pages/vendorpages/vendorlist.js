/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

export default class VendorDisp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorlists: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/vendors')
      .then(response => response.json())
      .then(data => this.setState({ vendorlists: data.vendorlists }));
  }

  render() {
    const { vendorlists } = this.state;
    return (
      <ul>
        {vendorlists.map(vendorlist => <li key={vendorlist.id}>
            <Link to={`/vendorlist/${vendorlist.id}`} className='link'>{vendorlist.agency_name}</Link>
            <p>{vendorlist.service_category}</p>
          </li>)}
      </ul>
    );
  }
}
