import Header from "../../components/header/Header";
import { Container, Row, Col, Button, Form} from "react-bootstrap";
import { useState } from "react";
import RestClient from "../../services/RestClient";
import './ContactUs.css';

function ContactUs() {

    const [contactUsQuery, setContactUsQuery] = useState({});
    const [apiMessage, setApiMessage] = useState(null);

    const handleContactUsFormChange = (event, field) => {
        setContactUsQuery({...contactUsQuery, [field]: event.target.value});
    }

    const handleSubmit  = (event) => {
        console.log("handling submit");
        event.preventDefault();
        event.target.reset();
        setApiMessage("Submitting....");
        RestClient.doPost('contact', contactUsQuery)
        .then(response => {
            if(response.status === 200) {
                console.log(response);
                setContactUsQuery({});
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
            <Header />
            <div className="contactUsBody">
                <div className="contactUsContainer">
                    <div className="contactUsInfo">
                        <h1>We'd Love to Hear From You</h1>
                        <p>Whether you're curious about our courses or programs,<br /> 
                        we are ready to answer any and all your questions. <br />React out to us on <b>admin@careercharge.in</b></p>
                        {/* <p>Cursion about our courses or programs, react out to us on <b>admin@careercharge.in</b></p> */}
                    </div><br />
                    <div className="contactFormDiv">
                        <center><h4>HAVE SOME QUESTIONS?</h4></center>
                        <Form className="pr-10" onSubmit={handleSubmit} style={{border: "0px solid gray",marginTop: '0px', padding: '10px', borderRadius: '5px'}} autoComplete="off">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" onChange={e => handleContactUsFormChange(e, "name")}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={e => handleContactUsFormChange(e, "email")} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEduation">
                                <Form.Label>Your Query</Form.Label>
                                <Form.Control as="textarea" style={{height: '140px'}} placeholder="Your Query" onChange={e => handleContactUsFormChange(e, "query")}></Form.Control>
                            </Form.Group>
                            {apiMessage && <p style={{paddingBottom: '0px'}}>
                                    {apiMessage}
                                </p>
                            }
                            <Button variant="secondary" size="lg" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;