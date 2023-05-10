import BlogCard from "../../components/blogcard/BlogCard";
import TinyMCEEditor from "../../components/tinyMceEditor/TinyMCEEditor";

function Testing() {

    const handleCallback = (data) => {
        console.log(data);
    }
    return (
        <div>
            {/* <BlogCard 
                title="What is Inflation?"
                description="Inflation is nothing but decrease in the GDP for continuous three quarters. Inflation is nothing but decrease in the GDP for continuous three quarters."
                thumbnailUrl="https://img.freepik.com/free-photo/hand-holding-growth-arrow-with-coins_23-2148780591.jpg?w=1800&t=st=1683730116~exp=1683730716~hmac=4890c8e87a54d47fdf6c0852911ed93212aac8ba26a928a58cc603be501497fd"
                blogId="1323232"
                author="CareerCharge"
                creationTimeMillis={new Date().getTime()}
            /> */}
            <TinyMCEEditor 
                content="<p>testing</p>"
                handleCallback={handleCallback}
            />
        </div>
    )
}

export default Testing;