import React from "react";
import { Row, Col } from "react-bootstrap";
import { Products } from "./CardProductContainer";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, Container, Button } from "react-bootstrap";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = Products.find((p) => p.id === parseInt(productId));
  const dispatch = useDispatch();
  const IsLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart.items); // Access cart items from Redux
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (IsLoggedIn) {
      dispatch(addToCart(product));
    } else {
      navigate("#/Login");
    }
  };

  // Check if product is already in cart
  const isProductInCart = cart.some((cartItem) => cartItem.id === product.id);

  if (!product) {
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
        Product not found ⚠️
      </p>
    );
  }

  return (
    <Container style={{ marginTop: "20px", minHeight: "670px" }}>
      <Row>
        <Col md={5}>
          <Card.Img
            src={product.image}
            alt={product.name}
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </Col>
        <Col md={7}>
          <Card.Body>
            <Card.Title
              style={{
                textTransform: "capitalize",
                marginBottom: "20px",
                fontWeight: "bold",
                fontSize: "25px",
                color: "#000000",
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
              style={{ color: "#272727", fontSize: "22px", fontWeight: "bold" }}
            >
              Price:
              <span style={{ fontSize: "18px", marginLeft: "4px" }}>
                {product.price}💲
              </span>
            </Card.Text>
            <Card.Text
              style={{ color: "#272727", fontSize: "22px", fontWeight: "bold" }}
            >
              Rating:{" "}
              <span style={{ fontSize: "18px", marginLeft: "4px" }}>
                {product.rating}⭐
              </span>
            </Card.Text>
            {isProductInCart ? (
              <>
                <Button variant="success" disabled style={{marginRight:"10px"}}>
                  <FontAwesomeIcon icon={faShoppingCart} /> Item Already Added To Cart
                </Button>
                <Button
                  style={{ backgroundColor: "black", borderColor: "black" }}
                  onClick={() => navigate("/cart")}
                >
                  Go To Cart <FontAwesomeIcon icon={faTruckArrowRight} />  
                </Button>
              </>
            ) : (
              <Button
                style={{ backgroundColor: "black", borderColor: "black" }}
                onClick={handleAddToCart}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
              </Button>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
