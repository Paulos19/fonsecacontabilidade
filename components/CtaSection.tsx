import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { ArrowUpRight } from "lucide-react";

export function CtaSection() {
    return (
        <section className="w-full relative bg-black" id="cta">
            <AnimatedShaderBackground>
                <div className="w-full h-full flex flex-col items-center justify-center px-6 text-center pointer-events-auto z-20">

                    <h2 className="text-[2.5rem] md:text-5xl lg:text-[5.5rem] font-light leading-tight tracking-tighter text-white mb-6 max-w-5xl drop-shadow-2xl">
                        Pronto para ver sua empresa alcançar o <span className="font-semibold text-emerald-400">próximo nível</span>?
                    </h2>

                    <p className="text-lg md:text-2xl text-white/80 font-light tracking-wide mb-14 max-w-3xl drop-shadow-md">
                        Junte-se à seleta lista de negócios que substituíram a burocracia pela visão estratégica baseada em dados reais.
                    </p>

                    <button className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-lg md:text-xl tracking-widest uppercase px-12 py-6 transition-all hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-4 group shadow-[0_0_40px_rgba(52,211,153,0.25)]">
                        AGENDAR DIAGNÓSTICO GRATUITO
                        <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                </div>

                {/* Subtle noise overlay explicitly for this container */}
                <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-30 bg-[url('/noise.webp')]"></div>
            </AnimatedShaderBackground>
        </section>
    );
}
