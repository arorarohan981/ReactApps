import React from 'react'
import './plan.css';
import { plansData } from '../../data/plansData';
import whitetick from '../../assets/whiteTick.png';
import { Link } from 'react-scroll';

const Plans = () => {
    return (
        <div className="plans-container" id="plans">
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
                                <div className="feature" key={i}>
                                    <img src={whitetick}></img>
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className='btn'>
                            <Link to='join-us'
                                span={true}
                                smooth={true}
                            >
                                Join Now
                            </Link></button>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Plans