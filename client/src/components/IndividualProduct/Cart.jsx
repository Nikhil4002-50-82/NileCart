import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { CiShoppingCart } from "react-icons/ci";

import CartProducts from "./CartProducts";

import { SignInContext } from "../../context/SignInContext";
import SignIn from "../Login/SignIn";

const Cart = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  const { loggedIn, setLoggedIn } = useContext(SignInContext);

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

  const CreateCartProducts = (obj) => {
    return (
      <CartProducts
        key={obj.id}
        src={obj.image}
        title={obj.title}
        price={obj.price}
        rate={obj.rating.rate}
        count={count}
      />
    );
  };

  return (
    <>
      {loggedIn ? (
        <div>
          <div className="px-6 md:px-16">
            <h1 className="text-base sm:text-lg font-semibold">YOUR CART</h1>
            <p className="text-sm sm:text-md text-gray-700 mb-3 sm:mb-4">
              There are <span className="text-custom font-semibold">21</span>{" "}
              products in your cart
            </p>
          </div>
          <div
            className="px-4 sm:px-6 md:px-10 lg:px-16 py-2 grid grid-cols-1 
                 md:grid-cols-[9fr_3fr] md:gap-x-8 gap-y-6 md:gap-y-0"
          >
            <div>
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

                {data.length > 0 && data.map(CreateCartProducts)}
              </div>
            </div>
            <div className="p-2 ">
              <div
                className="border-[0.1em] border-orange-300 px-4 py-3 
                     rounded-xl sticky top-[25%]"
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
                      className="text-custom font-semibold text-sm sm:text-md 
                           flex justify-end items-center"
                    >
                      ₹{data[0].price * count}
                    </div>
                    <div className="text-sm md:text-md">Shipping</div>
                    <div
                      className="flex justify-end items-center font-semibold 
                           text-sm sm:text-md text-green-600"
                    >
                      ₹25
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
                      className="text-red-custom font-semibold text-sm sm:text-md 
                           flex justify-end items-center text-custom"
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
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Cart;
