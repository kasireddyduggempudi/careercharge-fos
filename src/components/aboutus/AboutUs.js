import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
    return (
        <>
            <br /><br />
            <h3 style={{textAlign: 'center', textDecoration: 'underline'}}>About Us</h3>
            <Container>
                <Row>
                    <Col lg={{offset: 2, span: 8}} sm={{span: 12, offset: 0}}>
                    CareerCharge is an upsklling platform that aims to upskill the talented youth of Tier-3 and Tier-4 colleges. 
                    We have been committed to upskill the youth with real-time time projects from industry experts.
                    We take pride in our mission to make our Tier-3 and Tier-4 college students landing jobs at well-funded startups, 
                    and we are always looking for ways to improve and innovate in order to stay ahead of the curve.
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AboutUs;