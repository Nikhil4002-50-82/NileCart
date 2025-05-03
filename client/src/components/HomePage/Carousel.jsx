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
        showStatus={true}
        showThumbs={false}
        infiniteLoop={false}
        autoPlay={true}
        interval={5000}
        dynamicHeight={true}
      >
        <div className="h-[20vh] md:h-[70vh] w-full bg-cover bg-center bg-[url('https://m.media-amazon.com/images/G/31/img23/Wireless/SAMSUNG/MayART25/30April/neww/1242_Live_2c_07.gif')]">
        </div>
        <div className="h-[20vh] md:h-[70vh] w-full bg-cover bg-center bg-[url('https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/A55/D237554350_IN_MAYART25_Samsung_S24Ultra1242x450.gif')]">
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/MayArt/A55/Header.gif"
            alt="Slide 1"
            className="object-cover h-[20vh] md:h-[70vh] w-full"
          />
        </div>
        
        
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
