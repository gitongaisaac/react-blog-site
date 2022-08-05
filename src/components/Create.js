import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  /* Hooks */
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  /* Objects */
  const url = "http://localhost:8000/blogs";
  const blog = { title, date, author, body };

  /* AddBlog function */
  const addBlog = (e) => {
    e.preventDefault();

    // POST Request
    fetch(url, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setTitle("");
          setDate("");
          setAuthor("");
          setBody("");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="create">
      <form className="form" onSubmit={addBlog}>
        <div className="form-control">
          <label>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label>Date:</label>
          <input
            type="text"
            id="date"
            value={date}
            required
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label>Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            required
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label>Body:</label>
          <textarea
            id="body"
            value={body}
            required
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>

        <button className="btn">Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
