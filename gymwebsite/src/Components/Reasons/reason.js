import React from 'react'
import './reason.css'
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';





const Reason = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1}></img>
                <img src={image2}></img>
                <img src={image3}></img>
                <img src={image4}></img>
            </div>
            <div className="right-r">
                <span>Some Reasons</span>
                <div>
                    <span className="stroke-text">Why </span>
                    <span>Choose Us</span>
                </div>
                <div className="details-r">
                    <div><img src={tick}></img><span>OVER 50+ EXPERT COACHES</span></div>
                    <div><img src={tick}></img><span>TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
                    <div><img src={tick}></img><span>1 MONTH FREE PERSONAL TRAINING FOR NEW MEMBERS</span></div>
                    <div><img src={tick}></img><span>RELIABLE PARTNERS</span></div>
                </div>
                <span style={{fontWeight:'normal'}}>OUR PARTNERS</span>
                <div className="partners">
                    <img src={nb}></img>
                    <img src={adidas}></img>
                    <img src={nike}></img>
                </div>
            </div>
        </div>
    )
}

export default Reason