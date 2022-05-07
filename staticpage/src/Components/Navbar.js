import React from "react";
import logo from '.././logo.svg';

export default function Navbar(){
    return(
        <div className="navbarContainer">
            <div className="navbarbrand">
                <img src={logo} className="logoImage"></img>
                <h1 className="NavbarBrandText">ReactFacts</h1>
            </div>
        
        <h1 className="NavbarText">React Basic Project 1</h1>
        </div>
    )
}