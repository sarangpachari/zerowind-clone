import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import arsenal from '../assets/images/home-products/arsenal.webp';
import bergamo from '../assets/images/home-products/bergamo.webp';
import bradsoftshell from '../assets/images/home-products/brad-softshell.webp';
import grandprix from '../assets/images/home-products/grand-prix.webp';
import skin from '../assets/images/home-products/skin.webp';
import tempest from '../assets/images/home-products/tempest.webp';

const productOptions = [
  { id: 1, img: arsenal, name: 'Arsenal' },
  { id: 2, img: bergamo, name: 'Bergamo' },
  { id: 3, img: bradsoftshell, name: 'Softshell' },
  { id: 4, img: grandprix, name: 'Grand Prix' },
  { id: 5, img: skin, name: 'Skin' },
  { id: 6, img: tempest, name: 'Tempest' }
];

function Product() {
  const [selected, setSelected] = useState(productOptions[0]);
  const [prevId, setPrevId] = useState(selected.id);

  const handleSelect = (product) => {
    setPrevId(selected.id);
    setSelected(product);
  };

  // Determine direction: left (-1) or right (1)
  const direction = selected.id > prevId ? 1 : -1;

  return (
    <div className="relative w-full px-10 h-screen bg-[#272727] flex flex-col items-center justify-center overflow-hidden text-white">
      {/* Top Navigation */}
      <div className="absolute top-8 text-gray-300 text-sm tracking-wide font-light">
        UR PRODUCTS . DISCC
      </div>

      {/* Animated Background Text */}
      <div className="absolute z-0">
        <AnimatePresence mode="wait">
          <motion.h1
            key={selected.name}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 0.05 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[14vw] text-center tracking-wider stroke-text uppercase font-semibold select-none hover: text-[#e2de00]"
          >
            {selected.name}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Main Product Image Animation */}
      <div className="z-10 mt-20 h-[60vh] flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={selected.id}
            src={selected.img}
            alt={selected.name}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full object-contain"
          />
        </AnimatePresence>
      </div>

      {/* Thumbnail Product List */}
      <div className="flex flex-wrap justify-center gap-10 mt-12 z-20">
        {productOptions.map((product) => (
          <div
            key={product.id}
            className={`p-1 rounded-lg cursor-pointer ${
              selected.id === product.id
                ? ' border border-yellow-400'
                : 'opacity-40 hover:opacity-100 transition duration-300'
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
    </div>
  );
}

export default Product;
