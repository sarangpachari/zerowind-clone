import React from "react";
import RollingSentence from "./About/RollingSentence";
import TwoColumnParagraph from "./About/TwoColumnParagraph";
import ContactBtn from "./About/ContactBtn";

const About = () => {
  const paragraph = `From the beginning, ZeroWind has developed much of the fabric range using dynamic breathability membranes : + Intensity + Breathability.
The extraordinary technical performance of ZeroWind fabrics is guaranteed by the constant investment and research work on innovative materials to create unique garments for cycling, outdoor, running and urban sectors.
Laboratory tests and practical trials ensure the best experience of use and usage by the end consumer.`;
  return (
    <div className="mt-28 pb-20 relative">
      <RollingSentence />
      {/* BG IMAGE */}
      <div className="overflow-x-hidden">
        <svg
          width="1900"
          height="600"
          viewBox="30 0 140 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-3"
        >
          <path
            id="char_w"
            d="M166.89 0C158.68 10.4039 150.693 20.819 142.606 31.1667C136.295 39.2536 127.37 43.8088 118.154 43.8088H100.405C102.751 32.7413 105.096 21.6513 107.442 10.5614C101.913 17.4335 96.5848 24.3282 91.2008 31.1779C84.8561 39.2423 75.9647 43.82 66.7493 43.82H49C50.508 36.5317 52.1835 29.2209 53.6915 21.9325C55.1994 14.6442 56.7074 7.32209 58.2154 0.0112474H73.2839C70.9381 11.2587 68.5924 22.4836 66.2467 33.7086C69.7653 33.6524 73.2839 31.8303 75.786 28.6585C81.9854 20.8078 88.0061 12.9233 94.3731 5.0726C96.8864 1.88957 100.237 0.0562372 103.912 0.0224949H124.678C122.332 11.2699 119.986 22.4949 117.64 33.7198C121.327 33.6636 124.7 31.864 127.191 28.6697C134.586 19.1431 142.092 9.57157 149.632 0.0224949H166.878L166.89 0Z"
            fill="#f5f5f5"
          ></path>
          <path
            d="M7.20474 10.1115C7.87494 6.73722 8.54515 3.37423 9.21536 0H58.6097L56.5991 10.0552C46.0545 17.9509 35.4987 25.8241 24.9541 33.6973H51.5837C50.9135 37.0716 50.0757 40.4346 49.4055 43.8088H0C0.670208 40.4571 1.50797 37.1053 2.17818 33.7536C12.7228 25.8804 23.2786 18.0072 33.8232 10.1115H7.20474Z"
            fill="#f5f5f5"
          ></path>
          <path
            fill="#f5f5f5"
            d="M10.5556 5.20923c0 3.16915-2.34584 5.14277-5.13153 5.14277-2.79697 0-5.14282-1.97362-5.14282-5.14277C.28125 2.0288 2.6271.0664063 5.42407.0664063 8.19849.0664062 10.5556 2.0288 10.5556 5.20923Zm-.94736 0c0-2.68419-1.91727-4.3308-4.18417-4.3308-2.27818 0-4.20675 1.64661-4.20675 4.3308 0 2.67291 1.91729 4.33079 4.20675 4.33079 2.2669 0 4.18417-1.65788 4.18417-4.33079Zm-2.88719.4624 1.28568 2.31202H6.46164L5.34511 5.8408H4.7248v2.14285H3.31503V2.35586H5.7624c1.3421 0 2.08646.65413 2.08646 1.78195-.01128.71052-.41729 1.2857-1.12781 1.53382Zm-2.00751-.80075h.77819c.56391 0 .90224-.25939.90224-.73307 0-.49624-.30449-.74436-.90224-.74436h-.77819v1.47743Z"
          ></path>
        </svg>
        {/* ABOUT CONTENT */}
        <div className="absolute top-24 md:top-32 lg:bottom-0 lg:left-36 px-12 gt-america-regular">
          <div className="md:text-2xl text-xl text-[#f5f5f5] max-w-2xl lg:mb-24 mb-12">
            Passion for outdoor activities and pursuit of technicality make
            ZeroWind the ideal brand for creating performance fabrics for a wide
            range of uses.
          </div>
          <div className="text-base text-[#959595] tracking-widest">
            <TwoColumnParagraph text={paragraph} />
          </div>
          <div className="lg:mt-24 mt-6">
            <ContactBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
