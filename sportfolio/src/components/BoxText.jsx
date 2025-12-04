import React from "react";

const BoxText = ({ title, desc1, desc2 }) => {
  return (
    <div>
      <h1 className="text-3xl h-14 lg:text-5xl font-bold uppercase text-white">
        {title}
      </h1>
      <p className="text-white mt-4 lg:mt-16 text-sm lg:text-base">{desc1}</p>
      <p className="text-white mt-8 text-sm lg:text-base">{desc2}</p>
    </div>
  );
};

export default BoxText;