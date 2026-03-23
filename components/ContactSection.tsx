"use client";

import { ContactBackground } from "@/components/ui/shape-landing-hero";
import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) setStatus("success");
            else setStatus("error");
        } catch {
            setStatus("error");
        }
    };

    const fadeUpVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="contato" className="w-full relative">
            <ContactBackground>
                <div className="max-w-4xl mx-auto flex flex-col items-center">

                    <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white mb-4">
                            Dê o próximo passo <br /> com a <span className="text-emerald-400 font-medium">Fonseca Contabilidade</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
                            Preencha o formulário e nossa equipe entrará em contato para um diagnóstico estratégico do seu negócio.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full max-w-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl">
                        {status === "success" ? (
                            <div className="flex flex-col items-center text-center py-10 space-y-4">
                                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                                <h3 className="text-2xl font-medium text-white">Mensagem Enviada!</h3>
                                <p className="text-white/60">Verifique sua caixa de entrada. Nossa equipe já recebeu seus dados.</p>
                                <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-emerald-400 hover:text-emerald-300">
                                    Enviar nova mensagem
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold tracking-widest uppercase text-white/50 px-1">Nome Completo</label>
                                        <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors" placeholder="Ex: João Silva" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-semibold tracking-widest uppercase text-white/50 px-1">Telefone / WhatsApp</label>
                                        <input required type="text" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors" placeholder="(00) 00000-0000" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold tracking-widest uppercase text-white/50 px-1">E-mail Profissional</label>
                                    <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors" placeholder="joao@empresa.com.br" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-semibold tracking-widest uppercase text-white/50 px-1">Como podemos ajudar?</label>
                                    <textarea required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={4} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors resize-none" placeholder="Conte-nos um pouco sobre a sua empresa e seus desafios e objetivos atuais." />
                                </div>

                                {status === "error" && (
                                    <div className="flex items-center gap-2 text-red-400 text-sm px-1">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>Ocorreu um erro ao enviar. Tente novamente mais tarde.</span>
                                    </div>
                                )}

                                <button disabled={status === "loading"} type="submit" className="mt-4 bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm tracking-widest uppercase py-4 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:pointer-events-none">
                                    {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4" /> ENVIAR MENSAGEM</>}
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </ContactBackground>
        </section>
    );
}
