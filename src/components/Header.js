import SJLive from "../assets/SJLive.jpg"
import Home from "../assets/Home.jpg"
import Events from "../assets/Events.jpg"
import SignIn from "../assets/SignIn.jpg"
import SignUp from "../assets/SignUp.jpg"
import Create from "../assets/Create.jpg"
import MyEv from "../assets/MyEv.jpg"
import SignOut from "../assets/SignOut.jpg"
import React, { useState } from 'react'
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button} from "reactstrap"
import { NavLink as RRNavLink } from "react-router-dom"


const Header = ({currentUser, logout}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
    <Navbar expand='lg' className='shadow-lg' sticky="top" >
      <NavbarBrand tag={RRNavLink} to="/">
        <img src={SJLive} alt="Slam-a-Jamz Logo" className="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} color="white"/>
          <Collapse isOpen={isOpen} navbar color="light">
            <Nav className='ms-auto' navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to='/' >
                <img src={Home} alt="Home button " className="Home"  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to='/eventindex' >
                <img src={Events} alt="events button " className="Events" />
                </NavLink>
              </NavItem>
              {currentUser ? (
                <>
                  <NavItem>
                    <NavLink tag={RRNavLink} to='/eventnew' >
                    <img src={Create} alt="Create button " className="Create" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to='/myevents' >
                    <img src={MyEv} alt="My Events button " className="MyEv" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="logout-button" tag={RRNavLink} to="/">   
                      onClick={logout}
                       <img src={SignOut} alt="SO button " className="SignOut" />
                      
                    </NavLink>
                  </NavItem>
                </>
                ) : (
                <>
                  <NavItem>
                    <NavLink tag={RRNavLink} to='/login' >
                    <img src={SignIn} alt="Sign In button " className="SignIn" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to='/signup' >
                    <img src={SignUp} alt="Sign Up button " className="SignUp" />
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
      
    </Navbar>
      </>
  )
}

export default Header
