import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { TbEngine } from "react-icons/tb";
import { GiCarDoor, GiGasPump, GiCarSeat, GiPaintRoller } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import { SiCoronaengine } from "react-icons/si";
import {
    FaUserSecret,
    FaArrowAltCircleLeft,
    FaArrowAltCircleRight,
} from "react-icons/fa";
import { FcEngineering, FcCalendar } from "react-icons/fc";
import { BsCalendar4Event } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./CarDetails.css";

const CarDetails = () => {
    const { state } = useLocation();
    const { query } = state;
    const [current, setCurrent] = useState(0);
    const length = query.car.image.length;
    const [sliderData, setSliderData] = useState(query.car.image[0])

    const handleClick = (index) => {
        console.log(index);
        const slider = query.car.image[index];
        setSliderData(slider);
    }

    if (!Array.isArray(query.car.image) || length <= 0) {
        return null;
    }

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className="car-detail-page">
                    <div className="car-detail-page-header">
                        <div className="car-name-specs">
                            <span className="car-name-span">{query.car.name}</span>
                            <span className="car-price-span">{query.car.price}</span>
                        </div>
                        <div className="enquire-now-button">Enquire Now</div>
                    </div>
                    <div className="car-details-section">

                        <div className="car-detail-image-big">
                            <img src={sliderData.img} className="image-main" />
                            <div className="small-image">

                                {query.car.image.map((image, index) => {
                                    return (


                                        <img className = {sliderData.id === index ? "clicked" : ""} key={image.id} src={image.img} onClick={() => handleClick(index)} height="115" width="170" />


                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="car-specification">
                        <span className="title-span">Car Summary</span>
                        <div className="car-specification-summary">
                            <div className="car-summary">
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <IoCarSportOutline className="summary-icon" />
                                    </div>

                                    <span className="summary-name">Vehicle Type:</span>
                                    <span className="summary-value">{query.car.bodyStyle}</span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <FcCalendar className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Registration Year:</span>
                                    <span className="summary-value">
                                        {query.car.registration}
                                    </span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <TbEngine className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Engine:</span>
                                    <span className="summary-value">
                                        {query.car.engineDetail}
                                    </span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <SiCoronaengine className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Transmission:</span>
                                    <span className="summary-value">
                                        {query.car.transmission}
                                    </span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <FcCalendar className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Manufacturing Year:</span>
                                    <span className="summary-value">
                                        {query.car.engineDetail}
                                    </span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <IoMdSpeedometer className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Kms done:</span>
                                    <span className="summary-value">
                                        {query.car.transmission}
                                    </span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <FaUserSecret className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Ownership:</span>
                                    <span className="summary-value">{query.car.bodyStyle}</span>
                                </div>

                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <FcEngineering className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Peak Torque:</span>
                                    <span className="summary-value">{query.car.bodyStyle}</span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <FcEngineering className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Peak Power:</span>
                                    <span className="summary-value">{query.car.bodyStyle}</span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <GiCarDoor className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Doors:</span>
                                    <span className="summary-value">{query.car.bodyStyle}</span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <GiCarSeat className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Seat:</span>
                                    <span className="summary-value">{query.car.seat}</span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <GiGasPump className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Fuel:</span>
                                    <span className="summary-value">{query.car.bodyStyle}</span>
                                </div>
                                <div className="summary-specs">
                                    <div className="summary-specs-icons">
                                        <GiPaintRoller className="summary-icon" />
                                    </div>
                                    <span className="summary-name">Exterior Color:</span>
                                    <span className="summary-value">{query.car.bodyStyle}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="car-full-specification">
                        <span className="title-span">Full specification</span>
                        <div className="full-specification">
                            <span className="full-specification-name">Overview</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CarDetails;
