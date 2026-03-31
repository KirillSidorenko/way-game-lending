import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ToolsContent } from "@/lib/types";

interface Props {
  content: ToolsContent;
}

export function ToolsSection({ content }: Props) {
  return (
    <section id="methodology" className="scroll-mt-24 py-20">
      <Container>
        <ScrollReveal>
          <div className="rounded-3xl bg-[#faf5ef] p-8 md:p-12">
            <SectionHeading
              tag="Методика"
              title={content.heading}
              subtitle={content.subtitle}
              light
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm">
                    <div className="flex size-12 items-center justify-center rounded-full bg-accent/10">
                      <span className="text-accent text-xl font-bold">
                        {["🧠", "🎭", "📊", "⏰"][i]}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-black">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-black/60">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
