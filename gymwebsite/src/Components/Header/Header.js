import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} className="logo"></img>
            <ul className="headermenu">
                <li>
                    Home
                </li>
                <li>
                    Programs
                </li>
                <li>
                    Why Us
                </li>
                <li>
                    Plans
                </li>
                <li>
                    Testimonials
                </li>
            </ul>
        </div>
    )
}

export default Header