import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FeaturedCategoriesComponent = ({ name, src, bg }) => {
  const img = useRef();
  const container = useRef();
  const tl1 = gsap.timeline({ paused: true });

  useGSAP(() => {
    const getYValue = () => {
      const containerWidth = container.current?.offsetWidth || 100; // Fallback width
      return containerWidth * 0.1; // Scale y relative to container (10% of width)
    };

    tl1
      .to(img.current, {
        y: getYValue(),
      })
      .to(
        img.current,
        {
          y: -getYValue() * 0.35, // Scale negative y (35% of initial y)
          duration: 1.5,
          delay: 0.015,
          ease: "bounce.out",
          repeat: -1,
          yoyo: true,
        },
        []
      );
  }, []);

  return (
    <div
      ref={container}
      className="flex flex-col items-center justify-center mb-1 sm:mb-2 py-2 sm:py-3"
    >
      <div
        className="h-[6em] sm:h-[7em] md:h-[7.8em] w-[6em] sm:w-[7em] md:w-[7.8em] rounded-[50%] flex items-center justify-center mb-1 hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]"
        style={{ backgroundColor: bg }}
        onMouseEnter={() => tl1.restart()}
        onMouseLeave={() => tl1.pause()}
      >
        <img
          ref={img}
          src={src}
          alt=""
          className="h-[4em] sm:h-[4.5em] md:h-[5em] w-[4.5em] sm:w-[5em] md:w-[6em] rounded-[50%] object-contain"
        />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-sm sm:text-md font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default FeaturedCategoriesComponent;
