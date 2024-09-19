import React from "react";
import ProductCard from "./ProductCard";
import earpods from "../../images/Earpods.webp";
import macbook from "../../images/Mac.webp";
import iPhone from "../../images/iPhone.jpeg";
import smartWatch from "../../images/SmartWatch.webp";
import iPadPro from "../../images/iPadPro.jpeg";
import AirPodsMax from "../../images/AirPodsMax.jpeg";
import HomePodMini from "../../images/HomePodMini.jpeg";
import AppleTV4K from "../../images/AppleTV4K.jpeg";
import { Container, Row } from "react-bootstrap";
import AppleWatchSeries8 from "../../images/AppleWatchSeries8.jpeg"
import MacBookAirM2 from "../../images/MacBookAirM2.jpeg"
import iPhone14Pro from "../../images/iPhone14Pro.jpeg"
import HomePod from "../../images/HomePod.jpeg"


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
        <ProductCard
          imgName={iPadPro}
          productTitle={"IPad Pro 12.9-Inch"}
          price={1000}
          rating={4.9}
          productId={5}
        />
        <ProductCard
          imgName={AirPodsMax}
          productTitle={"AirPods Max"}
          price={500}
          rating={4.7}
          productId={6}
        />
        <ProductCard
          imgName={HomePodMini}
          productTitle={"Home Pod Mini"}
          price={150}
          rating={4.4}
          productId={7}
        />
        <ProductCard
          imgName={AppleTV4K}
          productTitle={"AppleTV4K"}
          price={3000}
          rating={4.8}
          productId={8}
        />
                <ProductCard
          imgName={AppleWatchSeries8}
          productTitle={"Apple Watch Series 8"}
          price={499}
          rating={4.8}
          productId={9}
        />
        <ProductCard
          imgName={MacBookAirM2}
          productTitle={"Mac BookAir M2"}
          price={1299}
          rating={4.8}
          productId={10}
        />
        <ProductCard
          imgName={iPhone14Pro}
          productTitle={"iPhone 14 Pro"}
          price={999}
          rating={4.9}
          productId={11}
        />
        <ProductCard
          imgName={HomePod}
          productTitle={"Home Pod"}
          price={349}
          rating={4.6}
          productId={12}
        />
      </Row>
    </Container>
  );
};

export default ProductContainer;
