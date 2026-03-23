"use client";

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-10 md:py-8 flex items-center justify-between w-full pointer-events-auto">
            {/* Left: Logo */}
            <div className="flex-1 flex justify-start">
                <Link href="/">
                    <Image
                        src="/logo/PNG.png"
                        alt="Fonseca Contabilidade Logo"
                        width={70}
                        height={36}
                        className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
                <span className="hidden lg:block text-[11px] text-white font-medium tracking-wide">
                    O Novo Padrão — 2026
                </span>
                <div className="flex items-center gap-1">
                    <Link
                        href="#contato"
                        className="bg-black border border-white/10 text-white px-5 py-2.5 text-[11px] uppercase tracking-[0.1em] font-medium hover:bg-white hover:text-black transition-colors"
                    >
                        Configurar
                    </Link>
                    <button className="bg-black border border-white/10 flex flex-col justify-center items-center w-[41px] h-[41px] hover:bg-white/10 transition-colors group">
                        <span className="w-4 h-[1.5px] bg-white mb-1.5 transition-all group-hover:w-5"></span>
                        <span className="w-4 h-[1.5px] bg-white transition-all group-hover:w-3"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group tracking-wide"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00ffaa] to-[#00d0ff] transition-all duration-300 group-hover:w-full rounded-full"></span>
        </Link>
    );
}
