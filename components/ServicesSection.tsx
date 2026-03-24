"use client";

import { motion } from "framer-motion";
import { PlusCircle, RefreshCw, FileText, Fingerprint, Users, ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Abertura de MEI",
        description: "Abra seu MEI rapidamente, sem complicação.",
        icon: <PlusCircle className="w-6 h-6" />,
    },
    {
        title: "Regularização de MEI",
        description: "Regularize sua situação e evite multas.",
        icon: <RefreshCw className="w-6 h-6" />,
    },
    {
        title: "Declaração de IR",
        description: "Sua declaração feita com segurança e precisão.",
        icon: <FileText className="w-6 h-6" />,
    },
    {
        title: "Certificado Digital",
        description: "Emita seu certificado digital com agilidade.",
        icon: <Fingerprint className="w-6 h-6" />,
    },
    {
        title: "Consultoria Contábil",
        description: "Orientação personalizada para seu negócio.",
        icon: <Users className="w-6 h-6" />,
    },
];

export function ServicesSection() {
    return (
        <section className="w-full py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden" id="servicos">
            {/* Subtle grain texture overlay if needed, though nois-overlay is probably global */}

            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-tighter leading-none mb-6">
                            NOSSOS <br className="hidden md:block" />
                            <span className="text-[#37A674]">SERVIÇOS</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-md"
                    >
                        <p className="text-lg md:text-xl font-light text-white/50 leading-relaxed uppercase tracking-wider">
                            Soluções simples para suas necessidades <br className="hidden md:block" />
                            contábeis projetadas para máxima eficiência.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-white/5 overflow-hidden border border-white/5 rounded-2xl">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[380px] bg-[#0A0A0A] p-10 flex flex-col justify-between hover:bg-[#37A674]/5 transition-all duration-700"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#37A674] group-hover:bg-[#37A674] group-hover:text-black transition-all duration-500">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-light tracking-tight mb-4 group-hover:text-[#37A674] transition-colors">{service.title}</h3>
                                    <p className="text-white/40 text-sm tracking-wide leading-relaxed font-light group-hover:text-white/60">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#37A674] font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 cursor-pointer">
                                <span>Saiba Mais</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-white/5 border-l-transparent transition-all group-hover:border-t-[#37A674]/20 duration-700"></div>
                        </motion.div>
                    ))}

                    {/* Fill the empty slot in the grid with a Call to Action if odd number */}
                    {services.length % 3 !== 0 && (
                        <div className="group relative h-[380px] bg-[#0A0A0A] p-10 flex flex-col justify-center items-center border-l border-white/5">
                            <p className="text-sm uppercase tracking-[0.3em] text-white/30 mb-8">Personalizado</p>
                            <h3 className="text-xl font-light tracking-tight text-center mb-8">Precisa de algo mais específico?</h3>
                            <button className="px-8 py-3 border border-white/10 hover:border-[#37A674] hover:bg-[#37A674] hover:text-black transition-all duration-500 text-xs uppercase tracking-widest font-semibold">
                                Fale Conosco
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
