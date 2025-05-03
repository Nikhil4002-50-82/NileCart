import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";

// import { FaShopify } from "react-icons/fa";
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoShirtSharp } from "react-icons/io5";
// import { MdComputer, MdLocalGroceryStore } from "react-icons/md";
// import { PiBagSimpleFill } from "react-icons/pi";
// import { GiConverseShoe } from "react-icons/gi";
// import { ImHappy2 } from "react-icons/im";
import { FaCartArrowDown } from "react-icons/fa6";

// import HeaderComp from "./HeaderComp";

// gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const navigate = useNavigate();
  const mainHeader = useRef();

  // useGSAP(() => {
  //   let trigger;
  //   const setupTrigger = () => {
  //     if (window.innerWidth >= 768) {
  //       trigger = gsap.to(mainHeader.current, {
  //         y: -115,
  //         boxShadow: " 0 4px 6px rgba(0, 0, 0, 0.1)",
  //         position: "fixed",
  //         zIndex: 50,
  //         duration: 0.001,
  //         scrollTrigger: {
  //           trigger: mainHeader.current,
  //           start: "top top",
  //           toggleActions: "play none none reverse",
  //         },
  //       });
  //     }
  //   };
  //   setupTrigger();
  //   window.addEventListener("resize", () => {
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //     setupTrigger();
  //   });
  //   return () => {
  //     window.removeEventListener("resize", setupTrigger);
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);

  return (
    <div className="relative">
      <div className="h-[17.5em] md:h-[10em]">
      <div className="bg-white lg:fixed w-full z-50 lg:shadow-custom lg:shadow-orange-50" >
      <div
        className="bg-custom h-12 sm:h-14 md:h-8 flex items-center justify-center 
                   px-4 sm:px-6 md:px-8"
      >
        <p className="text-white text-xs sm:text-sm text-center">
          Due to the{" "}
          <span className="text-sm sm:text-md font-semibold">TESTING</span>{" "}
          phase, orders may be processed with a slight delay
        </p>
      </div>
      <div className="py-3 sm:py-4 md:py-6">
        <div
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 
                     px-4 sm:px-6 md:px-10 lg:px-20"
        >
          <div
            className="flex items-center justify-between w-full sm:w-auto 
                       sm:justify-center gap-6"
          >
            <div
              className="flex items-center text-custom cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <FaCartArrowDown className="text-3xl md:text-5xl" />
              <p
                className="text-xl sm:text-2xl md:text-3xl font-bold text-black 
                           ml-1"
              >
                NileCart
              </p>
            </div>
            <div
              className="h-10 sm:h-12 w-10 sm:w-12 rounded-3xl bg-orange-200 
                         relative flex items-center justify-center sm:hidden cursor-pointer"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <CiShoppingCart className="text-2xl sm:text-3xl" />
              <div
                className="w-4 sm:w-5 h-4 sm:h-5 bg-custom text-white 
                           font-semibold rounded-3xl absolute -top-1 -right-1 
                           flex items-center justify-center text-xs"
              >
                21
              </div>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full 
                       sm:w-auto sm:items-center"
          >
            <div
              className="h-[3em] sm:h-[3.5em] w-full sm:w-[10em] md:w-[11em] 
                         border-2 border-gray-400 rounded-lg flex flex-col 
                         justify-center p-3 sm:p-4"
            >
              <p className="text-xs sm:text-sm text-gray-400 font-semibold">
                Your Location
              </p>
              <p className="text-sm sm:text-md font-semibold">India</p>
            </div>
            <div
              className="bg-gray-200 w-full sm:w-[18em] md:w-[22em] lg:w-[30em] 
                         rounded-lg flex items-center justify-center"
            >
              <input
                type="text"
                placeholder="Search for products..."
                className="h-[3em] sm:h-[3.5em] p-3 sm:p-4 bg-gray-200 w-[90%] 
                           focus:outline-none text-xs sm:text-sm"
              />
              <CiSearch className="text-xl sm:text-2xl md:text-3xl" />
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              className="bg-custom text-white w-full h-10 sm:w-20 md:w-24 
                         sm:h-12 md:h-9 rounded-3xl font-semibold flex 
                         items-center justify-center text-sm sm:text-base"
            >
              Sign In
            </button>
            <div
              className="hidden sm:flex h-10 sm:h-12 w-10 sm:w-12 rounded-3xl 
                         bg-orange-200 relative items-center justify-center cursor-pointer"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <CiShoppingCart className="text-2xl sm:text-3xl" />
              <div
                className="w-4 sm:w-5 h-4 sm:h-5 bg-custom text-white 
                           font-semibold rounded-3xl absolute -top-1 -right-1 
                           flex items-center justify-center text-xs"
              >
                21
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative">
          <div className="h-[15em] md:h-[10em]">
            <div
              ref={mainHeader}
              className="px-4 sm:px-6 md:px-10 lg:px-20 py-3 sm:py-4 md:py-6 
                     grid grid-cols-1 sm:grid-cols-[2fr_10fr] gap-3 sm:gap-4 
                     bg-white"
            >
              <div
                className="h-[3em] sm:h-[3.5em] w-full sm:w-auto bg-custom 
                       text-white flex items-center justify-center gap-2 p-3 
                       sm:p-4 rounded-3xl"
              >
                <CiMenuBurger className="text-lg sm:text-xl md:text-2xl" />
                <p className="w-[60%] text-xs sm:text-sm font-semibold text-center">
                  ALL CATEGORIES
                </p>
                <IoIosArrowDown className="text-lg sm:text-xl" />
              </div>
              <div
                className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 
                       px-0 sm:px-4"
              >
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
        </div> */}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Header;
