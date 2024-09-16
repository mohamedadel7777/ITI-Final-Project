import React from "react";
import ProductCard from "./ProductCard";
import earpods from "../../images/Earpods.webp";
import macbook from "../../images/Mac.webp";
import iPhone from "../../images/iPhone.jpeg";
import smartWatch from "../../images/SmartWatch.webp";
import { Container, Row } from "react-bootstrap";

const ProductContainer = () => {
  return (
      <Container>
        <Row className="my-1 d-flex justify-content-between">
          <ProductCard
            imgName={macbook}
            productTitle={"Mac book Pro"}
            price={2600}
            rating={4.6}
            productId={2}
          />
          <ProductCard
            imgName={earpods}
            productTitle={"EarPods Pro"}
            price={380}
            rating={4.1}
            productId={1}
          />
          <ProductCard
            imgName={iPhone}
            productTitle={"iPhone 15 Pro Max"}
            price={1200}
            rating={4.5}
            productId={3}
          />
          <ProductCard
            imgName={smartWatch}
            productTitle={"Apple Watch S10"}
            price={750}
            rating={4.8}
            productId={4}
          />
        </Row>
      </Container>
  );
};

export default ProductContainer;
