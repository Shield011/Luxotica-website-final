import React from 'react';
import { useState } from 'react';
import { carData } from './CarData';
import Navbar from '../../components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faList, faTableCells, faCaretDown, faCarSide, faCircle } from '@fortawesome/free-solid-svg-icons';
import { GiSpeedometer } from 'react-icons/gi';
import './Cars.css';
import Footer from '../../components/Footer/Footer';

const Cars = () => {
    const [itemNumber, setItemNumber] = useState();
    const [sortValue, setSortValue] = useState()
    const [isSortDropdown, setIsSortDropdown] = useState(false);
    const [isActiveManufacturer, setIsActiveManufacturer] = useState(false);
    const [isActiveModel, setIsActiveModel] = useState(false);
    const [isActiveStatus, setIsActiveStatus] = useState(false);
    const [isActiveMax, setIsActiveMax] = useState(false);
    const [isActiveMin, setIsActiveMin] = useState(false);
    const [selected, setSelected] = useState('Choose One');
    const [selectedManufacturer, setSelectedManufacturer] = useState("Any Manufacturer");
    const [selectedModel, setSelectedModel] = useState("Any Model");
    const [selectedStatus, setSelectedStatus] = useState("Vehicle Status");
    const [selectedMax, setSelectedMax] = useState("Max Year");
    const [selectedMin, setSelectedMin] = useState("Min Year");

    const sortOption = ["Recently Added", "Recently Added", "Recently Added", "Recently Added", "Recently Added", "Recently Added", "None"];
    const carModels = ['Audi', 'BMW', 'Ferrari', 'Porsce', 'Rolls Royce', 'Lamborgini', 'Mcqueen', 'Audi']

    return (
        <div>
            <Navbar />
            <div className='car-heading'>
                <div className="cars-heading">
                    <h1 className="car-heading-text">Cars</h1>
                </div>
            </div>
            <div className='car-navigation'>
                <div className="navigation-row">
                    <a className="nav-text" href="/">Home</a>
                    <FontAwesomeIcon icon={faAngleRight} className="nav-icon" />
                    <a className="nav-text" href="/cars">Cars</a>
                </div>
            </div>
            <div className='car-page-view-control-container'>
                <div className='car-page-view-control'>
                    <div className='section'>
                        <p className='section-text'>
                            Select view
                        </p>
                        <div className='view-buttons-section'>

                            <FontAwesomeIcon icon={faList} className='list-view-icon' />

                            <FontAwesomeIcon icon={faTableCells} className='table-view-icon' />


                        </div>
                    </div>

                    <div className='section'>
                        <p className='section-text'>
                            Items per page
                        </p>
                        <input type='text' className='show-item-input' placeholder='Item per page' value={itemNumber} />

                    </div>



                    <div className='section'>

                        <p className='section-text'>
                            Sort
                        </p>
                        <div className="sort-dropdown-btn" onClick={(e) => setIsSortDropdown(!isSortDropdown)}>
                            {sortValue}
                            <FontAwesomeIcon icon={faCaretDown} className="angle-down-icon" />

                        </div>
                        {isSortDropdown && (
                            <div className='sort-dropdown-content'>
                                {sortOption.map((sort, index) => {

                                    return (

                                        <div className="sort-dropdown-item" key={index}
                                            onClick={
                                                (e) => {
                                                    setSortValue(sort)
                                                    setIsSortDropdown(false)
                                                }

                                            }>
                                            {sort}
                                        </div>)

                                })}

                            </div>

                        )}





                    </div>
                </div>

            </div>

            <div className='listing-container'>
                <div className='listing'>
                    <div className='car-listing'>
                        {carData.map((car, index) => {
                            return (
                                <div className='car-section'>
                                    <div className='car-details'>
                                        <div className='car-image-section'>
                                            <span className='car-status'>
                                                {car.status}
                                            </span>
                                            <img src={car.image} alt={car.name} className='car-img' />
                                        </div>
                                        <div className='car-info'>
                                            <div className='car-price-row'>
                                                <p className='car-name'>
                                                    {car.name}
                                                </p>
                                                <p className='car-price'>
                                                    {car.price}
                                                </p>
                                            </div>
                                            <div className='car-info-row'>

                                                <hr className='car-hr' />
                                                <p className='car-desc'>
                                                    {car.desc}
                                                </p>
                                                <p className='car-kms'>
                                                    <GiSpeedometer className='km-meter' />
                                                    {car.kms}

                                                </p>
                                                <div className='car-desc-footer'>
                                                    <ul className='car-condition'>
                                                        <li className='car-condition-item'>

                                                            {car.registration}</li>
                                                        <li className='car-condition-item'> <FontAwesomeIcon icon={faCircle} className='dot-icon' />{car.condition}</li>
                                                        <li className='car-condition-item'> <FontAwesomeIcon icon={faCircle} className='dot-icon' />{car.type}</li>
                                                        <li className='car-condition-item'> <FontAwesomeIcon icon={faCircle} className='dot-icon' />{car.fuel}</li>
                                                    </ul>
                                                    <div className='view-details-button'>
                                                        View details
                                                        <FontAwesomeIcon icon = {faAngleRight} className = 'details-icon' />
                                                        </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className='car-filter'>
                        <div className="car-filter-sections">
                            <div className='car-filter-title-section'>
                                <span className="car-filter-title">
                                    Unsure which car you are looking for? Find it here
                                </span>
                            </div>

                            {/* <div className='car-filter-section-1'>

                                <span className="car-filter-desc">
                                    Select type of your vehicle
                                </span>
                                <div className='car-filter-by-icons'>
                                    <FontAwesomeIcon icon={faCarSide} className="car-icon" />
                                    <span className='car-desc'>
                                        Car
                                    </span>
                                </div>
                                <div className='car-filter-by-icons'>
                                    <FontAwesomeIcon icon={faCarSide} className="car-icon" />

                                    <span className='car-desc'>
                                        Car
                                    </span>
                                </div>
                                <div className='car-filter-by-icons'>
                                    <FontAwesomeIcon icon={faCarSide} className="car-icon" />
                                    <span className='car-desc'>
                                        Car
                                    </span>
                                </div>
                                <div className='car-filter-by-icons'>
                                    <FontAwesomeIcon icon={faCarSide} className="car-icon" />
                                    <span className='car-desc'>
                                        Car
                                    </span>
                                </div>
                                <div className='filter-by-icons'>
                                    <FontAwesomeIcon icon={faCarSide} className="car-icon" />
                                    <span className='car-desc'>
                                        Car
                                    </span>
                                </div>

                            </div> */}
                            <div className='car-align-side'>
                                <div className='car-filter-section-2'>
                                    <div className='car-filter-by-dropdown'>
                                        <div className="car-dropdown">
                                            <div className="car-dropdown-btn" onClick={(e) => setIsActiveManufacturer(!isActiveManufacturer)}>
                                                {selectedManufacturer}
                                                <FontAwesomeIcon icon={faCaretDown} className="angle-down-icon" />

                                            </div>
                                            {isActiveManufacturer && (
                                                <div className='car-dropdown-content'>
                                                    {carModels.map((model, index) => {

                                                        return (

                                                            <div className="car-dropdown-item" key={index}
                                                                onClick={
                                                                    (e) => {
                                                                        setSelectedManufacturer(model)
                                                                        setIsActiveManufacturer(false)
                                                                    }

                                                                }>
                                                                {model}
                                                            </div>)

                                                    })}

                                                </div>

                                            )}

                                        </div>
                                        <p className='car-select-desc'>MISSING MANUFACTURER?</p>
                                    </div>

                                    <div className='car-filter-by-dropdown'>
                                        <div className="car-dropdown">
                                            <div className="car-dropdown-btn" onClick={(e) => setIsActiveModel(!isActiveModel)}>
                                                {selectedModel}
                                                <FontAwesomeIcon icon={faCaretDown} className="angle-down-icon" />

                                            </div>
                                            {isActiveModel && (
                                                <div className='car-dropdown-content'>
                                                    {carModels.map((model, index) => {

                                                        return (

                                                            <div className="car-dropdown-item" key={index}
                                                                onClick={
                                                                    (e) => {
                                                                        setSelectedModel(model)
                                                                        setIsActiveModel(false)
                                                                    }

                                                                }>
                                                                {model}
                                                            </div>)

                                                    })}

                                                </div>

                                            )}

                                        </div>
                                        <p className='car-select-desc'>MISSING MODEL?</p>
                                    </div>
                                    <div className='car-filter-by-dropdown'>
                                        <div className="car-dropdown">
                                            <div className="car-dropdown-btn" onClick={(e) => setIsActiveStatus(!isActiveStatus)}>
                                                {selectedStatus}
                                                <FontAwesomeIcon icon={faCaretDown} className="angle-down-icon" />

                                            </div>
                                            {isActiveStatus && (
                                                <div className='car-dropdown-content'>
                                                    {carModels.map((model, index) => {

                                                        return (

                                                            <div className="car-dropdown-item" key={index}
                                                                onClick={
                                                                    (e) => {
                                                                        setSelectedStatus(model)
                                                                        setIsActiveStatus(false)
                                                                    }

                                                                }>
                                                                {model}
                                                            </div>)

                                                    })}

                                                </div>

                                            )}

                                        </div>
                                        <p className='car-select-desc'>E.G: NEW, USED, CERTIFIED?</p>
                                    </div>


                                </div>

                                <div className='car-filter-section-3'>
                                    <div className='car-filter-by-dropdown'>

                                        <div className="car-dropdown">
                                            <div className="car-dropdown-btn" onClick={(e) => setIsActiveMax(!isActiveMax)}>
                                                {selectedMax}
                                                <FontAwesomeIcon icon={faCaretDown} className="angle-down-icon" />

                                            </div>
                                            {isActiveMax && (
                                                <div className='car-dropdown-content'>
                                                    {carModels.map((model, index) => {

                                                        return (

                                                            <div className="car-dropdown-item" key={index}
                                                                onClick={
                                                                    (e) => {
                                                                        setSelectedMax(model)
                                                                        setIsActiveMax(false)
                                                                    }

                                                                }>
                                                                {model}
                                                            </div>)

                                                    })}

                                                </div>

                                            )}

                                        </div>

                                    </div>




                                    <div className='car-filter-by-dropdown'>
                                        <div className="car-dropdown">
                                            <div className="car-dropdown-btn" onClick={(e) => setIsActiveMin(!isActiveMin)}>
                                                {selectedMin}
                                                <FontAwesomeIcon icon={faCaretDown} className="angle-down-icon" />

                                            </div>
                                            {isActiveMin && (
                                                <div className='car-dropdown-content'>
                                                    {carModels.map((model, index) => {

                                                        return (

                                                            <div className="car-dropdown-item" key={index}
                                                                onClick={
                                                                    (e) => {
                                                                        setSelectedMin(model)
                                                                        setIsActiveMin(false)
                                                                    }

                                                                }>
                                                                {model}
                                                            </div>)

                                                    })}

                                                </div>

                                            )}

                                        </div>

                                    </div>


                                    <div className="car-button-search">

                                        <button className="car-search">
                                            Search for this Vehicle
                                        </button>
                                        <FontAwesomeIcon icon={faAngleRight} className="car-angle-icon" />

                                    </div>


                                </div>
                            </div>



                        </div>


                    </div>
                </div>
            </div>


            <Footer />


        </div >
    );
};

export default Cars;