import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/">Elite</Link>
      </h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/create">New blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
