import React from "react";
import memeLogo from "../Images/meme.jpg";

export default function Navbar(){
    return (
        <div className="navbar">
            <div className="navbarleftcontainer">
               <img  src={memeLogo} className="navbarHeaderLogo">
               </img>
               <div className="navbarTitle">Meme Generator</div>
            </div>
            <div className="navbarRight"> Project - 5</div>
        </div>
    )
}