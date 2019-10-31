/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import VendorList from './vendorpages/vendorshowcase';
import Carousel from './carousel';


const carouselSlidesData = [
  {
    content:
    <img className='carousel-images' src={'https://source.unsplash.com/random?media'} alt="Event Planner"/>,    
    source: 'Media',
  }, {
    content:
    <img className='carousel-images' src={'https://source.unsplash.com/random?laundry'} alt="Event Planner"/>,
    source: 'Laundry',
  }, {
    content:
    <img className='carousel-images' src={'https://source.unsplash.com/random?medicine'} alt="Event Planner"/>,
    source: 'Medicine',
  }, {
    content:
    <img className='carousel-images' src={'https://source.unsplash.com/random?electronics'} alt="Event Planner"/>,
    source: 'Electronics',
  }, {
    content:
    <img className='carousel-images' src={'https://source.unsplash.com/random?food'} alt="Event Planner"/>,
    source: 'Food',
  }, {
    content:
    <img className='carousel-images' src={'https://source.unsplash.com/random?rentals'} alt="Event Planner"/>,
    source: 'Rentals',
  }, {
    content:
    <img className='carousel-images' src={'https://source.unsplash.com/random?effects'} alt="Event Planner"/>,
    source: 'Effects',
  },
];

const SecInfo = [
  {
    content:
          'Let us know what service you are looking for. Full payment is only released to vendor once you are satisfied with the service.',
    author: 'Payment Protection',
  }, {
    content:
          'Find professionals and agencies who are specialized in the field that you want. Book your service directly with us online, or request quotes from our service partners. All our partners are licensed, vetted and reviewed by our users',
    author: 'Valuable Projects',
  }, {
    content:
          'Let our professionals do the work while you focus on your business, family or doing what you love. Our contact center is open 7 days a week to help you along the way.',
    author: 'Customer Support',
  },
];

const Homepage = () => <div className='homepage_div'>

        <div className="landing_page_body_div1">
            <h1>Discover The Best Deals for Your Next Event</h1>
        </div>
        <div className="landing_page_body_div2" >
            <h1>Explore Categories</h1>
            <Carousel slides={carouselSlidesData} />
            <h1>Discover the best deals/event vendors in your city</h1>
        </div>
        <div className="landing_page_body_div3">
            <Carousel className="landing_page_body_div3_blt" slides={SecInfo} />
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
