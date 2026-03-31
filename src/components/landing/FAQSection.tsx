import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { FAQContent } from "@/lib/types";

interface Props {
  content: FAQContent;
}

export function FAQSection({ content }: Props) {
  return (
    <section id="faq" className="scroll-mt-24 py-20">
      <Container>
        <ScrollReveal>
          <div className="rounded-3xl bg-[#faf5ef] p-8 md:p-12">
            <SectionHeading
              tag="Вопросы и ответы"
              title={content.heading}
              subtitle="Собрали ключевые ответы, которые помогут разобраться в деталях игры."
              light
            />

            <div className="mx-auto max-w-3xl">
              {content.items.map((item, i) => (
                <Accordion
                  key={i}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
