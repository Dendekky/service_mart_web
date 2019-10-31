/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Loader from 'react-loader-spinner';

class CategoryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      isLoading: false,
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

    const { match: { params } } = this.props;
    Axios.get(`https://service-mart-api.herokuapp.com/api/vendor/category/${params.Category}`)
      .then(result => this.setState({
        category: result.data.category, isLoading: false,
      }));
  }

  render() {
    const { category, isLoading, currentPage, vendorsPerPage } = this.state;

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
    const currentVendors = category.slice(indexOfFirstVendor, indexOfLastVendor);

    const renderVendors = currentVendors.map(vendorcategory => <div key={vendorcategory.id}>
      <Link to={`/vendorlist/${vendorcategory.id}`} className='link'>{vendorcategory.agency_name}</Link>
        <p>{vendorcategory.job_specification}</p>
      </div>);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(category.length / vendorsPerPage); i++) {
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
        <div className="vendorlist_div">
        <ul>{renderVendors}</ul>
        <ul className="page_numbers">
              {renderPageNumbers}
            </ul>
      </div>
    );
  }
}

export default CategoryInfo;
