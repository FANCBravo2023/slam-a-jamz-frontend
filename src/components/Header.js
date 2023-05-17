import React from 'react'
import SJLive from '../assets/SJLive.jpg'

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={ SJLive } alt='Slam-A-Jamz Logo' className='Logo'/>
        <div className="header_button_containers">
          <button className="header_buttons">Sign In</button>
          <button className="header_buttons">Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default Header
