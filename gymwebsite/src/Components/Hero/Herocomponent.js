import React from 'react'
import './herocomponent.css'
import '../Header/Header'
import '../../App.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.webp';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';

const Herocomponent = () => {

  const transition={type:'spring',duration:3};
  const mobile = window.innerWidth<=768 ? true :false;
  return (
    <div className='hero'>
      
      <div className="left-hero">
        <Header />
        <div className="the-best-ad">
          <motion.div
          initial={{left:mobile?'165px':'230px'}}
          whileInView={{left: '6px'}}
          transition={{...transition,type:'tween'}}
          ></motion.div>
          <span>Best Fitness Club in the Town</span>
        </div>

        <div className="heroHeading">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY </span>

          </div>
          <div >
            <span>
              IN HERE WE WILL HELP TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
            <NumberCounter end={30} start={0} delay={4} preFix="+"/>
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={1000} start={0} delay={4} preFix="+"/>
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={0} delay={4} preFix="+"/>
            </span>
            <span>Fitness Programs</span>
          </div>
        </div>

        <div className="herobuttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>

      </div>
      <div className="right-hero"> 
        <button className="btn">
        Join Now
        </button>
        <motion.div 
        transition={transition}
        initial={{right:"-0.8rem"}}
        whileInView={{right:"4rem"}}
        className="heart-rate">
          <img src={Heart} alt=""></img>
          <span>
            Heart Rate
          </span>
          <span>
            116 Bpm
          </span>
        </motion.div>
       <img src={hero_image} className="hero-image"></img>
       <motion.div 
       transition={transition}
       initial={{right:"48rem"}}
       whileInView={{right:"40rem"}}
       className="calories">
          <img src={Calories} alt=""/>
          <div>
          <span>Calories Burned </span>
          <span>220 kcal</span>
          </div>
       </motion.div>
       </div>
   
    </div>
  )
}

export default Herocomponent