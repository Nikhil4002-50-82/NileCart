import React from "react";

const FooterContent = ({
  heading,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
}) => {
  return (
    <div className="p-2 sm:p-3 md:p-4">
      <h1 className="text-base sm:text-lg font-semibold text-custom">
        {heading}
      </h1>
      <ul>
        <li
          className="text-xs sm:text-sm mt-2 sm:mt-3 text-gray-500 hover:text-black cursor-pointer"
        >
          {item1}
        </li>
        <li
          className="text-xs sm:text-sm mt-2 sm:mt-3 text-gray-500 hover:text-black cursor-pointer"
        >
          {item2}
        </li>
        <li
          className="text-xs sm:text-sm mt-2 sm:mt-3 text-gray-500 hover:text-black cursor-pointer"
        >
          {item3}
        </li>
        <li
          className="text-xs sm:text-sm mt-2 sm:mt-3 text-gray-500 hover:text-black cursor-pointer"
        >
          {item4}
        </li>
        <li
          className="text-xs sm:text-sm mt-2 sm:mt-3 text-gray-500 hover:text-black cursor-pointer"
        >
          {item5}
        </li>
        <li
          className="text-xs sm:text-sm mt-2 sm:mt-3 text-gray-500 hover:text-black cursor-pointer"
        >
          {item6}
        </li>
        <li
          className="text-xs sm:text-sm mt-2 sm:mt-3 text-gray-500 hover:text-black cursor-pointer"
        >
          {item7}
        </li>
      </ul>
    </div>
  );
};

export default FooterContent;