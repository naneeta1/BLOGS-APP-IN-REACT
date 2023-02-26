import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, error, isLoading} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleDelete = ()=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div> }
            {error && <div>{error}</div>}
            {blog && 
            <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete Post</button>
            </article>}
        </div>
     );
}
 
export default BlogDetails;