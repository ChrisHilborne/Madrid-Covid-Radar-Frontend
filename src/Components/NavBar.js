import React from 'react';
import { Container, Navbar , Nav } from 'react-bootstrap';

const NavBar = () => {
    return(
        <>
        <Container fixed="top" >
            <Navbar className="navbar d-flex align-items-start" variant="dark" expand="lg">
                <Navbar.Brand>Covid Radar Madrid</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Cifras</Nav.Link>
                        <Nav.Link href="info">Info</Nav.Link>
                        <Nav.Link href="contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </>
    );
}

export default NavBar