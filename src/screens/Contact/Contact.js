import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
    faAngleRight,
    faLocationDot,
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer/Footer";

const Contact = (e) => {


    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[phone, setPhone] = useState();
    const[query, setQuery] = useState();

    const handleSubmit = () => {
        setName("")
        setEmail("")
        setPhone("")
        setQuery("")
        console.log("Clicked")

    }
    return (
        <div>
            <Navbar />
            {/* <div className="contact">
                <div className="contact-heading">
                    <h1 className="contact-heading-text">Contact Us</h1>
                </div>
            </div> */}
            <div className="contact-navigation">
                <div className="navigation-row">
                    <a className="nav-text" href="/">
                        Home
                    </a>
                    <FontAwesomeIcon icon={faAngleRight} className="nav-icon" />
                    <a className="nav-text" href="/contact">
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="contact-us-main-image-container">


            </div>
            <div className="contact-us-information-container">
                <div className="contact-us-information-section">
                    <div className="contact-form-container">
                        <span className="contact-form-title">Contact Form</span>
                        <hr className="contact-horizontal-line" />
                        <span className="contact-form-info">
                            Enter your queries here, and Luxotica will reach out as soon as
                            possible.
                        </span>
                        <form className="contact-us-form">
                            <input
                                className="contact-form-input"
                                type="text"
                                required
                                placeholder="Your Name"
                                value = {name}
                            />
                            <input
                                className="contact-form-input"
                                type="text"
                                required
                                placeholder="Your Email Id"
                                value = {email}
                            />
                            <input
                                className="contact-form-input"
                                type="text"
                                required
                                placeholder="Phone Number"
                                value = {phone}
                            />
                            <textarea
                                className="contact-form-input long"
                                type="text"
                                required
                                placeholder="Type your queries here"
                                value = {query}
                            />
                            <div className="form-submit-button" onClick = {handleSubmit}>
                                Submit
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="form-submit-icon"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="contact-us-address">
                        <div className="contact-us-opening-hours">
                            <span className="contact-form-title">Opening Hours</span>
                            <hr className="contact-horizontal-line" />

                            <div className="opening-hours-details">
                                <p className="opening-heading">Service Department</p>

                                <hr className="contact-horizontal-line contact" />

                                <p className="opening-timings">Mon-Sat : 9:30am - 7:30pm</p>
                                <br />

                                <span className="sunday-timings">Sunday is closed</span>
                            </div>
                        </div>
                        <div className="contact-us-call-information">
                            <span className="Reach-us">Reach Us</span>
                            <hr className="contact-horizontal-line contact" />
                            <div className="calling-details">
                                <div className="reach-us-details">
                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        className="contact-address-icon"
                                    />
                                    <span className="address">Address:</span>
                                    <p className="address-detail">
                                        200A, 1, Shyama Prasad Mukherjee Rd, Mudiali, Lake Gardens,
                                        Kolkata, West Bengal 700026
                                    </p>
                                </div>
                                <div className="reach-us-details">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="contact-phone-icon"
                                    />
                                    <span className="phone">Phone:</span>
                                    <p className="phone-detail">+91 98318 86240</p>
                                    <p className="phone-detail-2">+91 9038603999</p>
                                </div>
                                <div className="reach-us-details">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="contact-mail-icon"
                                    />
                                    <span className="email">Email:</span>
                                    <p className="email-detail">pratap@luxotica.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
