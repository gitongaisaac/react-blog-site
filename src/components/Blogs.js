/* Dependancies and component imports */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdEditNote } from "react-icons/md";
import { GiTrashCan } from "react-icons/gi";

/* Blog Function */
const Blogs = ({ blogs }) => {
  const navigate = useNavigate();

  const deleteBlog = (id) => {
    const url = "http://localhost:8000/blogs/" + id;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          document.location.reload();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blogs" key={blog.id}>
          <Link to={"/blogs/" + blog.id}>
            <h2>{blog.title}</h2>
            <p>by {blog.author}</p>
          </Link>

          <div className="buttons">
            <abbr title="Delete Blog" className="trash">
              <GiTrashCan
                size={"1.5rem"}
                color={"red"}
                onClick={() => {
                  deleteBlog(blog.id);
                }}
              />
            </abbr>

            <abbr title="Edit Blog">
              <Link to={"/edit/" + blog.id} className="edit">
                <MdEditNote size={"1.5rem"} color={"#ed6a5e"} />
              </Link>
            </abbr>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
