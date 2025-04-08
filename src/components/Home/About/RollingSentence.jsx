import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RollingWord = ({ word }) => {
  return (
    <div className="overflow-hidden h-[1.2em] min-w-[4.5em] text-center inline-block">
      <AnimatePresence mode="wait">
        <motion.div
          key={word}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-[#e2de00]"
        >
          {word}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const RollingSentence = () => {
  const words = ["unique", "original", "smart"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:absolute md:bottom-5/6 left-0 lg:text-7xl md:text-5xl sm:text-4xl text-xl text-[#f5f5f5] font-black flex flex-col gt-america-exp-black px-12">
      <div className="flex flex-wrap">
        <div className="md:h-[1.2em] text-wrap">ZeroWind creates</div>
        <RollingWord word={words[index]} />
      </div>
        <div className="md:h-[1.2em]">fabrics</div>
    </div>
  );
};

export default RollingSentence;
