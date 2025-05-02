import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <Carousel
        width="100%"
        showArrows={true}
        transitionTime={1000}
        className="mb-4 max-w-[95vw] "
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        dynamicHeight={true}
      >
        <div>
          <img
            src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg"
            alt="Slide 1"
            className="object-cover h-[30vh] sm:h-[40vh] md:h-[50vh] w-full"
          />
        </div>
        <div>
          <img
            src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
            alt="Slide 2"
            className="object-cover h-[30vh] sm:h-[40vh] md:h-[50vh] w-full"
          />
        </div>
        <div>
          <img
            src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg"
            alt="Slide 3"
            className="object-cover h-[30vh] sm:h-[40vh] md:h-[50vh] w-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
