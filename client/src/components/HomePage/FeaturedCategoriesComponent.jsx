import React, { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FeaturedCategoriesComponent = ({ name, src, bg }) => {
  const img = useRef();
  const tl1 = gsap.timeline({ paused: true });
  useGSAP(() => {
    tl1.to(img.current, {
      y: 20,
    });
    tl1.to(
      img.current,
      {
        y: -7,
        duration: 1.5,
        delay:0.015,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true,
      },
      []
    );
  });
  return (
    <div className="flex flex-col items-center justify-center mb-2 py-3">
      <div
        className={`h-[7.8em] w-[7.8em] rounded-[50%] flex items-center justify-center mb-1 hover:shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]`}
        style={{ backgroundColor: bg }}
        onMouseEnter={() => tl1.restart()}
        onMouseLeave={() => tl1.pause()}
      >
        <img
          ref={img}
          src={src}
          alt=""
          className="h-[5em] w-[6em] rounded-[50%]"
          onMouseEnter={() => setAnimation(true)}
          onMouseLeave={() => setAnimation(false)}
        />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-md font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default FeaturedCategoriesComponent;
