/* eslint-disable linebreak-style */
import React from 'react';

export default class VendorList extends React.Component {
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
        {vendorlists.filter(vendorlist => vendorlist.id <= 3).map(vendorlist => <li key={vendorlist.id}>
            <p>{vendorlist.agency_name}</p>
            <p>{vendorlist.service_category}</p>
          </li>)}
      </ul>
    );
  }
}
