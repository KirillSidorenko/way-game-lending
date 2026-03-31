import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ResultsContent } from "@/lib/types";

interface Props {
  content: ResultsContent;
}

export function ResultsSection({ content }: Props) {
  return (
    <section className="bg-bg-secondary py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Результаты"
            title={content.heading}
            subtitle={content.subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-bg-card p-8 transition-all hover:border-accent/30 hover:bg-bg-card-hover">
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
