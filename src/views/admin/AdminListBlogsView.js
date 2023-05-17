import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Row, Container, Col } from 'react-bootstrap';
import RestClient from "../../services/RestClient";
import AdminBlogCard from "../../components/blogcard/AdminBlogCard";

function AdminListBlogsView() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const params = {
            lastFetchedBlogId: null,
            // size: 10, // this should be backend
        }
        RestClient.doGet("blogs", params)
        .then(response => {
            console.log(response);
            if(response.status === 200) {
                setBlogs(response.data?.blogs);
            }else {
                console.log("something went wrong. ", response);
            }
        }).catch(err => {
            console.log("Error while calling get blogs api. ", err);
        })
    }, [])

    const blogsDemo = [
        {
            "title": "What is Inflation",
            "description": "Inflation is nothing but decrease in the GDP for continuous three quarters. Inflation is nothing but decrease in the GDP for continuous three quarters.",
            "thumbnailUrl": "https://img.freepik.com/free-photo/hand-holding-growth-arrow-with-coins_23-2148780591.jpg?w=1800&t=st=1683730116~exp=1683730716~hmac=4890c8e87a54d47fdf6c0852911ed93212aac8ba26a928a58cc603be501497fd",
            "blogId": "12342323",
            "author": "CareerCharge"
        },
        {
            "title": "What is Inflation",
            "description": "Inflation is nothing but decrease in the GDP for continuous three quarters. Inflation is nothing but decrease in the GDP for continuous three quarters.",
            "thumbnailUrl": "https://img.freepik.com/free-photo/hand-holding-growth-arrow-with-coins_23-2148780591.jpg?w=1800&t=st=1683730116~exp=1683730716~hmac=4890c8e87a54d47fdf6c0852911ed93212aac8ba26a928a58cc603be501497fd",
            "blogId": "12342323",
            "author": "CareerCharge"
        },
        {
            "title": "What is Inflation",
            "description": "Inflation is nothing but decrease in the GDP for continuous three quarters. Inflation is nothing but decrease in the GDP for continuous three quarters.",
            "thumbnailUrl": "https://img.freepik.com/free-photo/hand-holding-growth-arrow-with-coins_23-2148780591.jpg?w=1800&t=st=1683730116~exp=1683730716~hmac=4890c8e87a54d47fdf6c0852911ed93212aac8ba26a928a58cc603be501497fd",
            "blogId": "12342323",
            "author": "CareerCharge"
        },
        {
            "title": "What is Inflation",
            "description": "Inflation is nothing but decrease in the GDP for continuous three quarters. Inflation is nothing but decrease in the GDP for continuous three quarters.",
            "thumbnailUrl": "https://img.freepik.com/free-photo/hand-holding-growth-arrow-with-coins_23-2148780591.jpg?w=1800&t=st=1683730116~exp=1683730716~hmac=4890c8e87a54d47fdf6c0852911ed93212aac8ba26a928a58cc603be501497fd",
            "blogId": "12342323",
            "author": "CareerCharge"
        },
        {
            "title": "What is Inflation",
            "description": "Inflation is nothing but decrease in the GDP for continuous three quarters. Inflation is nothing but decrease in the GDP for continuous three quarters.",
            "thumbnailUrl": "https://img.freepik.com/free-photo/hand-holding-growth-arrow-with-coins_23-2148780591.jpg?w=1800&t=st=1683730116~exp=1683730716~hmac=4890c8e87a54d47fdf6c0852911ed93212aac8ba26a928a58cc603be501497fd",
            "blogId": "12342323",
            "author": "CareerCharge"
        }
    ]

    return (
        <>
            <Header />
            <div style={{marginTop: "80px"}}>
                <h6 style={{"textAlign": "center", "textDecoration": "underline", "marginBottom": "20px"}}>CareerCharge / Blogs</h6>
                <Container >
                    <Row style={{gap: "20px"}} className="justify-content-center">
                        {blogs.map(blog => {
                            return (
                                <AdminBlogCard 
                                    title={blog.title}
                                    description={blog.description}
                                    thumbnailUrl={blog.thumbnailUrl}
                                    blogId={blog._id}
                                    author={blog.author}
                                    creationTimeMillis={new Date(blog.creationTime).getTime()}
                                />
                            );
                        })}
                    </Row>
                </Container>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default AdminListBlogsView;