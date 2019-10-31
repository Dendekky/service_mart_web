/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './vendor.scss';

const CategoryList = () => <div className='category_div'>
    <div>
    <img className='image' src={'https://source.unsplash.com/random?fashion'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/fashion'><p>Fashion</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random?technology'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/technology'><p>Technology</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random?branding'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/branding'><p>Branding</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random?effects'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/effects'><p>Effects</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random?rentals'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/rentals'><p>Rentals</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random?food'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/food'><p>Food</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random?electronics'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/electronics'><p>Electronics</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random?medicine'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/medicine'><p>Medicine</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random?laundry'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/laundry'><p>Laundry</p></Link>
    </div>
    <div>
    <img className='image' src={'https://source.unsplash.com/random?media'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/media'><p>Media</p></Link>
    </div>
</div>;

export default CategoryList;
