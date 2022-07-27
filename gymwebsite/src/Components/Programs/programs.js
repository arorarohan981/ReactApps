import React from 'react'
import "./program.css";
import {programsData} from '../../data/programsData.js';
import RightArrow from '../../assets/rightarrow.png'
import {Link} from 'react-scroll';

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">Explore Our</span>
            <span>Programs</span>
            <span className="stroke-text">To Shape You</span>
        </div>
        <div className="program-categories">
            {programsData.map((program ,i )=>(
                <div className="category" key={i}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>
                            <Link to='join-us'
                                span={true}
                                smooth={true}
                            >Join Now
                            </Link></span>
                            <img src={RightArrow}></img>
                        </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Programs