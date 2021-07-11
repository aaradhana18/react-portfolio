import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function NavbarTop() {
    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"> My Portfolio </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            
        </div>
    )
}

export default NavbarTop;
