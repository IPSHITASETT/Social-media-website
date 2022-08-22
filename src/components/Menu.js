import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Menu = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>MonkeyKart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default Menu
