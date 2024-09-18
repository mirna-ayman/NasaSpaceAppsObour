import React, { Component } from 'react';
import img4 from './img/net_logo.png';
import img5 from './img/nasa_home2.jpg';
import img6 from './img/nasa_home1.jpg';
import img7 from './img/footer.png';
import img8 from './img/hackathon_logo.png';
import './page2.css'
import './darkmode.js';
class Page2 extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div id='Overview'>
                <div className="container section-2">
    <div className="row">
        <div className="col-lg-3 col-md-12">
            <section className="section images py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 relative">
                            <img src={img6} alt="Event Image 1" className="img-fluid rounded photo img1" width="500px"/>
                            <img src={img5} alt="Event Image 2" className="img-fluid rounded photo img2" width="500px"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className="col-lg-9 col-md-12">
            <section id="welcome" className="hero2 py-5 text-center">
                <div className="container ">
                    <h1>Welcome to NASA Space Apps Obour!</h1>
                    <p className="lead">Join us for an exciting two-day hackathon on October 5th and 6th, where creativity meets technology to tackle global challenges through space exploration. The "NASA Space Apps Obour" is part of a global initiative that invites participants to collaborate and innovate.</p>
                </div>
            </section>
        </div>
    </div>
    <section className="section what-to-expect py-4 col-lg-9 col-md-12"> <h2 className="mb-4 Expect">What to Expect:</h2></section>
    <div className="row">
        <div className="col-lg-3 col-md-12">
        <div className="container text-center">
            <h2 className="mb-4 Expect">Why Participate?</h2>
            <p className="lead">This is a unique opportunity to challenge yourself, learn from others, and contribute to meaningful projects that can make a difference. Whether you're a developer, designer, or simply passionate about space, there's a place for you!</p>
        </div>
      
        <div className="container text-center">
            <h2 className="mb-4 Expect"> Join Us!</h2>
            <p className="lead">Don’t miss out on this chance to be part of an inspiring community. Register now for the hackathon and get ready to unleash your creativity!</p>
        </div> 
        </div>
            <div className="col-lg-9 col-md-12 justify-content-center">
                <div className="container text-center hack-and-net">
                    <div className="row text-center">
                        <div className="col-md-12 mb-4  Hackathon text-center" >
                            <img src={img8} alt="Hackathon Icon" className="mb-3 img3" height="95px"/>
                            <h3 className="Expect large">Hackathon</h3>
                            <p>Engage in a thrilling 48-hour event where you can brainstorm, develop, and present your ideas. Work alongside like-minded individuals and bring your innovative solutions to life.</p>
                        </div>
                        <div className="col-md-12 mb-4 Networking text-center">
                            <img src={img4} alt="Networking Icon" className="mb-3 img4"  height="95px"/>
                            <h3 className="Expect large">Networking Opportunities</h3>
                            <p>Connect with fellow participants, mentors, and industry professionals who share your passion for space and technology.</p>
                        </div>
                    </div> 
                </div>
            </div>  
    </div>
   </div>
<div className="footer-2">
    <img src={img7} className="d-block w-100" alt="footer"/>
    <p>Follow us on social media</p>
    <a href="https://www.facebook.com/profile.php?id=100063916427277&mibextid=LQQJ4d" className="face"><i class="fa-brands fa-facebook fa-2x"></i></a>
    <a href="https://www.instagram.com/nasaspaceapps_obour?igsh=OTlrczJnaXR3ZmJ0" className='red'><i className="fa-brands fa-instagram fa-2x"></i></a>
</div>
</div>
            </React.Fragment>
        );
    }
}
 
export default Page2;