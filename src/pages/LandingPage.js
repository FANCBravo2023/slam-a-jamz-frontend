import React from 'react'
import Plx from "react-plx"
import { Progress } from 'reactstrap'
import background from '../assets/background.jpg'
import evelyn from '../assets/evelyn.gif'
import nguyen from '../assets/nguyen.gif'
import elmer from '../assets/elmer.gif'
import valeria from '../assets/valeria.gif'


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

        <div>
          <h2 className='fanc'>Who is FAN*C</h2>
          <div className='dev-container'>
            
            <div className='dev'>
              <img src={evelyn} alt="pic1" className='dev-image1'/>
              <p>Project Manager, I oversee all of the internal team communications and the project management boards. I keep the team on track about who is working on what. I create and organize the team Trello board which breaks down each step of a project. I manage the notifications to the necessary members and mentors involved in the project when a task has been completed and is moved to the "swimlane" of the Trello board. I also organize and keep our Slack account active with any updates and pin the appropriate content for a streamlined workflow. I also manage any external resources that is needed or received for the project. At the beginning of each day, I give an overview of what was completed the previous day, any updates or progress made, current objectives we will work on and any future goals that we are aiming to complete.</p>
            </div>
            <div className='dev'>
              <img src={nguyen} alt="pic2" className='dev-image2'/>
              <p>Product Manager, I oversee the big-picture of our application. I ensure that we meet all of the requirements that we need included in the project and provide support to the team while navigating on how to keep the team unblocked for a smooth workflow. I also help to manage conversations around large changes to the application and make sure that a README file has all of the necessary information. At the end of each day, we review any progress, updates and blockers that was worked on or needs to be focused on.</p>
            </div>
            <div className='dev'>
              <img src={elmer} alt="pic3" className='dev-image3'/>
              <p>Tech Lead and Anchor, I take responsibility over the code base and version control of the project. I oversee the technical needs and create the wireframe for the project.  I also manage the Github and merge requests when tasks are completed. Part of being Tech Lead, my understanding of all technical aspects of the code for the application allows me tyo mentor other team members and help with any blockers.  I present any technical blockers at the beginning of each day and make suggestions on how we can get past them.</p>
            </div>
            <div className='dev'>
              <img src={valeria} alt="pic4" className='dev-image4'/>
              <p>Design Lead, make decisions on the overall look, color scheme, and branding of the project. I possess a good  understanding of the UI/UX needs of the application and the look of wireframes. A lead designer oversees the color schemes and implementation of branding that will be used for the project. I ensure our application provides a streamlined navigation for user experience. I also search across many styling libraries, responsive design tools, and accessibility features that is needed for the project. At the end of each day, I share any user status updates, design features progress and any future design goals that we have worked on.</p>
            </div>
          </div>
        </div>
           
           <div className="Fanc">
           </div>
         


    </> 
  ) 
}

export default LandingPage
