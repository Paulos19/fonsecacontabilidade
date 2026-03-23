import Image from "next/image";

const stats = [
    { num: "500", desc: "CLIENTES ATIVOS NA BASE" },
    { num: "1.2B", desc: "EM PATRIMÔNIO GERIDO" },
    { num: "15", desc: "ANOS DE EXPERTISE MÁXIMA" },
    { num: "80", desc: "CIDADES ATENDIDAS NO PAÍS" },
];

export function AboutSection() {
    return (
        <section className="w-full bg-[#050505] text-white pt-24 pb-32 overflow-hidden relative" id="sobre">

            {/* Top Section: ABOUT + Texts + Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-7xl mx-auto w-full px-6 lg:px-10">

                {/* Left: Text */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-[20vw] lg:text-[11rem] font-outfit font-light tracking-tighter leading-none text-white mb-8 lg:mb-12">
                            SOBRE
                        </h2>
                        <p className="text-3xl md:text-4xl lg:text-[2.5rem] font-light uppercase tracking-wide leading-[1.15] text-white/90 mb-16 lg:mb-20">
                            SOMOS ESPECIALIZADOS EM ENTREGAR CONTABILIDADE CONSULTIVA PARA EMPRESAS QUE BUSCAM CRESCIMENTO SÓLIDO.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
                        <p className="text-xs md:text-[11px] lg:text-xs uppercase tracking-[0.08em] text-white/50 leading-relaxed font-medium flex-1">
                            NOSSA ABORDAGEM É CONSTRUÍDA SOBRE TRANSPARÊNCIA, PRECISÃO CONTÁBIL E ESTRATÉGIAS ADAPTÁVEIS AOS SEUS OBJETIVOS EXCLUSIVOS.
                        </p>
                        <p className="text-xs md:text-[11px] lg:text-xs uppercase tracking-[0.08em] text-white/50 leading-relaxed font-medium flex-1">
                            ACREDITAMOS QUE AS EXPERIÊNCIAS DE SUCESSO FINANCEIRO SÃO FUNDAMENTADAS NA CONFIANÇA MÚTUA E NUMA COMUNICAÇÃO ABERTA.
                        </p>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative w-full aspect-[4/5] lg:aspect-square bg-white overflow-hidden group">
                    <Image
                        src="/vini.png"
                        alt="Vinicius Dias"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    {/* Subtle overlay to tie image into dark theme when not hovered */}
                    <div className="absolute inset-0 bg-[#050505]/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                </div>

            </div>

            {/* Bottom Section: Numbers / Advantages */}
            <div className="max-w-7xl mx-auto w-full mt-24 lg:mt-32 px-6 lg:px-10 relative flex flex-col">

                {/* The solid center vertical bar (Hidden on mobile) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-20 bg-[#37A674] items-center justify-center z-10 shadow-[0_0_30px_rgba(55,166,116,0.15)]">
                    <span className="text-black font-semibold text-xl tracking-[0.25em] uppercase -rotate-90 whitespace-nowrap">
                        VANTAGENS
                    </span>
                </div>

                {/* Rows */}
                <div className="flex flex-col w-full relative z-0">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col lg:flex-row w-full items-stretch border-b border-white/10 group">

                            {/* Left Side: Number */}
                            <div className="lg:w-1/2 flex items-end justify-start lg:justify-end lg:pr-24 pb-4 pt-10 lg:pt-16">
                                <span className="text-8xl lg:text-[9rem] font-light leading-[0.8] tracking-tighter text-white/95 group-hover:text-[#37A674] transition-colors duration-500">
                                    {stat.num}
                                </span>
                                {/* Mobile Description */}
                                <span className="lg:hidden ml-6 text-sm uppercase tracking-widest text-white/60 mb-1 font-medium max-w-[120px]">
                                    {stat.desc}
                                </span>
                            </div>

                            {/* Right Side: Description */}
                            <div className="hidden lg:flex lg:w-1/2 items-end justify-start lg:pl-24 pb-4 pt-10 lg:pt-16">
                                <span className="text-xl lg:text-2xl uppercase tracking-[0.1em] text-white/80 font-medium pb-1.5 group-hover:text-white transition-colors duration-500">
                                    {stat.desc}
                                </span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
