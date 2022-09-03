import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import carHandover from '../../assests/images/carHandover.jpg'
import { faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer/Footer';
import FadeInSection from '../../components/FadeIn/FadeIn';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='about'>
                <div className="about-heading">
                    <h1 className="about-heading-text">About Us</h1>
                </div>
            </div>
            <div className='about-navigation'>
                <div className="navigation-row">
                    <a className="nav-text" href="/">Home</a>
                    <FontAwesomeIcon icon={faAngleRight} className="nav-icon" />
                    <a className="nav-text" href="/about">About us</a>
                </div>

            </div>
            <FadeInSection >
                <div className='about-us-details-container'>
                    <div className='about-us-details'>
                        <h2 className='detail-heading'>The Best Auto Dealers</h2>
                        <hr className='horizontal-line' />
                        <p className='detail-short-para'>Luxotica has strived to provide clients with the best deals in automobiles, with singular focus on "Quality, Clarity and, Integrity.</p>

                        <p className='detail-long-para'>
                            Luxotica is the brainchild of our founder Mr. Pratap Bhanu Singh, a passionate automobile enthusiast since his early days. Having joined the industry at 18, he has worked with the best of the brands out there. The likes of Mitsubishi, BMW, Audi, Mercedes Benz, Porsche and Aston Martin have been his playground.</p>
                        <br />
                        <p className='detail-long-para'>
                            The dream of being able to provide a one of a kind consumer experience has been a constant motivation for us all these years. That, and all the love and support of our well wishers made it possible. It was the year 2019, when after 15 years of dedicated experience in the industry, this dream came to fruition.</p>
                        <br />
                        <p className='detail-long-para'>
                            Since its inception, Luxotica has strived to provide clients with the best deals in automobiles, with singular focus on "Quality, Clarity and, Integrity."
                        </p>
                        <div className='see-listing'>
                            <a className="see-listing-button" href="/cars">
                                See listings
                            </a>
                            <FontAwesomeIcon icon={faAngleRight} className="see-listing-icon" />
                        </div>
                    </div>
                    <div className="about-us-image-container">
                        <img className="about-us-image" src={carHandover} alt="Image" />
                    </div>

                </div>
                </FadeInSection>
                <FadeInSection>

                <div className="offer-container">
                    <div className='offer-section'>
                        <div className='offer-text-section'>
                            <span className="text-section-one">Customers are important for us</span>
                            <span className="text-section-two">What we offer</span>
                        </div>
                        <div className="offer-section-details">
                            <div className='offers'>
                                <img className="offer-image" src={carHandover} alt="offer image" />
                                <div className='offer-texts'>
                                    <p className="offer-text-one">We offer</p>
                                    <p className="offer-text-two">Low Prices, No Haggling</p>


                                    <hr className="offer-horizontal-line" />
                                    <p className="offer-text-three">
                                        Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ sem velde metus imperdiet lacinia.
                                    </p>
                                </div>


                            </div>
                            <div className='offers'>
                                <img className="offer-image" src={carHandover} alt="offer image" />
                                <div className='offer-texts'>
                                    <p className="offer-text-one">We are the</p>
                                    <p className="offer-text-two">Largest Car Dealership</p>

                                    <hr className="offer-horizontal-line" />
                                    <p className="offer-text-three">
                                        Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ sem velde metus imperdiet lacinia.
                                    </p>
                                </div>


                            </div>
                            <div className='offers'>
                                <img className="offer-image" src={carHandover} alt="offer image" />
                                <div className='offer-texts'>
                                    <p className="offer-text-one">Our customer Get</p>
                                    <p className="offer-text-two">Multipoint Safety Check</p>

                                    <hr className="offer-horizontal-line" />
                                    <p className="offer-text-three">
                                        Curabitur libero. Donec facilisis velit eu est. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ sem velde metus imperdiet lacinia.
                                    </p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>

                <div className="why-choose-us-container">
                    <div className="choose-us-section">
                        <div className='choose-us-section1'>
                            <p className="choose-us-text">
                                Why Choose Us
                            </p>
                            <p className="choose-us-reasons">
                            Well, let's see
                            </p>

                            <div className="bullet-points-section">
                                <div className="bullet-points-container">
                                    <FontAwesomeIcon icon={faAnglesRight} className='bullet-icon' />
                                    <p className='bullet-point'>
                                    We offer you best in class customised deals


                                    </p>


                                </div>
                                <div className="bullet-points-container">
                                    <FontAwesomeIcon icon={faAnglesRight} className='bullet-icon' />
                                    <p className='bullet-point'>
                                    World class after sales support and connect

                                    </p>


                                </div>
                                <div className="bullet-points-container">
                                    <FontAwesomeIcon icon={faAnglesRight} className='bullet-icon' />
                                    <p className='bullet-point'>
                                    Door step automotive solutions

                                    </p>


                                </div>
                                <div className="bullet-points-container">
                                    <FontAwesomeIcon icon={faAnglesRight} className='bullet-icon' />
                                    <p className='bullet-point'>
                                     All your favourite brands under one roof

                                    </p>


                                </div>
                                <div className="bullet-points-container">
                                    <FontAwesomeIcon icon={faAnglesRight} className='bullet-icon' />
                                    <p className='bullet-point'>
                                    Fair and transparent practices
                                    </p>


                                </div>
                                <br />
                                <p className="choose-us-reasons">
                                But you won't know until you come, experience it for yourself.
Visit us today to make your luxury automobile dreams true, only at Luxotica!                            </p>

                            </div>

                        </div>

                        <div className='more-info-section'>
                            <p className="more-info-text">
                                More Info
                            </p>
                            <div className="more-info-section-bullet-container">
                                <div className='more-info-section-bullet'>
                                    <p className='more-info-section-bullet-point'>
                                        Lorem Ipsum blaah blaah blaah
                                    </p>
                                </div>
                                <div className='more-info-section-bullet'>
                                    <p className='more-info-section-bullet-point'>
                                        Lorem Ipsum blaah blaah blaah
                                    </p>
                                </div>
                                <div className='more-info-section-bullet'>
                                    <p className='more-info-section-bullet-point'>
                                        Lorem Ipsum blaah blaah blaah
                                    </p>
                                </div>
                                <div className='more-info-section-bullet'>
                                    <p className='more-info-section-bullet-point'>
                                        Lorem Ipsum blaah blaah blaah
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="who-are-we-container">
                    <div className="who-are-we-details">
                        <div className="who-are-we">
                            <div className='partner-image-container'>
                                <img className="partners-image" src={carHandover} alt='Aashish Bharadwaj' />
                            </div>
                            <div className="partner-details">
                                <h3 className='partners-name'>Aashish Bharadwaj</h3>

                                <p className='partners-desc'>
                                    The Luxotica dream came to being because of this gentleman. His effort towards bringing this dream to life has been unparalleled and a huge part of our success we owe to him. Mr Bharadwaj formed the company and is a constant leader and supporter at every step for us. We are immensely grateful to him for everything he has done and everything he does even today.
                                </p>
                            </div>


                        </div>
                        <div className="who-are-we-alternate">
                            <div className='partner-image-container'>

                                <img className="partners-image" src={carHandover} alt='Pratap Bhanu Singh' />
                            </div>
                            <div className="partner-details">
                                <h3 className='partners-name'>Pratap Bhanu Singh</h3>
                                <p className='partners-desc'>
                                    Luxotica is the brainchild of our founder Mr. Pratap Bhanu Singh, a passionate automobile enthusiast since his early days. Having joined the industry at 18, he has worked with the best of the brands out there. The likes of Mitsubishi, BMW, Audi, Mercedes Benz, Porsche and Aston Martin have been his playground.

                                    The dream of being able to provide a one of a kind consumer experience has been a constant motivation for us all these years. That, and all the love and support of our well wishers made it possible. It was the year 2019, when after 15 years of dedicated experience in the industry, this dream came to fruition.
                                    Since its inception, Luxotica has strived to provide clients with the best deals in automobiles, with singular focus on "Quality, Clarity and, Integrity."
                                </p>
                            </div>


                        </div>
                        <div className="who-are-we">
                            <div className='partner-image-container'>

                                <img className="partners-image" src={carHandover} alt='Aashish Bharadwaj' />
                            </div>
                            <div className="partner-details">
                                <h3 className='partners-name'>Partner-3</h3>

                                <p className='partners-desc'>
                                    The Luxotica dream came to being because of this gentleman. His effort towards bringing this dream to life has been unparalleled and a huge part of our success we owe to him. Mr Bharadwaj formed the company and is a constant leader and supporter at every step for us. We are immensely grateful to him for everything he has done and everything he does even today.
                                </p>
                            </div>


                        </div>
                    </div>


                </div>
            </FadeInSection>
            <Footer />

        </div>
    );
};

export default About;