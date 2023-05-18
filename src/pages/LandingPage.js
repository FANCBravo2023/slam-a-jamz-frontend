import React from 'react'
import Plx from "react-plx"
import background from "../assets/background.jpg"

const LandingPage = () => {
  return (
<div>
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
        
        <img src={background} alt="background" 
        className='background_img'
        />
        <div className="wrapper">
          <div className="neon-wrapper">
            <span className="txt" >fan*c</span>
            <span className="gradient"></span>
            <span className="dodge"></span>
          </div>
        </div>
      </Plx>
    </div>
  ) 
}

export default LandingPage
