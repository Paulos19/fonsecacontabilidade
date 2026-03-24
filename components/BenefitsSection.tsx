"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Globe, Headphones, Ban } from "lucide-react";

const benefits = [
    {
        title: "Atendimento rápido",
        icon: <Zap className="w-6 h-6" />,
    },
    {
        title: "Sem burocracia",
        icon: <Ban className="w-6 h-6" />,
    },
    {
        title: "100% online",
        icon: <Globe className="w-6 h-6" />,
    },
    {
        title: "Segurança",
        icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
        title: "Suporte direto",
        icon: <Headphones className="w-6 h-6" />,
    },
];

export function BenefitsSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-[#0A0A0A] text-white border-y border-white/5 relative overflow-hidden">
            {/* Glow background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#37A674]/5 blur-[120px] pointer-events-none rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm uppercase tracking-[0.4em] font-semibold text-[#37A674] mb-4">Escolha a Excelência</h2>
                    <h3 className="text-3xl md:text-5xl lg:text-[4rem] font-light tracking-tighter">Por que escolher a Fonseca?</h3>
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#37A674] group-hover:border-[#37A674]/50 group-hover:bg-[#37A674]/5 transition-all duration-500 transform group-hover:rotate-6">
                                {benefit.icon}
                            </div>
                            <span className="text-xs uppercase tracking-[0.2em] font-light text-white/40 group-hover:text-white transition-colors">
                                {benefit.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
