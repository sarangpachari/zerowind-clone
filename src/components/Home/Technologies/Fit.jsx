import React, { useState } from "react";
import fitImg from "../../../assets/images/home/fit.webp";
import { AnimatePresence, motion } from "framer-motion";

const Fit = () => {
  const [hiddenContent, setHiddenContent] = useState(true);

  return (
    <>
      {/* CONTAINER */}
      <div
        className="w-1/2"
        onMouseEnter={() => setHiddenContent(false)}
        onMouseLeave={() => setHiddenContent(true)}
      >
        {/* IMAGE WITH TEXT*/}
        <div className="relative">
          <img src={fitImg} alt="" className="rounded-2xl brightness-50" />
          {/* TEXT CONTENTS */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col gap-8">
            <div className="">
              <svg
                width="194"
                height="40"
                viewBox="0 0 144 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.97 18.95H55.38C54.62 22.74 53.86 26.53 53.1 30.32H21.05C19.72 36.64 18.3999 42.97 17.0699 49.27H0C2.65 37.11 5.13003 24.95 7.78003 12.78C9.31003 5.74 16.12 0 23.14 0H63.53C62.77 3.79 62.01 7.58 61.26 11.37H29.4C26.93 11.37 24.79 13.27 24.28 15.62C24.04 16.73 23.71 17.85 23.52 18.95C22.76 22.74 22 26.53 21.05 30.32C23.89 26.53 26.93 22.74 29.96 18.95H29.97Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M61.8999 24.65C63.6099 16.45 65.3099 8.21 67.0199 0H84.0898C82.3798 8.22 80.6798 16.45 78.9698 24.65C77.2598 32.85 75.5599 41.07 73.6599 49.27H56.5898C58.4898 41.07 60.1899 32.85 61.8999 24.65Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M121.93 11.37C119.28 24.01 116.43 36.64 113.78 49.27H96.7101C99.3601 36.64 102.21 24.01 104.86 11.37H85.3301C86.0901 7.58 86.8501 3.79 87.6101 0H143.55C142.79 3.79 142.03 7.58 141.27 11.37H121.93Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
            </div>
            {!hiddenContent && (
              // HIDDEN CONTAINER
              <div className="flex flex-col gap-12 w-full">
                <div className="text-[#f5f5f5] text-center gt-america-ext-regular scale-x-125">
                  FIT is ZeroWind's line of 2-layer fabrics, perfect for
                  creating breathable, fully windproof and waterproof outdoor
                  sportswear garments suitable for mid-seasons.
                </div>
                {/* BOX CONTAINER */}
                <div className="text-[#f5f5f5] flex gap-10 items-start">
                  {/* BOX */}
                  <div className="flex flex-col gap-3 items-center text-center">
                    {/* IMG BOX */}
                    <div className="">
                      <img
                        src="https://www.zerowind.it/media/images/desktop/icon-334.svg"
                        alt=""
                        className="saturate-0 w-10"
                      />
                    </div>
                    {/* TEXT BOX */}
                    <div className="uppercase text-[10px] tracking-widest">
                      Waterproofness
                    </div>
                  </div>
                  {/* BOX */}
                  <div className="flex flex-col gap-3 items-center text-center">
                    {/* IMG BOX */}
                    <div className="">
                      <img
                        src="https://www.zerowind.it/media/images/desktop/Livello-1-4.svg"
                        alt=""
                        className="saturate-0 w-10"
                      />
                    </div>
                    {/* TEXT BOX */}
                    <div className="uppercase text-[10px] tracking-widest">
                      Total wind protection
                    </div>
                  </div>
                  {/* BOX */}
                  <div className="flex flex-col gap-3 items-center text-center">
                    {/* IMG BOX */}
                    <div className="">
                      <img
                        src="https://www.zerowind.it/media/images/desktop/Group3-2_1.svg"
                        alt=""
                        className="saturate-0 w-10"
                      />
                    </div>
                    {/* TEXT BOX */}
                    <div className="uppercase text-[10px] tracking-widest">
                      High breathability
                    </div>
                  </div>
                  {/* BOX */}
                  <div className="flex flex-col gap-3 items-center text-center">
                    {/* IMG BOX */}
                    <div className="">
                      <img
                        src="https://www.zerowind.it/media/images/desktop/Livello-1-6_1.svg"
                        alt=""
                        className="saturate-0 w-10"
                      />
                    </div>
                    {/* TEXT BOX */}
                    <div className="uppercase text-[10px] tracking-widest">
                      Thermoregulation
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fit;
