import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { HeroContent } from "@/lib/types";
import Image from "next/image";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-primary pt-32 pb-8">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-transparent to-bg-primary z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-glow)_0%,transparent_70%)]" />
      </div>

      <Container className="relative z-20 flex flex-col items-center text-center">
        <ScrollReveal>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-[52px]">
            {content.heading}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
            {content.subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <Button>{content.ctaText}</Button>
          </div>
        </ScrollReveal>

        {/* Benefit cards */}
        <ScrollReveal delay={0.3} className="mt-auto pt-24 w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl"
                style={{
                  boxShadow: "inset 0 0 4px rgba(255,255,255,0.15)",
                }}
              >
                {benefit.icon && (
                  <Image
                    src={benefit.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="shrink-0 opacity-80"
                  />
                )}
                <p className="text-sm leading-snug text-white">
                  <span className="font-medium">{benefit.title}</span>
                  <br />
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
