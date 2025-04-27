import React from "react";
import FooterContent from "./FooterContent";
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
      <div className="px-16 w-full">
        <div className="grid grid-cols-4 mb-4">
          <div className="flex items-center p-4 border-r-[0.2em] border-gray-200">
            <FaTshirt className="text-gray-700 text-3xl mr-2" />
            <p className="text-sm">Everyday fresh products</p>
          </div>
          <div className="flex items-center p-4 border-r-[0.2em] border-gray-200">
            <FaBus className="text-gray-700 text-3xl mr-2" />
            <p className="text-sm">Free delivery for order over &#x20B9;5600</p>
          </div>
          <div className="flex items-center p-4 border-r-[0.2em] border-gray-200">
            <RiDiscountPercentFill className="text-gray-700 text-3xl mr-2" />
            <p className="text-sm">Daily Mega Discounts</p>
          </div>
          <div className="flex items-center p-4 border-r-[0.2em] border-gray-200">
            <FaRupeeSign className="text-gray-700 text-3xl mr-2" />
            <p className="text-sm">Best price on the market</p>
          </div>
        </div>
        <hr className="border-[0.1em] border-gray-200 mb-6" />
        <div className="grid grid-cols-5">
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
        <div>
          <div className="py-8 px-4 text-gray-900 flex justify-between">
            <span>Copyright 2025. All rights reserved</span>
            <div className="flex">
              <IoLogoInstagram className="text-lg p-2 rounded-3xl w-9 h-9 border-[0.1em] border-gray-300 mr-1 hover:bg-custom hover:text-white hover:border-none" />
              <FaFacebookF className="text-lg p-2 rounded-3xl w-9 h-9 border-[0.1em] border-gray-300 mr-1 hover:bg-custom hover:text-white hover:border-none" />
              <FaTwitter className="text-lg p-2 rounded-3xl w-9 h-9 border-[0.1em] border-gray-300 mr-1 hover:bg-custom hover:text-white hover:border-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
