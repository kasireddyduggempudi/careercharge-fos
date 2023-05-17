import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import RestClient from "../../services/RestClient";
import './Blog.css';
import { getDateFromTimeMillis } from "../../utils/TimeUtils";

function Blog() {
    const {blogId} = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        RestClient.doGet(`blogs/${blogId}`)
        .then(response => {
            console.log(response);
            setBlog(response.data?.data)
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <Header />
            <div style={{marginTop: '80px'}}>
                <div className="blogContainer">
                    <h1 className="blogTitle">{blog.title}</h1>
                    <div className="authorDateDiv">
                        <span>{blog.author}</span>
                        <span>{getDateFromTimeMillis(blog.creationTime)}</span>
                    </div>
                    <div className="blogContent">
                        <div dangerouslySetInnerHTML={{__html: blog.content}} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;