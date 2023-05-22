import React from 'react'
import Plx from "react-plx"
import { NavLink } from 'react-router-dom'
import background from "../assets/background.jpg"

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
        <div className="wrapper">
          <div className="neon-wrapper">
            <span className="txt" >fan*c</span>
            <span className="gradient"></span>
            <span className="dodge"></span>
          </div>
        </div>
        <img src={background} alt="background" 
        className='background_img'
        />
      </Plx>
      <br/>
      <br/>
      <br/>

      <div className="Home">
        <h1>SLAM A JAMZ</h1> 
          
        <NavLink
          to={`/eventindex/`}>
          <button>Upcoming Shows</button> 
        </NavLink>

        <div className="features">

        </div>
          <div className="concert_envy_meter">

          </div>
        <div className="Fanc">

        </div>
      </div>
    </>

  
  ) 
}

export default LandingPage
