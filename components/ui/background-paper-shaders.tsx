"use client"

import React from "react"

export default function PaperShaderBackground({ children }: { children?: React.ReactNode }) {
    return (
        <div className="relative w-full h-full overflow-hidden bg-[#050505]">
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-50"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(42,127,89,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(55,166,116,0.18) 0%, transparent 70%)`,
                }}
            />
            {/* Grain overlay for paper-like premium texture without JS calculations */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay noise-overlay" />

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    )
}
