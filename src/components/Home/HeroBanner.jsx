import React from "react";
import bannerVideo from "../../assets/images/home/home-banner.mp4";

const HeroBanner = () => {
  return (
    <div className="pt-[120px] pb-10">
      <div className="relative w-full h-[70vh] sm:h-[60vh] md:h-[70vh] overflow-hidden px-12">
      {/* Video Background */}
      <video
        src={bannerVideo}
        autoPlay
        playsInline
        muted
        loop
        className="w-full h-full object-cover rounded-xl"
      ></video>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex md:items-center w-full px-16 ">
        <h1 className="text-5xl md:text-[6rem] lg:text-[12rem] font-extrabold uppercase text-transparent stroke-text scale-y-[0.8]">
          <div className="flex flex-col w-full h-full justify-between">
            <span>BETTER</span>
            <div className="flex md:flex-col gap-4 md:gap-0 md:items-end justify-end">
              <span className="md:mr-12">IN</span>
              <span>MOTION</span>
            </div>
          </div>
        </h1>
      </div>
    </div>
    </div>
  );
};

export default HeroBanner;
