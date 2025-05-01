import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { FaShopify } from "react-icons/fa";
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoShirtSharp } from "react-icons/io5";
import { MdComputer, MdLocalGroceryStore } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { ImHappy2 } from "react-icons/im";

import HeaderComp from "./HeaderComp";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const mainHeader = useRef();

  useGSAP(() => {
    gsap.to(mainHeader.current, {
      y: -115,
      position: "fixed",
      zIndex: "50",
      duration: "0.001s",
      scrollTrigger: {
        trigger: mainHeader.current,
        start: "top top",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-custom h-14 p-4 md:h-8 flex items-center justify-center ">
        <p className="text-white text-xs text-center ">
          Due to the <span className="text-md font-semibold">TESTING</span>{" "}
          phase , orders may be processed with a slight delay
        </p>
      </div>
      <div className=" py-6">
        <div className="flex gap-4 items-center px-20">
          <div className="flex items-center justify-center w-[11em] mr-4 px-4 text-custom">
            <span>
              <FaShopify className="text-5xl" />
            </span>
            <p className="text-3xl font-bold text-black">Shopify</p>
          </div>
          <div className="h-[3.5em] w-[11em] border-2 border-gray-400 rounded-lg flex flex-col justify-center items-around p-4">
            <p className="text-sm text-gray-400 font-semibold">Your Location</p>
            <p className="text-md font-semibold">All</p>
          </div>
          <div className="bg-gray-200 w-[30em] rounded-lg mr-10 flex items-center justify-center ">
            <input
              type="text"
              placeholder="Search for products..."
              className="h-[3.5em] p-4 bg-gray-200 w-[90%] focus:outline-none "
            />
            <CiSearch className="text-3xl" />
          </div>
          <button className="bg-custom text-white w-24 h-9 rounded-3xl font-semibold mr-4  flex items-center justify-center ">
            Sign In
          </button>
          <div className="h-12 w-12 rounded-3xl bg-orange-200 relative flex items-center justify-center">
            <CiShoppingCart className="text-3xl" />
            <div className="w-5 h-5 bg-custom text-white font-semibold rounded-3xl absolute -top-1 -right-1 flex items-center justify-center ">
              0
            </div>
          </div>
        </div>
        <div
          ref={mainHeader}
          className="px-20 py-6 grid grid-cols-[2fr_10fr] bg-white"
        >
          <div className="h-[3.5em] w-full bg-custom text-white flex items-center justify-center gap-2 p-4 rounded-3xl">
            <CiMenuBurger className="text-2xl" />
            <p className="w-[60%] text-sm font-semibold text-center ">
              ALL CATEGORIES
            </p>
            <IoIosArrowDown />
          </div>
          <div className="px-4 flex flex-wrap items-center gap-6">
            <HeaderComp Component={IoShirtSharp} name="FASHION" />
            <HeaderComp Component={MdComputer} name="ELECTRONICS" />
            <HeaderComp Component={PiBagSimpleFill} name="BAGS" />
            <HeaderComp Component={GiConverseShoe} name="FOOTWEAR" />
            <HeaderComp Component={MdLocalGroceryStore} name="GROCERIES" />
            <HeaderComp Component={ImHappy2} name="BEAUTY" />
            <HeaderComp Component={ImHappy2} name="WELLNESS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
