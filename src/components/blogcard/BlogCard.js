import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BlogCard = (props) => {
    const {title, description, thumbnailUrl, blogId} = props;
    return (
        <>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={thumbnailUrl} style={{height: '12rem', paddingTop: '10px'}}/>
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

export default BlogCard;