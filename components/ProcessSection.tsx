"use client";

import { motion } from "framer-motion";
import { MessageSquare, ClipboardCheck, Settings, Heart } from "lucide-react";

const steps = [
    {
        step: "Passo 1",
        title: "Entre em contato",
        description: "Fale conosco pelo WhatsApp",
        icon: <MessageSquare className="w-6 h-6" />,
    },
    {
        step: "Passo 2",
        title: "Analisamos sua situação",
        description: "Entendemos suas necessidades",
        icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
        step: "Passo 3",
        title: "Resolvemos tudo",
        description: "Cuidamos de toda a parte burocrática",
        icon: <Settings className="w-6 h-6" />,
    },
    {
        step: "Passo 4",
        title: "Você fica tranquilo",
        description: "Foque no que realmente importa",
        icon: <Heart className="w-6 h-6" />,
    },
];

export function ProcessSection() {
    return (
        <section className="w-full py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden" id="processo">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-light tracking-tighter mb-4">Como funciona?</h2>
                    <p className="text-sm md:text-base uppercase tracking-[0.3em] font-medium text-white/40">O fluxo da sua tranquilidade</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden lg:block absolute top-[10%] left-0 right-0 h-[1px] bg-white/10 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="relative z-10 flex flex-col items-center group"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#37A674]/10 border border-[#37A674]/30 flex items-center justify-center text-[#37A674] mb-8 group-hover:bg-[#37A674] group-hover:text-black transition-all duration-500 transform group-hover:scale-110">
                                {step.icon}
                            </div>

                            <div className="text-center">
                                <p className="text-[#37A674] font-medium text-[10px] md:text-sm tracking-[0.2em] uppercase mb-4">{step.step}</p>
                                <h4 className="text-xl md:text-2xl font-light tracking-tight mb-3 group-hover:text-white transition-colors">{step.title}</h4>
                                <p className="text-white/40 text-sm md:text-base font-light tracking-wide group-hover:text-white/60 transition-colors uppercase">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
