/* Dependancies and component imports */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import NotFound from "./NotFound";

/* Edit Function */
const Edit = () => {
  /* Hooks */
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  /* Variables  and objects */
  const url = "http://localhost:8000/blogs/" + id;
  const data = { title, date, author, body };
  const jsonData = JSON.stringify(data);
  const reqOps = {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: jsonData,
  };

  /* Fetch blog */
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal: signal })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Could not get the blog");
        }
      })
      .then((data) => {
        setTitle(data.title);
        setDate(data.date);
        setAuthor(data.author);
        setBody(data.body);
        setError(null);
        setPending(false);
      })
      .catch((err) => {
        if (err === "AbortError") {
          console.log("Abort Error");
        } else {
          setError(err.message);
          setPending(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  /* Update */
  const update = (e) => {
    e.preventDefault();

    /* PUT Request */
    fetch(url, reqOps)
      .then((res) => {
        if (res.ok) {
          setTitle("");
          setDate("");
          setAuthor("");
          setBody("");
          navigate("/");
          setPending(false);
          setError(null);
        } else {
          throw Error("Could not update your data");
        }
      })
      .catch((err) => {
        setPending(false);
        setError(err.message);
      });
  };

  /* Return */
  return (
    <div className="create">
      {pending && <Loading />}

      {error && <NotFound error={error} />}

      {data && (
        <form className="form" onSubmit={update}>
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

          <button className="btn btn-add">Update</button>
        </form>
      )}
    </div>
  );
};

export default Edit;
