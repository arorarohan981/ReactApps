import React from 'react';
import {images} from '../../constants';
import SubHeading from "../../components/SubHeading/SubHeading";
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the New Flavour"/>
      <h1 className="app__header-h1">The Key To Fine Dining </h1>
      <p className="p__opensans" style={{ margin : '2rem 0'}}> Experience the Flavours and Hospitality of Germany</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__header-img">
      <img src={images.welcome} alt='Header Image'/>
    </div>
    
  </div>
);

export default Header;
