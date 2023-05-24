import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink, useNavigate, Button } from "react-router-dom";

const Navigation = ({ currentUser, logout }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <Nav className="nav justify-content-left">
        {currentUser && (
          <>
            <NavItem>
              <NavLink to="/myevents" className="nav-link">
                My event listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/eventnew" className="nav-link">
                Create Event Listing
              </NavLink>
            </NavItem>
            <NavItem>
              <Button className="logout-button" onClick={handleClick}>
                Logout
              </Button>
            </NavItem>
          </>
        )}
        {!currentUser && (
          <>
            <NavItem>
              <NavLink to="/eventindex" className="nav-link">
                See More Details
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signin" className="nav-link">
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">
                Sign Up
              </NavLink>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </>
  );
};

export default Navigation;
