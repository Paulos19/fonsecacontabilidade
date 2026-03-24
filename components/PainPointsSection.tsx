"use client";

import { motion } from "framer-motion";
import { AlertCircle, ShieldAlert, FolderClosed, ClipboardList } from "lucide-react";

const pains = [
    {
        title: "Confusão com impostos",
        icon: <ClipboardList className="w-8 h-8 md:w-10 md:h-10 text-[#37A674]" />,
    },
    {
        title: "Medo de multas",
        icon: <ShieldAlert className="w-8 h-8 md:w-10 md:h-10 text-[#37A674]" />,
    },
    {
        title: "Falta de organização",
        icon: <FolderClosed className="w-8 h-8 md:w-10 md:h-10 text-[#37A674]" />,
    },
    {
        title: "Dificuldade com burocracia",
        icon: <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-[#37A674]" />,
    },
];

export function PainPointsSection() {
    return (
        <section className="w-full py-24 md:py-32 bg-[#050505] text-white overflow-hidden relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-light tracking-tighter leading-tight mb-6">
                        Cansado de se preocupar com <br className="hidden md:block" />
                        a <span className="text-[#37A674]">burocracia?</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group p-8 md:p-10 bg-white/5 border border-white/10 hover:border-[#37A674]/30 transition-all duration-500 rounded-px flex flex-col items-center text-center gap-6"
                        >
                            <div className="p-4 rounded-full bg-[#37A674]/5 group-hover:bg-[#37A674]/10 transition-colors">
                                {pain.icon}
                            </div>
                            <h3 className="text-lg md:text-xl uppercase tracking-widest font-light text-white/80 group-hover:text-white">
                                {pain.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden group border border-[#37A674]/20 bg-[#37A674]/5 p-8 md:p-12 text-center"
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#37A674]/10 blur-[60px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#37A674]/10 blur-[60px] pointer-events-none"></div>

                    <p className="text-xl md:text-3xl font-light tracking-tight text-white/90">
                        A <span className="text-[#37A674] font-medium">Fonseca Contabilidade</span> resolve tudo isso pra você, <br className="hidden md:block" />
                        de forma <span className="text-white font-medium">simples e 100% online.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
