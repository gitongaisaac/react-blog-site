import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blogs" key={blog.id}>
          <Link to={"/blogs/" + blog.id}>
            <h2>{blog.title}</h2>
            <p>by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
