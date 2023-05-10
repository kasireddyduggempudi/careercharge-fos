import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import careerChargeLogo from '../../resources/career-charge-logo.png';

const Header = () => {
    return (
        <>
            {/* bg="dark" variant="dark" */}
            <Navbar collapseOnSelect expand="lg" fixed="top" style={{backgroundColor: 'white'}}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={careerChargeLogo} width="30px" height={"25px"} style={{marginTop: "-5px"}}/> CareerCharge
                    {/* https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#courses">Courses</Nav.Link>
                    <Nav.Link href="/">Community</Nav.Link>
                    <Nav.Link href="#about-us">About Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/blog">Blog</Nav.Link>
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