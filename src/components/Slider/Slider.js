import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../assests/images/slider1.jpg";
import slider2 from "../../assests/images/slider2.jpg";
import slider3 from "../../assests/images/slider3.jpg";
import slider4 from "../../assests/images/slider4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import './Slider.css';


function Slider() {
    return (
        <div className = "slider">

        <Carousel pause = {true}>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                <div className='caption'>

                    <h3 className = "add-caption">Find Your Dream Car</h3>
                    <h2 className='slider-caption'>Rolls Royce </h2>
                    <p className='slider-desc'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <div className="button-slider">
                                                            View details
                                                            <FontAwesomeIcon
                                                                icon={faAngleRight}
                                                                className="icon-slider"
                                                            />
                                                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="w-100"
                    src={slider3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                <div className='caption'>

                    <h3 className = "add-caption">Find Your Dream Car</h3>
                    <h2 className='slider-caption'>Mini Cooper</h2>
                    <p className='slider-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="button-slider">
                                                            View details
                                                            <FontAwesomeIcon
                                                                icon={faAngleRight}
                                                                className="icon-slider"
                                                            />
                                                        </div>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="w-100"
                    src={slider4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                <div className='caption'>

                <h3 className = "add-caption">Find Your Dream Car</h3>
                    <h2 className='slider-caption'>Huracan</h2>
                    <p className='slider-desc'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <div className="button-slider" >
                                                            View details
                                                            <FontAwesomeIcon
                                                                icon={faAngleRight}
                                                                className="icon-slider"
                                                            />
                                                        </div>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img
                    className="w-100"
                    src={slider2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className='caption'>
                <h3 className = "add-caption">Find Your Dream Car</h3>
                    <h2 className='slider-caption'>Mercedes Benz E</h2>
                    <p className='slider-desc'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <div className="button-slider" >
                                                            View details
                                                            <FontAwesomeIcon
                                                                icon={faAngleRight}
                                                                className="icon-slider"
                                                            />
                                                        </div>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>


    );
};

export default Slider;