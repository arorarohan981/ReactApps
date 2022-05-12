import React from "react";
import katieZaferesimg from "../Images/katieZaferes.png";
// import soldoutImage from "../Images/soldoutImage.png";
import stariconImage from "../Images/staricon.jpg";
import soldoutImage from "../Images/soldoutImage.png";

export default function Card(props) {
 let badgetext
 if(props.item.openSpots===0){
     badgetext=true
 }
    return (
        <div className="card-container">
            <img src={katieZaferesimg} className="cardImage">
            </img>
            {badgetext &&<img src={soldoutImage} className="innerCardImage">
            </img>}
            <div className="ratingTextContainer">
            <img src={stariconImage} className="stariconCard"></img>
            <div className="ratingText"> {props.item.stats.rating} </div>
            </div>
            <div className="cardHeader" >{props.item.title}</div>
            <div className="cardPricing">
               
                <b>{props.item.price}</b>
                <div>/person</div>
            </div>

        </div>
    )
}