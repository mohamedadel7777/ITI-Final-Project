import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SubTitle from "../Utility/SubTitle";
import earpods from "../../images/Earpods.webp";
import macbook from "../../images/Mac.webp";
import iPhone from "../../images/iPhone.jpeg";
import smartWatch from "../../images/SmartWatch.webp";
import { Products } from './CardProductContainer'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
      navigate("/Login");
    }
  };

  if (!product) {
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

          />
        </Col>

        {/* Title and details on the right */}
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
            
            

        </Col>
      </Row>
    </Container>
  );
};


export default ProductDetails;
