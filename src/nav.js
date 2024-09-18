import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import logo from'./img/nasalogo.png'
import logo2 from'./img/1726324636185.png'
import './darkmode.js';
class Nav extends Component {
    state = {
      } 
    render() { 
        return (
            <React.Fragment>
                <div className="light-mode">
                <header className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo2} alt="NASA Space Apps Logo" className='logo'/>
            </a>
            <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Page3">Participation</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Page4">Challenges</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Winners</a>
                    </li> */}
                </ul>
                {/* <button id="darkModeToggle" className="btn btn-outline-dark ms-3"><i className="fa-solid fa-moon"></i></button> */}
            </div>
                
        </div>
    </header>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Nav;