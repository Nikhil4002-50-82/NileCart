import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <Carousel width="85vw" showArrows="true" transitionTime="1000">
        <div>
          <img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" />
        </div>
        <div>
          <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" />
        </div>
        <div>
          <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
