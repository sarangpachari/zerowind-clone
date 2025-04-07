import { motion, useMotionValue, useSpring, AnimatePresence, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useEffect } from 'react';

const CustomCursor = ({ visible }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

 // Add a tiny offset to Y so it stays *just* below the pointer
 const cursorYWithOffset = useTransform(cursorYSpring, (y) => y + 80);

 useEffect(() => {
   const moveCursor = (e) => {
     // Center the 64x64 box (w-16 h-16), so subtract 32
     cursorX.set(e.clientX - 24);
     cursorY.set(e.clientY - 24);
     
   };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed pointer-events-none z-50 w-12 h-12 rounded-md bg-[#E2DE00] flex items-center justify-center"
          style={{
             translateX: cursorXSpring,
        translateY: cursorYWithOffset,
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 180,
            transition: {
              duration: 0.5,
              ease: 'easeOut',
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            rotate: -90,
            transition: {
              duration: 0.2,
              ease: 'easeIn',
            },
          }}
        >
          <Plus />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomCursor;
