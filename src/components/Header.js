import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {isLoggedIn ? (
            <>
              <NavLink to="/" className="text-decoration-none text-light mx-2">
                New Form
              </NavLink>
              <NavLink
                to="/details"
                className="text-decoration-none text-light mx-2"
              >
                Project Details
              </NavLink>
              <NavLink
                to="/"
                className="text-decoration-none text-light mx-2"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/signup"
                className="text-decoration-none text-light mx-2"
              >
                User Registration
              </NavLink>
              <NavLink to="/" className="text-decoration-none text-light mx-2">
                Login
              </NavLink>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
