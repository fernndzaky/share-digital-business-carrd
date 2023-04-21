import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Clients/navbar.css';
import { Navbar, Nav } from 'react-bootstrap';




function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" className="py-3 px-lg-5 sticky-top">
      <Navbar.Brand href="/">
        <img src="/images/MewCom_Text_Logo.png" alt="Logo" height="40" className="img-fluid" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="mr-lg-5 font-size-24" style={{color:"#864A8F", fontFamily: "Dosis SemiBold"}}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="mr-lg-5 font-size-24" style={{color:"#864A8F", fontFamily: "Dosis SemiBold"}}>
            Company
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="mr-lg-5 font-size-24" style={{color:"#864A8F", fontFamily: "Dosis SemiBold"}}>
            Our Product
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="mr-lg-5 font-size-24" style={{color:"#864A8F", fontFamily: "Dosis SemiBold"}}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;