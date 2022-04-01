import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import logo from '../images/catology.jpg'
import { 
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col
} from 'react-bootstrap';

export default function Header() {

  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <div className="d-flex justify-content-between">
          <Navbar.Brand href="/">
            {/* Catology */}
            <img src={logo} alt="Catology" width='40%'/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
