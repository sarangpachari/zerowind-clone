import React, { useState } from "react";
import motionImg from "../../../assets/images/home/motion.webp";

const Motion = () => {
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
          <img src={motionImg} alt="" className="rounded-2xl brightness-50" />
          {/* TEXT CONTENTS */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col gap-8">
            <div className="">
              <svg
                width="290"
                height="40"
                viewBox="0 0 410 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.6562 47.7485C52.5543 35.5085 55.2688 23.2686 57.973 11.0189C53.9116 11.0771 49.6257 13.0444 46.748 16.5332C38.2068 26.9125 29.5227 37.3499 20.8182 47.7582H0.888672C10.1748 36.4389 19.6549 25.1099 29.1451 13.7809C36.4924 5.01041 46.5643 0.00976562 57.2076 0.00976562H77.7187C75.1982 12.0947 72.494 24.1796 69.7796 36.2548C75.9737 28.7732 82.1985 21.3013 88.556 13.7809C95.9441 5.03949 105.965 0.00976562 116.618 0.00976562H137.13C135.395 7.97591 133.65 15.9517 131.905 23.8985C130.16 31.8453 128.425 39.8114 126.486 47.7582H109.067C111.965 35.5182 114.68 23.2783 117.384 11.0286C113.322 11.0868 109.026 13.0444 106.159 16.5429C99.1585 25.0808 92.0357 33.6866 84.8721 42.2536C83.321 44.0949 81.7801 45.9266 80.229 47.7679H49.6562V47.7485Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M136.606 12.3853C138.157 5.56273 145.31 0 152.474 0H187.302C194.455 0 199.109 5.56273 197.557 12.3853C195.812 20.051 194.261 27.7168 192.527 35.3631C190.975 42.1857 183.822 47.7484 176.658 47.7484H141.83C134.667 47.7484 130.024 42.176 131.575 35.3631C133.31 27.7168 134.861 20.051 136.606 12.3853ZM170.464 36.7295C172.985 36.7295 175.148 34.8785 175.689 32.6108C177.077 26.8058 178.169 20.962 179.557 15.1473C180.097 12.8699 178.781 11.0286 176.271 11.0286H158.852C156.331 11.0286 153.974 12.8699 153.433 15.1473C152.045 20.9717 150.953 26.8058 149.565 32.6108C149.014 34.8882 150.535 36.7295 153.045 36.7295H170.464Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M237.688 11.0189C234.984 23.2685 232.076 35.5085 229.372 47.7484H211.953C214.657 35.5085 217.565 23.2685 220.269 11.0189H200.34C201.115 7.34591 201.891 3.67295 202.667 0H259.751C258.975 3.67295 258.2 7.34591 257.424 11.0189H237.688Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M258.041 23.8887C259.786 15.942 261.52 7.95645 263.265 0H280.685C278.94 7.96614 277.205 15.942 275.46 23.8887C273.715 31.8355 271.98 39.8016 270.041 47.7484H252.622C254.561 39.8016 256.296 31.8355 258.041 23.8887Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M280.154 12.3853C281.706 5.56273 288.859 0 296.023 0H330.851C338.004 0 342.657 5.56273 341.106 12.3853C339.361 20.051 337.81 27.7168 336.075 35.3631C334.524 42.1857 327.371 47.7484 320.207 47.7484H285.379C278.216 47.7484 273.573 42.176 275.124 35.3631C276.858 27.7168 278.409 20.051 280.154 12.3853ZM314.013 36.7295C316.534 36.7295 318.697 34.8785 319.238 32.6108C320.626 26.8058 321.718 20.962 323.105 15.1473C323.646 12.8699 322.33 11.0286 319.819 11.0286H302.4C299.88 11.0286 297.523 12.8699 296.982 15.1473C295.594 20.9717 294.502 26.8058 293.114 32.6108C292.563 34.8882 294.084 36.7295 296.594 36.7295H314.013Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M385.619 31.225C387.945 20.8263 390.262 10.4277 392.589 0H410.008C408.263 7.96614 406.528 15.942 404.783 23.8887C403.048 31.8355 401.303 39.8016 399.364 47.7484H371.884C367.822 37.3498 363.955 26.9318 359.883 16.5234C357.567 26.9415 355.24 37.3401 352.913 47.7484H335.494C337.433 39.8016 339.168 31.8355 340.913 23.8887C342.658 15.942 344.393 7.95645 346.138 0H356.781C367.424 0 375.772 4.99095 379.037 13.7712C381.2 19.5859 383.486 25.4103 385.619 31.2153V31.225Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
            </div>
            {!hiddenContent && (
              // HIDDEN CONTAINER
              <div className="flex flex-col gap-12 w-full">
                <div className="text-[#f5f5f5] text-center gt-america-ext-regular scale-x-125">
                  Motion is ZeroWind's line of 3-layer softshell fabrics,
                  perfect for making outdoor sportswear for cold weather and
                  in-between seasons.
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

export default Motion;
