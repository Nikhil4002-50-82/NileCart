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
    </div>
  );
};

export default Footer;