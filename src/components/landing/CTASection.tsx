import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { CTAContent } from "@/lib/types";

interface Props {
  content: CTAContent;
}

export function CTASection({ content }: Props) {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-glow)_0%,transparent_60%)]" />
      <Container className="relative z-10 text-center">
        <ScrollReveal>
          <span className="mb-4 inline-block rounded-full border border-accent/50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Время начать
          </span>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white md:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {content.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
            {content.subtitle}
          </p>
          <div className="mt-10">
            <Button>{content.ctaText}</Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
