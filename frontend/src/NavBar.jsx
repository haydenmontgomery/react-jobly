import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
      <Navbar expand="md" bg="secondary" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="">
            <NavLink to="/" className="navbar-brand text-white">
              Jobly
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        {/* Need some authentication to change it up and add the job links */}
        <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <NavLink to="/auth/login" className="text-white mx-2">Login</NavLink>
              </Navbar.Text>
              <Navbar.Text>
                <NavLink to="/auth/signup" className="text-white mx-2">Sign Up</NavLink>
              </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;