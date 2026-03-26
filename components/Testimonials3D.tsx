"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/3d-testimonails";

const testimonials = [
  {
    name: "Beatriz M.",
    role: "CEO",
    text: "A Fonseca Contabilidade organizou nossa vida financeira e garantiu um planejamento tributário impecável que salvou nosso semestre.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Carlos T.",
    role: "Diretor Financeiro",
    text: "Migrar para esta contabilidade foi fácil e rápido. Os dashboards interativos e suporte ultra especializado trouxeram muita paz de espírito.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sandra P.",
    role: "Fundadora",
    text: "Profissionalismo irretocável. Confiamos 100% nas estratégias para escalar nosso negócio de tecnologia com segurança e previsibilidade.",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    name: "Otávio R.",
    role: "Sócio Administrador",
    text: "O acompanhamento preventivo e as orientações em tempo real da equipe são, sem dúvida, o grande diferencial no nosso mercado.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Zélia F.",
    role: "Proprietária",
    text: "Nossa lucratividade aumentou incrivelmente após a reestruturação fiscal orientada por eles. São verdadeiros parceiros de negócio.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Aline K.",
    role: "Operations Manager",
    text: "Suporte incansável e tecnologia de primeira. Nunca tivemos as finanças da agência tão bem desenhadas na nossa frente como agora.",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "Fernando S.",
    role: "Diretor Comercial",
    text: "Uma visão altamente estratégica focada nos números que realmente importam. Eles antecipam problemas muito antes que aconteçam.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Sheila G.",
    role: "Head de E-commerce",
    text: "A clareza impressionante dos relatórios mensais e o tempo de resposta rápido nos permite focar totalmente no que sabemos fazer: vender mais.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Hugo A.",
    role: "Administrador Geral",
    text: "A clareza impressionante dos relatórios mensais e o tempo de resposta rápido nos permite focar totalmente no que sabemos fazer: vender mais.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
];

function TestimonialCard({
  name,
  role,
  text,
  image,
}: {
  name: string;
  role: string;
  text: string;
  image: string;
}) {
  return (
    <Card className="w-[300px] md:w-[350px] bg-[#0a0a0a] border-white/10 hover:border-[#37A674]/50 shadow-[0_0_15px_rgba(0,255,170,0.03)] hover:shadow-[0_0_20px_rgba(0,255,170,0.1)] transition-all duration-500">
      <CardContent className="p-8 md:p-10">
        <div className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-6">
          "{text}"
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border border-white/20">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white tracking-tight">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-[#37A674] tracking-wider uppercase mt-1">
              {role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Testimonials3D() {
  return (
    <div className="border border-white/10 rounded-lg relative flex h-[500px] md:h-[600px] w-full max-w-[1200px] mx-auto overflow-hidden">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        {/* Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        {/* Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        {/* Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        {/* Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#050505] to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050505] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#050505] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050505] to-transparent"></div>
    </div>
  );
}
