"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: { text: string; image: string; name: string; role: string }[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_15px_rgba(0,255,170,0.03)] hover:shadow-[0_0_20px_rgba(0,255,170,0.1)] transition-shadow duration-500 max-w-xs w-full" key={i}>
                                    <div className="text-white/80 font-light text-sm md:text-base leading-relaxed">"{text}"</div>
                                    <div className="flex items-center gap-4 mt-8">
                                        <img
                                            width={48}
                                            height={48}
                                            src={image}
                                            alt={name}
                                            className="h-12 w-12 rounded-full border border-white/20 grayscale"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-semibold text-white tracking-tight leading-5">{name}</div>
                                            <div className="text-[10px] sm:text-xs leading-5 text-emerald-400 tracking-wider uppercase mt-1">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
