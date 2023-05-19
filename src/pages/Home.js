import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
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

export default Home