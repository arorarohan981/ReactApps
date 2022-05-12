import React from "react";
import image from "../Images/MenImage.jpg";

export default function UserDescription() {
    return (
        <div className="UserDescriptionContainer">
            <img src={image} className="UserImage"></img>
            <div className="userName">Rohan Arora</div>
            <div className="userDesignation">Frontend Developer</div>
            <a href="https://www.explorevr.in">
                <div className="userWebsite">
                    www.explorevr.in
                </div>
            </a>
            <div className="DescriptionButtons">
                <div className="buttons">
                  Button1
                </div>
                <div className="buttons">
                Button2
                </div>
            </div>
            
        </div>
    )
}