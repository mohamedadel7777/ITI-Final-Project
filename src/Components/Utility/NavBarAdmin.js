import React from "react";
import { Navbar, Container, FormControl, Nav, Dropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import { logout } from "../../redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const NavBarAdmin = () => {
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(logout());
    window.location.href = "/Login";
  };
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="">
            <img src={logo} className="logo" alt="Logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Nav.Link className="nav-text d-flex mt-2 justify-content-center">
              <Dropdown>
                <Dropdown.Toggle id="custom-dropdown-toggle">
                  Admin
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogoutClick}>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarAdmin;
