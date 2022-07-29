import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RollsRoyceRight from "../../assests/images/RollsRoyceRight.png";
import MiniCooperRed from "../../assests/images/MiniCooperRed.png";
import MercedesBenzE from "../../assests/images/MercedesBenzE.png";
import Huracan from "../../assests/images/Huracan.png";
import './Slider.css';


function Slider() {
    return (
        <div className = "slider">
           
        <Carousel pause = {true}>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={RollsRoyceRight}
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
                    className="d-block w-100"
                    src={MiniCooperRed}
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
                    className="d-block w-100"
                    src={Huracan}
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
                    className="d-block w-100"
                    src={MercedesBenzE}
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