/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Carousel from './carousel';
import VendorList from './vendorpages/vendorshowcase';
import Search from '../header_footer/search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const tileData = [
  {
    content:
    <img className='image' src={'https://source.unsplash.com/random?media'} alt="Event Planner"/>,    
    source: 'Media',
  }, {
    content:
    <img className='image' src={'https://source.unsplash.com/random?laundry'} alt="Event Planner"/>,
    source: 'Laundry',
  }, {
    content:
    <img className='image' src={'https://source.unsplash.com/random?medicine'} alt="Event Planner"/>,
    source: 'Medicine',
  }, {
    content:
    <img className='image' src={'https://source.unsplash.com/random?electronics'} alt="Event Planner"/>,
    source: 'Electronics',
  }, {
    content:
    <img className='image' src={'https://source.unsplash.com/random?food'} alt="Event Planner"/>,
    source: 'Food',
  }, {
    content:
    <img className='image' src={'https://source.unsplash.com/random?rentals'} alt="Event Planner"/>,
    source: 'Rentals',
  }, {
    content:
    <img className='image' src={'https://source.unsplash.com/random?effects'} alt="Event Planner"/>,
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

function Homepage() {
  const classes = useStyles();

  return (
    <div className='homepage_div'>
      <Search />
        <div className="landing_page_body_div1">
            <h1>Discover The Best Deals for Your Next Event</h1>
        </div>
        <div className="landing_page_body_div2" >
            <h1>Explore Categories</h1>
            {/* <Carousel slides={carouselSlidesData} /> */}
            <div className={classes.root}>
              <GridList className={classes.gridList} cols={2.5}>
                {tileData.map(tile => (
                  <GridListTile key={tile.source}>
                    {tile.content}
                    <Link to= {`/vendorcategory/${tile.source}`}>
                    <GridListTileBar
                      title={tile.source}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    /></Link>
                  </GridListTile>
                ))}
              </GridList>
            </div>
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

    </div>
  )
};

export default Homepage;
