import React from 'react'
import Link from 'next/link'

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function Header() {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Arrows">Arrows</Nav.Link>
            <Nav.Link href="/Accessories">Accessories</Nav.Link>
            <Nav.Link href="/Boots">Boots</Nav.Link>
            <Nav.Link href="/Cloaks">Cloaks</Nav.Link>
            <Nav.Link href="/Helmet">Helmets</Nav.Link>
            <Nav.Link href="/Potions">Potions</Nav.Link>
            <Nav.Link href="/Rings">Rings</Nav.Link>
            <Nav.Link href="/Staffs">Staffs</Nav.Link>
            <Nav.Link href="/Quivers">Quivers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
