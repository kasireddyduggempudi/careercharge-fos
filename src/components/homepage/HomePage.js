import React, { useState } from "react";
import { Container, Row, Col, Button, Form} from "react-bootstrap";
import RestClient from '../../services/RestClient'
const HomePage = () => {

    const [counsellingRequest, setCounsellingRequest] = useState({});
    const [apiMessage, setApiMessage] = useState(null);

    const handleCounsellingFormChange = (event, field) => {
        setCounsellingRequest({...counsellingRequest, [field]: event.target.value});
    }

    const handleSubmit  = (event) => {
        console.log("handling submit");
        event.preventDefault();
        event.target.reset();
        setApiMessage("Submitting....");
        RestClient.doPost('careerCounsellingRequests', counsellingRequest)
        .then(response => {
            if(response.status === 200) {
                console.log(response);
                setCounsellingRequest({});
                setApiMessage("Great!! Our expert will contact you soon!!");
            }
        })
        .catch(err => {
            console.log(err);
            setApiMessage("Something went wrong. Please try again");
        })
        setTimeout(() => {
            setApiMessage(null);
        }, 5000);
    }

    return (
        <>
            {/* for full -> use fluid */}
            <Container style={{marginTop: '100px'}} >
                <Row>
                    <Col style={{maxWidth: '440px', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}} sm={{span: 12}}>
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
                    <Col style={{maxWidth: '440px', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}} sm={{span: 12}}>
                        <h4>&nbsp;&nbsp;&nbsp;Register for Free Career Counselling</h4><hr />
                        <Form className="pr-10" onSubmit={handleSubmit} style={{border: "0px solid gray", padding: '10px', borderRadius: '5px', marginTop: '-20px'}}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" onChange={e => handleCounsellingFormChange(e, "name")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="number" placeholder="Contact Number" onChange={e => handleCounsellingFormChange(e, "phoneNumber")}/>
                                <Form.Text className="text-muted">
                                    We'll never share your phone number with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={e => handleCounsellingFormChange(e, "email")} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEduation">
                                <Form.Label>Education</Form.Label>
                                <Form.Control type="text" placeholder="Education" onChange={e => handleCounsellingFormChange(e, "education")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCollegeName">
                                <Form.Label>College Name</Form.Label>
                                <Form.Control type="text" placeholder="College Name" onChange={e => handleCounsellingFormChange(e, "collegeName")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" style={{fontSize: '12px'}} label="I Agree to terms and conditions of CareerCharge" />
                            </Form.Group>
                            {apiMessage && <p style={{paddingBottom: '0px'}}>
                                    {apiMessage}
                                </p>
                            }
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