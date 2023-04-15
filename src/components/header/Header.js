import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            {/* bg="dark" variant="dark" */}
            <Navbar collapseOnSelect expand="lg" fixed="top" style={{backgroundColor: 'white'}}>
            <Container>
                <Navbar.Brand href="#home">CareerCharge</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#pricing">Courses</Nav.Link>
                    <Nav.Link href="#pricing">Community</Nav.Link>
                    <Nav.Link href="#features">About Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Blog</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Contact
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default Header;