import React from "react";
import FeaturedCategories from "./FeaturedCategories.jsx";
import TwoColumnLayout from "./TwoColumnLayout.jsx";
import Carousel from "./Carousel.jsx";
import Header from "../Header/Header.jsx";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Carousel />
      <FeaturedCategories />
      <TwoColumnLayout />
    </div>
  );
};

export default Home;
