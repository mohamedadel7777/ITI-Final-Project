// rafce => React Arrow Function
import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import { useSelector } from "react-redux";




const HomePage = () => {
  const user = useSelector((state) => state.auth.user); 
  console.log(user.Password)

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider/>
      <HomeCategory />
      <CardProductContainer title={"Best Seller"} btnTitle={"More"} />
      <DiscountSection />
      <CardProductContainer title={"Trending"}  />
      <BrandFeatured title={"Common Brands"} btnTitle={"More Brands"} />
    </div>
  );
};
console.log()

export default HomePage;
