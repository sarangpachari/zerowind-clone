import React, { useState } from "react";
import powerImg from "../../../assets/images/home/power.webp";

const Power = () => {
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
          <img src={powerImg} alt="" className="rounded-2xl brightness-50" />
          {/* TEXT CONTENTS */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col gap-8">
            <div className="">
              <svg
                width="300"
                height="50"
                viewBox="0 0 359 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14996 11.3993C8.90996 7.60929 9.66999 3.8193 10.43 0.0292969H52.53C59.55 0.0292969 64.04 5.75933 62.58 12.8093C61.95 15.8493 61.31 18.9093 60.68 21.9293C59.22 28.9793 52.33 34.7293 45.32 34.7293H20.29C19.15 39.5793 18.2 44.4393 17.07 49.2893H0C2.09 39.9493 3.98001 30.5893 6.07001 21.2293C12.14 17.9593 18.59 14.6793 25.22 11.3893H8.14996V11.3993ZM39.06 23.3693C41.33 23.3693 43.8 21.4393 44.18 19.0993C44.37 17.9593 44.69 16.8093 44.94 15.6593C45.45 13.3093 43.99 11.4093 41.72 11.4093H25.22C24.27 15.4093 23.51 19.3993 22.57 23.3793H39.07L39.06 23.3693Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M64.0599 12.8093C65.5799 5.76933 72.5899 0.0292969 79.6099 0.0292969H113.74C120.76 0.0292969 125.31 5.76933 123.79 12.8093C122.09 20.7193 120.57 28.6293 118.86 36.5193C117.34 43.5593 110.33 49.2993 103.31 49.2993H69.1799C62.1599 49.2993 57.6099 43.5493 59.1299 36.5193C60.8299 28.6293 62.3499 20.7193 64.0599 12.8093ZM97.2399 37.9293C99.7099 37.9293 101.83 36.0193 102.36 33.6793C103.72 27.6893 104.79 21.6593 106.15 15.6593C106.68 13.3093 105.39 11.4093 102.93 11.4093H85.8599C83.3899 11.4093 81.0799 13.3093 80.5499 15.6593C79.1899 21.6693 78.1199 27.6893 76.7599 33.6793C76.2199 36.0293 77.7099 37.9293 80.1699 37.9293H97.2399Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M251.26 0.0300293C241.97 11.73 232.92 23.45 223.76 35.09C216.61 44.18 206.5 49.3 196.08 49.3H175.98C178.63 36.85 181.29 24.37 183.94 11.9C177.68 19.64 171.64 27.39 165.55 35.08C158.37 44.15 148.29 49.29 137.86 49.29H117.76C119.47 41.09 121.36 32.87 123.07 24.67C124.78 16.47 126.48 8.23002 128.19 0.0200195H145.26C142.61 12.66 139.95 25.29 137.3 37.92C141.28 37.86 145.27 35.81 148.11 32.23C155.13 23.39 161.95 14.54 169.16 5.70001C172 2.12001 175.8 0.0500098 179.97 0.0100098H203.48C200.83 12.65 198.17 25.28 195.52 37.91C199.69 37.85 203.51 35.82 206.33 32.22C214.7 21.51 223.21 10.74 231.74 0H251.27L251.26 0.0300293Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M260.27 0.220703H301.99C301.23 4.0107 300.47 7.8007 299.72 11.5907H266.53C264.44 11.5907 261.8 13.5107 261.41 15.8607C261.23 16.9707 260.84 18.0707 260.65 19.1707C259.89 22.9607 259.13 26.7507 258.19 30.5407C261.41 26.7507 264.26 22.9607 267.29 19.1707H293.65C292.89 22.9607 292.13 26.7507 291.18 30.5407H258.19C258 31.6607 257.86 32.7707 257.62 33.8707C257.1 36.2207 258.76 38.1407 260.84 38.1407H294.03C293.08 41.9307 292.32 45.7207 291.56 49.5107H249.84C242.83 49.5107 238.55 43.7607 239.98 36.7107C241.58 28.8407 243.2 20.9307 244.91 13.0207C246.43 5.98069 253.25 0.220703 260.27 0.220703Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M320.27 11.3993H303.2C303.96 7.60929 304.72 3.8193 305.48 0.0292969H347.58C354.6 0.0292969 359.28 5.75933 357.82 12.8093C357.19 15.8493 356.53 18.9093 355.92 21.9293C354.81 27.5093 349.85 32.2593 344.73 34.0193C347.19 39.1293 349.66 44.2093 352.13 49.2993H333.73C331.27 44.4493 328.99 39.5893 326.72 34.7393H315.34C314.2 39.5893 313.25 44.4493 312.12 49.2993H295.05C297.14 39.9593 299.03 30.5993 301.12 21.2393C307.38 17.9693 313.83 14.6893 320.27 11.3993ZM317.61 23.3693H334.11C336.58 23.3693 338.91 21.4493 339.42 19.0993C339.67 17.9693 339.93 16.8093 340.18 15.6593C340.69 13.3093 339.23 11.4093 336.77 11.4093H320.27C319.32 15.4093 318.57 19.3993 317.62 23.3793L317.61 23.3693Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
            </div>
            {!hiddenContent && (
              // HIDDEN CONTAINER
              <div className="flex flex-col gap-12 w-full">
                <div className="text-[#f5f5f5] text-center gt-america-ext-regular scale-x-125">
                  Wind protection is the goal behind ZeroWind's POWER fabric
                  line, to which we have combined excellent breathability and
                  comfortable fit.
                </div>
                {/* BOX CONTAINER */}
                <div className="text-[#f5f5f5] flex gap-10 items-start">
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
                  {/* BOX */}
                  <div className="flex flex-col gap-3 items-center text-center">
                    {/* IMG BOX */}
                    <div className="">
                      <img
                        src="https://www.zerowind.it/media/images/desktop/icon-55.svg"
                        alt=""
                        className="saturate-0 w-10"
                      />
                    </div>
                    {/* TEXT BOX */}
                    <div className="uppercase text-[10px] tracking-widest">
                      Excellent fit
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

export default Power;
