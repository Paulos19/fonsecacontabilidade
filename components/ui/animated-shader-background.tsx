"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedShaderBackgroundProps {
  children?: React.ReactNode;
}

const AnimatedShaderBackground = ({ children }: AnimatedShaderBackgroundProps) => {
  return (
    <div className="relative w-full h-full min-h-[60vh] lg:min-h-[80vh] overflow-hidden bg-black flex items-center justify-center">
      {/* Dynamic Aurora Glows powered by Framer Motion and standard CSS Blurs */}
      <div className="absolute inset-0 z-0 opacity-60">
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#37A674]/30 rounded-full blur-[100px] will-change-transform"
        />
        <motion.div
          animate={{
            opacity: [0.6, 0.4, 0.6],
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2A7F59]/20 rounded-full blur-[120px] will-change-transform"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-[#37A674]/20 rounded-full blur-[80px] will-change-transform"
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export default AnimatedShaderBackground;
