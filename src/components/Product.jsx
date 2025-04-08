import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import arsenal from "../assets/images/home-products/arsenal.webp";
import bergamo from "../assets/images/home-products/bergamo.webp";
import bradsoftshell from "../assets/images/home-products/brad-softshell.webp";
import grandprix from "../assets/images/home-products/grand-prix.webp";
import skin from "../assets/images/home-products/skin.webp";
import tempest from "../assets/images/home-products/tempest.webp";
import elaprint from "../assets/images/home-products/elaprint.webp";
import Marquee from "react-fast-marquee";
import fit from "../assets/images/home-products/tech-feature/fit.svg";
import zwr from "../assets/images/home-products/tech-feature/zwr.svg";
import motionText from "../assets/images/home-products/tech-feature/motion.svg";
import powerText from "../assets/images/home-products/tech-feature/motion.svg";
import braveText from "../assets/images/home-products/tech-feature/motion.svg";

const productOptions = [
  {
    id: 1,
    img: arsenal,
    name: "Arsenal",
    prodDetails: {
      technology: fit,
      feature: zwr,
      description:
        "Custom product exclusively for customer. Light shield fabric for mid-season. Very breathable and with absolute wind protection. Resistant to abrasion. Extremely stretchy, perfect for making slim fit garments. Photo: Selkie jacket by Gobik (gobik.com).",
    },
  },
  {
    id: 2,
    img: bergamo,
    name: "Bergamo",
    prodDetails: {
      technology: fit,
      feature: zwr,
      description:
        "Fabric developed for mid season. Windproof, breathable, water-resistant and very elastic. For temperatures from 9° to 15°C",
    },
  },
  {
    id: 3,
    img: bradsoftshell,
    name: "Softshell",
    prodDetails: {
      technology: motionText,
      feature: zwr,
      description:
        "Winter softshell with highly breathable membrane and total wind protection. High abrasion resistance. Very stretchy, perfect for slim fit garments. Environmentally friendly water repellent treatment (PFAS free). Photo: Heavy Primapelle winter jacket by Pissei (pissei.com)",
    },
  },
  {
    id: 4,
    img: grandprix,
    name: "Grand Prix",
    prodDetails: {
      technology: fit,
      feature: zwr,
      description:
        "Light shield fabric for mid-season. Very breathable and with absolute wind protection. Resistant to abrasion. Extremely stretchy, perfect for making slim fit garments. Environmentally friendly water repellent treatment (PFAS free). Photo: Pro Team jacket by GSPORT (https://gsportapparel.com/)",
    },
  },
  {
    id: 5,
    img: tempest,
    name: "Tempest",
    prodDetails: {
      technology: powerText,
      feature: zwr,
      description:
        "Double-sided fabric for cold season. Windproof, breathable, elastic, insulating. For temperatures from 8° to 15°C",
    },
  },
  {
    id: 6,
    img: elaprint,
    name: "Elaprint",
    prodDetails: {
      technology: motionText,
      feature: zwr,
      description:
        "Winter will no longer stand in the way of your outings with Elaprint ZWR. Windproof, breathable, rainproof, insulating and elastic. For temperatures from -1° to 8°C",
    },
  },
  {
    id: 7,
    img: skin,
    name: "Skin",
    prodDetails: {
      technology: braveText,
      feature: zwr,
      description:
        "Versatility between mid and warm season. Extremely light weight, protects against wind and light rain. For temperatures from 15° to 23°C",
    },
  },
];

function Product() {
  const [selected, setSelected] = useState(productOptions[0]);
  const [prevId, setPrevId] = useState(selected.id);
  const [hovered, setHovered] = useState(false);

  const handleSelect = (product) => {
    setPrevId(selected.id);
    setSelected(product);
  };

  // Determine direction: left (-1) or right (1)
  const direction = selected.id > prevId ? 1 : -1;

  return (
    <div className="relative w-full px-12 h-full flex flex-col items-center justify-center overflow-hidden text-white py-28">
      {/* Top Navigation */}
      <div className="w-[190px]">
        <Marquee className="text-[#959595]" speed={40}>
          <div className="ms-3 uppercase tracking-widest">
            Discover our products
          </div>
        </Marquee>
      </div>

      {/* Main Product Image Animation */}
      <div
        className="z-10 mt-20 lg:h-[60vh] flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={selected.id}
            src={selected.img}
            alt={selected.name}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, filter: "brightness(0.7)" }}
            whileHover={{ scale: 1.1, filter: "brightness(1)" }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full object-contain"
          />
        </AnimatePresence>
      </div>

      {/* Animated Background Text */}
      <div className="absolute z-0">
        <AnimatePresence mode="wait">
          <motion.h1
            key={selected.name}
            initial={{ y: 80, opacity: 0 }}
            animate={{
              y: 0,
              opacity: hovered ? 0.7 : 0.3,
            }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-[12vw] text-center tracking-wider uppercase font-extrabold select-none transition-all duration-500 ${
              hovered ? "fill-text" : "stroke-text"
            }`}
          >
            {selected.name}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Thumbnail Product List */}
      <div className="flex flex-wrap justify-center gap-10 mt-12 z-20">
        {productOptions.map((product) => (
          <div
            key={product.id}
            className={`px-5 py-2 rounded-lg cursor-pointer ${
              selected.id === product.id
                ? " border border-[#e2de00] bg-[#e2de00]/5"
                : "opacity-40 hover:opacity-100 transition duration-300"
            }`}
            onClick={() => handleSelect(product)}
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-24 w-24 object-contain transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Product Details */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ x: -100, y: -100, opacity: 0 }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            exit={{
              x: -100,
              y: -100,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            className="text-[#f5f5f5] px-8 pt-8 pb-16 flex flex-col gap-8 bg-black lg:absolute z-12 top-56 left-44 max-w-[22rem] h-max rounded-xl"
          >
            <div className="text-3xl">{selected?.name}</div>
            <div className="flex gap-8 text-[#959595]">
              <div className="">
                <p className="text-xs tracking-widest mb-4">TECHNOLOGY</p>
                <div>
                  <img
                    className="h-5"
                    src={selected?.prodDetails?.technology}
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <p className="text-xs tracking-widest mb-4">FEATURE</p>
                <div>
                  <img
                    className="h-5"
                    src={selected?.prodDetails?.feature}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="text-[#959595] text-wrap">
              {selected?.prodDetails?.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Product;
