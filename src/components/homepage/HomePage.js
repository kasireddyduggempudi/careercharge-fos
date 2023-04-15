import React from "react";
import { Container, Row, Col, Button, Form} from "react-bootstrap";
const HomePage = () => {
    return (
        <>
            {/* for full -> use fluid */}
            <Container style={{marginTop: '100px'}} >
                <Row>
                    <Col style={{maxWidth: '440px', marginLeft: '00px', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}} sm={{span: 12}}>
                        <h1 style={{lineHeight: "72px"}}>
                            <span style={{fontFamily: "Spectral", fontWeight: "bold", fontStyle: "normal", fontSize: "64px", letteSpacking: "-1%"}}>
                                <span>Take Charge of your Career</span>
                            </span>
                        </h1>
                        <p>
                        Join us learning trending tech stack live online with industry experts on real time problems. You are click away from taking charge of your career!
                        </p>

                        <Row style={{fontFamily: 'bold'}}>
                            <Col>
                                * Live Classes
                            </Col>
                            <Col>
                                * Quick Doubt Solving
                            </Col>
                        </Row>
                        <Row style={{fontFamily: 'bold'}}>
                            <Col>
                                * Skilled Community
                            </Col>
                            <Col>
                                * 100% Placement Support
                            </Col>
                        </Row>
                        <Row style={{fontFamily: 'bold'}}>
                            <Col>
                                * Real-time Projects
                            </Col>
                            <Col>
                                * Assignments
                            </Col>
                        </Row>
                        <Button variant="secondary" size="md" active style={{marginTop: '40px'}}>
                            Get Started
                        </Button>
                    </Col>
                    {/* <Col></Col> */}
                    <Col style={{maxWidth: '400px', marginLeft: '0px', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}} sm={{span: 12}}>
                        <h4>&nbsp;&nbsp;&nbsp;Register for Career Counselling</h4><hr />
                        <Form className="pr-10" style={{border: "0px solid gray", padding: '10px', borderRadius: '5px', marginTop: '-20px'}}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="number" placeholder="Contact Number" />
                                <Form.Text className="text-muted">
                                    We'll never share your phone number with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Education</Form.Label>
                                <Form.Control type="text" placeholder="Education" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>College Name</Form.Label>
                                <Form.Control type="text" placeholder="Education" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" style={{fontSize: '12px'}} label="I Agree to terms and conditions of CareerCharge" />
                            </Form.Group>
                            <Button variant="secondary" size="lg" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage;