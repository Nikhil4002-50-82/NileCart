import React from "react";
import { MdEmail } from "react-icons/md";

const NewsletterCover = () => {
  return (
    <div className="">
      <div className="bg-custom text-white grid grid-cols-1 md:grid-cols-2 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 lg:px-20 gap-4 md:gap-0">
        <div className="py-4">
          <p className="text-base sm:text-lg mb-2 font-semibold">
            ₹160 discount for your first order
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Join our newsletter and get...
          </h1>
          <p className="text-sm sm:text-md text-gray-200 mb-4 sm:mb-6 w-full md:w-[60%]">
            Join our email subscription now to get updates on promotions and
            coupons.
          </p>
          <div className="h-[3em] sm:h-[3.5em] w-full sm:w-[20em] md:w-[25em] bg-white mb-3 rounded-lg flex items-center p-1">
            <span className="flex justify-between items-center h-[80%] w-full sm:w-auto">
              <MdEmail className="text-lg sm:text-xl text-custom ml-2" />
              <input
                type="email"
                placeholder="Email"
                className="h-full w-full sm:w-[12em] md:w-[16em] focus:outline-none text-black p-2 text-sm"
              />
            </span>
            <span className="bg-custom w-[8em] sm:w-[7em] md:w-full h-full flex items-center justify-center rounded-lg font-semibold cursor-pointer text-sm sm:text-base text-white">
              Subscribe
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <img
            src="https://cdni.iconscout.com/illustration/free/thumb/free-facebook-advertisement-tutorial-illustration-download-in-svg-png-gif-file-formats--education-online-marketing-pack-people-illustrations-3561283.png?f=webp"
            alt=""
            className="h-[12em] sm:h-[14em] md:h-[16em] w-auto max-w-[20em] sm:max-w-[25em] md:max-w-[30em]"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NewsletterCover;