import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Vinicius Dias | Fonseca Contabilidade",
  description:
    "Descubra uma contabilidade moderna e de alta performance. Especialista em estratégias de crescimento e gestão financeira.",
  keywords:
    "contabilidade, escritório de contabilidade, contador, Vinicius Dias, Fonseca Contabilidade, gestão financeira, contabilidade digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} dark antialiased`} suppressHydrationWarning>
      <body className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-[#37A674]/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
