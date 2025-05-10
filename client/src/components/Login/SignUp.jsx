import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { FaCartArrowDown } from "react-icons/fa6";

const SignUp = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const AddNewUser = async () => {
    try {
      const response = await axios.post(
        "https://nilecart.onrender.com/addUser",
        {
          name: name,
          phoneno: phoneNo,
          username: userName,
          password: password,
        }
      );
      alert("User created successfully!!");
      navigate("/signIn");
    } catch (error) {
      console.log(`error message : ${error.message}`);
    }
  };

  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-center h-auto pb-4 sm:pb-6 md:pb-6 w-full 
                 flex items-center justify-center"
    >
      <div
        className="flex flex-col bg-orange-100 px-4 sm:px-6 md:px-10 py-4 sm:py-6 
                   w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] rounded-2xl"
      >
        <div
          className="flex items-center justify-center mb-4 sm:mb-6 text-custom 
                     cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaCartArrowDown className="text-2xl sm:text-3xl md:text-4xl" />
          <p
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-black 
                       ml-1 sm:ml-2"
          >
            NileCart
          </p>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">Sign Up</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="Name"
            className="focus:outline-none border-b-2 border-orange-300 mb-4 sm:mb-0
                       h-[2em] sm:h-[2.5em] bg-orange-100 w-full p-1 sm:p-2 
                       text-sm sm:text-base"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
            required
          />
          <input
            type="text"
            placeholder="Phone No"
            className="focus:outline-none border-b-2 border-orange-300 
                       h-[2em] sm:h-[2.5em] bg-orange-100 w-full p-1 sm:p-2 
                       text-sm sm:text-base"
            onChange={(event) => {
              setPhoneNo(event.target.value);
            }}
            value={phoneNo}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          className="focus:outline-none border-b-2 border-orange-300 
                     mb-6 sm:mb-8 h-[2em] sm:h-[2.5em] bg-orange-100 w-full 
                     p-1 sm:p-2 text-sm sm:text-base"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          value={userName}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="focus:outline-none border-b-2 border-orange-300 
                     mb-6 sm:mb-8 h-[2em] sm:h-[2.5em] bg-orange-100 w-full 
                     p-1 sm:p-2 text-sm sm:text-base"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="focus:outline-none border-b-2 border-orange-300 
                     mb-6 sm:mb-8 h-[2em] sm:h-[2.5em] bg-orange-100 w-full 
                     p-1 sm:p-2 text-sm sm:text-base"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          value={confirmPassword}
          required
        />
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 px-2 sm:px-3 
                     justify-between mb-3 sm:mb-4"
        >
          <button
            className="h-[2.5em] sm:h-[3em] w-full sm:w-[10em] md:w-[12em] 
                       bg-custom text-white font-semibold rounded-lg 
                       text-sm sm:text-base"
            onClick={() => {
              if (password === confirmPassword) AddNewUser();
              else {
                setPassword("");
                setConfirmPassword("");
              }
            }}
          >
            Sign Up
          </button>
          <button
            className="h-[2.5em] sm:h-[3em] w-full sm:w-[10em] md:w-[12em] 
                       text-custom border-[0.1em] border-custom font-semibold 
                       rounded-lg text-sm sm:text-base"
          >
            Cancel
          </button>
        </div>
        <p className="text-sm sm:text-base">
          Already Registered?{" "}
          <span
            className="text-custom font-semibold cursor-pointer"
            onClick={() => {
              navigate("/signIn");
            }}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
