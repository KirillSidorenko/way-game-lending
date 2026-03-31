import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { TeamContent } from "@/lib/types";

interface TeamSectionProps {
  content: TeamContent;
}

export function TeamSection({ content }: TeamSectionProps) {
  const cards = [
    {
      icon: "💔",
      title: "Расставание или утрата",
      description:
        "Игра поможет прожить чувства, отпустить, вернуть опору и себя",
    },
    {
      icon: "🧠",
      title: "Кризис в отношениях",
      description:
        "Игра поможет понять причину проблем и покажет, как действовать по-другому",
    },
    {
      icon: "🔄",
      title: "Повторяющиеся сценарии",
      description:
        "Игра покажет, почему происходит повторение и даст возможность сделать другой выбор",
    },
    {
      icon: "🏃",
      title: "Новый этап жизни",
      description:
        "Игра поможет переосмыслить пройденный путь и выбрать новую стратегию",
    },
    {
      icon: "🎯",
      title: "Достижение цели",
      description:
        "Игра поможет выбрать стратегию для достижения результата",
    },
    {
      icon: "🌀",
      title: "Самопознание",
      description:
        "Игра покажет ваши настоящие жизненные стратегии и паттерны",
    },
  ];

  return (
    <section id="request" className="scroll-mt-24 bg-bg-primary py-20">
      <Container>
        <ScrollReveal>
          <SectionHeading
            tag="Запрос"
            title={content.heading}
            subtitle={content.subtitle}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-bg-card p-8 text-center transition-all hover:border-accent/30 hover:bg-bg-card-hover">
                <span className="text-5xl">{card.icon}</span>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
