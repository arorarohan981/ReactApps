import React from 'react';
import './Footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkdeln from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer-Container">
        <hr/>
        <div className="footer">
            <div className="social-links">
            <img src={Github} alt=""/>
            <img src={Instagram} alt=""/>
            <img src={Linkdeln} alt=""/>
            </div>
        <div className="logo-f">
            <img src={Logo}/>
        </div>
        </div>
    </div>
  )
}

export default Footer