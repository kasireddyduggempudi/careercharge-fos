import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  './BlogCard.css';
import { getDateFromTimeMillis } from '../../utils/TimeUtils';

const handleRead = (blogId) => {
    return window.location.href=`/blogs/${blogId}`;
}

const handleEdit = (blogId) => {
    return window.location.href = `/admin/blogs/${blogId}/edit`
}

const AdminBlogCard = (props) => {
    const {title, description,author, thumbnailUrl,creationTimeMillis, blogId} = props;
    return (
        <>
            <Card style={{ width: '22rem', padding: "0px" }}>
                <Card.Img variant="top" src={thumbnailUrl} style={{height: '12rem', cursor:"pointer", paddingTop: '0px'}} onClick={() => handleRead(blogId)} />
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
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Button variant="secondary" onClick={() => handleRead(blogId)}>{"Read >>"}</Button>
                        <Button variant="secondary" onClick={() => handleEdit(blogId)}>{"Edit >>"}</Button>
                    </div>
                </Card.Body> 
            </Card>
        </>
    )
}

export default AdminBlogCard;