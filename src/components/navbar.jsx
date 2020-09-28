import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="">ICrowdTask</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="">How it works</Nav.Link>
                    <Nav.Link href="">Requesters</Nav.Link>
                    <Nav.Link href="">Workers</Nav.Link>
                    <Nav.Link href="">Pricing</Nav.Link>
                    <Nav.Link href="">About</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-success">Sign in</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
