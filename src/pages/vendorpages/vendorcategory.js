/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './vendor.scss';

const CategoryList = () => <div className='category_div'>
    <div>
    <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578347600/serv-mart/serv-mart/03_mqybbu.png'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/fashion'><p>Fashion</p></Link>
    </div>
    <div>
    <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578348778/serv-mart/serv-mart/Common_Sense_20170422_200323_ctkgwd.jpg'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/technology'><p>Technology</p></Link>
    </div>
    <div>
    <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578347609/serv-mart/serv-mart/Course_Rep_20170501_135854_odbk5e.jpg'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/branding'><p>Branding</p></Link>
    </div>
    <div>
    <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578347605/serv-mart/serv-mart/Course_Rep_20170509_202310_k36pge.jpg'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/effects'><p>Effects</p></Link>
    </div>
    <div>
    <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578347616/serv-mart/serv-mart/IMG-20170406-WA0011_m1u341.jpg'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/rentals'><p>Rentals</p></Link>
    </div>
    <div>
    <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578348921/serv-mart/serv-mart/GIT_RESEARCH_UNIT-_UI_20170425_130231_tjldzi.jpg'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/food'><p>Food</p></Link>
    </div>
    <div>
    <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578348778/serv-mart/serv-mart/Common_Sense_20170422_200323_ctkgwd.jpg'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/electronics'><p>Electronics</p></Link>
    </div>
    <div>
    <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578347634/serv-mart/serv-mart/FullSizeRender-19-copy-2-5935023c19fa4__880_bkmfhm.jpg'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/medicine'><p>Medicine</p></Link>
    </div>
    <div>
    <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578347610/serv-mart/serv-mart/Course_Rep_20170512_192306_h0uwvq.jpg'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/laundry'><p>Laundry</p></Link>
    </div>
    <div>
    <img className='image' src={'https://res.cloudinary.com/dendekky/image/upload/v1578347599/serv-mart/serv-mart/01_dnc44p.png'} alt="Event Planner"/>
    <Link className='cat-link' to='/vendorcategory/media'><p>Media</p></Link>
    </div>
</div>;

export default CategoryList;
