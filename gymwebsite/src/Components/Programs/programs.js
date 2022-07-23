import React from 'react'
import "./program.css";
import {programsData} from '../../data/programsData.js';
import RightArrow from '../../assets/rightarrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">Explore Our</span>
            <span>Programs</span>
            <span className="stroke-text">To Shape You</span>
        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow}></img>
                        </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Programs