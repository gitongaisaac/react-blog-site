/* Dependencies */
import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import NotFound from "./NotFound";

/* Details Function */
const Details = () => {
  /* Hooks */
  const { id } = useParams();
  const navigate = useNavigate();

  /* Variables */
  const url = "http://localhost:8000/blogs/" + id;

  /* Custom Hooks */
  const { data: blog, pending, error } = useFetch(url);

  /* delete Blog function */
  const deleteBlog = () => {
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  /* Return */
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

          <div className="buttons">
            <Link to={"/edit/" + blog.id} className="btn btn-edit">
              Edit
            </Link>

            <button className="btn btn-delete" onClick={deleteBlog}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
