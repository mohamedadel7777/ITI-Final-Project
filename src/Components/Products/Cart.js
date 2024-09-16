// src/components/CartPage.js
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
      {cartItems.map((item) => (
        <Row key={item.id} className="my-3">
          <Col md={3}>
            <Link to={`/ProductDetails/${item.id}`}>
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
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Col>
        </Row>
        
      ))}
    </Container>
  );
};

export default Cart;
