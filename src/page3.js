import React, { Component } from 'react';
import img3 from './img/nasachallengegy.jpg'
import './page3.css'
import './darkmode.js';
class Page3 extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <section id="how-to-participate" className="section participate-section py-5">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <img src={img3} alt="Participation Image" className="img-fluid rounded"/>
                </div>
                <div className="col-lg-8">
            <h2 className="text-center mb-6">How to Participate in NASA Space Apps Obour</h2>
            <p className="subtitle lead text-center mb-6">Ready to take on the challenge? Follow these simple steps to get started:</p>
                    <div className="list-group d-flex">
                        <div className="list-group-item d-flex align-items-start mb-3">
                            <div className="step-number rounded-circle d-flex align-items-center justify-content-center me-3">1</div>
                            <div>
                                <h5 className='headtext'>Create an Account:</h5>
                                <p className='partext'>Visit our registration page and sign up for an account. Make sure to provide accurate information so we can keep you updated.</p>
                            </div>
                        </div>
                        <div className="list-group-item d-flex align-items-start mb-3 ">
                            <div className="step-number2 rounded-circle d-flex align-items-center justify-content-center me-3">2</div>
                            <div>
                                <h5 className='headtext2'>Choose Your Location:</h5>
                                <p className='partext'>Select "Obour" as your location to join our local hackathon. This will connect you with other participants in your area.</p>
                            </div>
                        </div>
                        <div className="list-group-item d-flex align-items-start mb-3 ">
                            <div className="step-number rounded-circle d-flex align-items-center justify-content-center me-3">3</div>
                            <div>
                                <h5 className='headtext'>Select a Challenge:</h5>
                                <p className='partext'>Browse through the available challenges related to space exploration and choose one that inspires you. Each challenge focuses on different themes and issues, so pick one that resonates with your interests!</p>
                            </div>
                        </div>
                        <div className="list-group-item d-flex align-items-start mb-3 ">
                            <div className="step-number2 rounded-circle d-flex align-items-center justify-content-center me-3">4</div>
                            <div>
                                <h5 className='headtext2'>Form a Team:</h5>
                                <p className='partext'>You can either create your own team or find one to join. Collaborating with others can enhance your ideas and solutions. Use our platform to connect with participants looking for team members.</p>
                            </div>
                        </div>
                        <div className="list-group-item d-flex align-items-start mb-3 ">
                            <div className="step-number rounded-circle d-flex align-items-center justify-content-center me-3">5</div>
                            <div>
                                <h5 className='headtext'>Prepare for the Hackathon:</h5>
                                <p className='partext'>Once the hackathon begins, you’ll have access to the final questions and guidelines for your chosen challenge. Make sure to review them carefully and start brainstorming your innovative solutions!</p>
                            </div>
                        </div>
                        <div className="list-group-item d-flex align-items-start ">
                                <div className="step-number2 rounded-circle d-flex align-items-center justify-content-center me-3">6</div>
                            <div>
                                <h5 className='headtext2'>Submit Your Project:</h5>
                                <p className='partext'>After working on your project during the hackathon, submit your final solution before the deadline. Ensure that you follow all submission guidelines provided.</p>
                            </div>
                        </div>
                    </div>
            <p className="join-us mt-4 h4 text-center">Join Us and Make a Difference!</p>
            <p className="footer-note text-center">We can’t wait to see what you create! If you have any questions or need assistance, feel free to reach out through our contact page.</p>
                </div>
            </div>
        </div>
    </section>
            </React.Fragment>
        );
    }
}
 
export default Page3;