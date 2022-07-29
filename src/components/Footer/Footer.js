import React from 'react';
import './Footer.css';
import LuxoticaLogo from "../../assests/images/LuxoticaLogo.png";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    const showInMapClicked = () => {
        window.open("https://maps.google.com?q=22.510699,88.344608");
    };
    return (
        <>
            <div className="b-info">
                <div className="not-container">
                    <div className="not-row-footer">
                        <div className="col-md-4 col-xs-12">
                            <aside className="b-info__aside wow zoomInLeft" data-wow-delay="0.3s">
                                <article className="b-info__aside-article">

                                    <a href="home.html"><span><img className="footer-luxotica-logo" src={LuxoticaLogo} width='200px' height='50px' /></span></a>


                                </article>
                                <article className="b-info__aside-article">
                                    <h3>About us</h3>
                                    <p className="about-para">Luxotica is the brainchild of our founder Mr. Pratap Bhanu Singh, a passionate automobile enthusiast since his early days. The likes of Mitsubishi, BMW, Audi, Mercedes Benz, Porsche and Aston Martin have been his playground.
                                        The dream of being able to provide a one of a kind consumer experience has been a constant motivation for us all these years.
                                        Since its inception, Luxotica has strived to provide clients with the best deals in automobiles, with singular focus on "Quality, Clarity and, Integrity."</p>
                                </article>
                            </aside>
                        </div>


                        <div className='footer-data'>
                            <div className="opening-data">
                                <span className="services-heading">Opening Hours</span>

                                <div className="opening-hours">
                                    <span className="heading">Service Department</span>

                                    <span className='timings'>Mon-Sat : 9:30am - 7:30pm</span>

                                    <span className='timings'>Sunday is closed</span>
                                </div>
                            </div>
                            <div className='footer-service'>
                                <span className="services-heading">Services</span>

                                <ul className='service-items'>
                                    <li className='items'>Pre-owned Cars</li>
                                    <li className='items'>New cars</li>
                                    <li className='items'>Insurance</li>
                                    <li className='items'> Car Detailing</li>
                                    <li className='items'>Finance</li>
                                    <li className='items'>Accessories</li>
                                    <li className='items'> Merchandise</li>
                                    <li className='items'>Consultancy</li>
                                    <li className='items'>Vehicle Service</li>
                                    <li className='items'>
                                        <span>Door Step</span>
                                        <br />
                                        <span>Car Detailing</span>
                                    </li>

                                </ul>
                            </div>
                        </div>




                        <div className="footer-contact">
                            <div className="footer-menu">
                                <div className="social-icon">
                                    <a href="http://instagram.com/_u/luxoticaautomobiles/" ><AiFillInstagram className='insta-icon' /></a>
                                    <span className='follow-text'>Follow us on</span>

                                </div>

                            </div>

                            <span className="services-heading">Contacts</span>
                            <div className="contact-item-list">
                                <div className="contacts-item location">
                                    <ImLocation className='location-icon' />

                                    <span className='address'>200A, 1, Shyama Prasad Mukherjee Rd,</span>
                                    <br />
                                    <span className='address'> Mudiali, Lake Gardens, Kolkata, West Bengal 700026
                                    </span>
                                </div>
                                <div className="contacts-item">
                                    <BsFillTelephoneFill className='phone-icon' />

                                    <em>Phone: +91 98318 86240(Main)</em>
                                </div>
                                <div className="contacts-item">
                                    <BsFillEnvelopeFill className='mail-icon' />

                                    <em>Email: pratap@luxotica.in</em>
                                </div>
                                <address className="contacts-item">
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYA-zZduEl-eyY8qcoHrm90wHDu24cNPe0sFAB464E9ZiHOkt9y_fVvFxKlESO9RPr1E&usqp=CAU' onClick={showInMapClicked} />

                                </address>

                                <div className="footer-menu-mobile">
                                    <div className="social-icon">
                                        <a href="http://instagram.com/_u/luxoticaautomobiles/" ><AiFillInstagram className='insta-icon' /></a>
                                        <span className='follow-text'>Follow us on</span>
                                    </div>




                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>


            <footer className="page-footer">
                <span className='page-footer-text'>All Rights Reserved</span>
            </footer>
        </>
    );
};

export default Footer;