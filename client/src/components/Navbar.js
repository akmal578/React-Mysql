import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link
          style={{
            fontSize: "30px",
            padding: 0,
          }}
          to="/"
        >
          The Form
        </Link>
        <div className="links">
          <Link to="/">Form</Link>
          <Link to="/list">Card List</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
