"use client";

import { ChevronRight } from "lucide-react";
import { ClassValue, clsx } from "clsx";
import * as Color from "color-bits";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Helper function to convert any CSS color to rgba
export const getRGBA = (
    cssColor: React.CSSProperties["color"],
    fallback: string = "rgba(0, 255, 170, 0.5)",
): string => {
    if (typeof window === "undefined") return fallback;
    if (!cssColor) return fallback;

    try {
        if (typeof cssColor === "string" && cssColor.startsWith("var(")) {
            const element = document.createElement("div");
            element.style.color = cssColor;
            document.body.appendChild(element);
            const computedColor = window.getComputedStyle(element).color;
            document.body.removeChild(element);
            return Color.formatRGBA(Color.parse(computedColor));
        }

        return Color.formatRGBA(Color.parse(cssColor));
    } catch (e) {
        console.error("Color parsing failed:", e);
        return fallback;
    }
};

export const colorWithOpacity = (color: string, opacity: number): string => {
    if (!color.startsWith("rgb")) return color;
    return Color.formatRGBA(Color.alpha(Color.parse(color), opacity));
};


export const siteConfig = {
    hero: {
        description:
            "Contabilidade estratégica, transparente e digital orientada à performance para empresas que buscam escalar os limites.",
    },
    footerLinks: [
        {
            title: "Escritório",
            links: [
                { id: 1, title: "Sobre o Vinicius", url: "#sobre" },
                { id: 2, title: "Diferenciais", url: "#metricas" },
                { id: 3, title: "Casos de Sucesso", url: "#depoimentos" },
            ],
        },
        {
            title: "Conexão",
            links: [
                { id: 4, title: "Fale Conosco", url: "#contato" },
                { id: 5, title: "Área do Cliente", url: "#" },
                { id: 6, title: "Diagnóstico Gratuito", url: "#cta" },
            ],
        },
        {
            title: "Institucional",
            links: [
                { id: 7, title: "Política de Privacidade", url: "#" },
                { id: 8, title: "Segurança de Dados LGPD", url: "#" },
                { id: 9, title: "Termos de Serviço", url: "#" },
            ],
        },
    ],
};


interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    width?: number;
    height?: number;
    className?: string;
    maxOpacity?: number;
    text?: string;
    textColor?: string;
    fontSize?: number;
    fontWeight?: number | string;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
    squareSize = 3,
    gridGap = 3,
    flickerChance = 0.2,
    color = "#00ffaa",
    width,
    height,
    className,
    maxOpacity = 0.15,
    text = "",
    fontSize = 140,
    fontWeight = 600,
    ...props
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    const memoizedColor = useMemo(() => {
        return getRGBA(color);
    }, [color]);

    const drawGrid = useCallback(
        (
            ctx: CanvasRenderingContext2D,
            width: number,
            height: number,
            cols: number,
            rows: number,
            squares: Float32Array,
            dpr: number,
        ) => {
            ctx.clearRect(0, 0, width, height);

            const maskCanvas = document.createElement("canvas");
            maskCanvas.width = width;
            maskCanvas.height = height;
            const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
            if (!maskCtx) return;

            if (text) {
                maskCtx.save();
                maskCtx.scale(dpr, dpr);
                maskCtx.fillStyle = "white";
                maskCtx.font = `${fontWeight} ${fontSize}px "Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
                maskCtx.textAlign = "center";
                maskCtx.textBaseline = "middle";
                maskCtx.fillText(text, width / (2 * dpr), height / (2 * dpr));
                maskCtx.restore();
            }

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * (squareSize + gridGap) * dpr;
                    const y = j * (squareSize + gridGap) * dpr;
                    const squareWidth = squareSize * dpr;
                    const squareHeight = squareSize * dpr;

                    const maskData = maskCtx.getImageData(
                        x,
                        y,
                        squareWidth,
                        squareHeight,
                    ).data;
                    const hasText = maskData.some(
                        (value, index) => index % 4 === 0 && value > 0,
                    );

                    const opacity = squares[i * rows + j];
                    const finalOpacity = hasText
                        ? Math.min(1, opacity * 4 + 0.5) // boost text opacity
                        : opacity;

                    ctx.fillStyle = colorWithOpacity(memoizedColor, finalOpacity);
                    ctx.fillRect(x, y, squareWidth, squareHeight);
                }
            }
        },
        [memoizedColor, squareSize, gridGap, text, fontSize, fontWeight],
    );

    const setupCanvas = useCallback(
        (canvas: HTMLCanvasElement, width: number, height: number) => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            const cols = Math.ceil(width / (squareSize + gridGap));
            const rows = Math.ceil(height / (squareSize + gridGap));

            const squares = new Float32Array(cols * rows);
            for (let i = 0; i < squares.length; i++) {
                squares[i] = Math.random() * maxOpacity;
            }

            return { cols, rows, squares, dpr };
        },
        [squareSize, gridGap, maxOpacity],
    );

    const updateSquares = useCallback(
        (squares: Float32Array, deltaTime: number) => {
            for (let i = 0; i < squares.length; i++) {
                if (Math.random() < flickerChance * deltaTime) {
                    squares[i] = Math.random() * maxOpacity;
                }
            }
        },
        [flickerChance, maxOpacity],
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let gridParams: ReturnType<typeof setupCanvas>;

        const updateCanvasSize = () => {
            const newWidth = width || container.clientWidth;
            const newHeight = height || container.clientHeight;
            setCanvasSize({ width: newWidth, height: newHeight });
            gridParams = setupCanvas(canvas, newWidth, newHeight);
        };

        updateCanvasSize();

        let lastTime = 0;
        const animate = (time: number) => {
            if (!isInView) return;

            const deltaTime = (time - lastTime) / 1000;
            lastTime = time;

            updateSquares(gridParams.squares, deltaTime);
            drawGrid(
                ctx,
                canvas.width,
                canvas.height,
                gridParams.cols,
                gridParams.rows,
                gridParams.squares,
                gridParams.dpr,
            );
            animationFrameId = requestAnimationFrame(animate);
        };

        const resizeObserver = new ResizeObserver(() => {
            updateCanvasSize();
        });

        resizeObserver.observe(container);

        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0 },
        );

        intersectionObserver.observe(canvas);

        if (isInView) {
            animationFrameId = requestAnimationFrame(animate);
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
        };
    }, [setupCanvas, updateSquares, drawGrid, width, height, isInView]);

    return (
        <div
            ref={containerRef}
            className={cn(`h-full w-full ${className}`)}
            {...props}
        >
            <canvas
                ref={canvasRef}
                className="pointer-events-none"
                style={{
                    width: canvasSize.width,
                    height: canvasSize.height,
                }}
            />
        </div>
    );
};

export function useMediaQuery(query: string) {
    const [value, setValue] = useState(false);

    useEffect(() => {
        function checkQuery() {
            const result = window.matchMedia(query);
            setValue(result.matches);
        }

        checkQuery();
        window.addEventListener("resize", checkQuery);

        const mediaQuery = window.matchMedia(query);
        mediaQuery.addEventListener("change", checkQuery);

        return () => {
            window.removeEventListener("resize", checkQuery);
            mediaQuery.removeEventListener("change", checkQuery);
        };
    }, [query]);

    return value;
}

export const Footer = () => {
    const tablet = useMediaQuery("(max-width: 1024px)");

    return (
        <footer id="footer" className="w-full pb-0 bg-background border-t border-white/5 relative z-30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-10 py-16">
                <div className="flex flex-col items-start justify-start gap-y-6 max-w-sm mx-0">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo/PNG.png" alt="Fonseca Contabilidade Logo" width={50} height={50} className="w-[50px] opacity-90" />
                        <div className="flex flex-col">
                            <p className="text-xl font-bold tracking-tight text-white uppercase">Fonseca</p>
                            <p className="text-xs tracking-[0.2em] font-medium text-emerald-400 -mt-1 uppercase">Contabilidade</p>
                        </div>
                    </Link>
                    <p className="tracking-wide leading-relaxed text-white/50 text-sm font-light">
                        {siteConfig.hero.description}
                    </p>
                </div>

                <div className="pt-10 md:pt-0 md:w-1/2">
                    <div className="flex flex-col items-start justify-start md:flex-row md:items-start md:justify-between gap-y-10 lg:pl-10">
                        {siteConfig.footerLinks.map((column, columnIndex) => (
                            <ul key={columnIndex} className="flex flex-col gap-y-4">
                                <li className="mb-2 text-xs tracking-widest font-semibold uppercase text-emerald-400">
                                    {column.title}
                                </li>
                                {column.links.map((link) => (
                                    <li
                                        key={link.id}
                                        className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px] font-light tracking-wide text-white/60 hover:text-white transition-colors"
                                    >
                                        <Link href={link.url}>{link.title}</Link>
                                        <div className="flex size-4 items-center justify-center translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                            <ChevronRight className="h-4 w-4 text-emerald-400" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-48 md:h-72 relative mt-4 md:mt-12 z-0 border-t border-white/5 bg-black/50">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-20% md:from-40%" />
                <div className="absolute inset-0 mx-4 md:mx-10 overflow-hidden">
                    <FlickeringGrid
                        text={tablet ? "FONSECA" : "FONSECA CONTABILIDADE"}
                        fontSize={tablet ? 70 : 130}
                        className="h-full w-full opacity-80"
                        squareSize={3}
                        gridGap={tablet ? 2 : 3}
                        color="#00ffaa"
                        maxOpacity={0.25}
                        flickerChance={0.15}
                    />
                </div>
            </div>
        </footer>
    );
};
