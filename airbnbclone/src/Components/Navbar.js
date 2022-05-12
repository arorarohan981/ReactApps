import React from "react";
import AirbnbLogo from "../Images/Airbnb_Logo.png";

export default function Navbar(){
    return (
        <div className="navbar-container">
            <img src={AirbnbLogo} className="navbar-logo"></img>
        </div>
    )
}