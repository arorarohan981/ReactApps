import React from 'react'
import "./testimonial.css";
import { testimonialsData } from '../../data/testimonialsData';
import {motion} from 'framer-motion';

const Testimonial = () => {

    const [selected, setselected] = React.useState(0);
    const transition={type:'spring',duration:3};
    const testimonialslength = testimonialsData.length;
    return (
        <div className="testimonial" id="testimonials">
            <div className="left-t">
                <span className="stroke-text" style={{color:"yellow"}}>Testimonials</span>
                <span className="stroke-text">What They</span>
                <span>Say About Us</span>
                <motion.span
                key={selected}
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:100}}
                transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span className="stroke-text" style={{fontSize:"1.5rem",fontWeight:"bold",color:"yellow"}}>
                        {testimonialsData[selected].name}
                    </span>
                    {" "}- {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                initial={{opacity:0,x:-100}}
                transition={{...transition,duration:2}}
                whileInView={{opacity:1,x:0}}></motion.div>
                <motion.div
                initial={{opacity:0,x:100}}
                transition={{...transition,duration:2}}
                whileInView={{opacity:1,x:0}}>
                </motion.div>
                <motion.img 
                key={selected}
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                transition={transition}
                src={testimonialsData[selected].image} />
                <div className="arrows">
                    <p onClick={() => selected == 0 ? setselected(testimonialslength - 1) : setselected((prev) => prev - 1)}>&#8592;</p>
                    <p onClick={() => selected == testimonialslength-1 ? setselected(0) : setselected((prev) => prev + 1)}>&#8594;</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial