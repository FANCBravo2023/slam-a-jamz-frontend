import React from 'react'
import Plx from "react-plx"
import { NavLink } from 'react-router-dom'
import background from '../assets/background.jpg'
import monstar1 from '../assets/monstar1.png'
import monstar2 from '../assets/monstar2.png'
import monstar3 from '../assets/monstar3.png'
import monstar4 from '../assets/monstar4.png'


const LandingPage = () => {
  return (
    <>

        <Plx
           className='plx1'
             parallaxData={[
               {
                 start: 0,
                 end: 200,
                 properties: [
                   {
                     startValue: 0,
                     endValue: 1,
                     property: "opacity"
                   }
                 ]
               },
               {
                 start: 0,
                 end: 200,
                 properties: [
                   {
                     startValue: .9,
                     endValue: 1.05,
                     property: "scale"
                   }
                 ]
               }]
             }
           >
           {/* <div className="wrapper">
             <div className="neon-wrapper">
               <span className="text" >fan*c</span>
               <span className="gradient"></span>
               <span className="dodge"></span>
             </div>
           </div> */}
           <img src={background} alt="background" 
           className="background_img"
           />
         </Plx>

         <br/>
         <br/>
         <br/>
           
         <div className="web-features">
           <h1>SLAM-A-JAMZ</h1> 
           <NavLink
             className="upcoming-events"
             to={`/eventindex/`}>
             <button>Upcoming Events</button> 
           </NavLink>
          <h2>Web App Features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="concert-envy-meter">
          <h2>Concert Envy Meter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className='dev-team'>
          <h2>Who is FAN*C</h2>
          <div className='dev-container'>
            <div className='dev'>
              <img src={monstar1} className='dev-image'/>
              <h4>Project Manager</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  </p>
            </div>
            <div className='dev'>
              <img src={monstar2} className='dev-image'/>
              <h4>Product Manager</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  </p>
            </div>
            <div className='dev'>
              <img src={monstar3} className='dev-image'/>
              <h4>Tech Lead</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
            </div>
            <div className='dev'>
              <img src={monstar4} className='dev-image'/>
              <h4>Design Lead</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
            </div>
          </div>
        </div>
           
           <div className="Fanc">
           </div>
         


    </> 
  ) 
}

export default LandingPage
