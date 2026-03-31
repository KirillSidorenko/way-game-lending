"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { ChooserScreen } from "@/components/chooser/ChooserScreen";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { TeamSection } from "@/components/landing/TeamSection";
import { DiagnosticSection } from "@/components/landing/DiagnosticSection";
import { DemoSection } from "@/components/landing/DemoSection";
import { GrowthSection } from "@/components/landing/GrowthSection";
import { ResultsSection } from "@/components/landing/ResultsSection";
import { ToolsSection } from "@/components/landing/ToolsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CrossPromoSection } from "@/components/landing/CrossPromoSection";
import { CTASection } from "@/components/landing/CTASection";
import { ContactSection } from "@/components/landing/ContactSection";
import { content } from "@/data/content";

export default function Home() {
  const { variant, showLanding } = useTheme();

  if (!showLanding) {
    return <ChooserScreen />;
  }

  const c = content[variant];

  return (
    <>
      <Header />
      <main>
        <HeroSection content={c.hero} variant={variant} />
        <TeamSection content={c.team} />
        <DiagnosticSection content={c.diagnostic} />
        <DemoSection />
        <GrowthSection content={c.growth} />
        <ResultsSection content={c.results} />
        <ToolsSection content={c.tools} />
        <PricingSection content={c.pricing} />
        <TestimonialsSection content={c.testimonials} />
        <FAQSection content={c.faq} />
        <CrossPromoSection />
        <CTASection content={c.cta} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
