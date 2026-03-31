import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { DiagnosticContent } from "@/lib/types";

interface Props {
  content: DiagnosticContent;
}

export function DiagnosticSection({ content }: Props) {
  return (
    <section className="bg-bg-secondary py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading tag="Диагностика" title={content.heading} />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {content.points.map((point, i) => {
            const [title, ...rest] = point.split(" — ");
            const description = rest.join(" — ");
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-2xl border border-white/10 bg-bg-card p-8 transition-all hover:border-accent/30 hover:bg-bg-card-hover min-h-[200px]">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {title}
                  </h3>
                  {description && (
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {description}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
