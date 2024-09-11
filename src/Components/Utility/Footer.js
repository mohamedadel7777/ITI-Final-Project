import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import phone from "../../images/phone.png";
const Footer = () => {
  return (
    <div
      className="footer-background footer mt-3 pt-2"
      style={{ maxHeight: "50px" }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className="footer-shoot">Terms and Conditions</div>
            <div className="footer-shoot mx-3">Privacy Policy</div>
            <div className="footer-shoot mx-2">Contact US </div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center "
          >
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="phone" />
              <p className="footer-phone">01234567891</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={facebook} alt="facebook" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={instagram} alt="instagram" />
            </div>
            <div style={{ cursor: "pointer" }} className="">
              <img width="20px" height="20px" src={twitter} alt="twitter" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
