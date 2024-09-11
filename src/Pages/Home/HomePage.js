// rafce => React Arrow Function
import React from "react";
import NavBarLogin from "../../Components/Utility/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";
import Footer from "../../Components/Utility/Footer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
      <CardProductContainer title={"Best Seller"} btnTitle={"More"} />
      <DiscountSection />
      <CardProductContainer title={"Trending"} btnTitle={"More"} />
      <BrandFeatured title={"Common Brands"} btnTitle={"More Brands"} />
      <Footer/>
    </div>
  );
};

export default HomePage;
