import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MetricsSection } from "@/components/MetricsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProcessSection } from "@/components/ProcessSection";
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
      <PainPointsSection />
      <ServicesSection />
      <MetricsSection />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
