import React from 'react';
import { useState } from "react";
import LuxoticaLogo from '../../assests/images/LuxoticaLogo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MenuItems } from './NavbarData';
import './Navbar.css';


const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);

    }
    return (
        <>
            <nav className='NavbarItems'>
                <img className="navbar-logo" src={LuxoticaLogo} alt='official-logo' width='230px' height='55px' />
                {/* <span className = "navbar-logo">LuxoticaLogo</span> */}
            
            <div className='menu-icon' onClick={handleClick}>
                {clicked ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems && MenuItems.map((item, index) => {
                    return (
                        <>
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                        
                        
                       
                        </>

                    )
                })}
            </ul>
            <div className = 'buttons'>
                <div className = "account-button">
                    <button className = 'account'>Sign Up</button>
                </div>
                <div className = "account-button">
                    <button className = 'account'>Log In</button>
                </div>
            </div>
            
            </nav>

        </>

    );
};

export default Navbar;