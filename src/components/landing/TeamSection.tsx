import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { TeamContent, Variant } from "@/lib/types";

interface TeamSectionProps {
  content: TeamContent;
  variant: Variant;
}

const personalCards = [
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
] as const;

const managementCards = [
  {
    descriptionLines: [
      "Увидите сильные стратегии",
      "участников команды",
      "и перераспределите роли",
      "для достижения целей бизнеса",
    ],
    iconHeight: 28.8,
    iconSrc: "/images/sections-management/team/icon-business-owners.svg",
    iconWidth: 30.72,
    title: "Владельцы бизнеса",
  },
  {
    descriptionLines: [
      "Поймете, как усилить",
      "взаимодействие в команде,",
      "и перестать тащить всё на себе",
    ],
    iconHeight: 30,
    iconSrc: "/images/sections-management/team/icon-top-managers.svg",
    iconWidth: 25,
    title: "Топ-менеджеры",
  },
  {
    descriptionLines: [
      "Получите инструмент",
      "для оценки и настройки команд",
      "без субъективных догадок",
    ],
    iconHeight: 30,
    iconSrc: "/images/sections-management/team/icon-hrd.svg",
    iconWidth: 36,
    title: "HRD",
  },
] as const;

function ManagementAudienceCard({
  card,
  compact = false,
}: {
  card: (typeof managementCards)[number];
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "flex flex-col items-center gap-4 rounded-2xl bg-[#eef0f6] px-6 py-6 text-center"
          : "flex min-h-px flex-1 flex-col items-center gap-4 self-stretch rounded-2xl bg-[#eef0f6] py-6 text-center"
      }
    >
      <div className="flex size-[68px] items-center justify-center rounded-[40px] bg-[linear-gradient(270deg,#1243A6_0%,#578AEF_100%)] p-2">
        <Image
          src={card.iconSrc}
          alt=""
          width={card.iconWidth}
          height={card.iconHeight}
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <h3 className="font-ui text-[22px] font-semibold leading-[1.2] text-black">
          {card.title}
        </h3>
        <p
          className={
            compact
              ? "font-ui max-w-[255px] text-[13px] leading-[1.3] text-black/80"
              : "font-ui w-[255px] text-[13px] leading-[1.3] text-black/80"
          }
        >
          {card.descriptionLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

function ManagementTeamDesktop({ content }: { content: TeamContent }) {
  return (
    <div className="hidden min-[1440px]:block">
      <div className="mx-auto w-[1440px]">
        <div className="flex w-full flex-col items-center gap-[46px] rounded-[64px] bg-white px-[72px] pb-16 pt-12">
          <div className="flex w-[1166px] flex-col items-center gap-4 text-center">
            <div className="flex flex-col items-center gap-[10px]">
              <span className="font-ui rounded-[6px] border border-[#2199ff] px-[6px] py-[3px] text-[12px] font-medium uppercase tracking-[0.05em] text-[#2199ff]">
                Для кого
              </span>
              <h2 className="font-ui w-full text-center text-[40px] font-bold leading-[1.25] text-black uppercase">
                {content.heading}
              </h2>
            </div>

            <p className="font-ui w-[1046px] text-center text-[16px] leading-[1.4] text-black/70">
              {content.subtitle}
            </p>
          </div>

          <div className="flex h-[234px] w-[1296px] gap-5">
            {managementCards.map((card) => (
              <ManagementAudienceCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ManagementTeamResponsive({ content }: { content: TeamContent }) {
  return (
    <div className="min-[1440px]:hidden">
      <Container className="py-6 md:py-8">
        <div className="rounded-[32px] bg-white px-5 py-10 md:rounded-[48px] md:px-10 md:py-12">
          <div className="mx-auto flex max-w-[1046px] flex-col items-center gap-4 text-center">
            <div className="flex flex-col items-center gap-[10px]">
              <span className="font-ui rounded-[6px] border border-[#2199ff] px-[6px] py-[3px] text-[12px] font-medium uppercase tracking-[0.05em] text-[#2199ff]">
                Для кого
              </span>
              <h2 className="font-ui text-[2rem] font-bold leading-[1.15] text-black uppercase sm:text-[2.3rem] md:text-[2.5rem]">
                {content.heading}
              </h2>
            </div>

            <p className="font-ui max-w-[920px] text-[15px] leading-[1.45] text-black/70 md:text-[16px]">
              {content.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            {managementCards.map((card) => (
              <ManagementAudienceCard key={card.title} card={card} compact />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function PersonalTeamSection({ content }: { content: TeamContent }) {
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
          {personalCards.map((card, i) => (
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

export function TeamSection({ content, variant }: TeamSectionProps) {
  if (variant === "management") {
    return (
      <section id="request" className="scroll-mt-24 bg-[#01071e]">
        <ManagementTeamDesktop content={content} />
        <ManagementTeamResponsive content={content} />
      </section>
    );
  }

  return <PersonalTeamSection content={content} />;
}
