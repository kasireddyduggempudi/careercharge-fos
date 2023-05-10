import { useParams } from "react-router-dom";
function Blog() {
    const {blogId} = useParams();
    return (
        <>
            Happy reading {blogId}
        </>
    )
}

export default Blog;