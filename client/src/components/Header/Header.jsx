import React from "react";

import { FaShopify } from "react-icons/fa";
import { CiSearch, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoShirtSharp } from "react-icons/io5";
import { MdComputer, MdLocalGroceryStore } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { ImHappy2 } from "react-icons/im";

import HeaderComp from "./HeaderComp";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="bg-black h-14 p-4 md:h-8 flex items-center justify-center ">
        <p className="text-white text-xs text-center ">
          Due to the <span className="text-md font-semibold">TESTING</span>{" "}
          phase , orders may be processed with a slight delay
        </p>
      </div>
      <div className="px-20 py-6">
        <div className="flex gap-4 items-center">
          <div className="flex items-center justify-center w-[11em] mr-4 px-4">
            <span>
              <FaShopify className="text-4xl" />
            </span>
            <p className="text-3xl font-semibold">Shopify</p>
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
          <button className="bg-black text-white w-24 h-9 rounded-3xl font-semibold mr-4  flex items-center justify-center ">
            Sign In
          </button>
          <button className="h-12 w-12 rounded-3xl bg-orange-200 relative flex items-center justify-center">
            <CiShoppingCart className="text-3xl" />
            <button className="w-5 h-5 bg-red-500 text-white font-semibold rounded-3xl absolute -top-1 -right-1 flex items-center justify-center ">
              0
            </button>
          </button>
        </div>
        <div className="px-4 py-6 grid grid-cols-[2fr_10fr]">
          <div className="h-[3.5em] w-full bg-black text-white flex items-center justify-center gap-2 p-4 rounded-3xl">
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
