/* eslint-disable linebreak-style */
import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      agency_name: '',
      loaded: true,
      vendorlists: [],
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      if (this.state.agency_name && this.state.agency_name.length > 1) {
        // if (this.state.agency_name.length % 2 === 0) {
        this.SearchApi();
        // }
      } else if (this.state.agency_name.length < 1) {
        this.setState({
          loaded: false,
          vendorlists: [],
        });
      }
    });
  }

  SearchApi = async () => {
    Axios.post('https://service-mart-api.herokuapp.com/api/search', this.state)
      .then((result) => {
        this.setState({
          vendorlists: result.data.vendor,
          loaded: true,
        }, console.log(result.data));
      });
  }

  render() {
    const { vendorlists } = this.state;

    // if (!loaded) {
    //   return null;
    // }
    //   return <div>
    //   {vendorlists.map(vendorlist => <div key={vendorlist.id}>
    //   <Link to={`/vendorlist/${vendorlist.id}`} className='link'>{vendorlist.agency_name}</Link>
    //     <p>{vendorlist.service_category}</p>
    //   </div>)}
    //   </div>;
    // }
    return (
      <div className='login_main_div'>
        <form onSubmit={this.onSubmit}>
        <div>
        <Link to='/search'><input
          type="agency_name"
          name="agency_name"
          placeholder="Search for a vendor"
          value={this.state.agency_name}
          onChange={this.handleInputChange}
          required
        /></Link>
        </div>
        {/* <div>
       <input className="button" type="submit" value="Search" />
       </div> */}
      </form>
      <div>
      {vendorlists.map(vendorlist => <div key={vendorlist.id}>
      <Link to={`/vendorlist/${vendorlist.id}`} className='link'>{vendorlist.agency_name}</Link>
        <p>{vendorlist.service_category}</p>
      </div>)}
      </div>
      </div>
    );
  }
}
