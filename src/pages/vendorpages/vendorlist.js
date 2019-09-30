/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './vendor.scss';

export default class VendorDisp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorlists: [],
      currentPage: 1,
      vendorsPerPage: 3,
    };
  }

  handleClick=(event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/vendors')
      .then(response => response.json())
      .then(data => this.setState({ vendorlists: data.vendorlists }));
  }

  render() {
    const { vendorlists, currentPage, vendorsPerPage } = this.state;

    // Logic for displaying current Vendors
    const indexOfLastVendor = currentPage * vendorsPerPage;
    const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
    const currentVendors = vendorlists.slice(indexOfFirstVendor, indexOfLastVendor);

    const renderVendors = currentVendors.map(vendorlist => <div key={vendorlist.id}>
      <Link to={`/vendorlist/${vendorlist.id}`} className='link'>{vendorlist.agency_name}</Link>
        <p>{vendorlist.service_category}</p>
      </div>);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(vendorlists.length / vendorsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>);
    return (
      <div className='vendorlist_div'>
        <ul>{renderVendors}</ul>
        <ul className="page_numbers">
              {renderPageNumbers}
            </ul>
      </div>
    );
  }
}
