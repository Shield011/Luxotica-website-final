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
} from "@fortawesome/free-solid-svg-icons";
import { RiUserSmileFill } from "react-icons/ri";
import { GiWhiteBook } from "react-icons/gi";
import { IoIosContacts } from "react-icons/io";


import "./Home.css";
import FadeInSection from "../../components/FadeIn/FadeIn";

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
    const[minPrice, setMinPrice] = useState();
    const[maxPrice, setMaxPrice] = useState();

    const [value, onChange] = useState(1);
    useEffect(() => {
        const ele = document.querySelector(".buble");
        if (ele) {
            ele.style.left = `${Number(value / 4)}px`;
        }
    });

    const carModels = [
        "Audi",
        "BMW",
        "Ferrari",
        "Porsce",
        "Rolls Royce",
        "Lamborgini",
        "Mcqueen",
        "Audi",
    ];

    return (
        <div>
            <Navbar />
            <Slider />

            <FadeInSection >

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
                                            <div
                                                className="dropdown-btn"
                                                onClick={(e) =>
                                                    setIsActiveManufacturer(!isActiveManufacturer)
                                                }
                                            >
                                                {selectedManufacturer}
                                                <FontAwesomeIcon
                                                    icon={faCaretDown}
                                                    className="angle-down-icon"
                                                />
                                            </div>
                                            {isActiveManufacturer && (
                                                <div className="dropdown-content">
                                                    {carModels.map((model, index) => {
                                                        return (
                                                            <div
                                                                className="dropdown-item"
                                                                key={index}
                                                                onClick={(e) => {
                                                                    setSelectedManufacturer(model);
                                                                    setIsActiveManufacturer(false);
                                                                }}
                                                            >
                                                                {model}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                        <p className="select-desc">MISSING MANUFACTURER?</p>
                                    </div>

                                    <div className="filter-by-dropdown">
                                        <div className="dropdown">
                                            <div
                                                className="dropdown-btn"
                                                onClick={(e) => setIsActiveModel(!isActiveModel)}
                                            >
                                                {selectedModel}
                                                <FontAwesomeIcon
                                                    icon={faCaretDown}
                                                    className="angle-down-icon"
                                                />
                                            </div>
                                            {isActiveModel && (
                                                <div className="dropdown-content">
                                                    {carModels.map((model, index) => {
                                                        return (
                                                            <div
                                                                className="dropdown-item"
                                                                key={index}
                                                                onClick={(e) => {
                                                                    setSelectedModel(model);
                                                                    setIsActiveModel(false);
                                                                }}
                                                            >
                                                                {model}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                        <p className="select-desc">MISSING MODEL?</p>
                                    </div>
                                    <div className="filter-by-dropdown">
                                        <div className="dropdown">
                                            <div
                                                className="dropdown-btn"
                                                onClick={(e) => setIsActiveStatus(!isActiveStatus)}
                                            >
                                                {selectedStatus}
                                                <FontAwesomeIcon
                                                    icon={faCaretDown}
                                                    className="angle-down-icon"
                                                />
                                            </div>
                                            {isActiveStatus && (
                                                <div className="dropdown-content">
                                                    {carModels.map((model, index) => {
                                                        return (
                                                            <div
                                                                className="dropdown-item"
                                                                key={index}
                                                                onClick={(e) => {
                                                                    setSelectedStatus(model);
                                                                    setIsActiveStatus(false);
                                                                }}
                                                            >
                                                                {model}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                        <p className="select-desc">E.G: NEW, USED, CERTIFIED?</p>
                                    </div>
                                    <div className = 'price-input'>
                                        <input type = 'text' className="min-price" value = {minPrice} placeholder = 'Min range' />
                                    </div>
                                    <div className = 'price-input'>
                                        <input type = 'text' className="max-price" value = {maxPrice} placeholder = 'Max range'/>
                                    </div>

                                </div>

                                <div className="filter-section-3">
                                    <div className="filter-by-dropdown">
                                        <div className="dropdown">
                                            <div
                                                className="dropdown-btn"
                                                onClick={(e) => setIsActiveMax(!isActiveMax)}
                                            >
                                                {selectedMax}
                                                <FontAwesomeIcon
                                                    icon={faCaretDown}
                                                    className="angle-down-icon"
                                                />
                                            </div>
                                            {isActiveMax && (
                                                <div className="dropdown-content">
                                                    {carModels.map((model, index) => {
                                                        return (
                                                            <div
                                                                className="dropdown-item"
                                                                key={index}
                                                                onClick={(e) => {
                                                                    setSelectedMax(model);
                                                                    setIsActiveMax(false);
                                                                }}
                                                            >
                                                                {model}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="filter-by-dropdown">
                                        <div className="dropdown">
                                            <div
                                                className="dropdown-btn"
                                                onClick={(e) => setIsActiveMin(!isActiveMin)}
                                            >
                                                {selectedMin}
                                                <FontAwesomeIcon
                                                    icon={faCaretDown}
                                                    className="angle-down-icon"
                                                />
                                            </div>
                                            {isActiveMin && (
                                                <div className="dropdown-content">
                                                    {carModels.map((model, index) => {
                                                        return (
                                                            <div
                                                                className="dropdown-item"
                                                                key={index}
                                                                onClick={(e) => {
                                                                    setSelectedMin(model);
                                                                    setIsActiveMin(false);
                                                                }}
                                                            >
                                                                {model}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="button-search">
                                        <button className="search">Search for this Vehicle</button>
                                        <FontAwesomeIcon icon={faAngleRight} className="angle-icon" />
                                    </div>
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
                                            The dream of being able to provide a one of a kind consumer
                                            experience has been a constant motivation for us all these
                                            years. It was the year 2019, when after 15 years of
                                            dedicated experience in the industry, this dream came to
                                            fruition.
                                        </p>
                                        <p className="paragraph">
                                            Since its inception, Luxotica has strived to provide clients
                                            with the best deals in automobiles, with singular focus on{" "}
                                            <b>"Quality </b>, <b>Clarity</b> and, <b>Integrity</b>."
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
