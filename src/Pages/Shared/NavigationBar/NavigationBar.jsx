import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(result => {})
      .catch(err => {});
  };

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto pr-2">
            <Link to="/categories/0">Home</Link>
            <Link className="mx-4" to="/about">
              About
            </Link>
            <Link to="/career">Career</Link>
          </Nav>
          <Nav className="flex align-items-center">
            {user && (
              <Link to="/login">
                <FaUserCircle style={{ fontSize: "2.5em" }} />
              </Link>
            )}

            {user ? (
              <button onClick={handleLogOut} className="ms-2 button btn-wide">
                LogOut
              </button>
            ) : (
              <Link to="/login">
                <button className="ms-2 button btn-wide">Login</button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
