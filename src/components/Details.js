import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import NotFound from "./NotFound";

const Details = () => {
  const { id } = useParams();

  /* Objects */
  const url = "http://localhost:8000/blogs/" + id;

  /* Hooks */
  const { data: blog, pending, error } = useFetch(url);

  return (
    <div className="details">
      {pending && <Loading />}
      {error && <NotFound error={error} />}
      {blog && (
        <div className="blog-detail">
          <h2 className="title">{blog.title}</h2>
          <div className="author">
            <p>Published on {blog.publish}</p>
            <p>by {blog.author}</p>
          </div>
          <p className="body">{blog.body}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
