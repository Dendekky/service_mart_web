/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

class CategoryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    fetch(`http://localhost:3000/api/vendor/category/${params.Category}`)
      .then(response => response.json())
      .then(data => this.setState({ category: data.category }));
  }

  render() {
    const { category } = this.state;
    return (
        <div className="category_list">
        {category.map(vendorcategory => <div key={vendorcategory.id}>
          <Link to={`/vendorlist/${vendorcategory.id}`} className='link'>{vendorcategory.agency_name}</Link>
            <p>{vendorcategory.job_specification}</p>
          </div>)}
      </div>
    );
  }
}

export default CategoryInfo;
