import { useParams } from "react-router-dom";
import CreateEditBlog from "../../components/admin/CreateEditBlog";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import RestClient from "../../services/RestClient";

function EditBlogView() {
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
    }, [blogId]);
    return (
        <>
            <Header />
            <CreateEditBlog 
                isEdit={true}
                blogId={blogId}
                blogData={blog}
            />
        </>
    )
}

export default EditBlogView;