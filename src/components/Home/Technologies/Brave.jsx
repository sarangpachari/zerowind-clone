import React, { useState } from "react";
import motionImg from "../../../assets/images/home/motion.webp";

const Brave = () => {
  const [hiddenContent, setHiddenContent] = useState(true);
  return (
    <>
      {/* CONTAINER */}
      <div
        className="md:w-1/2"
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
                width="260"
                height="50"
                viewBox="0 0 313 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15002 11.5809C8.91002 7.79093 9.66993 4.00094 10.4299 0.210938H55.1799C62.1999 0.210938 66.75 5.98099 65.23 13.011C65.04 13.881 64.85 14.751 64.66 15.621C63.9 19.101 61.63 22.4309 58.97 24.8409C60.68 27.2809 61.4399 30.5809 60.6799 34.0809C60.4899 34.9509 60.4699 35.8409 60.2999 36.6909C58.9499 43.7609 51.77 49.491 44.75 49.491H0C2.09 40.151 3.97995 30.7909 6.06995 21.4309C12.1399 18.1409 18.4 14.8509 25.03 11.5709H8.15002V11.5809ZM39.0599 38.131C41.1499 38.131 43.24 36.4109 43.61 34.3409C43.62 34.2609 43.61 34.191 43.61 34.111C43.99 32.121 42.4699 30.5309 40.5699 30.5309H20.85C20.47 33.0609 19.9 35.601 19.33 38.131H39.0499H39.0599ZM47.59 15.601C47.59 15.521 47.57 15.441 47.59 15.371C48.14 13.281 46.83 11.5809 44.75 11.5809H25.03C24.46 14.1109 23.8899 16.6509 23.3199 19.1609H43.0399C44.9399 19.1609 47.02 17.571 47.59 15.601Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M85.0002 11.3798H67.9302C68.6902 7.58976 69.4502 3.79977 70.2102 0.00976562H112.31C119.33 0.00976562 124.01 5.73967 122.55 12.7897C121.92 15.8297 121.26 18.8897 120.65 21.9097C119.54 27.4897 114.58 32.2398 109.46 33.9998C111.92 39.1098 114.39 44.1897 116.86 49.2797H98.4602C96.0002 44.4297 93.7202 39.5697 91.4502 34.7197H80.0702C78.9302 39.5697 77.9802 44.4297 76.8502 49.2797H59.7803C61.8703 39.9397 63.7602 30.5797 65.8502 21.2197C72.1102 17.9497 78.5602 14.6698 85.0002 11.3798ZM82.3402 23.3497H98.8402C101.31 23.3497 103.64 21.4297 104.15 19.0797C104.4 17.9497 104.66 16.7898 104.91 15.6398C105.42 13.2898 103.96 11.3898 101.5 11.3898H85.0002C84.0502 15.3898 83.3002 19.3797 82.3502 23.3597L82.3402 23.3497Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M117.01 49.501C126.11 37.821 135.21 26.1109 144.51 14.4209C151.7 5.3809 161.58 0.210938 172.01 0.210938H192.3C190.59 8.43094 188.89 16.671 187.18 24.871C185.47 33.071 183.58 41.311 181.87 49.501H145.27C148.11 45.711 151.34 41.921 154.18 38.131H167.26C169.16 29.291 171.05 20.4409 172.95 11.5809C168.59 11.6409 164.76 13.681 161.95 17.271C153.57 27.991 144.88 38.751 136.54 49.511H117.01V49.501Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M261 0.0100098C251.52 11.71 242.47 23.4299 233.31 35.0699C226.16 44.1599 216.05 49.2799 205.62 49.2799H185.33C187.04 41.0799 188.93 32.8599 190.64 24.6599C192.35 16.4599 194.05 8.22001 195.76 0.0100098H212.83C210.18 12.65 207.52 25.2799 204.87 37.9099C209.04 37.8499 212.83 35.8 215.68 32.22C224.21 21.49 232.75 10.74 241.09 0H261V0.0100098Z"
                  fill="#F5F5F5"
                ></path>
                <path
                  d="M270.78 0.210938H312.5C311.74 4.00094 310.98 7.79093 310.23 11.5809H277.04C274.95 11.5809 272.31 13.501 271.92 15.851C271.74 16.961 271.35 18.0609 271.16 19.1609C270.4 22.9509 269.64 26.7409 268.7 30.5309C271.92 26.7409 274.77 22.9509 277.8 19.1609H304.16C303.4 22.9509 302.64 26.7409 301.69 30.5309H268.7C268.51 31.6509 268.37 32.761 268.13 33.861C267.61 36.211 269.27 38.131 271.35 38.131H304.54C303.59 41.921 302.83 45.711 302.07 49.501H260.35C253.34 49.501 249.06 43.7509 250.49 36.7009C252.09 28.8309 253.71 20.921 255.42 13.011C256.94 5.97099 263.76 0.210938 270.78 0.210938Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
            </div>
            {!hiddenContent && (
              // HIDDEN CONTAINER
              <div className="flex flex-col gap-12 w-full">
                <div className="text-[#f5f5f5] text-center gt-america-ext-regular scale-x-125">
                  With the BRAVE fabric line, ZeroWind redefines the concept of
                  windproof protective shell.
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
                        src="https://www.zerowind.it/media/images/desktop/icon-3.svg"
                        alt=""
                        className="saturate-0 w-10"
                      />
                    </div>
                    {/* TEXT BOX */}
                    <div className="uppercase text-[10px] tracking-widest">
                      Minimum bulk and maximum lightness
                    </div>
                  </div>
                  {/* BOX */}
                  <div className="flex flex-col gap-3 items-center text-center">
                    {/* IMG BOX */}
                    <div className="">
                      <img
                        src="https://www.zerowind.it/media/images/desktop/Risorsa-3.svg"
                        alt=""
                        className="saturate-0 w-10"
                      />
                    </div>
                    {/* TEXT BOX */}
                    <div className="uppercase text-[10px] tracking-widest">
                      Strength and durability
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

export default Brave;
