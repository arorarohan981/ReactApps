import React from "react";
import HeroImage from "../Images/HeroImage.png";


export default function HeroComponent()
{
return (
    <section className="hero-container">
        <img src={HeroImage} className="hero-image"></img>
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-text">Join Unique Interactive activites led by</p>
        <p className="hero-text">one-of-a-kind hosts-all without leaving</p>
        <p className="hero-text">home.</p>
    </section>
)
}