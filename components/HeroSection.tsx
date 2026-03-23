"use client";

import Image from "next/image";

export function HeroSection() {
    return (
        <section
            className="relative h-screen w-full overflow-hidden text-white bg-[#050505]"
            id="inicio"
        >
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Subtle dark gradient overlay to ensure text legibility while matching the lighting */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/70 z-10 mix-blend-multiply"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    {/* We assume video.mp4 is available */}
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Main Content Layout */}
            <div className="absolute inset-0 z-20 w-full h-full pointer-events-none px-6 md:px-10 py-8 flex flex-col justify-end md:block">

                {/* Content Container - Stacks on mobile, absolute on desktop */}
                <div className="flex flex-col gap-8 md:block pointer-events-none">

                    {/* Bottom Right Text (Matches Audi paragraph) - Stacks first on mobile */}
                    <div className="md:absolute md:bottom-[10%] md:right-[8%] w-full max-w-sm pointer-events-auto text-left md:max-w-md">
                        <p className="text-xl md:text-3xl font-light leading-snug tracking-tight text-white/90">
                            A gestão mais avançada FC — <span className="text-white/70">projetada para romper limites e redefinir a performance.</span>
                        </p>
                    </div>

                    {/* Bottom Left Content (Matches the small car card) - Stacks below on mobile */}
                    <div className="md:absolute md:bottom-[10%] md:left-[8%] flex flex-col gap-4 md:gap-6 w-full max-w-[320px] pointer-events-auto">
                        {/* Divider line */}
                        <div className="w-full h-[1px] bg-white/30 hidden md:block"></div>

                        <div className="flex gap-4 items-start">
                            {/* Dark image/logo placeholder matching the car thumbnail */}
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0a0a0a] border border-white/5 flex items-center justify-center overflow-hidden relative shrink-0">
                                <div className="absolute inset-0 bg-gradient-premium opacity-[0.15]"></div>
                                <Image
                                    src="/logo/PNG.png"
                                    alt="FC Icon"
                                    width={50}
                                    height={25}
                                    className="object-contain opacity-70 z-10"
                                />
                            </div>

                            {/* Info text and Explore button */}
                            <div className="flex flex-col justify-between h-20 md:h-24">
                                <div>
                                    <p className="text-[12px] md:text-[13px] text-zinc-300 font-medium leading-tight">
                                        Bem-vindo à Nova<br />Contabilidade — <span className="text-zinc-500">2026.</span>
                                    </p>
                                </div>
                                <div className="flex items-center mt-auto">
                                    <button className="bg-black text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-semibold px-4 md:px-6 py-2 md:py-2.5 hover:bg-zinc-900 transition-colors border border-white/5 whitespace-nowrap">
                                        Explorar
                                    </button>
                                    <div className="bg-[#050505] border-l border border-l-white/5 border-white/5 px-2.5 md:px-3 py-2 md:py-2.5 flex items-center justify-center hover:bg-zinc-800 cursor-pointer transition-colors">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Noise Overlay for premium texture */}
            <div className="noise-overlay absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-20"></div>
        </section>
    );
}
