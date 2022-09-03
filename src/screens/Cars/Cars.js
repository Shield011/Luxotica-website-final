import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { carData } from "./CarData";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {FaFilter} from 'react-icons/fa';
import {BiSort} from 'react-icons/bi';
import {FiFilter} from 'react-icons/fi';
import {MdTableRows, MdTableChart} from 'react-icons/md';
import "./Cars.css";
import { Dropdown } from "semantic-ui-react";

import Footer from "../../components/Footer/Footer";

const Cars = () => {
    const [itemNumber, setItemNumber] = useState();

    const [isGrid, setIsGrid] = useState(false);
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();


    const handleClickGrid = () => {
        setIsGrid(true);
    };
    const handleClickTable = () => {
        setIsGrid(false);
    };
    const options = [
        { key: 1, text: "Choice 1", value: 1 },
        { key: 2, text: "Choice 2", value: 2 },
        { key: 3, text: "Choice 3", value: 3 },
    ];
    const sortOption = [
        "Recently Added",
        "Recently Added",
        "Recently Added",
        "Recently Added",
        "Recently Added",
        "Recently Added",
        "None",
    ];
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

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="car-navigation">
                <div className="navigation-row-cars">
                    <a className="nav-text-cars" href="/">
                        Home
                    </a>
                    <FontAwesomeIcon icon={faAngleRight} className="nav-icon" />
                    <a className="nav-text-cars" href="/cars">
                        Cars
                    </a>
                </div>
            </div>

            <div className="car-page-view-control-container">
            <div className="car-heading">
                <div className="cars-heading">
                    <h1 className="car-heading-text">Total 100 Cars Found</h1>
                </div>
            </div>
                <div className="car-page-view-control">
                    <div className="section">
                        <p className="section-text mobile">Select view</p>
                        <div className="view-buttons-section">
                            <MdTableRows
                                className="list-view-icon"
                                onClick={handleClickTable}
                            />

                            <MdTableChart
                                className="table-view-icon"
                                onClick={handleClickGrid}
                            />
                        </div>
                    </div>

                    <div className="section">
                        <p className="section-text">Items per page</p>
                        <input
                            type="text"
                            className="show-item-input"
                            placeholder="Item per page"
                            value={itemNumber}
                        />
                    </div>

                    <div className="section">
                        <p className="section-text">Sort</p>
                        <Dropdown className = 'sort-dropdown'
                                    placeholder="Sort By"
                                    clearable
                                    options={options}
                                    selection
                                />
                    </div>
                    <div className = 'mobile-icon'>
                        <BiSort className = 'sort' />
                    </div>
                    <div className = 'mobile-icon'>
                    <FiFilter className = 'car-page-filter' />

                    </div>
                </div>

            </div>
            <hr  className="car-hr"/>

            <div className="listing-container">
                <div className={isGrid? "listing grid" : "listing mobile"}>
                    <div className={isGrid ? "car-listing  grid" : "car-listing mobile"}>
                        {carData.map((car, index) => {
                            return (
                                <div className="car-section grid">
                                    <div className={isGrid ? "car-details grid" : "car-details mobile"}>
                                        <div className="car-image-section">
                                            <span className={isGrid ? "car-status grid": "car-status mobile"}>{car.status}</span>

                                            <img
                                            src={car.image1}
                                            alt={car.name}
                                            className={isGrid ? "car-img grid" : "car-img mobile"}
                                        />

                                        </div>
                                        <div className={isGrid? 'car-info grid' : 'car-info mobile'}>
                                            <div className="car-price-row">
                                                <p className={isGrid ? "car-name grid" : "car-name mobile"}>
                                                    {car.name}
                                                </p>

                                            </div>
                                            <hr className="car-hr" />

                                            <div
                                                className={
                                                    isGrid ? "car-info-row grid" : "car-info-row mobile"
                                                }
                                            >
                                                <div
                                                    className={
                                                        isGrid ? "car-info-detail grid" : "car-info-detail mobile"
                                                    }
                                                >
                                                    <p className="car-desc">{car.desc}</p>

                                                    <div
                                                        className={isGrid ? "car-specs grid" : "car-specs mobile"}
                                                    >
                                                        <div className="specs mobile">
                                                            <div className="specs-detail mobile-display">
                                                                <span className="specs-name">Body style:</span>
                                                                <span className="specs-info">
                                                                    {car.bodyStyle}
                                                                </span>
                                                            </div>
                                                            <div className={isGrid? "specs-detail grid": "specs-detail mobile"}>
                                                                <span className="specs-name">Mileage:</span>
                                                                <span className="specs-info">
                                                                    {car.mileage}
                                                                </span>
                                                            </div>
                                                            <div className={isGrid? "specs-detail grid": "specs-detail mobile"}>
                                                                <span className="specs-name">
                                                                    Transmission:
                                                                </span>
                                                                <span className="specs-info">
                                                                    {car.transmission}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="specs mobile">
                                                            <div className="specs-detail mobile-display">
                                                                <span className="specs-name">Engine:</span>
                                                                <span className="specs-info">{car.engine}</span>
                                                            </div>
                                                            <div className="specs-detail mobile-display">
                                                                <span className="specs-name">color:</span>
                                                                <span className="specs-info">{car.color}</span>
                                                            </div>
                                                            <div className={isGrid? "specs-detail grid": "specs-detail mobile"}>
                                                                <span className="specs-name">Specs:</span>
                                                                <span className="specs-info">{car.specs}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="car-info-detail-2">
                                                    <div className={isGrid ? "specs-2 grid" : "specs-2 mobile"}>
                                                        <div
                                                            className={
                                                                isGrid
                                                                    ? "car-price-row-2 grid"
                                                                    : "car-price-row-2 mobile"
                                                            }
                                                        >
                                                            <span className="specs-name-2">Price:</span>
                                                            <p className="car-price">{car.price}</p>
                                                        </div>
                                                        {/* <Link to= {{pathname: '/carDetails',
                                                        state: {car}}}
                                                        > */}
                                                        <div className="view-details-button" onClick ={() => navigate('/carDetails', { state : { query : {car} }})}>
                                                            View details
                                                            <FontAwesomeIcon
                                                                icon={faAngleRight}
                                                                className="details-icon"
                                                            />
                                                        </div>
                                                        {/* </Link> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={isGrid ? "car-filter grid " : "car-filter mobile"}>
                        <span className="car-filter-title">Refine your Search</span>
                        <div className="car-filter-sections">
                            <div className="dropdown">
                                <p className="select-desc">Select Manufacturer</p>
                                <Dropdown
                                    placeholder="Manufacturer"
                                    clearable
                                    options={options}
                                    selection
                                />
                            </div>

                        <div className="dropdown">
                            <p className="select-desc">Select Model</p>
                            <Dropdown
                                placeholder="Model"
                                clearable
                                options={options}
                                selection
                            />
                        </div>
                        <div className="dropdown">
                            <p className="select-desc">Select Car Condition</p>
                            <Dropdown
                                placeholder="Condition"
                                clearable
                                options={options}
                                selection
                            />
                        </div>
                        <div className="dropdown">
                            <p className="select-desc">Min Year</p>
                            <Dropdown
                                placeholder="Min Year"
                                clearable
                                options={options}
                                selection
                            />
                        </div>
                        <div className="dropdown">
                            <p className="select-desc">Max Year</p>
                            <Dropdown
                                placeholder="Max Year"
                                clearable
                                options={options}
                                selection
                            />
                        </div>
                        <div className="price-input">
                            <input
                                type="text"
                                className="min-price car"
                                value={minPrice}
                                placeholder="Min range"
                            />
                        </div>
                        <div className="price-input">
                            <input
                                type="text"
                                className="max-price car"
                                value={maxPrice}
                                placeholder="Max range"
                            />
                        </div>
                        </div>
                        <div className="filter-button">
                            <div className="car-button-search">
                                Filter Vehicles
                                <FontAwesomeIcon
                                    icon={faAngleRight}
                                    className="car-angle-icon"
                                />
                            </div>
                            <div className="reset-button">Reset All filters</div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cars;
