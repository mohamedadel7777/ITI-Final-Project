import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import earpods from "../../images/Earpods.webp";
import macbook from "../../images/Mac.webp";
import iPhone from "../../images/iPhone.jpeg";
import smartWatch from "../../images/SmartWatch.webp";
import iPadPro from "../../images/iPadPro.jpeg";
import AirPodsMax from "../../images/AirPodsMax.jpeg";
import HomePodMini from "../../images/HomePodMini.jpeg";
import AppleTV4K from "../../images/AppleTV4K.jpeg";
import AppleWatchSeries8 from "../../images/AppleWatchSeries8.jpeg"
import MacBookAirM2 from "../../images/MacBookAirM2.jpeg"
import iPhone14Pro from "../../images/iPhone14Pro.jpeg"
import HomePod from "../../images/HomePod.jpeg"


export const Products = [
  {
    id: 1,
    name: "earpods pro g2",
    image: earpods,
    description:
      "Immerse yourself in crystal-clear sound with our premium Earpods. Ergonomically designed for a comfortable fit, these Earpods deliver rich, high-quality audio, deep bass, and crisp highs. With seamless integration for hands-free calling and a sleek, tangle-free cord, they’re perfect for on-the-go use. Compatible with a variety of devices, they are the ideal companion for music lovers and professionals alike",
    price: "380",
    rating: 4.1,
  },
  {
    id: 2,
    name: "macbook pro g3",
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
    name: "apple watch s10",
    image: smartWatch,
    description:
      "Stay connected and track your health effortlessly with our Smartwatch. Equipped with a high-resolution touch display, heart rate monitoring, and fitness tracking features, it’s your personal assistant on your wrist. Sync with your smartphone to receive notifications, manage calls, and track your workouts. With a sleek, modern design and customizable watch faces, this smartwatch is the perfect blend of style and functionality",
    price: "750",
    rating: 4.8,
  },
  {
    id: 5,
    name: "iPad Pro 12.9-inch",
    image: iPadPro,
    description:
      "The iPad Pro is a powerful tablet that combines the versatility of a laptop with the portability of a tablet. Its large, high-resolution display offers stunning visuals for creative work, gaming, and entertainment. Powered by a powerful processor, it handles demanding tasks with ease, making it ideal for professionals and students alike. With its support for Apple Pencil and Magic Keyboard, the iPad Pro is a versatile tool for productivity and creativity.",
    price: "1000",
    rating: 4.9,
  },
  {
    id: 6,
    name: "AirPods Max",
    image: AirPodsMax,
    description:
      "Immerse yourself in studio-quality sound with the AirPods Max. These premium headphones feature adaptive noise cancellation, spatial audio, and custom-designed drivers for a truly immersive listening experience. With a comfortable, over-ear design and long battery life, the AirPods Max are perfect for music lovers and professionals who demand the best audio quality.",
    price: "500",
    rating: 4.7,
  },
  {
    id: 7,
    name: "HomePod mini",
    image: HomePodMini,
    description:
      "The HomePod mini is a compact smart speaker that delivers powerful sound and intelligent features. With Siri integration, you can control your smart home devices, play music, set alarms, and more. Its sleek design and rich, room-filling sound make it a perfect addition to any home.",
    price: "150",
    rating: 4.4,
  },
  {
    id: 8,
    name: "Apple TV 4K",
    image: AppleTV4K,
    description:
      "Enjoy stunning 4K HDR content with the Apple TV 4K. Its powerful processor delivers smooth performance for gaming, streaming, and more. With Siri integration, you can easily find your favorite shows and movies, control your smart home devices, and enjoy a seamless entertainment experience.",
    price: "3000",
    rating: 4.5,
  },
  {
    id: 9,
    name: "Apple Watch Series 8",
    image: AppleWatchSeries8,
    description:
      "The Apple Watch Series 8 is a versatile smartwatch that offers advanced health features, fitness tracking, and seamless integration with your iPhone. With its always-on display, heart rate monitoring, and crash detection, it's your personal health companion. Enjoy various workout modes, sleep tracking, and customizable watch faces to suit your style.",
    price: "499",
    rating: 4.8,
  },
  {
    id: 10,
    name: "MacBook Air M2",
    image: MacBookAirM2,
    description:
      "The MacBook Air M2 is a lightweight and powerful laptop that delivers impressive performance for everyday tasks and creative workflows. Its sleek design, long battery life, and stunning Retina display make it a versatile choice for students, professionals, and creatives alike.",
    price: "1299",
    rating: 4.7,
  },
  {
    id: 11,
    name: "iPhone 14 Pro",
    image: iPhone14Pro,
    description:
      "The iPhone 14 Pro is a premium smartphone with a stunning Dynamic Island, powerful A16 Bionic chip, and a pro-grade camera system. Capture stunning photos and videos, enjoy immersive AR experiences, and experience lightning-fast performance. With its durable design and long battery life, the iPhone 14 Pro is the ultimate companion for work and play.",
    price: "999",
    rating: 4.9,
  },
  {
    id: 12,
    name: "HomePod",
    image: HomePod,
    description:
      "The HomePod is a powerful smart speaker that delivers rich, room-filling sound and intelligent features. With Siri integration, control your smart home devices, play music, set alarms, and more. Its sleek design and premium audio quality make it a perfect addition to any home.",
    price: "349",
    rating: 4.6,
  },
];

const CardProductContainer = ({ title, btnTitle }) => {
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
          productTitle={"Mac Book Pro"}
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
          productTitle={"Apple TV 4K"}
          price={3000}
          rating={4.8}
          productId={8}
        />
      </Row>
    </Container>
  );
};

export default CardProductContainer;
