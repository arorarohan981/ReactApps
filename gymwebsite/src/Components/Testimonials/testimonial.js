import React from 'react'
import "./testimonial.css";
import { testimonialsData } from '../../data/testimonialsData';
import leftarrow from '../../assets/leftArrow.png';
import rightarrow from '../../assets/rightarrow.png';


const Testimonial = () => {

    const [selected, setselected] = React.useState(0)
    const testimonialslength = testimonialsData.length;
    return (
        <div className="testimonial">
            <div className="left-t">
                <span className="stroke-text" style={{color:"yellow"}}>Testimonials</span>
                <span className="stroke-text">What They</span>
                <span>Say About Us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span className="stroke-text" style={{fontSize:"1.5rem",fontWeight:"bold",color:"yellow"}}>
                        {testimonialsData[selected].name}
                    </span>
                    {" "}- {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} />
                <div className="arrows">
                    <p onClick={() => selected == 0 ? setselected(testimonialslength - 1) : setselected((prev) => prev - 1)}>&#8592;</p>
                    <p onClick={() => selected == testimonialslength-1 ? setselected(0) : setselected((prev) => prev + 1)}>&#8594;</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial