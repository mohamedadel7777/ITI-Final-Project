import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import earpods from "../../images/Earpods.webp";
import macbook from "../../images/Mac.webp";
import iPhone from "../../images/iPhone.jpeg";
import smartWatch from "../../images/SmartWatch.webp";

const CardProductContainer = ({title,btnTitle}) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btnTitle} />
      <Row className="d-flex my-2 justify-content-between">
        <ProductCard
          imgName={earpods}
          productTitle={"EarPods Pro"}
          price={380}
          rating={4.1}
        />
        <ProductCard
          imgName={macbook}
          productTitle={"Mac book Pro"}
          price={2600}
          rating={4.6}
        />
        <ProductCard
          imgName={iPhone}
          productTitle={"iPhone 15 Pro Max"}
          price={1200}
          rating={4.5}
        />
        <ProductCard
          imgName={smartWatch}
          productTitle={"Apple Watch S3"}
          price={750}
          rating={4.8}
        />
      </Row>
    </Container>
  );
};

export default CardProductContainer;
