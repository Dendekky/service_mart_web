/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorlists: this.props.location.vendorlists,
    };
  }

  render() {
    const { vendorlists } = this.state;
    console.log(vendorlists);

    return (
      <div>
      {vendorlists.map(vendorlist => <div key={vendorlist.id}>
      <Link to={`/vendorlist/${vendorlist.id}`} className='link'>{vendorlist.agency_name}</Link>
        <p>{vendorlist.service_category}</p>
      </div>)}
      </div>
    );
  }
}

export default Result;
