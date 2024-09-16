// src/components/CartPage.js
<<<<<<< HEAD
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { removeFromCart, updateQuantity } from "../../redux/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

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
=======
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { removeFromCart } from '../../redux/CartSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import bin from "../../images/bin.png"
import { Link } from 'react-router-dom';


const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);  // Get cart items from Redux
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));  // Remove item from cart
  };

  if (totalQuantity === 0) {
    return <p>Your cart is empty!</p>;  // Display message if cart is empty
  }

  return (
    <Container style={{minHeight: "670px"}}>
      <h2 style={{marginBottom: '60px'}}>Shopping Cart</h2>
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
      {cartItems.map((item) => (
        <Row key={item.id} className="my-3">
          <Col md={3}>
            <Link to={`/ProductDetails/${item.id}`}>
<<<<<<< HEAD
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
                  fontSize: "18px",
                  marginLeft: "4px",
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
=======
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '100px', height: '100px' }}
              />
            </Link>
            
          </Col>
          <Col md={5}>
            <h4>{item.name}</h4>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
          </Col>
          <Col md={4}>
            <Button 
              variant="danger" 
              onClick={() => handleRemoveFromCart(item.id)}
              style={{position:'absolute', right: '100px'}}
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Col>
<<<<<<< HEAD
          <hr></hr>
        </Row>
      ))}
      <Row>
        <Col md={12}>
          <h4
            style={{
              textTransform: "capitalize",
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "35px",
              color: "#0075ff",
            }}
          >
            Total: {calculateTotal()}💲
          </h4>
        </Col>
      </Row>
=======
        </Row>
        
      ))}
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
    </Container>
  );
};

export default Cart;
