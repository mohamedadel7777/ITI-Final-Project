import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import BrandCard from "./BrandCard";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";

const BrandFeatured = ({ title, btnTitle }) => {
  return (
    <Container>
    <SubTitle title={title} btntitle={btnTitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
        <BrandCard img={brand1} />
        <BrandCard img={brand3} />
      </Row>
    </Container>
  );
};

export default BrandFeatured;
