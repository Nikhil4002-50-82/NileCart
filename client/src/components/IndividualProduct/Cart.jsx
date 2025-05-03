import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaMinus } from "react-icons/fa6";
import { MdOutlineAdd, MdCancel } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

const Cart = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  const getAllData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.log(`error message: ${error.message}`);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div
      className="px-4 sm:px-6 md:px-10 lg:px-16 py-2 grid grid-cols-1 
                 md:grid-cols-[9fr_3fr] md:gap-x-8 gap-y-6 md:gap-y-0"
    >
      <div>
        <h1 className="text-base sm:text-lg font-semibold">YOUR CART</h1>
        <p className="text-sm sm:text-md text-gray-700 mb-3 sm:mb-4">
          There are <span className="text-red-600 font-semibold">1</span>{" "}
          products in your cart
        </p>
        <div className="overflow-x-auto">
          <div
            className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr]
                       gap-2 sm:gap-4 bg-gray-200 h-[2.5em] sm:h-[3em] rounded-xl 
                       min-w-[600px] sm:min-w-[700px]"
          >
            <div
              className="flex items-center justify-start text-sm sm:text-md 
                         font-semibold p-2 whitespace-nowrap"
            >
              Products
            </div>
            <div
              className="flex items-center justify-start text-sm sm:text-md 
                         font-semibold p-2 whitespace-nowrap"
            >
              Unit Price
            </div>
            <div
              className="flex items-center justify-start text-sm sm:text-md 
                         font-semibold p-2 whitespace-nowrap"
            >
              Quantity
            </div>
            <div
              className="flex items-center justify-start text-sm sm:text-md 
                         font-semibold p-2 whitespace-nowrap"
            >
              Subtotal
            </div>
            <div
              className="flex items-center justify-start text-sm sm:text-md 
                         font-semibold p-2 whitespace-nowrap"
            >
              Remove
            </div>
          </div>

          {data.length > 0 && (
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
                  style={{ backgroundImage: `url(${data[0].image})` }}
                ></div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                    {data[0].title}
                  </h1>
                  <p className="mr-3 sm:mr-4 text-gray-800 text-xs sm:text-sm">
                    {data[0].rating.rate}⭐
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-xs sm:text-sm">₹{data[0].price}</p>
              </div>
              <div className="flex items-center justify-start">
                <button
                  className="h-7 sm:h-8 w-7 sm:w-8 rounded-full border-[0.1em] 
                             bg-orange-200 flex items-center justify-center 
                             mr-3 sm:mr-4"
                  onClick={() => {
                    if (count > 1) setCount(count - 1);
                  }}
                >
                  <FaMinus className="text-xs" />
                </button>
                <p className="mr-3 sm:mr-4 text-base sm:text-lg">{count}</p>
                <button
                  className="h-7 sm:h-8 w-7 sm:w-8 rounded-full border-[0.1em] 
                             bg-orange-200 flex items-center justify-center 
                             mr-3 sm:mr-4"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <MdOutlineAdd className="text-sm sm:text-base text-black" />
                </button>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-xs sm:text-sm">₹{data[0].price * count}</p>
              </div>
              <div className="flex justify-center items-center">
                <MdCancel className="text-2xl sm:text-3xl text-custom" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-2">
        <div
          className="border-[0.1em] border-orange-300 px-4 py-3 
                     rounded-xl"
        >
          <h1 className="font-bold text-base sm:text-lg mb-2">
            CART TOTALS
          </h1>
          <hr className="h-[0.2em] bg-orange-300 mb-4 md:mb-1" />
          {data.length > 0 && (
            <div
              className="grid grid-cols-2 grid-rows-4 gap-y-4 
                         mb-6"
            >
              <div className="text-sm md:text-md">Subtotal</div>
              <div
                className="text-red-600 font-semibold text-sm sm:text-md 
                           flex justify-end items-center"
              >
                ₹{data[0].price * count}
              </div>
              <div className="text-sm md:text-md">Shipping</div>
              <div
                className="flex justify-end items-center font-semibold 
                           text-sm sm:text-md"
              >
                Free
              </div>
              <div className="text-sm md:text-md">Estimate For</div>
              <div
                className="flex justify-end items-center font-semibold 
                           text-sm sm:text-md"
              >
                India
              </div>
              <div className="text-sm md:text-md">Total</div>
              <div
                className="text-red-600 font-semibold text-sm sm:text-md 
                           flex justify-end items-center"
              >
                ₹{data[0].price * count + 25}
              </div>
            </div>
          )}
          <div>
            <button
              className="w-[9em] h-[2.5em] bg-custom 
                         rounded-lg text-white font-semibold text-sm sm:text-base 
                         p-3 sm:p-4 flex items-center justify-between"
            >
              <span>
                <CiShoppingCart className="text-white text-3xl" />
              </span>
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;