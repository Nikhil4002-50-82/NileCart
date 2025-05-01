import React from "react";

const HeaderComp = ({ Component, name }) => {
  return (
    <div
      className="flex justify-center items-center p-2 sm:p-3 md:p-4 
                 w-[7em] sm:w-[8em] md:w-[9em] 
                 h-[2.5em] sm:h-[2.75em] md:h-[3em]"
    >
      <Component
        className="mr-1 sm:mr-2 text-2xl sm:text-2.5xl md:text-3xl text-custom"
      />
      <p className="font-semibold text-xs sm:text-sm">{name}</p>
    </div>
  );
};

export default HeaderComp;