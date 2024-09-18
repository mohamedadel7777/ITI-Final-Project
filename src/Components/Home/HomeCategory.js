import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import laptop from "../../images/laptop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

const HomeCategory = ({title,btnTitle}) => {
  return (
    <Container>
      <SubTiltle title={title} btntitle={btnTitle} pathText="/AllCatagoriesPage" />
      <Row className="d-flex my-2 justify-content-between">
        <CategoryCard title={"Sale"} background={"#0075ff"} img={clothe} />
        <CategoryCard title={"Sale"} background={"#f4dba5"} img={cat2} />
        <CategoryCard title={"Sale"} background={"#e91e63"} img={laptop} />
        <CategoryCard title={"Sale"} background={"#673ab7"} img={sale} />
        <CategoryCard title={"Sale"} background={"#4caf50"} img={pic} />
        <CategoryCard title={"Sale"} background={"#0075ff"} img={clothe} />
      </Row>
    </Container>
  );
};

export default HomeCategory;
