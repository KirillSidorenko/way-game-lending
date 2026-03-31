import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { GrowthContent } from "@/lib/types";

interface Props {
  content: GrowthContent;
}

export function GrowthSection({ content }: Props) {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-bg-primary py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Как это работает"
            title={content.heading}
            subtitle={content.subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {content.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
