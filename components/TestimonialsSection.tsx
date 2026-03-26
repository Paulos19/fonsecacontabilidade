"use client";

import { motion } from "framer-motion";
import { Testimonials3D } from "@/components/Testimonials3D";

export function TestimonialsSection() {
    return (
        <section className="bg-[#050505] min-h-screen w-full relative flex flex-col justify-center py-24 overflow-hidden" id="depoimentos">

            <div className="max-w-7xl z-10 mx-auto px-6 w-full h-full flex flex-col items-center">

                {/* Header Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <div className="border border-white/20 bg-white/[0.02] py-2 px-6 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-[#37A674]">
                            Prova Social
                        </div>
                    </div>

                    <h2 className="text-[2.5rem] md:text-6xl lg:text-7xl font-light tracking-tighter text-white leading-tight">
                        Resultados atestados <br /> por <span className="text-white/80">grandes líderes.</span>
                    </h2>
                    <p className="mt-8 text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                        Veja o que nossos clientes dizem sobre o padrão superior de gestão da Fonseca Contabilidade.
                    </p>
                </motion.div>

                {/* 3D Testimonials */}
                <div className="w-full flex items-center justify-center py-8">
                  <Testimonials3D />
                </div>

            </div>

        </section>
    );
}
