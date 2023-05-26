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
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
  } from "reactstrap"
import { useNavigate , NavLink} from "react-router-dom"
import { click } from "@testing-library/user-event/dist/click"


const Header = ({currentUser, logout}) => {
   const navigate = useNavigate()
  const handleClick = () => {
    console.log("click")
    logout();
    navigate("/");
  };
  return (
    <>
    <Navbar expand='lg' className='shadow-lg' sticky="top" >
      <NavbarBrand  to="/">
        <img src={SJLive} alt="Slam-a-Jamz Logo" className="Logo" />
        </NavbarBrand>
       
            <Nav className='ms-auto' navbar>
             
              {currentUser && (
                <>
                 <NavItem>
                <NavLink  to='/eventindex' >
                <img src={Events} alt="events button " className="Events" />
                </NavLink>
              </NavItem>
                  <NavItem>
                    <NavLink  to='/eventnew' >
                    <img src={Create} alt="Create button " className="Create" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to='/myevents' >
                    <img src={MyEv} alt="My Events button " className="MyEv" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <button  onClick={handleClick}>
                  <img src={SignOut} alt="SO button " className="SignOut"  />
              </button>
                  </NavItem>
                </>
                )} 
                {!currentUser &&  (
                <><NavItem>
                <NavLink  to='/' >
                <img src={Home} alt="Home button " className="Home"  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  to='/eventindex' >
                <img src={Events} alt="events button " className="Events" />
                </NavLink>
              </NavItem>
                  <NavItem>
                    <NavLink  to='/login' >
                    <img src={SignIn} alt="Sign In button " className="SignIn" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to='/signup' >
                    <img src={SignUp} alt="Sign Up button " className="SignUp" />
                    </NavLink>
                  </NavItem>
                </>
                
              )}
            </Nav>
         
      
    </Navbar>
      </>
  )
}

export default Header
