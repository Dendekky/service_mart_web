/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

class CategoryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
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
    const { match: { params } } = this.props;
    fetch(`http://localhost:3000/api/vendor/category/${params.Category}`)
      .then(response => response.json())
      .then(data => this.setState({ category: data.category }));
  }

  render() {
    const { category, currentPage, vendorsPerPage } = this.state;

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
        <div className="category_list">
        <ul>
        {renderVendors}
        </ul>
        <ul className="page_numbers">
              {renderPageNumbers}
            </ul>
      </div>
    );
  }
}

export default CategoryInfo;
