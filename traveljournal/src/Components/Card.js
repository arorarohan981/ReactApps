import React from "react";
import japan from "../Images/japan.jpg";
import india from "../Images/India.jpg";
import australia from "../Images/Australia.jpg";



export default function Card(props){
    let image ;
    if(props.id===1){
        image=japan;
    }else if(props.id===2){
        image=india;
    }else{
        image=australia;
    }

return (
 <div className="cardContainer">
     <img src={image} className="cardImage"></img>
     <div className="cardDetailscontainer">
        <div className="cardlocation">
            <div className="cardcountry">📍{props.country}</div>
            <a  className="cardLoc" href={props.mapsLink}>
            <u>View on Google Maps</u>
            </a>
        </div>
        <div className="locationName">
            {props.placeName}
        </div>
        <div className="datestamp">
            {props.dateVisited}
        </div>
        <div className="placeDesc">
            {props.placeDescription}
        </div>
     </div>
 </div>
)
}