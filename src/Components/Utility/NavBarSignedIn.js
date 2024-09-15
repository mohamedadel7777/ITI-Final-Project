import React from "react";
import { Navbar, Container, FormControl, Nav , Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux"; 
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";

const NavBarSignedIn = () => {
  const user = useSelector((state) => state.auth.user); 
   const handleLogoutClick = () => {
      window.location.href = "./ReAuthenticate"; 
  };

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
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
                  {user.FirstName} {user.LastName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                 <Dropdown.Item href="#/action-1">manage Your Profile</Dropdown.Item>
                 <Dropdown.Item onClick={handleLogoutClick}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
               </Dropdown>
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}>
              <img src={cart} className="login-img" alt="Cart-image" />
            
              <p>Cart</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarSignedIn;
