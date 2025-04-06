import React from "react";
import Relife from "./Features/Relife";
import Zwr from "./Features/Zwr";

function Features() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 px-6 sm:px-12 mt-5">
      <div className="flex flex-col md:flex-row gap-8 w-full justify-evenly items-center sm:pb-5">
        <Relife />
        <Zwr />
      </div>
    </div>
  )
}

export default Features