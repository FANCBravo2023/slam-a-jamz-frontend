import SJLive from "../assets/SJLive.jpg"
import Home from "../assets/Home.jpg"
import Events from "../assets/Events.jpg"
import SignIn from "../assets/SignIn.jpg"
import SignUp from "../assets/SignUp.jpg"
import Create from "../assets/Create.jpg"
import MyEv from "../assets/MyEv.jpg"
import SignOut from "../assets/SignOut.jpg"
import mp3 from "../assets/mp3.mp3"
import React from 'react'
import {  
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  } from "reactstrap"
import { useNavigate , NavLink} from "react-router-dom"

const Header = ({currentUser, logout}) => {
   const navigate = useNavigate()
  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <>
    <Navbar expand='lg' className='shadow-lg' sticky="top" >
      <NavbarBrand  to="/">
        <img src={SJLive} alt="Slam-a-Jamz Logo" className="logo" onClick={handleClick} />
        </NavbarBrand>
       
            <Nav className='ms-auto' navbar>

            <audio controls className="mp3">
              <source src={mp3} type="audio/mpeg" />
            </audio>
              {currentUser && (
                <>
                 <NavItem>
                <NavLink  to='/eventindex' >
                <img src={Events} alt="events button " className="home-event-signIn-create" />
                </NavLink>
              </NavItem>
                  <NavItem>
                    <NavLink  to='/eventnew' >
                    <img src={Create} alt="Create button " className="home-event-signIn-create" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to='/myevents' >
                    <img src={MyEv} alt="My Events button " className="SignUp-myEvent-signOut" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                  <button  className="SignUp-myEvent-signOut"  onClick={handleClick}>
                  <img src={SignOut} alt="SO button " className="SignUp-myEvent-signOut"  />
              </button>
                  </NavItem>
                </>
                )} 
                {!currentUser &&  (
                <><NavItem>
                <NavLink  to='/' >
                <img src={Home} alt="Home button " className="home-event-signIn-create"  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  to='/eventindex' >
                <img src={Events} alt="events button " className="home-event-signIn-create" />
                </NavLink>
              </NavItem>
                  <NavItem>
                    <NavLink  to='/login' >
                    <img src={SignIn} alt="Sign In button " className="home-event-signIn-create" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  to='/signup' >
                    <img src={SignUp} alt="Sign Up button " className="SignUp-myEvent-signOut" />
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
