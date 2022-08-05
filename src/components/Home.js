import useFetch from "../hooks/useFetch";
import Blogs from "./Blogs";
import Loading from "./Loading";
import NotFound from "./NotFound";

const Home = () => {
  /* Objects */
  const url = "http://localhost:8000/blogs";

  /* Hooks */
  const { data: blogs, pending, error } = useFetch(url);

  return (
    <div className="home">
      {error && <NotFound error={error} />}
      {pending && <Loading />}
      {blogs && <Blogs blogs={blogs} />}
    </div>
  );
};

export default Home;
