import React from "react";

const HeaderComp = ({ Component, name }) => {
  return (
    <div
      className="
        flex justify-center items-center 
        p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7 
        w-[7em] sm:w-[8em] md:w-[9em] lg:w-[10em] xl:w-[11em] 2xl:w-[12em] 
        h-[2.5em] sm:h-[2.75em] md:h-[3em] lg:h-[3.25em] xl:h-[3.5em] 2xl:h-[3.75em]
      "
    >
      <Component
        className="
          mr-1 sm:mr-2 md:mr-2.5 lg:mr-3 xl:mr-3.5 2xl:mr-4 
          text-2xl sm:text-[1.625rem] md:text-3xl lg:text-[1.875rem] xl:text-4xl 2xl:text-[2.5rem] 
          text-custom
        "
      />
      <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl">
        {name}
      </p>
    </div>
  );
};

export default HeaderComp;
