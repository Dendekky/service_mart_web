/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './vendor.scss';
import Axios from 'axios';
import Loader from 'react-loader-spinner';

export default class VendorDisp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorlists: [],
      isLoading: false,
      error: null,
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
    this.setState({ isLoading: true });

    Axios.get('http://localhost:3000/api/vendors')
      .then(result => this.setState({
        vendorlists: result.data.vendorlists,
        isLoading: false,
      }))
      .catch(error => this.setState({
        error,
        isLoading: false,
      }));
  }

  render() {
    const {
      vendorlists, isLoading, error, currentPage, vendorsPerPage,
    } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <Loader
      type="Puff"
      color="#00BFFF"
      height={40}
      width={40}
      timeout={3000}
   />;
    }


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
