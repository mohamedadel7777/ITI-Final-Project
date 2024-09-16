import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import earpods from "../../images/Earpods.webp";
import macbook from "../../images/Mac.webp";
import iPhone from "../../images/iPhone.jpeg";
import smartWatch from "../../images/SmartWatch.webp";

export const Products = [
<<<<<<< HEAD
  {
    id: 1,
    name: "earpods pro",
    image: earpods,
    description:
      "Immerse yourself in crystal-clear sound with our premium Earpods. Ergonomically designed for a comfortable fit, these Earpods deliver rich, high-quality audio, deep bass, and crisp highs. With seamless integration for hands-free calling and a sleek, tangle-free cord, they’re perfect for on-the-go use. Compatible with a variety of devices, they are the ideal companion for music lovers and professionals alike",
    price: "380",
    rating: 4.1,
  },

  {
    id: 2,
    name: "macbook pro",
    image: macbook,
    description:
      "The MacBook combines power, style, and portability into one. Featuring a sleek aluminum body and a Retina display for stunning visuals, this laptop is perfect for professionals, creatives, and students. Powered by the latest processor, it offers lightning-fast performance for multitasking, video editing, or heavy software use. With all-day battery life, the MacBook ensures you stay productive wherever you go.",
    price: "2600",
    rating: 4.6,
  },

  {
    id: 3,
    name: "iphone 15 pro max",
    image: iPhone,
    description:
      "The iPhone redefines what a smartphone should be. With its stunning edge-to-edge OLED display, lightning-fast performance powered by the latest chipset, and an advanced camera system that captures professional-quality photos and videos, the iPhone is designed to deliver a seamless user experience. Packed with innovative features such as Face ID, 5G capability, and cutting-edge security, the iPhone is your all-in-one solution for work and play",
    price: "1200",
    rating: 4.5,
  },

  {
    id: 4,
    name: "apple watch s 10",
    image: smartWatch,
    description:
      "Stay connected and track your health effortlessly with our Smartwatch. Equipped with a high-resolution touch display, heart rate monitoring, and fitness tracking features, it’s your personal assistant on your wrist. Sync with your smartphone to receive notifications, manage calls, and track your workouts. With a sleek, modern design and customizable watch faces, this smartwatch is the perfect blend of style and functionality",
    price: "750",
    rating: 4.8,
  },
];

const CardProductContainer = ({ title, btnTitle }) => {
=======
  { id: 1, name: 'earpods', image: earpods, description: 'Immerse yourself in crystal-clear sound with our premium Earpods. Ergonomically designed for a comfortable fit, these Earpods deliver rich, high-quality audio, deep bass, and crisp highs. With seamless integration for hands-free calling and a sleek, tangle-free cord, they’re perfect for on-the-go use. Compatible with a variety of devices, they are the ideal companion for music lovers and professionals alike', price: '380', rating: 4.1 },

  { id: 2, name: 'macbook', image: macbook, description: 'The MacBook combines power, style, and portability into one. Featuring a sleek aluminum body and a Retina display for stunning visuals, this laptop is perfect for professionals, creatives, and students. Powered by the latest processor, it offers lightning-fast performance for multitasking, video editing, or heavy software use. With all-day battery life, the MacBook ensures you stay productive wherever you go.', price: '2600', rating: 4.6 },

  { id: 3, name: 'iphone', image: iPhone, description: 'The iPhone redefines what a smartphone should be. With its stunning edge-to-edge OLED display, lightning-fast performance powered by the latest chipset, and an advanced camera system that captures professional-quality photos and videos, the iPhone is designed to deliver a seamless user experience. Packed with innovative features such as Face ID, 5G capability, and cutting-edge security, the iPhone is your all-in-one solution for work and play', price: '1200', rating: 4.5 }, 

  { id: 4, name: 'smartwatch', image: smartWatch, description: 'Stay connected and track your health effortlessly with our Smartwatch. Equipped with a high-resolution touch display, heart rate monitoring, and fitness tracking features, it’s your personal assistant on your wrist. Sync with your smartphone to receive notifications, manage calls, and track your workouts. With a sleek, modern design and customizable watch faces, this smartwatch is the perfect blend of style and functionality', price: '750', rating: 4.8 }
  
];

const CardProductContainer = ({title,btnTitle}) => {
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
  return (
    <Container>
      <SubTitle title={title} btntitle={btnTitle} pathText="/AllProductsPage" />
      <Row className="d-flex my-2 justify-content-between">
        <ProductCard
          imgName={earpods}
          productTitle={"EarPods Pro"}
          price={380}
          rating={4.1}
          productId={1}
        />
        <ProductCard
          imgName={macbook}
          productTitle={"Mac book Pro"}
          price={2600}
          rating={4.6}
          productId={2}
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
<<<<<<< HEAD
          productId={4}
=======
          productId = {4}
>>>>>>> 7a68e63663739d8565d6a17b398f4c0d6d8af009
        />
      </Row>
    </Container>
  );
};

export default CardProductContainer;
