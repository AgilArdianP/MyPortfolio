import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function NavbarComponent({ darkMode, toggleDarkMode }) {
  return (
    <Navbar expand="lg" bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} className="mb-4" sticky="top">
      <Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button 
            variant={darkMode ? "light" : "dark"} 
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;