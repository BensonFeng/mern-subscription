import { Navbar, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";
import styled from "styled-components";

const LeftNavContainer = styled.div`
  margin-left: auto;
`;

const Nav = () => {
  const [state, setState] = useContext(UserContext);
  return (
    <Navbar>
      <NavItem>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </NavItem>
      {state.data && (
        <LeftNavContainer>
          <NavItem>
            <NavLink>Logout</NavLink>
          </NavItem>
        </LeftNavContainer>
      )}
    </Navbar>
  );
};

export default Nav;
