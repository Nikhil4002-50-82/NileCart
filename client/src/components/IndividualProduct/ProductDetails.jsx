import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { FaMinus } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

import HeaderForOthers from "../Header/HeaderForOthers";

const ProductDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  const getAllData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.log(`error message: ${error.message}`);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <HeaderForOthers />
      {data && (
        <div className="px-4 sm:px-6 md:px-10 lg:px-16">
          <div
            className="grid grid-cols-1 sm:grid-cols-[3fr_6fr] gap-4 sm:gap-6 
                       h-auto mb-10 sm:mb-14"
          >
            <div className="mb-6 px-6 md:mb-0 md:px-8">
              <img
                src={data.image}
                alt={data.title}
                className="h-full w-full 
                           border-[0.1em] border-orange-100 shadow-2xl 
                           shadow-orange-400 rounded-2xl object-cover hover:shadow-black"
              />
            </div>
            <div className="px-4 sm:px-6 md:px-8 flex flex-col">
              <h1
                className="text-lg sm:text-xl md:text-2xl font-semibold w-full 
                           sm:w-[60%] mb-3 sm:mb-4"
              >
                {data.title}
              </h1>
              <p className="text-sm sm:text-md font-semibold mb-4 sm:mb-6">
                <span className="mr-3 sm:mr-4 text-gray-800">
                  {data.rating.rate}⭐
                </span>
                <span className="text-gray-500">
                  {data.rating.count} reviews
                </span>
              </p>
              <p
                className="text-red-600 font-semibold text-lg sm:text-xl 
                           mb-2"
              >
                ₹{data.price}
              </p>
              <p
                className="text-base sm:text-lg text-green-600 font-semibold 
                           mb-4 sm:mb-6"
              >
                In Stock
              </p>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                cumque nemo vitae aperiam, harum assumenda debitis consequuntur
                eius. Asperiores minus suscipit iusto perspiciatis in debitis
                eos! Dicta maxime assumenda vitae?
              </p>
              <div className="flex items-center flex-wrap gap-3 sm:gap-4">
                <button
                  className="h-8 sm:h-10 w-8 sm:w-10 rounded-full border-[0.1em] 
                             bg-orange-200 flex items-center justify-center 
                             mr-3 sm:mr-4"
                >
                  <FaMinus className="text-xs sm:text-sm" />
                </button>
                <p className="mr-3 sm:mr-4 text-lg sm:text-xl">1</p>
                <button
                  className="h-8 sm:h-10 w-8 sm:w-10 rounded-full border-[0.1em] 
                             bg-orange-200 flex items-center justify-center 
                             mr-6 sm:mr-10"
                >
                  <MdOutlineAdd className="text-base sm:text-lg text-black" />
                </button>
                <button
                  className="w-[10em] h-[3em] md:h-[2em] bg-custom rounded-3xl 
                             text-white font-semibold text-base sm:text-lg 
                             p-4 sm:p-6 flex items-center justify-between"
                >
                  <span>
                    <CiShoppingCart className="text-white text-3xl" />
                  </span>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div
            className="px-4 sm:px-8 md:px-16 py-6 sm:py-8 md:py-10 h-auto w-full 
                       bg-orange-200 flex flex-col justify-center rounded-3xl 
                       mb-8 sm:mb-10"
          >
            <h1 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">
              Description
            </h1>
            <p className="text-sm sm:text-base">
              {data.description}
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis perferendis odit quasi. Est accusamus dolore tempore
                optio fuga! Quo labore vel voluptates maiores commodi vero
                perferendis. Alias voluptate voluptatibus sunt.
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
