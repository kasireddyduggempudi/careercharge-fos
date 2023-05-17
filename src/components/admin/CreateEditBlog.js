import Header from "../header/Header";
import { Container, Row, Col, Button, Form, InputGroup} from "react-bootstrap";
import { useEffect, useState } from "react";
import RestClient from "../../services/RestClient";
import TinyMCEEditor from "../tinyMceEditor/TinyMCEEditor";
import './CreateEditBlog.css';

function CreateEditBlog({blogId, blogData, isEdit}) {
    const [createBlogRequest, setCreateBlogRequest] = useState(blogData || {});
    const [apiMessage, setApiMessage] = useState(null);

    useEffect(() => {
        setCreateBlogRequest({...blogData});
    }, [blogId, blogData, isEdit])

    const handleCreateBlogFormChange = (event, field) => {
        switch(field) {
            case "readTimeMillis":
                setCreateBlogRequest({...createBlogRequest, [field]: (parseInt(event.target.value) * 1000)});
                break;
            case "tags":
                setCreateBlogRequest({...createBlogRequest, [field]: event.target.value?.split(",")});
                break;
            default:
                setCreateBlogRequest({...createBlogRequest, [field]: event.target.value});
                break;
        }
    }

    const handleBlogContentFromEditor = (data) => {
        setCreateBlogRequest({...createBlogRequest, content: data});
    } 

    const updateBlog = (event) => {
        event.target.reset();
        console.log(createBlogRequest);
        setApiMessage("Upating. Please hold on....");
        RestClient.doPut(`blogs/${blogId}`, createBlogRequest)
        .then(response => {
            if(response.status === 200) {
                console.log(response);
                // setCreateBlogRequest({});
                setApiMessage("Hurray!!! Blog updated");
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

    const createBlog = (event) => {
        event.target.reset();
        console.log(createBlogRequest);
        setApiMessage("Creating. Please hold on....");
        RestClient.doPost('blogs', createBlogRequest)
        .then(response => {
            if(response.status === 200) {
                console.log(response);
                setCreateBlogRequest({});
                setApiMessage("Hurray!!! Blog created");
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

    const handleSubmit  = (event) => {
        console.log("handling submit");
        event.preventDefault();
        if(isEdit) {
            return updateBlog(event);
        };

        return createBlog(event);
    }


    return (
        <>
            <div className="createEditBlogDiv" style={{marginTop: '80px'}}>
                <h3 style={{textDecoration: "underline", textAlign: 'center', marginBottom: '10px'}}>Create Blog</h3>
                <Form className="pr-10" onSubmit={handleSubmit} style={{border: "0px solid gray", padding: '10px', borderRadius: '5px', marginTop: '-20px'}}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Blog Title</Form.Label>
                        <Form.Control type="text" placeholder="Blog title" value={createBlogRequest.title} onChange={e => handleCreateBlogFormChange(e, "title")}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Short Description" value={createBlogRequest.description} onChange={e => handleCreateBlogFormChange(e, "description")}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Thumbnail URL</Form.Label>
                        <Form.Control type="text" placeholder="Thumbnail URL" value={createBlogRequest.thumbnailUrl} onChange={e => handleCreateBlogFormChange(e, "thumbnailUrl")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEduation">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author Name" value={createBlogRequest.author} onChange={e => handleCreateBlogFormChange(e, "author")}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCollegeName">
                        <Form.Label>Duration of reading (Seconds)</Form.Label>
                        <Form.Control type="number" placeholder="Duration in seconds" value={createBlogRequest.readTimeMillis && createBlogRequest.readTimeMillis / 1000} onChange={e => handleCreateBlogFormChange(e, "readTimeMillis")}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEduation">
                        <Form.Label>Tags (separated by commas)</Form.Label>
                        <Form.Control type="text" placeholder="Tag1, Tag2, ..." value={createBlogRequest.tags && createBlogRequest.tags.join(",")} onChange={e => handleCreateBlogFormChange(e, "tags")}/>
                    </Form.Group>
                    <TinyMCEEditor
                        content={createBlogRequest.content}
                        handleCallback={handleBlogContentFromEditor}
                    />
                    <div style={{textAlign: 'center', paddingTop: '10px'}}>
                        {apiMessage && <p>
                                {apiMessage}
                            </p>
                        }
                        <Button variant="secondary" size="lg" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default CreateEditBlog;