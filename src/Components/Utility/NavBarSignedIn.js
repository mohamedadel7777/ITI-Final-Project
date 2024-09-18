import React from "react";
import { Navbar, Container, FormControl, Nav, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import "react-router-dom";
import { logout } from "../../redux/AuthSlice";
import HomePage from "../../Pages/Home/HomePage";

const NavBarSignedIn = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    window.location.href = "./ReAuthenticate";
  };
  const handleManageProfile = () => {
    window.location.href = "./manage-profile";
  };
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/HomePage">
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
                  <Dropdown.Item onClick={handleManageProfile}>
                    Manage Your Profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogoutClick}>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link href="/cart">
              <div
                style={{
                  position: "absolute",
                  display: "inline-block ",
                  right: "40px",
                  top: "25px",
                }}
              >
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                {cartItems.length > 0 && (
                  <Badge
                    pill
                    bg="danger"
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "-10px",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {cartItems.length}
                  </Badge>
                )}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarSignedIn;
