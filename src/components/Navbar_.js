import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navbar_() {
  const navItemsStyle = {
    marginLeft: 'auto',
  };

  return (
    <Navbar bg="light" shadow="lg" expand="lg" className="pavan" fixed="top">
      <Navbar.Brand href="/home">home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={navItemsStyle}>
          <Nav.Link href="/food">Food</Nav.Link>
          <Nav.Link href="/sport">Sport</Nav.Link>
          <Nav.Link href="/movie"> <i className="bi bi-film"></i> Movie</Nav.Link>
          <Nav.Link href="/">LogOut</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar_;

// npm install react-bootstrap bootstrap
