/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import VendorList from './vendorpages/vendorshowcase';

const Homepage = () => <div className='homepage_div'>

        <div className="landing_page_body_div1">
            <h1>Discover The Best Deals for Your Next Event</h1>
        </div>
        <div className="landing_page_body_div2" >
            <h1>Explore Categories</h1>
                <div>
                <img src={'src/public/04.png'} alt="Event Planner"/>
                <img src={'src/public/01.png'} alt="Event Planner"/>
                <img src={'src/public/02.png'} alt="Event Planner"/>
                </div>
            <h1>Discover the best deals/event vendors in your city</h1>
        </div>
        <div className="landing_page_body_div3">
            <div className="landing_page_body_div3_blt">
            <FontAwesomeIcon icon={faCog} />
            <h2>Payment Protection</h2>
            </div>
                <p>Full payment is released to vendor once you are satisfied with the service</p>
            <div className="landing_page_body_div3_blt">
            <FontAwesomeIcon icon={faCog} />
            <h2>Valuable Projects</h2>
            </div>
            <p>Find professionals and agencies who are specialized in the field that you want</p>
            <div className="landing_page_body_div3_blt">
            <FontAwesomeIcon icon={faCog} />
            <h2>Customer Support</h2>
            </div>
                <p>Servicemart is here to answer your question, and resolve any challenge 24/7</p>
        </div>
        <div className="landing_page_body_div4">
            <h1>Recommended for you</h1>
            <div className='vendor-list'>
            <VendorList/>
            </div>
            <Link to='/vendorlist' className='link'>See more...</Link>
        </div>
        <div className="landing_page_body_div5">
            <h1>Join For Free</h1>
            <p>Join over 1000 people in getting high paying jobs on servicemart today</p>
            <Link to='/vendor' className='link'>Join Now</Link>
        </div>
        <div className="landing_page_body_div7">
            <h1>Start Exploring<br/>or<br/>Let us do it for you</h1>
            <Link to='/login' className='link'>Get Started</Link>
        </div>

    </div>;

export default Homepage;
