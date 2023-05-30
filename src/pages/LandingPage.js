import React from 'react'
import Plx from "react-plx"
import { Progress } from 'reactstrap'
import background from '../assets/background.jpg'
import evelyn from '../assets/evelyn.gif'
import nguyen from '../assets/nguyen.gif'
import elmer from '../assets/elmer.gif'
// import monstar4 from '../assets/monstar4.png'


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
           <img src={background} alt="background" 
           className="background_img"
           />
         </Plx>

         <br/>
         <br/>
         <br/>
           
         <div className="web-features">
           <h1 className='web-features-h1'>SLAM-A-JAMZ</h1> 
          <h2 className='web-features-h2'>Web App Features</h2>
          <p>What is Slam A  Jamz? Have you ever wanted to track your favorite artist and the venues they are preforming at or at or as an artist want more control and exposure over the promotion of your music?  Here at Slam A Jamz we offer a range of tools to allow artists the ability to market and promote their upcoming concerts and tours.  Artists can also manage their existing shows, create new show postings, and remove old show content.  As a fan based user, you can view a list of your favorite artist's upcoming releases.</p>
        </div>

        <div className="concert-envy-meter">
        <h2 className='concert-envy-meter-h1'>Concert Envy Meter</h2>
          <Progress
            animated
            className="my-3"
            value="75"
          /> 
          <p>Fans can also share their experience by engaging in our applications Concert Envy Meter.  The FOMO is real and your better off being there live.</p>
        </div>

        <div className='dev-team'>
          <h2 className='pages-h1-h2-h4'>Who is FAN*C</h2>
          <div className='dev-container'>
            <div className='dev'>
              <img src={evelyn} alt="pic1" className='dev-image1'/>
            </div>
            <div className='dev'>
              <img src={nguyen} alt="pic2" className='dev-image2'/>
            </div>
            <div className='dev'>
              <img src={elmer} alt="pic3" className='dev-image3'/>
            </div>
            <div className='dev'>
              {/* <img src={monstar4} alt="pic4" className='dev-image'/> */}
            </div>
          </div>
        </div>
           
           <div className="Fanc">
           </div>
         


    </> 
  ) 
}

export default LandingPage
