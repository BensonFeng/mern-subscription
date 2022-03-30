import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar>
      <NavItem>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </NavItem>
      {localStorage.getItem("token") && (
        <NavItem>
          <Link to="/" className="nav-link">
            Logout
          </Link>
        </NavItem>
      )}
    </Navbar>
  );
};

export default Nav;
