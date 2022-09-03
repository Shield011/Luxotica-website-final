import React from "react";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import manUsingLaptop2 from "../../assests/images/manUsingLaptop2.png";
import phoneTalking from "../../assests/images/phoneTalking.jpg";
import visitingShowroom from "../../assests/images/visitingShowroom.jpg";
import carDelivery from "../../assests/images/carDelivery.jpg";
import Slider from "../../components/Slider/Slider";
import { AiFillCar } from "react-icons/ai";
import { FaUsers, FaEnvelopeOpenText, FaUserTie } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCarSide,
    faCaretDown,
    faAngleRight,
    faQuoteLeft,
    faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { RiUserSmileFill } from "react-icons/ri";
import { GiWhiteBook } from "react-icons/gi";
import { IoIosContacts } from "react-icons/io";
import { Dropdown } from "semantic-ui-react";

import "./Home.css";
import FadeInSection from "../../components/FadeIn/FadeIn";
import { carData } from "../Cars/CarData";
import { reviewData } from "./ReviewData";

const Home = () => {
    const [isActiveManufacturer, setIsActiveManufacturer] = useState(false);
    const [isActiveModel, setIsActiveModel] = useState(false);
    const [isActiveStatus, setIsActiveStatus] = useState(false);
    const [isActiveMax, setIsActiveMax] = useState(false);
    const [isActiveMin, setIsActiveMin] = useState(false);
    const [selected, setSelected] = useState("Choose One");
    const [selectedManufacturer, setSelectedManufacturer] =
        useState("Any Manufacturer");
    const [selectedModel, setSelectedModel] = useState("Any Model");
    const [selectedStatus, setSelectedStatus] = useState("Vehicle Status");
    const [selectedMax, setSelectedMax] = useState("Max Year");
    const [selectedMin, setSelectedMin] = useState("Min Year");
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();

    const [value, onChange] = useState(1);
    useEffect(() => {
        const ele = document.querySelector(".buble");
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    });



    const options = [
        { key: 1, text: "Choice 1", value: 1 },
        { key: 2, text: "Choice 2", value: 2 },
        { key: 3, text: "Choice 3", value: 3 },
    ];

    return (
        <div>
            <Navbar />
            <Slider />

            <FadeInSection>
                <div className="filter-container phone">
                    <div className="filter-sections">
                        <div className="filter-title-section">
                            <span className="filter-title">
                                Unsure which car you are looking for? Find it here
                            </span>
                        </div>

                        <div className="filter-section-1">
                            <span className="filter-desc">Select type of your vehicle</span>
                            <div className="filter-by-icons">
                                <FontAwesomeIcon icon={faCarSide} className="car-icon" />
                                <span className="car-desc">Car</span>
                            </div>
                            <div className="filter-by-icons">
                                <FontAwesomeIcon icon={faCarSide} className="car-icon" />

                                <span className="car-desc">Car</span>
                            </div>
                            <div className="filter-by-icons">
                                <FontAwesomeIcon icon={faCarSide} className="car-icon" />
                                <span className="car-desc">Car</span>
                            </div>
                            <div className="filter-by-icons">
                                <FontAwesomeIcon icon={faCarSide} className="car-icon" />
                                <span className="car-desc">Car</span>
                            </div>
                            {/* <div className="filter-by-icons">
                                    <FontAwesomeIcon icon={faCarSide} className="car-icon" />
                                    <span className="car-desc">Car</span>
                                </div> */}
                        </div>
                        <div className="align-side">
                            <div className="filter-section-2">
                                <div className="filter-by-dropdown">
                                    <div className="dropdown">
                                        <p className="select-desc">Select Manufacturer</p>
                                        <Dropdown
                                            placeholder="Manufacturer"
                                            clearable
                                            options={options}
                                            selection
                                        />
                                    </div>
                                </div>

                                <div className="filter-by-dropdown">
                                    <div className="dropdown">
                                        <p className="select-desc">Select Model</p>
                                        <Dropdown
                                            placeholder="Model"
                                            clearable
                                            options={options}
                                            selection
                                        />
                                    </div>
                                </div>
                                <div className="filter-by-dropdown">
                                    <div className="dropdown">
                                        <p className="select-desc">Select Car Condition</p>
                                        <Dropdown
                                            placeholder="Condition"
                                            clearable
                                            options={options}
                                            selection
                                        />
                                    </div>
                                </div>
                                <div className="price-input">
                                    <input
                                        type="text"
                                        className="min-price"
                                        value={minPrice}
                                        placeholder="Min range"
                                    />
                                </div>
                                <div className="price-input">
                                    <input
                                        type="text"
                                        className="max-price"
                                        value={maxPrice}
                                        placeholder="Max range"
                                    />
                                </div>
                            </div>

                            <div className="filter-section-3">
                                <div className="filter-by-dropdown">
                                    <div className="dropdown">
                                        <p className="select-desc">Min Year</p>
                                        <Dropdown
                                            placeholder="Min Year"
                                            clearable
                                            options={options}
                                            selection
                                        />
                                    </div>
                                </div>

                                <div className="filter-by-dropdown">
                                    <div className="dropdown">
                                        <p className="select-desc">Max Year</p>
                                        <Dropdown
                                            placeholder="Max Year"
                                            clearable
                                            options={options}
                                            selection
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="button-search">
                                Search this Vehicle
                                <FontAwesomeIcon icon={faAngleRight} className="angle-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="introduction">
                    <section className="b-welcome">
                        <div className="welcome-container">
                            <div className="container-elements">
                                <div className="elements-2">
                                    <div className="introduction-para">
                                        <span className="para-heading">
                                            WORLD'S LEADING CAR DEALER
                                        </span>
                                        <h3 className="para-title">WELCOME TO Luxotica</h3>
                                        <p className="paragraph">
                                            Luxotica is the brainchild of our founder Mr. Pratap Bhanu
                                            Singh, a passionate automobile enthusiast since his early
                                            days.{" "}
                                        </p>
                                        <p className="paragraph">
                                            Having joined the industry at 18, he has worked with the
                                            best of the brands out there. The likes of Mitsubishi,
                                            BMW, Audi, Mercedes Benz, Porsche and Aston Martin have
                                            been his playground. The dream of being able to provide a
                                            one of a kind consumer experience has been a constant
                                            motivation for us all these years. That, and all the love
                                            and support of our well wishers made it possible. It was
                                            the year 2019, when after 15 years of dedicated experience
                                            in the industry, this dream came to fruition.
                                        </p>
                                        <p className="paragraph">
                                            Since its inception, Luxotica has strived to provide
                                            clients with the best deals in automobiles, with singular
                                            focus on <b>"Quality </b>, <b>Clarity</b> and,{" "}
                                            <b>Integrity</b>."
                                        </p>
                                    </div>
                                </div>
                                <div className="elements-3">
                                    {/* <div className="not-row"> */}
                                    <div className="introduction-icons">
                                        <div className="introduction-icons-data">
                                            <AiFillCar className="welcome-section-icons" />

                                            <h3 className="icon-desc">AUTO LOANS</h3>
                                        </div>
                                    </div>

                                    <div className="introduction-icons">
                                        <div className="introduction-icons-data">
                                            <GiWhiteBook className="welcome-section-icons" />

                                            <h3 className="icon-desc">Buying guide</h3>
                                        </div>
                                    </div>
                                    {/* </div> */}

                                    {/* <div className="elements-4">
                                    <div className="not-row"> */}
                                    <div className="introduction-icons">
                                        <div className="introduction-icons-data">
                                            <FaUserTie className="welcome-section-icons" />

                                            <h3 className="icon-desc">Trade-Ins</h3>
                                        </div>
                                    </div>

                                    <div className="introduction-icons">
                                        <div className="introduction-icons-data">
                                            <IoIosContacts className="welcome-section-icons" />

                                            <h3 className="icon-desc">24/7 support</h3>
                                        </div>
                                        {/* </div>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </FadeInSection>


            <div className="featured-cars-section">
                <span className="featured-title">Our Featured Cars</span>
                <div className="featured-cars">
                    {carData
                        .filter((car) => car.featured == "true")
                        .map((c, index) => {
                            return (
                                <div className="car-box">
                                    <div className="featured-car-details">
                                        <img
                                            className="featured-car-image"
                                            src={c.image}
                                            alt={c.name}
                                        />
                                        <div className="featured-car-info">
                                            <span className="featured-car-name">{c.name}</span>
                                            <div className="featured-car-specs">
                                                <div className="specs-details start">
                                                    <span className="specs-title ">Registration</span>
                                                    <span className="specs">{c.registration}</span>
                                                </div>
                                                <div className="specs-details middle">
                                                    <span className="specs-title">Fuel</span>
                                                    <span className="specs">{c.fuel}</span>
                                                </div>
                                                <div className="specs-details end">
                                                    <span className="specs-title">mileage</span>
                                                    <span className="specs">{c.mileage}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            <FadeInSection>
                <div className="large-icons-section">
                    <section className="b-count">
                        <div className="count-container">
                            <div className="count-item">
                                <AiFillCar className="count-icons" />

                                <h2 className="percent">5000</h2>

                                <h5 className="title">Cars Sold</h5>
                            </div>

                            <div className="count-item">
                                <FaUsers className="count-icons" />

                                <h2 className="percent">3100</h2>

                                <h5 className="title">Buyers</h5>
                            </div>

                            <div className="count-item">
                                <RiUserSmileFill className="count-icons" />

                                <h2 className="percent">3100</h2>

                                <h5 className="title">Happy Customers</h5>
                            </div>

                            <div className="count-item">
                                <FaEnvelopeOpenText className="count-icons" />

                                <h2 className="percent">54</h2>

                                <h5 className="title">FREE PARTS GIVEN</h5>
                            </div>
                        </div>
                    </section>
                </div>
            </FadeInSection>

            <div className='customer-reviews-section'>
                <div className='review-container'>
                    <span className='customer-reviews-title'>
                        What our Customer Says
                    </span>
                    <div className='reviews'>
                        {reviewData.map((r, index) => {
                            return (
                                <div className="review-box-container">

                                        <div className='review-box'>


                                            <p className="review"> <FontAwesomeIcon icon={faQuoteLeft} className='quotes' />{r.review}<FontAwesomeIcon icon={faQuoteRight} className='quotes' /></p>



                                        <span className="reviewer-name">{r.name}</span>
                                        <span className="reviewer-car">{r.owns}</span>
                                    </div>
                                </div>

                            )
                        })}

                    </div>
                </div>
            </div>

            <div className="how-it-works">
                <span className="how-it-works-section-titlle">
                    Get your Dream Car Now!
                </span>

                <div className="guide">
                    <div className="works-data">
                        <img className="work-image" src={manUsingLaptop2} />

                        <span className="works-img-desc">
                            Visit our website, find the car you love.
                        </span>
                    </div>

                    <div className="works-data">
                        <img className="work-image" src={phoneTalking} />

                        <span className="works-img-desc">
                            Contact us, and get your queries answered.
                        </span>
                    </div>

                    <div className="works-data">
                        <img className="work-image" src={visitingShowroom} />

                        <span className="works-img-desc">
                            Come and have a look of the Car, and get the feel of riding it.
                        </span>
                    </div>

                    <div className="works-data">
                        <img className="work-image" src={carDelivery} />

                        <span className="works-img-desc">
                            Here waits your surprise, with an outstanding unboxing experience.
                        </span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
