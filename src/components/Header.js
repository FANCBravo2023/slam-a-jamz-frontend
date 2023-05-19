import React from 'react'
import SJLive from '../assets/SJLive.jpg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header">
        <NavLink to='/home'>
          <img src={ SJLive } alt='Slam-A-Jamz Logo' className='Logo'/>
        </NavLink>
        <div className="header_button_containers">
          <NavLink to ='/signin'>
            <button className="header_buttons">Sign In</button>
          </NavLink>
          <NavLink to='/signup'>
            <button className="header_buttons">Sign Up</button>
          </NavLink>        
          </div>
      </div>
    </>
  )
}

export default Header
