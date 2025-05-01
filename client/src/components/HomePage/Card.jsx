import React from "react";

const Card = ({ src, title, price }) => {
  return (
    <div>
      <div className="w-[12em] h-auto bg-orange-100 hover:shadow-orange-400 hover:shadow-2xl border-[0.1em] border-orange-200 rounded-2xl">
        <img src={src} alt="" className="w-full h-[16em] mb-1 rounded-t-2xl" />
        <div className="p-4">
          <p className="text-sm font-semibold mb-1">{title}</p>
          <p className="text-lg text-green-600 font-semibold">In Stock</p>
          <p className="text-red-600 font-semibold">₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
