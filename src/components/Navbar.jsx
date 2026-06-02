import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container">

        <span className="navbar-brand">
          JW
        </span>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>

          <Link className="nav-link" to="/projects">
            Projects
          </Link>

          <Link className="nav-link" to="/education">
            Education
          </Link>

          <Link className="nav-link" to="/services">
            Services
          </Link>

          <Link className="nav-link" to="/contact">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;