import React from "react";

import { MdEmail } from "react-icons/md";

const NewsletterCover = () => {
  return (
    <div className="mb-8">
      <div className="bg-custom text-white grid grid-cols-2 py-8 px-20">
        <div className=" py-4">
          <p className="text-lg mb-2 font-semibold">
            &#x20B9;160 discount for your first order
          </p>
          <h1 className="text-4xl font-bold mb-4">
            Join our newsletter and get...
          </h1>
          <p className="text-md text-gray-200 mb-6 w-[60%]">
            Join our email subscription now to get updates on promotions and
            coupons.
          </p>
          <div className="h-[3.5em] w-[25em] bg-white mb-3 rounded-lg flex items-center p-1">
            <span className="flex justify-between items-center h-[80%]">
              <MdEmail className="text-xl text-custom " />
              <input
                type="email"
                placeholder="Email"
                className="h-full w-[16em] focus:outline-none text-black p-2"
              />
            </span>
            <span className="bg-custom w-full h-full flex items-center justify-center rounded-lg font-semibold cursor-pointer">
              Subscribe
            </span>
          </div>
        </div>
        <div>
          <span className="flex items-center justify-end">
            <img
              src="https://cdni.iconscout.com/illustration/free/thumb/free-facebook-advertisement-tutorial-illustration-download-in-svg-png-gif-file-formats--education-online-marketing-pack-people-illustrations-3561283.png?f=webp"
              alt=""
              className="h-[16em] w-[30em]"
            />
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NewsletterCover;
