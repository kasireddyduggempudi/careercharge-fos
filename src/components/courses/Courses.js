import { Container, Row } from "react-bootstrap";
import CourseCard from "../coursecard/CourseCard";
import pythonLogo from '../../resources/python-logo.png';
import javaReactLogo from '../../resources/java-react.webp';
import mernStackLogo from '../../resources/mern-stack.jpeg';
import awsCloudLogo from '../../resources/aws-cloud.jpeg';
import djangoReactLogo from '../../resources/django-react.webp';
import sqlLogo from '../../resources/sql.png';

const Courses = () => {
    const courseDetails = [
        {
            "title": "Learn Python Programming",
            "description": "Python is one of the most popular programming languages in the world. It's versatile, easy to read, and used for everything from web development to machine learning.",
            "logo": pythonLogo,
            "link": ''
        },
        {
            "title": "Java Full Stack Developement",
            "description": "Unlock your career potential with our Full Stack Java Developer Career Bootcamp. Get the ultimate boost for your career with world-class skills  in one power-packed program.",
            "logo": javaReactLogo,
            "link": ''
        },
        {
            "title": "MERN Full Stack Development",
            "description": "Unlock your career potential with our MERN Full Stack Developer Career Bootcamp. Get the ultimate boost for your career with world-class skills in one power-packed program.",
            "logo": mernStackLogo,
            "link": ''
        },
        {
            "title": "Python Full Stack Development",
            "description": "Unlock your career potential with our Python Full Stack Developer Career Bootcamp. Get the ultimate boost for your career with world-class skills in one power-packed program.",
            "logo": djangoReactLogo,
            "link": ''
        },
        {
            "title": "AWS Cloud Learning Course",
            "description": "Learn AWS skills while working on multiple case studies & projects, and master building highly scalable, and fault-tolerant applications with CareerCharge AWS Cloud Learning.",
            "logo": awsCloudLogo,
            "link": ''
        },
        {
            "title": "Basic to Advanced SQL",
            "description": "Structured query language (SQL) is a programming language for storing and processing information in a relational database. Learn SQL with hands-on from industry experts.",
            "logo": sqlLogo,
            "link": ''
        },                        
    ]
    return (
        <div id='courses'>
            <br /><br />
            <h3 style={{textAlign: 'center', textDecoration: 'underline'}}>Courses Offering</h3>
            <br />
            <Container >
                <Row style={{gap: '20px'}} className="justify-content-center align-items-center">
                    {courseDetails.map(details => {
                        return (
                            <CourseCard 
                                title={details.title}
                                description={details.description}
                                logo={details.logo}
                                link={details.link}
                            />
                        );
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Courses;