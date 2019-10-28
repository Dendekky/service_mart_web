/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './vendor.scss';

const CategoryList = () => <div className='category_div'>
    <div>
    <img className='image' src={'https://source.unsplash.com/random'} alt="Event Planner"/>
    <Link to='/vendorcategory/fashion'><p>Fashion</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random'} alt="Event Planner"/>
    <Link to='/vendorcategory/technology'><p>Technology</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random'} alt="Event Planner"/>
    <Link to='/vendorcategory/branding'><p>Branding</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random'} alt="Event Planner"/>
    <Link to='/vendorcategory/effects'><p>Effects</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random'} alt="Event Planner"/>
    <Link to='/vendorcategory/rentals'><p>Rentals</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random'} alt="Event Planner"/>
    <Link to='/vendorcategory/food'><p>Food</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random'} alt="Event Planner"/>
    <Link to='/vendorcategory/electronics'><p>Electronics</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random'} alt="Event Planner"/>
    <Link to='/vendorcategory/medicine'><p>Medicine</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random'} alt="Event Planner"/>
    <Link to='/vendorcategory/laundry'><p>Laundry</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random'} alt="Event Planner"/>
    <Link to='/vendorcategory/media'><p>Media</p></Link>
    </div>
</div>;

export default CategoryList;
