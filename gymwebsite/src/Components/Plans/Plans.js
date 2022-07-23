import React from 'react'
import './plan.css';
import { plansData } from '../../data/plansData';
import whitetick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="programs-header">
                <span className="stroke-text">READY TO START </span>
                <span>YOUR JOURNEY </span>
                <span className="stroke-text">NOW WITHUS</span>
            </div>
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>Rs {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whitetick}></img>
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>
                                See More Benefits -> 
                            </span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Plans