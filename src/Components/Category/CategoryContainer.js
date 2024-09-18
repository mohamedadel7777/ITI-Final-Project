import React from "react";
import { Row, Container } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import laptop from "../../images/laptop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

const CategoryContainer = () => {
  return (
    <Container>
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard background={"#0075ff"} img={clothe} title="Sale" />
        <CategoryCard background={"#f4dba5"} img={cat2} title="Sale" />
        <CategoryCard background={"#e91e63"} img={laptop} title="Sale" />
        <CategoryCard background={"#673ab7"} img={sale} title="Sale" />
        <CategoryCard background={"#4caf50"} img={pic} title="Sale" />
        <CategoryCard background={"#0075ff"} img={clothe} title="Sale" />
        <CategoryCard background={"#f4dba5"} img={laptop} title="Sale" />
        <CategoryCard background={"#0075ff"} img={cat2} title="Sale" />
        <CategoryCard background={"#4caf50"} img={clothe} title="Sale" />
        <CategoryCard background={"#0075ff"} img={cat2} title="Sale" />
        <CategoryCard background={"#e91e63"} img={sale} title="Sale" />
        <CategoryCard background={"#673ab7"} img={pic} title="Sale" />
      </Row>
    </Container>
  );
};

export default CategoryContainer;
