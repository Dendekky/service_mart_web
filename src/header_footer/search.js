/* eslint-disable linebreak-style */
import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
// import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends React.Component {
  constructor(props) {
    super(props);
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
    if (this.state.agency_name && this.state.agency_name.length > 1) {
      this.SearchApi();
      this.setState({
        loaded: true,
      });
    }
  }

  SearchApi = async () => {
    Axios.post('https://service-mart-api.herokuapp.com/api/search', this.state)
      .then((result) => {
        this.setState({
          vendorlists: result.data.vendor,
        }, console.log(result.data));
      });
  }

  render() {
    const { vendorlists, loaded } = this.state;

    if (loaded) {
      if (vendorlists.length == 0) {
        return <Loader
        className='loader'
        type="Puff"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={10000}
   />;
      }
      return <Redirect to={{
        pathname: '/results',
        vendorlists,
      }}
      />;
    }

    return (
      <div>
        <form className="search-form" onSubmit={this.onSubmit}>
        <div>
        <input
          type="agency_name"
          name="agency_name"
          placeholder="Search for a vendor"
          value={this.state.agency_name}
          onChange={this.handleInputChange}
          required
        />
        <button type="submit"> <FontAwesomeIcon icon={faSearch} /></button>
        </div>
        {/* <div>
       <input className="button" type="submit" value="Search" />
       </div> */}
      </form>
      {/* <div>
      {vendorlists.map(vendorlist => <div key={vendorlist.id}>
      <Link to={`/vendorlist/${vendorlist.id}`} className='link'>{vendorlist.agency_name}</Link>
        <p>{vendorlist.service_category}</p>
      </div>)}
      </div> */}
      </div>
    );
  }
}

export default Search;
