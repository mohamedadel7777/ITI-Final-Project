<<<<<<< HEAD
import React from "react";
import { Row, Col } from "react-bootstrap";
=======
import React from 'react'
import { Row, Col } from 'react-bootstrap'
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
import SubTitle from "../Utility/SubTitle";
import earpods from "../../images/Earpods.webp";
import macbook from "../../images/Mac.webp";
import iPhone from "../../images/iPhone.jpeg";
import smartWatch from "../../images/SmartWatch.webp";
<<<<<<< HEAD
import { Products } from "./CardProductContainer";
import { useParams, useNavigate } from "react-router-dom";
=======
import { Products } from './CardProductContainer'
import { useParams, useNavigate } from 'react-router-dom';
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import { Card, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = Products.find((p) => p.id === parseInt(productId));
  const dispatch = useDispatch();
  const IsLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (IsLoggedIn) {
      dispatch(addToCart(product));
    } else {
=======
import { Card, Container, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';




const ProductDetails = ({}) => {
  const { productId } = useParams();  
  const product = Products.find(p => p.id === parseInt(productId));
   const dispatch = useDispatch();
   const IsLoggedIn = useSelector((state) => state.auth.isLoggedIn); 
    const navigate = useNavigate();

  const handleAddToCart = () => {
    if(IsLoggedIn){
    dispatch(addToCart(product)); 
    }else 
    {
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
      navigate("/Login");
    }
  };

  if (!product) {
<<<<<<< HEAD
    return <p>Product not found!</p>;
  }

  return (
    <Container style={{ marginTop: "20px", minHeight: "670px" }}>
      <Row>
        {/* Image on the left */}
        <Col md={5}>
          <Card.Img
            src={product.image}
            alt={product.name}
            style={{
              maxWidth: "80%",
              height: "auto",
            }}
=======
    return <p>Product not found!</p>;  
  }

  return (
    <Container style={{ marginTop: '20px', minHeight:"670px" }}>
      <Row>
        {/* Image on the left */}
        <Col md={6}>
          <Card.Img 
            src={product.image} 
            alt={product.name} 
            style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px', border: '10px' }}  

>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
          />
        </Col>

        {/* Title and details on the right */}
<<<<<<< HEAD
        <Col md={7}>
          <Card.Body>
            <Card.Title
              style={{
                textTransform: "capitalize",
                marginBottom: "20px",
                fontWeight: "bold",
                fontSize: "25px",
                color: "#0075ff",
                textAlign: "left",
              }}
            >
              {product.name}
            </Card.Title>
            <Card.Text
              style={{ fontSize: "18px", textAlign: "justify", opacity: "0.7" }}
            >
              {product.description}
            </Card.Text>
            <Card.Text
              style={{
                color: "#272727",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Price:
              <span
                style={{
                  fontSize: "18px",
                  marginLeft: "4px",
                }}
              >
                {product.price}💲
              </span>
            </Card.Text>
            <Card.Text
              style={{
                color: "#272727",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Rating:{" "}
              <span
                style={{
                  fontSize: "18px",
                  marginLeft: "4px",
                }}
              >
                {product.rating}⭐
              </span>
            </Card.Text>
            <Button
              style={{ backgroundColor: "black", borderColor: "black" }}
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
            </Button>
          </Card.Body>
=======
        <Col md={6}>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text><strong>Price: {product.price}</strong></Card.Text>
            <Card.Text><strong>Rating: {product.rating}</strong></Card.Text>
             <Button
              style={{ backgroundColor: 'black', borderColor: 'black' }}
              onClick={handleAddToCart}
              >
              <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
             </Button>
            </Card.Body>
            
            

>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
        </Col>
      </Row>
    </Container>
  );
};

<<<<<<< HEAD
=======

>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
export default ProductDetails;
