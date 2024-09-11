import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptops from "../../images/laptops.png";

const DiscountSection = () => {
  return (
    <Container>
      <Row className="discount-backColor my-3  mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div
            className="discount-title"
            style={{ textTransform: "capitalize" }}
          >
            Up to 30% off on laptops
          </div>
        </Col>
        <Col sm="6">
          <img className="discount-img" src={laptops} alt="laptops" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
