import { motion } from 'framer-motion';
const word = 'ZEROWIND';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  hidden: { y: -40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Preloader  ()  {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center bg-[#272727] z-50">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-[5vw] uppercase font-semibold text-[#e2de00] flex"
      >
        {[...word].map((letter, i) => (
          <motion.span key={i} variants={letterAnimation}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Preloader;

