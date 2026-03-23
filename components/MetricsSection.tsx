"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// The simulated trend data showing an upward trajectory
const chartData = [
    0.2, 0.15, 0.3, 0.25, 0.4, 0.35, 0.5, 0.45, 0.6, 0.55, 0.7, 0.65, 0.8, 0.75, 0.9, 0.85, 0.95, 0.9, 1.0
];

export function MetricsSection() {
    return (
        <section className="w-full bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden" id="metricas">
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 flex flex-col gap-24">

                {/* Top: Text & Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10">

                    {/* Left: Copy */}
                    <div className="flex flex-col justify-center items-start z-10">
                        <h2 className="text-[3.5rem] md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8">
                            A Decisão<br />
                            <span className="text-white/80">Baseada em</span><br />
                            Dados
                        </h2>
                        <p className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-lg mb-12">
                            Sistema profissional de gestão orientada a resultados. Construído com rigor contábil e inteligência estratégica. Ferramentas de ponta para alavancar sua empresa.
                        </p>
                        <button className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-colors flex items-center gap-2 group">
                            Falar com Especialista
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right: Animated Sparkline Chart */}
                    <div className="relative h-[300px] lg:h-[450px] w-full flex items-end justify-between px-2 pt-20 lg:pt-0">
                        {chartData.map((val, i) => {
                            const peakY = val * 100; // Percentage height from bottom

                            return (
                                <div key={i} className="relative h-full w-[1px] flex flex-col items-center flex-1 max-w-[40px] justify-end">

                                    {/* Faint full-height background line for texture */}
                                    <div className="absolute inset-y-0 w-[1px] bg-white/[0.03]"></div>

                                    <motion.div
                                        initial={{ opacity: 0, height: "0%" }}
                                        whileInView={{ opacity: 1, height: `${peakY}%` }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                                        className="absolute bottom-0 w-[1px] flex flex-col items-center"
                                    >
                                        {/* The line below the diamond */}
                                        <div className="w-[1px] h-full bg-gradient-to-t from-transparent via-white/20 to-white"></div>

                                        {/* The Diamond / Star at the peak */}
                                        <div className="absolute top-0 -translate-y-1/2 w-[8px] h-[12px] lg:w-[12px] lg:h-[18px] bg-white shadow-[0_0_15px_2px_rgba(255,255,255,0.3)]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>

                                        {/* The line above the diamond */}
                                        <div className="absolute bottom-full w-[1px] h-[80px] lg:h-[120px] bg-gradient-to-b from-white/90 to-transparent"></div>
                                    </motion.div>

                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom: Metrics */}
                <div className="w-full flex w-full flex-col md:flex-row justify-between pt-10 border-t border-white/10 relative gap-10 md:gap-0">

                    {/* Decorative corner brackets matching original vibe */}
                    <div className="hidden lg:block absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30 -translate-x-[1px] -translate-y-[1px]"></div>
                    <div className="hidden lg:block absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30 translate-x-[1px] -translate-y-[1px]"></div>

                    {[
                        { num: "R$ 1Bi+", label: "Patrimônio Otimizado", id: "001" },
                        { num: "99%", label: "Assertividade Fiscal", id: "002" },
                        { num: "500+", label: "Empresas Parceiras", id: "003" },
                    ].map((metric, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left px-4 group">
                            <h3 className="text-5xl lg:text-[4rem] font-light tracking-tight text-white mb-6 leading-none group-hover:text-emerald-400 transition-colors duration-500">
                                {metric.num}
                            </h3>
                            <div className="flex w-full justify-between items-center border-t border-white/10 pt-4 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40">
                                <span className="font-mono">{metric.id}</span>
                                <span>{metric.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
