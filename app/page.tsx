import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MetricsSection } from "@/components/MetricsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MetricsSection />
    </main>
  );
}
