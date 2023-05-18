import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Clients/navbar.css';
import { Navbar, Nav } from 'react-bootstrap';




function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" className="py-4 px-lg-5 sticky-top">
      <Navbar.Brand href="/">
        <img src="/images/BIZZ_NAME_LOGO.png" alt="Logo" style={{width:'80%'}}className="img-fluid" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <a href="/" className="mr-lg-5 font-size-18" style={{color:"#1A3B7D", fontFamily: "Lato SemiBold"}}>Home</a>
          <a href="#our-product" className="mr-lg-5 font-size-18" style={{color:"#1A3B7D", fontFamily: "Lato SemiBold"}}>Our Product</a>
          <a href="#contact-us" className="mr-lg-5 font-size-18" style={{color:"#1A3B7D", fontFamily: "Lato SemiBold"}}>Contact Us</a>
          <a href="/login" className="mr-lg-5 font-size-18" style={{color:"#1A3B7D", fontFamily: "Lato SemiBold"}}>Login</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;