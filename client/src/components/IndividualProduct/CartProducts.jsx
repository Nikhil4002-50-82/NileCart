import React, { useState } from "react";

import { FaMinus } from "react-icons/fa6";
import { MdOutlineAdd, MdCancel } from "react-icons/md";

const CartProducts = ({ src, title, rate, count, price }) => {
  const [CountState, setCountState] = useState(count);
  return (
    <div>
      <div
        className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] 
                               gap-2 sm:gap-4 my-2 sm:my-3 min-w-[600px] sm:min-w-[700px]"
      >
        <div
          className="grid grid-cols-[1fr_3fr] sm:grid-cols-[1fr_5fr] gap-2 sm:gap-4 
                                 h-auto px-4 sm:px-6"
        >
          <div
            className="bg-cover bg-center h-[3em] sm:h-[4em] w-full p-2"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
              {title}
            </h1>
            <p className="mr-3 sm:mr-4 text-gray-800 text-xs sm:text-sm">
              {rate}⭐
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-xs sm:text-sm">₹{price}</p>
        </div>
        <div className="flex items-center justify-start">
          <button
            className="h-7 sm:h-8 w-7 sm:w-8 rounded-full border-[0.1em] 
                                   bg-orange-200 flex items-center justify-center 
                                   mr-3 sm:mr-4"
            onClick={() => {
              if (CountState > 1) setCountState(CountState - 1);
            }}
          >
            <FaMinus className="text-xs" />
          </button>
          <p className="mr-3 sm:mr-4 text-base sm:text-lg">{CountState}</p>
          <button
            className="h-7 sm:h-8 w-7 sm:w-8 rounded-full border-[0.1em] 
                                   bg-orange-200 flex items-center justify-center 
                                   mr-3 sm:mr-4"
            onClick={() => {
              setCountState(CountState + 1);
            }}
          >
            <MdOutlineAdd className="text-sm sm:text-base text-black" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-xs sm:text-sm">₹{price * CountState}</p>
        </div>
        <div className="flex justify-center items-center">
          <MdCancel className="text-2xl sm:text-3xl text-custom" />
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
