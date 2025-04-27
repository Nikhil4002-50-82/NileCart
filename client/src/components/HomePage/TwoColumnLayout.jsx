import React, { useState } from "react";
import clsx from "clsx";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const TwoColumnLayout = () => {
  const [activeTab, setActiveTab] = useState(null); // Track active tab by name

  return (
    <div className="px-20 mb-10">
      <div className="grid grid-cols-[2fr_7fr] gap-8">
        <div className="h-auto">
          <div className="sticky grid grid-rows-[4fr_4fr] gap-6 h-[120vh]">
            <div className="bg-custom"></div>
            <div className="bg-custom"></div>
          </div>
        </div>
        <div className="h-auto">
          <div className="flex shrink-[1_0_auto]">
            <div className="flex flex-col w-[35%]">
              <h1 className="text-lg font-semibold">POPULAR PRODUCTS</h1>
              <p className="text-sm text-gray-500">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            {/* <div className="w-[35em] flex p-4">
              <button className="h-full flex items-center justify-center">
                <GrFormPrevious className="text-lg" />
              </button>
              <ul className="flex justify-center items-center h-full text-sm text-gray-500 font-semibold">
                {[
                  "Fashion",
                  "Electronics",
                  "Bags",
                  "Footwear",
                  "Groceries",
                  "Beauty",
                  "Wellness",
                  "Jewellery",
                ].map((tab) => (
                  <li
                    key={tab}
                    className={clsx(
                      "w-[7em] flex items-center justify-center h-full cursor-pointer",
                      activeTab === tab && "border-b-2 border-blue-500 text-blue-500"
                    )}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
              <button className="h-full flex items-center justify-center">
                <GrFormNext className="text-lg" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;