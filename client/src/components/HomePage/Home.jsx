import React from "react";
import FeaturedCategories from "./FeaturedCategories.jsx";
import TwoColumnLayout from "./TwoColumnLayout.jsx";
import Carousel from "./Carousel.jsx";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Carousel />
      <FeaturedCategories />
      <TwoColumnLayout />
    </div>
  );
};

export default Home;
