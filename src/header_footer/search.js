/* eslint-disable linebreak-style */
import React from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agency_name: '',
      loaded: true,
      vendorlists: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { history } = this.props;
    if (prevState.results !== this.state.results) {
      history.push('/results');
    }
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      if (this.state.agency_name && this.state.agency_name.length > 1) {
        // if (this.state.agency_name.length % 2 === 0) {
        this.SearchApi();
        // this.props.history.push('/results');
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
    const { vendorlists, agency_name } = this.state;

    if (agency_name.length > 3) {
      return <Redirect to={{
        pathname: '/results',
        vendorlists,
      }}
      />;
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

export default withRouter(Search);
