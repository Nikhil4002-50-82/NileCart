import React from "react";

const HeaderComp = ({ Component, name }) => {
  return (
    <div className="flex justify-center p-4 items-center w-[9em] h-[3em]">
      <Component className="mr-2 text-3xl text-custom" />
      <p className="font-semibold text-sm">{name}</p>
    </div>
  );
};

export default HeaderComp;
