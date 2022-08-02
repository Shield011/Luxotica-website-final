import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RollsRoyceRight from "../../assests/images/RollsRoyceRight.png";
import MiniCooperRed from "../../assests/images/MiniCooperRed.png";
import MercedesBenzE from "../../assests/images/MercedesBenzE.png";
import Huracan from "../../assests/images/Huracan.png";
import BlackImage from "../../assests/images/BlackImage.jpg";
import Unsplash1 from "../../assests/images/Unsplash1.jpg";
import Unsplash2 from "../../assests/images/Unsplash2.jpg";
import Unsplash3 from "../../assests/images/Unsplash3.jpg";
import './Slider.css';


function Slider() {
    return (
        <div className = "slider">

        <Carousel pause = {true}>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={Unsplash1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className = "add-caption">Find Your Dream Car</h3>
                    <h2 className='slider-caption'>Rolls Royce </h2>
                    <p className='slider-desc'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="w-100"
                    src={Unsplash1}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className = "add-caption">Find Your Dream Car</h3>
                    <h2 className='slider-caption'>Mini Cooper</h2>
                    <p className='slider-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="w-100"
                    src={Unsplash1}
                    alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className = "add-caption">Find Your Dream Car</h3>
                    <h2 className='slider-caption'>Huracan</h2>
                    <p className='slider-desc'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                    className="w-100"
                    src={Unsplash1}
                    alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className = "add-caption">Find Your Dream Car</h3>
                    <h2 className='slider-caption'>Mercedes Benz E</h2>
                    <p className='slider-desc'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>


    );
};

export default Slider;