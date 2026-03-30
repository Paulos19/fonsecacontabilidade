"use client"

import React from "react"
import { motion } from "framer-motion"

export default function PaperShaderBackground({ children }: { children?: React.ReactNode }) {
    return (
        <div className="relative w-full h-full overflow-hidden bg-[#050505]">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-50%] w-[200%] h-[200%] will-change-transform"
                    style={{
                        backgroundImage: `radial-gradient(circle at center, #2A7F59 0%, transparent 40%), radial-gradient(circle at bottom right, #37A674 0%, transparent 50%)`,
                        backgroundSize: '100% 100%',
                    }}
                />
            </div>
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    )
}
