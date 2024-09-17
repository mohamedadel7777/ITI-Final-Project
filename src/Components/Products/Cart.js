// src/components/CartPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { removeFromCart, updateQuantity } from "../../redux/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Remove item from cart
  };

  // Calculate the total cost
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  //
  const handleUpdateQuantity = (id, newQuantity) => {
    dispatch(updateQuantity({ id, newQuantity }));
  };

  if (totalQuantity === 0) {
    return (
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          textTransform: "capitalize",
          marginTop: "40px",
          fontSize: "40px",
        }}
      >
        Your cart is empty 👀
      </p>
    ); // Display message if cart is empty
  }

  return (
    <Container
      style={{ minHeight: "670px" }}
      className="d-flex flex-column align-content-center"
    >
      <h2
        style={{
          color: "#0075ff",
          borderColor: "#0075ff",
        }}
        className="admin-content-text-products"
      >
        Shopping Cart
      </h2>
      {cartItems.map((item) => (
        <Row key={item.id} className="my-3">
          <Col md={3}>
            <Link to={`/ProductDetails/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "70%", height: "auto" }}
              />
            </Link>
          </Col>
          <Col md={5}>
            <h4
              style={{
                textTransform: "capitalize",
                marginBottom: "20px",
                fontWeight: "bold",
                fontSize: "35px",
                color: "#0075ff",
              }}
            >
              {item.name}
            </h4>
            <p
              style={{
                color: "#272727",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              <strong>Price:</strong>
              <span
                style={{
                  fontSize: "18px",
                  marginLeft: "4px",
                }}
              >
                {item.price}💲
              </span>
            </p>
            <p
              style={{
                color: "#272727",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              <strong>Quantity:</strong>{" "}
              <Button
                variant="primary"
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                style={{ marginLeft: "10px" }}
              >
                -
              </Button>
              <span
                style={{
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              >
                {item.quantity}
              </span>
              <Button
                variant="primary"
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                style={{ marginLeft: "10px" }}
              >
                +
              </Button>
            </p>
            <p
              style={{
                color: "#272727",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              <strong>Total:</strong>{" "}
              <span
                style={{
                  fontSize: "18px",
                  marginLeft: "4px",
                }}
              >
                {item.price * item.quantity}💲
              </span>
            </p>
          </Col>
          <Col md={2}>
            <Button
              variant="danger"
              onClick={() => handleRemoveFromCart(item.id)}
              style={{ position: "absolute", right: "100px" }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Col>
          <hr></hr>
        </Row>
      ))}
      <Row>
        <Col md={12}>
          <h4
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "40px",
              color: "#f44336",
              border: "2px solid #f44336",
              width: "fit-content",
              margin: "auto",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            Total Price :{" "}
            <span
              style={{
                fontSize: "35px",
                marginLeft: "4px",
              }}
            >
              {calculateTotal()}💲
            </span>
          </h4>
        </Col>
        <Col md={12}>
          <button
            style={{
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "30px",
              color: "white",
              backgroundColor: "#0075ff",
              width: "fit-content",
              margin: "30px auto 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
              border: "2px solid white",
              outline: "2px solid #0075ff",
              borderRadius: "15px",
            }}
            onClick={() => navigate("/buynow", { replace: true })} // Redirect to /buynow when clicked
          >
            Buy Now
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
