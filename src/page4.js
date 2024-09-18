import React, { Component } from 'react';
import img9 from './img/Black.png'
import './page4.css';
import v1 from './video/Beyond sunlight an aquatic chemosynthetic.mp4';
import v2 from './video/Chronicles of Exoplanet Exploration.mp4';
import v3 from './video/community mapping.mp4';
import v4 from './video/Create an Orrery Web App that Displays Near-Earth Objects.mp4';
import v5 from './video/Exosky.mp4';
import v6 from './video/Galactic Games Fun in a Microgravity Environment.mp4';
import v7 from './video/Gender & Climate .mp4';
import v8 from './video/GLOBE Protocol Games.mp4';
import v9 from './video/Imagine our connected earth.mp4';
import v10 from './video/Landsat Reflectance Data On the Fly and at Your Fingertips.mp4';
import v11 from './video/Leveraging Earth Observation Data for Informed Agricultural Decision-Making.mp4';
import v12 from './video/Navigator for the Habitable Worlds Observatory (HWO).mp4';
import v13 from './video/PACE in the Classroom (1).mp4';
import v14 from './video/PACE in the Classroom.mp4';
import v15 from './video/SDGs in the classroom.mp4';
import v16 from './video/Seismic detection across the solar system.mp4';
import v17 from './video/Show Us What the May 2024 Geomagnetic Storms Looked Like.mp4';
import v18 from './video/Symphony of the Stars Harmonizing the James Webb Space Telescope in Music and Images.mp4';
import v19 from './video/tell us a climate story.mp4';
import v20 from './video/Visualize Space Science.mp4';
import './darkmode.js';
class Page4 extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <section className="w-100 text-center">
        <div className="contanier challenge" id='challenge'>
            <img src={img9} alt="space photo" className="d-block w-100 h-100"/>
                <h2 className="pt-5 chall" id="dark-text">Are you ready to challenge yourself !</h2><br/><br/>
                <p className="mt-1 challengep chall" id="dark-text2">We are waiting for.....Show us what you can do!</p>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row cards">
                            <div className="card" id="card1">
                                <h5 className="card-title">Challenge 1</h5>
                                <video src={v1} className='cardv' controls></video>
                                <div className="card-body">
                                    <p>Beyond sunlight an aquatic chemosynthetic</p>
                                </div>
                            </div>
                            <div className="card" id="card2">
                                <h5 className="card-title">Challenge 2</h5>
                                <video src={v2} className='cardv' controls></video>
                                <div className="card-body">
                                <p>Chronicles of Exoplanet Exploration</p>
                                </div>
                            </div>
                            </div>
                            <div className="row cards">
                            <div className="card" id="card3">
                                <h5 className="card-title">Challenge 3</h5>
                                <video src={v3} className='cardv' controls></video>
                                <div className="card-body">
                                <p>community mapping</p>
                                </div>
                            </div>
                            <div className="card" id="card4">
                                <h5 className="card-title">Challenge 4</h5>
                                <video src={v4} className='cardv' controls></video>
                                <div className="card-body">
                                    <p>Create an Orrery Web App that Displays Near-Earth Objects</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    <div className="carousel-item">
                    <div className="row cards">
                            <div className="card" id="card5">
                                <h5 className="card-title">Challenge 5</h5>
                                <video src={v5} className='cardv' controls></video>
                                <div className="card-body">
                                    <p>Exosky</p>
                                </div>
                            </div>
                            <div className="card" id="card6">
                                <h5 className="card-title">Challenge 6</h5>
                                <video src={v6} className='cardv' controls></video>
                                <div className="card-body">
                                <p>Galactic Games Fun in a Microgravity Environment</p>
                                </div>
                            </div>
                            </div>
                            <div className="row cards">
                            <div className="card" id="card7">
                                <h5 className="card-title">Challenge 7</h5>
                                <video src={v7} className='cardv' controls></video>
                                <div className="card-body">
                                <p>Gender & Climate</p>
                                </div>
                            </div>
                            <div className="card" id="card8">
                                <h5 className="card-title">Challenge 8</h5>
                                <video src={v8} className='cardv' controls></video>
                                <div className="card-body">
                                    <p>GLOBE Protocol Games</p>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                      <div className="row cards">
                            <div className="card" id="card9">
                                <h5 className="card-title">Challenge 9</h5>
                                <video src={v9} className='cardv' controls></video>
                                <div className="card-body">
                                    <p>Imagine our connected earth</p>
                                </div>
                            </div>
                            <div className="card" id="card10">
                                <h5 className="card-title">Challenge 10</h5>
                                <video src={v10} className='cardv' controls></video>
                                <div className="card-body">
                                <p>Landsat Reflectance Data On the Fly and at Your Fingertips</p>
                                </div>
                            </div>
                            </div>
                      <div className="row cards">
                            <div className="card" id="card11">
                                <h5 className="card-title">Challenge 11</h5>
                                <video src={v11} className='cardv' controls></video>
                                <div className="card-body">
                                <p>Leveraging Earth Observation Data for Informed Agricultural Decision-Making</p>
                                </div>
                            </div>
                            <div className="card" id="card12">
                                <h5 className="card-title">Challenge 12</h5>
                                <video src={v12} className='cardv' controls></video>
                                <div className="card-body">
                                    <p>Navigator for the Habitable Worlds Observatory (HWO)</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                      <div className="row cards">
                            <div className="card" id="card13">
                                <h5 className="card-title">Challenge 13</h5>
                                <video src={v13} className='cardv' controls></video>
                                <div className="card-body">
                                    <p>PACE in the Classroom</p>
                                </div>
                            </div>
                            <div className="card" id="card14">
                                <h5 className="card-title">Challenge 14</h5>
                                <video src={v14} className='cardv' controls></video>
                                <div className="card-body">
                                <p>PACE in the Classroom</p>
                                </div>
                            </div>
                            </div>
                      <div className="row cards">
                            <div className="card" id="card15">
                                <h5 className="card-title">Challenge 15</h5>
                                <video src={v15} className='cardv' controls></video>
                                <div className="card-body">
                                <p>SDGs in the classroom</p>
                                </div>
                            </div>
                            <div className="card" id="card16">
                                <h5 className="card-title">Challenge 16</h5>
                                <video src={v16} className='cardv' controls></video>
                                <div className="card-body">
                                    <p>Seismic detection across the solar system</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                      <div className="row cards">
                            <div className="card" id="card17">
                                <h5 className="card-title">Challenge 17</h5>
                                <video src={v17} className='cardv' controls></video>
                                <div className="card-body">
                                    <p>Show Us What the May 2024 Geomagnetic Storms Looked Like</p>
                                </div>
                            </div>
                            <div className="card" id="card18">
                                <h5 className="card-title">Challenge 18</h5>
                                <video src={v18} className='cardv' controls></video>
                                <div className="card-body">
                                <p>Symphony of the Stars Harmonizing the James Webb Space Telescope in Music and Images</p>
                                </div>
                            </div>
                            </div>
                      <div className="row cards">
                            <div className="card" id="card19">
                                <h5 className="card-title">Challenge 19</h5>
                                <video src={v19} className='cardv' controls></video>
                                <div className="card-body">
                                <p>tell us a climate story</p>
                                </div>
                            </div>
                            <div className="card" id="card20">
                                <h5 className="card-title">Challenge 20</h5>
                                <video src={v20} className='cardv' controls></video>
                                <div className="card-body">
                                    <p>Visualize Space Science</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="carousel-indicators mt-5">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                      </div>
                    </div>
    </section>
            </React.Fragment>
        );
    }
}
 
export default Page4;