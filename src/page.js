import React, { Component } from 'react';
import img1 from './img/background.png';
import img2 from './img/astronaut-floating-space.avif';
import { Link } from 'react-router-dom';
import './page.css'
import './darkmode.js';
class Page extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                 <section id="home" className="hero">
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img2} class="d-block w-100" alt="Astronaut Floating in Space" height="750px"/>
                <div className="overload">
                    <p>
                        Welcome to nasa space <br/>apps obour!
                    </p>
                    <button type="button" className="btn btn-light my-btn"><Link to='/Page2'>Overview</Link></button>
                   </div>
                </div>
                <div className="carousel-item">
                    <img src={img2} class="d-block w-100" alt="Space Background"/>
                </div>
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>
    </section>
            </React.Fragment>
        );
    }
}
 
export default Page;