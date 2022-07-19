import React from "react";
import logo from '.././logo.svg';

export default function Navbar(props) {

   const backgroundstyles = {
       backgroundColor: props.color ? 'white':'black'
   }
   const ToggleButtonColor = {
       color: props.color ? 'white':'black'
       ,
       backgroundColor: props.color ? 'black' : 'white'
   }

   const buttonColor={
       backgroundColor: props.color ? 'black':'white'
   }
    

    function togglemode() {
        props.toggleColor();
    }

    return (
        <div className="navbarContainer" style={backgroundstyles}>
            <div className="navbarbrand" style={backgroundstyles}>
                <img src={logo} className="logoImage" style={backgroundstyles}></img>
                <h1 className="NavbarBrandText" style={backgroundstyles}>ReactFacts</h1>
            </div>

            <button className="toggleButton" style={buttonColor} onClick={() => togglemode()}>
                <div className="buttonText" style={ToggleButtonColor}>{props.color ? 'Light Mode':'Dark Mode'}
                </div>
            </button>

        </div>
    )
}