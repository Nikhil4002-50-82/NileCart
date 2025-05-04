import React from "react";
import { useNavigate } from "react-router-dom";

import { FaCartArrowDown } from "react-icons/fa6";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-center h-auto pb-10 sm:pb-8 md:pb-6 w-full 
                 flex items-center justify-center"
    >
      <div
        className="flex flex-col bg-orange-100 px-4 sm:px-6 md:px-10 py-4 sm:py-6 
                   w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] rounded-2xl"
      >
        <div
          className="flex items-center justify-center mb-4 sm:mb-6 text-custom 
                     cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaCartArrowDown
            className="text-2xl sm:text-3xl md:text-4xl"
          />
          <p
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-black 
                       ml-1 sm:ml-2"
          >
            NileCart
          </p>
        </div>
        <p
          className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
        >
          Sign In
        </p>
        <input
          type="text"
          placeholder="UserName*"
          className="focus:outline-none border-b-2 border-orange-300 
                     mb-6 sm:mb-8 h-[2em] sm:h-[2.5em] bg-orange-100 w-full 
                     p-1 sm:p-2 text-sm sm:text-base"
        />
        <input
          type="text"
          placeholder="Password*"
          className="focus:outline-none border-b-2 border-orange-300 
                     mb-6 sm:mb-8 h-[2em] sm:h-[2.5em] bg-orange-100 w-full 
                     p-1 sm:p-2 text-sm sm:text-base"
        />
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 px-2 sm:px-3 
                     justify-between mb-3 sm:mb-4"
        >
          <button
            className="h-[2.5em] sm:h-[3em] w-full sm:w-[10em] md:w-[12em] 
                       bg-custom text-white font-semibold rounded-lg 
                       text-sm sm:text-base"
          >
            Sign In
          </button>
          <button
            className="h-[2.5em] sm:h-[3em] w-full sm:w-[7em] md:w-[8em] 
                       text-custom border-[0.1em] border-custom font-semibold 
                       rounded-lg text-sm sm:text-base"
          >
            Cancel
          </button>
        </div>
        <p
          className="text-sm sm:text-base"
        >
          Not Registered?{" "}
          <span className="text-custom font-semibold">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;