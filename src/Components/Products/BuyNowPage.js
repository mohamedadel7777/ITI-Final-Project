// src/components/BuyNowPage.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const BuyNowPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [address, setAddress] = useState("");
  const [orderDone, setOrderDone] = useState(false);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleBuyNow = () => {
    setOrderDone(true);
  };

  if (orderDone) {
    return (
      <Container
        style={{ minHeight: "550px" }}
        className="d-flex flex-column align-content-center justify-content-center"
      >
        <h2
          style={{
            color: "#0075ff",
            borderColor: "#0075ff",
          }}
          className="admin-content-text-products"
        >
          Order Done!
        </h2>
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "capitalize",
            marginTop: "40px",
            fontSize: "40px",
          }}
        >
          Your order has been placed successfully! 🎉
        </p>
      </Container>
    );
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
        Buy Now
      </h2>
      {cartItems.map((item) => (
        <Row key={item.id} className="my-3">
          <Col md={3}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "70%", height: "auto" }}
            />
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
              <span
                style={{
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              >
                {item.quantity}
              </span>
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
              fontSize: "40px",
              color: "#0075ff",
              backgroundColor:"black",
              textAlign: "center",
              width: "fit-content",
              margin: "auto",
              padding: "10px",
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
      </Row>
      <Row>
        <Col md={12}>
          <Form>
            <Row className="justify-content-center">
              <Col md={6}>
                <Form.Group controlId="address">
                  <Form.Label
                    style={{
                      color: "#272727",
                      fontSize: "22px",
                      fontWeight: "bold",
                    }}
                  >
                    Address:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="form-control"
                    style={{
                      padding: "15px",
                      fontSize: "18px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={6}>
                <Button
                  variant="primary"
                  onClick={handleBuyNow}
                  disabled={!address}
                  style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "18px",
                    borderRadius: "10px",
                    backgroundColor: "#0075ff",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Buy Now
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BuyNowPage;
