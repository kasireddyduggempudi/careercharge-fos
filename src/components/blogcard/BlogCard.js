import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  './BlogCard.css';

const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const getDateFromTimeMillis = (timeMillis)=> {
    let date = new Date(timeMillis);
    return `${date.getDate()} ${monthName[date.getMonth()]}, ${date.getFullYear()}`
}

const handleRead = (blogId) => {
    return window.location.href=`/blogs/${blogId}`;
}

const BlogCard = (props) => {
    const {title, description,author, thumbnailUrl,creationTimeMillis, blogId} = props;
    return (
        <>
            <Card style={{ width: '22rem', cursor:"pointer" }} onClick={() => handleRead(blogId)}>
                <Card.Img variant="top" src={thumbnailUrl} style={{height: '12rem', paddingTop: '0px'}}/>
                <div style={{position: "absolute", top: "0", width: "100%"}}>
                    <div style={{display: "flex", justifyContent: "space-between", paddingLeft: "1rem", paddingRight: '1rem', paddingBottom: '0px'}}>
                        <div>
                            {author}
                        </div>
                        <div>
                            {getDateFromTimeMillis(creationTimeMillis)}
                        </div>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className={"text-ellipsis-2-lines"}>
                        {description}
                    </Card.Text>
                    <Button variant="secondary">{"Read >>"}</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default BlogCard;