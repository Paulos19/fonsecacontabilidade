"use client";

import React from 'react';

interface AnimatedShaderBackgroundProps {
  children?: React.ReactNode;
}

const AnimatedShaderBackground = ({ children }: AnimatedShaderBackgroundProps) => {
  return (
    <div className="relative w-full h-full min-h-[60vh] lg:min-h-[80vh] overflow-hidden bg-black flex items-center justify-center">
      {/* Dynamic Aurora Glows powered by pure CSS radial gradients and native Transform animations (0% GPU Filter Cost) */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div
          className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full animate-float-slow will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(55,166,116,0.18) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full animate-pulse-slow will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(42,127,89,0.12) 0%, transparent 60%)', animationDelay: '2s' }}
        />
        <div
          className="absolute top-[20%] left-[20%] w-[50%] h-[50%] rounded-full animate-float-slow will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(55,166,116,0.1) 0%, transparent 55%)', animationDelay: '4s' }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export default AnimatedShaderBackground;
