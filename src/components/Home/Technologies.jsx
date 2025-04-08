import React from "react";
import Fit from "./Technologies/Fit";
import Motion from "./Technologies/Motion";
import Power from "./Technologies/Power";
import Brave from "./Technologies/Brave";

const Technologies = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 px-12 py-10">
      <div className="flex md:flex-row flex-col gap-8 w-full justify-evenly items-center">
        <Fit />
        <Motion />
      </div>
      <div className="flex md:flex-row flex-col gap-8 w-full justify-evenly items-center">
        <Power />
        <Brave />
      </div>
    </div>
  );
};

export default Technologies;
