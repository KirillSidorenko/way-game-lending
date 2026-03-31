"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { TestimonialsContent } from "@/lib/types";

interface Props {
  content: TestimonialsContent;
}

export function TestimonialsSection({ content }: Props) {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-bg-secondary py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading tag="Отзывы" title={content.heading} />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {content.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="rounded-2xl border border-white/10 bg-bg-card p-8">
                <div className="mb-4 text-3xl text-accent">&ldquo;</div>
                <p className="text-sm leading-relaxed text-white/80 mb-6">
                  {item.text}
                </p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="size-10 rounded-full bg-accent/20" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-text-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
