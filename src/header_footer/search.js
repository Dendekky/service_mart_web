/* eslint-disable linebreak-style */
import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      agency_name: '',
      loaded: false,
      vendorlists: [],
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.SearchApi();
  }

  SearchApi = async () => {
    // try {
    //   const response = await fetch('http://localhost:3000/api/search', {
    //     method: 'POST',
    //     body: JSON.stringify(this.state),
    //     headers: { 'Content-Type': 'application/json' },
    //     credentials: 'same-origin',
    //   });
    //   console.log(response);
    //   const res = await response.text();
    //   this.setState({ apiResponse: res });
    // } catch (err) {
    //   console.log(err);
    // }
    Axios.post('http://localhost:3000/api/search', this.state)
      .then((result) => {
        this.setState({
          vendorlists: result.data.vendor,
          loaded: true,
        }, console.log(result.data));
      });
  }

  render() {
    const { loaded, vendorlists } = this.state;

    if (loaded) {
      return <div>
      {vendorlists.map(vendorlist => <div key={vendorlist.id}>
      <Link to={`/vendorlist/${vendorlist.id}`} className='link'>{vendorlist.agency_name}</Link>
        <p>{vendorlist.service_category}</p>
      </div>)}
      </div>;
    }
    return (
      <div className='login_main_div'>
        <form onSubmit={this.onSubmit}>
        <div>
        <input
          type="agency_name"
          name="agency_name"
          placeholder="Search for a vendor"
          value={this.state.agency_name}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div>
       <input className="button" type="submit" value="Search" />
       </div>
      </form>
      </div>
    );
  }
}
