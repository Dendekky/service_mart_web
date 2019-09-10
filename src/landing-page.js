import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const App = () => <div style={{ background: '#ffffff' }}>
<header >
	<div className="nav-group" >
		<a href='ggg.html'><img src="05.png"/></a>
        <a href='hdgh.html'><button>search</button></a>
		<h1>Job Listings</h1>
        <a href='hdgh.html'><button style = {{ color: 'red' }}>Menu Bar</button></a>

		</div>
        </header>
    <body>
        <div className="landing_page_body_div1">
            <h1>Discover The Best Deals for Your Next Event</h1>
        </div>
        <div className="landing_page_body_div2" >
            <h1>Explore Categories</h1>
                <div>
                <img src="04.png" alt="Bouncer"/>
                <img src="01.png" alt="Event Planner"/>
                <img src="02.png" alt="DJ"/>
                </div>
            <h1>Discover the best deals/event vendors in your city</h1>
        </div>
        <div className="landing_page_body_div3">
            <h2>Payment Protection</h2>
                <p>Full payment is released to vendor once you are satisfied with the service</p>
            <h2>Valuable Projects</h2>
                <p>Find professionals and agencies who are specialized in the field that you want</p>
            <h2>Customer Support</h2>
                <p>Servicemart is here to answer your question, and resolve any challenge 24/7</p>
        </div>
        <div className="landing_page_body_div4">
            <h1>Recommended for you</h1>
            <div>
                <img src="03.png" alt="err"/>
                <img src="02.png"/>
                <img src="04.png" alt="err"/>
            </div>
        </div>
        <div className="landing_page_body_div5">
            <h1>Join For Free</h1>
            <p>Join over 1000 people in getting high paying jobs on servicemart today</p>
            <button>Join Now</button>
        </div>
        <div className="landing_page_body_div6">
            <h1>Verified Reviews</h1>
            <p>More than 100 Verified Reviews provided by Servicemart Customers.</p>
            <section>Some verified content Some verified content Some verified content Some verified content Some verified content Some verified content</section>
        </div>
        <div className="landing_page_body_div7">
            <h1>Start Exploring<br/>or<br/>Let us do it for you</h1>
            <button>Get Started</button>
        </div>
        </body>
        <footer>
            <div>
                <h3>Company</h3>
                <a href='#'>About</a>
                <a href='how-it-works.html'>How it works</a>
                <a href='#'>Login</a>
                <a href='#'>Available jobs</a>
            </div>
            <div>
                <h3>Popular Service</h3>
                <a href='#'>Makeup</a>
                <a href='#'>Photography</a>
                <a href='#'>Catering</a>
                <a href='#'>Plumbing</a>
                <a href='#'>Photocopying</a>
            </div>
            <div>
                <h3>Contact Us</h3>
                <a href='#'>Facebook</a>
                <a href='#'>Instagram</a>
                <a href='#'>Twitter</a>
                <a href='#'>Email</a>
                <a href='#'>Whatsapp</a>
            </div>
        </footer>
    </div>;

ReactDOM.render(<App />, document.querySelector('#root'));
