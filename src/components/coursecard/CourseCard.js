import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pythonLogo from '../../resources/python-logo.png';

const CourseCard = (props) => {
    const {title, description, logo, link} = props;
    return (
        <>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={logo} style={{height: '12rem', paddingTop: '10px'}}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="secondary">{"More Details >>"}</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CourseCard;