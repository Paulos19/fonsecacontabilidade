"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValue,
    useMotionTemplate,
} from "framer-motion";

export const InfiniteGridBackground = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]",
                className
            )}
        >
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <GridPattern />
            </div>

            <motion.div
                className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                style={{ maskImage, WebkitMaskImage: maskImage }}
            >
                <GridPattern />
            </motion.div>

            {/* Optimized Glows: Reduced blur intensity and added will-change-transform for better hardware acceleration */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-[#37A674]/20 blur-[60px] translate-z-0 will-change-transform" />
                <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-[#2A7F59]/20 blur-[40px] translate-z-0 will-change-transform" />
                <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-[#37A674]/20 blur-[60px] translate-z-0 will-change-transform" />
            </div>

            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
};

const GridPattern = () => {
    return (
        <div
            className="absolute inset-[-40px] w-[calc(100%+80px)] h-[calc(100%+80px)] pointer-events-none animate-grid-movement"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
            }}
        />
    );
};
