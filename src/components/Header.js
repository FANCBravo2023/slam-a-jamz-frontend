import SJLive from '../assets/SJLive.jpg'
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // Button,
} from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'


const Header = ({ current_user }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <Navbar expand='lg' className='shadow-lg' sticky="top" >
      {/* <div className="header"> */}
        <NavbarBrand tag={RRNavLink} to='/'>
          <img src={ SJLive } alt='Slam-A-Jamz Logo' className='Logo'/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} color="white"/>
          <Collapse isOpen={isOpen} navbar color="light">
            <Nav className='ms-auto' navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to='/' className='text-white'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to='/eventindex' className='text-white'>
                  Events
                </NavLink>
              </NavItem>
              {current_user ? (
                <>
                  <NavItem>
                    <NavLink tag={RRNavLink} to='/eventnew' className='text-white'>
                      Create Show Listing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to='/protectedindex' className='text-white'>
                      My Event Listings
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <Button 
                    color='danger'
                    onClick={logout}
                    >
                      Logout
                    </Button>
                  </NavItem> */}
                </>
                ) : (
                <>
                  <NavItem>
                    <NavLink tag={RRNavLink} to='/login' className='text-white'>
                      Sign In
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to='/signup' className='text-white'>
                      Sign Up
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
      {/* </div> */}
    </Navbar>
    </>
  )
}

export default Header
