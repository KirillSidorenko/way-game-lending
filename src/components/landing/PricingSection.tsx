import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { PricingContent } from "@/lib/types";

interface Props {
  content: PricingContent;
}

export function PricingSection({ content }: Props) {
  return (
    <section id="format" className="scroll-mt-24 bg-bg-primary py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Формат"
            title={content.heading}
            subtitle={content.subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.tiers.map((tier, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-bg-card p-8 text-center transition-all hover:border-accent/30 hover:bg-bg-card-hover min-h-[260px]">
                <span className="text-4xl">
                  {["👥", "🧩", "🎉", "📚", "🍸", "🧘"][i]}
                </span>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {tier.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
