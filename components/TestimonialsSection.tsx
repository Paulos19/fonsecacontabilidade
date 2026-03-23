"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "A Fonseca Contabilidade organizou nossa vida financeira e garantiu um planejamento tributário impecável que salvou nosso semestre.",
        image: "https://randomuser.me/api/portraits/women/11.jpg",
        name: "Beatriz M.",
        role: "CEO",
    },
    {
        text: "Migrar para esta contabilidade foi fácil e rápido. Os dashboards interativos e suporte ultra especializado trouxeram muita paz de espírito.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Carlos T.",
        role: "Diretor Financeiro",
    },
    {
        text: "Profissionalismo irretocável. Confiamos 100% nas estratégias para escalar nosso negócio de tecnologia com segurança e previsibilidade.",
        image: "https://randomuser.me/api/portraits/women/43.jpg",
        name: "Sandra P.",
        role: "Fundadora",
    },
    {
        text: "O acompanhamento preventivo e as orientações em tempo real da equipe são, sem dúvida, o grande diferencial no nosso mercado.",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        name: "Otávio R.",
        role: "Sócio Administrador",
    },
    {
        text: "Nossa lucratividade aumentou incrivelmente após a reestruturação fiscal orientada por eles. São verdadeiros parceiros de negócio.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "Zélia F.",
        role: "Proprietária",
    },
    {
        text: "Suporte incansável e tecnologia de primeira. Nunca tivemos as finanças da agência tão bem desenhadas na nossa frente como agora.",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
        name: "Aline K.",
        role: "Operations Manager",
    },
    {
        text: "Uma visão altamente estratégica focada nos números que realmente importam. Eles antecipam problemas muito antes que aconteçam.",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        name: "Fernando S.",
        role: "Diretor Comercial",
    },
    {
        text: "Atendimento caloroso aliado à eficiência digital avançada. A conformidade da nossa empresa nunca esteve tão bem assegurada e clara.",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Sheila G.",
        role: "Head de E-commerce",
    },
    {
        text: "A clareza impressionante dos relatórios mensais e o tempo de resposta rápido nos permite focar totalmente no que sabemos fazer: vender mais.",
        image: "https://randomuser.me/api/portraits/men/91.jpg",
        name: "Hugo A.",
        role: "Administrador Geral",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

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

                {/* Scrolling Columns Block */}
                <div className="flex w-full justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] overflow-hidden h-[600px] lg:h-[700px]">
                    <TestimonialsColumn testimonials={firstColumn} duration={35} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
                </div>

            </div>

        </section>
    );
}
