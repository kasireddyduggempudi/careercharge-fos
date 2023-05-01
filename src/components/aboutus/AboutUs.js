import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
    return (
        <>
            <br /><br />
            <h3 style={{textAlign: 'center', textDecoration: 'underline'}}>About Us</h3>
            <Container className="justify-content-center align-items-center">
                <Row >
                    <Col lg={{offset: 2, span: 8}} sm={{span: 12, offset: 0}}>
                    {/* CareerCharge is an upsklling platform that aims to upskill the talented youth of Tier-3 and Tier-4 colleges. 
                    We have been committed to upskill the youth with real-time time projects from industry experts.
                    We take pride in our mission to make our Tier-3 and Tier-4 college students landing jobs at well-funded startups, 
                    and we are always looking for ways to improve and innovate in order to stay ahead of the curve. */}
                    <p style={{fontFamily: 'Times New Roman', fontSize: "20px", lineHeight: "35px"}}>We believe in our visionary statement "<b>Skills can take you to the places where mass-hiring can't. 
                    Your career is not limited to WITCH (Wipro, Infosys, TCS, Cognizant, HCL) and doesn't end with MAANG (Meta, Apple, Amazon, Netflix, Google) companies</b>".  
                    We open your doors into the tech world as a software developer via a 4-month power charged training program. 
                    Career Charge is your access key for 10,000+ tech startups hunting for a 100% charged techie, exactly like you.
                    </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AboutUs;