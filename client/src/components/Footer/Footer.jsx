import React from "react";
// import FooterContent from "./FooterContent";
import NewsletterCover from "../Footer/NewsletterCover";
import { IoLogoInstagram } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaTshirt,
  FaBus,
  FaRupeeSign,
} from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <NewsletterCover />
      {/* <div className="px-4 sm:px-6 md:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 mb-4">
          <div className="flex items-center p-2 sm:p-3 md:p-4 border-r-[0.2em] border-gray-200 md:border-r md:border-gray-200">
            <FaTshirt className="text-gray-700 text-2xl sm:text-2.5xl md:text-3xl mr-1 sm:mr-2" />
            <p className="text-xs sm:text-sm">Everyday fresh products</p>
          </div>
          <div className="flex items-center p-2 sm:p-3 md:p-4 border-r-[0.2em] border-gray-200 md:border-r md:border-gray-200">
            <FaBus className="text-gray-700 text-2xl sm:text-2.5xl md:text-3xl mr-1 sm:mr-2" />
            <p className="text-xs sm:text-sm">Free delivery for order over ₹5600</p>
          </div>
          <div className="flex items-center p-2 sm:p-3 md:p-4 border-r-[0.2em] border-gray-200 sm:border-r-0 md:border-r md:border-gray-200">
            <RiDiscountPercentFill className="text-gray-700 text-2xl sm:text-2.5xl md:text-3xl mr-1 sm:mr-2" />
            <p className="text-xs sm:text-sm">Daily Mega Discounts</p>
          </div>
          <div className="flex items-center p-2 sm:p-3 md:p-4">
            <FaRupeeSign className="text-gray-700 text-2xl sm:text-2.5xl md:text-3xl mr-1 sm:mr-2" />
            <p className="text-xs sm:text-sm">Best price on the market</p>
          </div>
        </div>
        <hr className="border-[0.1em] border-gray-200 mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          <FooterContent
            heading="FRUIT & VEGETABLES"
            item1="Fresh Vegetables"
            item2="Herbs & Seasonings"
            item3="Fresh Fruits"
            item4="Cuts & Sprouts"
            item5="Exotic Fruits & Veggies"
            item6="Packaged Produce"
            item7="Party Trays"
          />
          <FooterContent
            heading="BREAKFAST & DAIRY"
            item1="Fresh Vegetables"
            item2="Herbs & Seasonings"
            item3="Fresh Fruits"
            item4="Cuts & Sprouts"
            item5="Exotic Fruits & Veggies"
            item6="Packaged Produce"
            item7="Party Trays"
          />
          <FooterContent
            heading="MEAT & SEAFOOD"
            item1="Fresh Vegetables"
            item2="Herbs & Seasonings"
            item3="Fresh Fruits"
            item4="Cuts & Sprouts"
            item5="Exotic Fruits & Veggies"
            item6="Packaged Produce"
            item7="Party Trays"
          />
          <FooterContent
            heading="BEVERAGES"
            item1="Fresh Vegetables"
            item2="Herbs & Seasonings"
            item3="Fresh Fruits"
            item4="Cuts & Sprouts"
            item5="Exotic Fruits & Veggies"
            item6="Packaged Produce"
            item7="Party Trays"
          />
          <FooterContent
            heading="BREADS & BAKERY"
            item1="Fresh Vegetables"
            item2="Herbs & Seasonings"
            item3="Fresh Fruits"
            item4="Cuts & Sprouts"
            item5="Exotic Fruits & Veggies"
            item6="Packaged Produce"
            item7="Party Trays"
          />
        </div> */}
        <div>
          <div className="py-8 px-4 md:px-16 text-gray-900 flex flex-row justify-between items-center gap-4">
            <span className="text-xs sm:text-sm">Copyright 2025. All rights reserved</span>
            <div className="flex">
              <IoLogoInstagram
                className="text-base sm:text-lg p-1.5 sm:p-2 rounded-3xl w-8 sm:w-9 h-8 sm:h-9 border-[0.1em] border-gray-300 mr-1 hover:bg-custom hover:text-white hover:border-none"
              />
              <FaFacebookF
                className="text-base sm:text-lg p-1.5 sm:p-2 rounded-3xl w-8 sm:w-9 h-8 sm:h-9 border-[0.1em] border-gray-300 mr-1 hover:bg-custom hover:text-white hover:border-none"
              />
              <FaTwitter
                className="text-base sm:text-lg p-1.5 sm:p-2 rounded-3xl w-8 sm:w-9 h-8 sm:h-9 border-[0.1em] border-gray-300 mr-1 hover:bg-custom hover:text-white hover:border-none"
              />
            </div>
          </div>
        </div>
      {/* {/* </div> */}
    </div>
  );
};

export default Footer;