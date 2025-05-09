import React, { useRef, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CiSearch, CiShoppingCart, CiLogout } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUser, FaPhoneAlt, FaUserCheck } from "react-icons/fa";
import { IoReorderFourOutline } from "react-icons/io5";

import { SignInContext } from "../../context/SignInContext";
import { UserDataContext } from "../../context/UserDataContext";
import { TotalCostContext } from "../../context/TotalCostContext";

const Header = () => {
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn } = useContext(SignInContext);
  const { userData, setUserData } = useContext(UserDataContext);
  const {totalCost,setTotalCost}=useContext(TotalCostContext);

  const [userBtn, setUserBtn] = useState(false);
  const userDropdown = useRef();

  const outsideClick = () => {
    if (userDropdown.current && !userDropdown.current.contains(event.target)) {
      setUserBtn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideClick);
  }, []);

  useEffect(() => {
    if (userBtn) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [userBtn]);

  return (
    <div className="relative">
      <div className="h-[17em] sm:h-[16em] md:h-[9em]">
        <div
          className="bg-white lg:fixed w-full z-50 lg:shadow-lg
                     lg:shadow-orange-100"
        >
          <div
            className="bg-custom h-12  md:h-8 flex items-center 
                       justify-center px-4 sm:px-6 md:px-8"
          >
            <p className="text-white text-xs sm:text-sm text-center">
              Due to the <span className="text-md font-semibold">TESTING</span>{" "}
              phase, orders may be processed with a slight delay
            </p>
          </div>
          <div className="py-2 sm:py-3 md:py-4">
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-evenly gap-2 sm:gap-3 
                         md:gap-4 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 2xl:px-28"
            >
              <div
                className="flex items-center justify-between w-full sm:w-auto 
                           sm:justify-center gap-4 sm:gap-6"
              >
                <div
                  className="flex items-center text-custom cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <FaCartArrowDown className="text-3xl  md:text-4xl" />
                  <p
                    className="text-xl md:text-2xl lg:text-3xl 
                               font-bold text-black ml-1"
                  >
                    NileCart
                  </p>
                </div>
                <div className="flex items-center">
                  {loggedIn && (
                    <div className="md:hidden mr-1">
                      <p className="text-md font-semibold"> ₹2000</p>
                    </div>
                  )}
                  <div
                    className="h-10 w-10 rounded-3xl bg-orange-200 
                             relative flex items-center justify-center sm:hidden 
                             cursor-pointer"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    <CiShoppingCart className="text-2xl " />
                    <div
                      className="w-4 h-4 bg-custom text-white 
                               font-semibold rounded-3xl absolute -top-1 -right-1 
                               flex items-center justify-center text-[0.6rem] sm:text-xs"
                    >
                      21
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 
                           w-full sm:w-auto sm:items-center md:justify-evenly"
              >
                <div
                  className="h-[3em] sm:h-[3em] md:h-[3.5em] w-full sm:w-[9em] 
                             md:w-[10em] lg:w-[11em] border-2 border-gray-400 
                             rounded-lg flex flex-col justify-center p-2 sm:p-3 md:p-4"
                >
                  <p
                    className="text-[0.6rem] sm:text-xs md:text-sm text-gray-400 
                               font-semibold"
                  >
                    Your Location
                  </p>
                  <p className="text-xs sm:text-sm md:text-md font-semibold">
                    India
                  </p>
                </div>
                <div
                  className="bg-gray-200 w-full sm:w-[16em] md:w-[20em] 
                             lg:w-[24em] xl:w-[26em] 2xl:w-[32em] rounded-lg 
                             flex items-center justify-center"
                >
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="h-[3.5em]  md:h-[3.5em] p-2 sm:p-3 md:p-4 
                               bg-gray-200 w-[90%] focus:outline-none 
                               text-sm rounded-lg"
                  />
                  <CiSearch className="text-xl md:text-2xl lg:text-3xl" />
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                {loggedIn ? (
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-4 md:justify-center">
                      <div
                        className="hidden md:flex h-8 sm:h-10 md:h-12 w-8 sm:w-10 
                             md:w-12 rounded-3xl bg-orange-200 relative 
                             items-center justify-center cursor-pointer"
                        onClick={() => {
                          setUserBtn(true);
                        }}
                      >
                        <FaUser className="text-2xl" />
                        {userBtn && (
                          <div
                            ref={userDropdown}
                            className="absolute top-20 left-0 h-auto w-[16em] bg-orange-100 text-black shadow-orange-200 shadow-2xl rounded-lg"
                          >
                            <p className="text-xl font-semibold px-6 py-2 flex items-center">
                              <FaUserCheck className="text-orange-200 bg-custom rounded-full h-7 w-7 p-1 mr-2" />
                              <span>{userData.name}</span>
                            </p>
                            <p className="text-sm font-semibold flex items-center gap-2 px-6 py-2">
                              <FaPhoneAlt />
                              <span>{userData.phoneno}</span>
                            </p>
                            <hr className="w-full my-2 h-[0.1em] bg-custom" />
                            <p className="flex items-center  px-6">
                              <IoReorderFourOutline />
                              <span>Orders</span>
                            </p>
                            <button
                              className="w-full sm:w-[5em] md:w-[6em] 
                             lg:w-[7em] h-10 md:h-12 rounded-3xl 
                             font-semibold flex items-center justify-center 
                             text-xs sm:text-sm md:text-base"
                              onClick={() => {
                                setLoggedIn(false);
                                setUserBtn(false);
                                navigate("/signIn");
                              }}
                            >
                              <CiLogout className="text-custom text-2xl" />
                              <span>Log Out</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      className="bg-custom text-white w-full sm:w-[5em] md:w-[6em] 
                             lg:w-[7em] h-10 md:h-12 rounded-3xl 
                             font-semibold flex items-center justify-center 
                             text-xs sm:text-sm md:text-base md:hidden"
                      onClick={() => {
                        setLoggedIn(false);
                        navigate("/signIn");
                      }}
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-custom text-white w-full sm:w-[5em] md:w-[6em] 
                             lg:w-[7em] h-10 md:h-12 rounded-3xl 
                             font-semibold flex items-center justify-center 
                             text-xs sm:text-sm md:text-base"
                    onClick={() => {
                      navigate("/signIn");
                    }}
                  >
                    Sign In
                  </button>
                )}
              </div>
              <div className="flex items-center">
                {loggedIn && (
                  <div className="mr-2 hidden md:block">
                    <p className="text-md font-semibold"> ₹{totalCost?totalCost:0}</p>
                  </div>
                )}
                <div
                  className="hidden sm:flex h-8 sm:h-10 md:h-12 w-8 sm:w-10 
                             md:w-12 rounded-3xl bg-orange-200 relative 
                             items-center justify-center cursor-pointer"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <CiShoppingCart className="text-xl sm:text-2xl md:text-3xl" />
                  <div
                    className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 bg-custom 
                               text-white font-semibold rounded-3xl absolute 
                               -top-1 -right-1 flex items-center justify-center 
                               text-[0.6rem] sm:text-xs"
                  >
                    21
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
