import React from "react";

const Card = ({ src, title, price, onClick }) => {
  return (
    <div onClick={onClick}>
      <div
        className="w-[10em] sm:w-[11em] md:w-[12em] h-auto bg-orange-100 
                   hover:shadow-orange-400 hover:shadow-2xl border-[0.1em] 
                   border-orange-200 rounded-2xl"
      >
        <img
          src={src}
          alt={title}
          className="w-full h-[12em] sm:h-[14em] md:h-[16em] mb-1 rounded-t-2xl 
                     object-cover"
        />
        <div className="p-2 sm:p-3 md:p-4">
          <p className="text-xs sm:text-sm font-semibold mb-1">{title}</p>
          <p className="text-sm sm:text-base md:text-lg text-green-600 font-semibold">
            In Stock
          </p>
          <p className="text-sm sm:text-base md:text-lg text-red-600 font-semibold">
            ₹{price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
