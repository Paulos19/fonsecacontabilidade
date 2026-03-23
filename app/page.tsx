import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MetricsSection } from "@/components/MetricsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/ui/flickering-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MetricsSection />
      <TestimonialsSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
