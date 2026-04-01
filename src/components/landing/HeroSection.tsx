import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { HeroContent, Variant } from "@/lib/types";

interface HeroSectionProps {
  content: HeroContent;
  variant: Variant;
}

const heroAssets = {
  management: {
    accentSrc: "/images/hero/hero-management-accent.svg",
    backgroundSrc: "/images/hero/hero-management-bg.webp",
    overlaySrc: "/images/hero/hero-management-overlay.webp",
  },
  personal: {
    accentSrc: "/images/hero/hero-personal-accent.svg",
    backgroundSrc: "/images/hero/hero-personal-bg.webp",
    gradientSrc: "/images/hero/hero-personal-gradient.webp",
    overlaySrc: "/images/hero/hero-personal-overlay.webp",
  },
} satisfies Record<
  Variant,
  {
    accentSrc: string;
    backgroundSrc: string;
    overlaySrc: string;
    gradientSrc?: string;
  }
>;

const managementBenefitIcons = [
  {
    height: 40.207,
    src: "/images/hero/management-exact/benefit-request.svg",
    width: 42,
  },
  {
    height: 51,
    src: "/images/hero/management-exact/benefit-strategy.svg",
    width: 27,
  },
  {
    height: 40.803,
    src: "/images/hero/management-exact/benefit-results.svg",
    width: 33.602,
  },
  {
    height: 42.623,
    src: "/images/hero/management-exact/benefit-practice.svg",
    width: 33.6,
  },
] as const;

const managementDesktopArtBlend = {
  backgroundColor: "#01071e",
  backgroundImage:
    "radial-gradient(circle at 50% 26%, rgba(74, 148, 255, 0.14) 0%, rgba(74, 148, 255, 0) 29%)",
} satisfies CSSProperties;

function splitHeading(text: string, highlightText?: string) {
  if (!highlightText) {
    return { after: "", before: text, highlight: "" };
  }

  const index = text.lastIndexOf(highlightText);

  if (index === -1) {
    return { after: "", before: text, highlight: "" };
  }

  return {
    after: text.slice(index + highlightText.length),
    before: text.slice(0, index),
    highlight: highlightText,
  };
}

function HeroBackground({ variant }: { variant: Variant }) {
  const assets = heroAssets[variant];

  if (variant === "management") {
    return (
      <>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#020829_0%,#05103a_54%,#01061b_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(32,126,255,0.18)_0%,transparent_32%)]" />
        <div className="absolute inset-x-0 bottom-0 top-[17rem] sm:top-[18rem] md:top-[14rem]">
          <Image
            src={assets.backgroundSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-[center_84%] scale-[1.55] sm:scale-[1.35] md:scale-[1.08] lg:scale-100"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 top-[15rem] opacity-80 mix-blend-screen md:top-[13rem]">
          <Image
            src={assets.overlaySrc}
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="object-contain object-[center_84%] scale-[1.6] sm:scale-[1.36] md:scale-[1.08] lg:scale-100"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#01071e] via-[#01071e]/90 to-transparent md:h-72" />
      </>
    );
  }

  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#290900_0%,#2f0d03_42%,#120401_100%)]" />
      <Image
        src={assets.backgroundSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_58%] scale-[1.06]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(67,19,3,0.76)_0%,rgba(57,16,4,0.34)_32%,rgba(17,4,1,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,173,92,0.16)_0%,transparent_28%)]" />
      {"gradientSrc" in assets && assets.gradientSrc ? (
        <div className="absolute inset-x-0 bottom-0 h-[72px] opacity-80 md:h-[100px]">
          <Image
            src={assets.gradientSrc}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#120401] via-[#120401]/70 to-transparent md:h-64" />
    </>
  );
}

function ResponsiveHeroSection({
  className,
  content,
  variant,
}: HeroSectionProps & { className?: string }) {
  const assets = heroAssets[variant];
  const heading = splitHeading(content.heading, content.highlightText);

  return (
    <section
      className={cn(
        "relative isolate min-h-[920px] overflow-hidden bg-bg-primary pt-28 pb-6 md:min-h-screen md:pt-32 md:pb-8",
        className,
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        <HeroBackground variant={variant} />
      </div>

      <Container className="relative z-10 flex min-h-[calc(920px-7rem)] flex-col md:min-h-[calc(100vh-8rem)]">
        <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center text-center">
          <ScrollReveal>
            <h1 className="font-display max-w-[980px] text-[2.5rem] font-normal leading-[1.06] tracking-[-0.04em] text-white sm:text-5xl md:text-[68px]">
              {heading.before}
              {heading.highlight ? (
                <span className="relative inline-block whitespace-nowrap">
                  {heading.highlight}
                  <Image
                    src={assets.accentSrc}
                    alt=""
                    width={268}
                    height={21}
                    className="pointer-events-none absolute -bottom-3 left-1/2 h-auto w-[clamp(10rem,24vw,16.75rem)] -translate-x-1/2 md:-bottom-4"
                  />
                </span>
              ) : null}
              {heading.after}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="font-ui mt-6 max-w-[840px] text-sm leading-[1.6] text-white/78 md:text-[15px]">
              {content.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="mt-10 w-full max-w-max">
              <Button className="min-h-16 px-7 shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
                {content.ctaText}
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.26} className="mt-auto w-full pt-16 md:pt-24">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {content.benefits.map((benefit, i) => (
              <div
                key={i}
                className={cn(
                  "relative flex min-h-[104px] items-center gap-4 overflow-hidden rounded-2xl border border-white/10 px-5 py-4 backdrop-blur-[20px] shadow-[inset_0_0_4px_rgba(255,255,255,0.15)]",
                  variant === "management"
                    ? "bg-[#1a2447]/46"
                    : "bg-[#5a321d]/24",
                )}
              >
                {benefit.icon ? (
                  <Image
                    src={benefit.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="shrink-0 opacity-95"
                  />
                ) : null}
                <p className="font-ui text-left text-[15px] leading-[1.25] text-white">
                  <span className="block font-medium">{benefit.title}</span>
                  <span className="text-white/82">{benefit.description}</span>
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function ManagementHeroDesktop({ content }: { content: HeroContent }) {
  return (
    <section className="relative hidden h-[932px] overflow-hidden bg-[#01071e] min-[1440px]:block">
      <div
        className="relative mx-auto h-full w-[1440px]"
        style={managementDesktopArtBlend}
      >
        <div className="absolute inset-0 bg-[#01071e]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[142px]">
          <Image
            src="/images/hero/management-exact/top-fade.webp"
            alt=""
            fill
            priority
            sizes="1440px"
            className="object-fill"
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[-118px] h-[1582px] w-[1569px] -translate-x-1/2 opacity-[0.98]">
          <Image
            src="/images/hero/management-exact/hero-image-base.webp"
            alt=""
            fill
            priority
            sizes="1569px"
            className="object-contain"
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[249px] h-[906px] w-[1622px] -translate-x-1/2 opacity-[0.98]">
          <Image
            src="/images/hero/management-exact/hero-glow-ellipse.webp"
            alt=""
            fill
            sizes="1622px"
            className="object-contain"
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[228px] h-[895px] w-[1395px] -translate-x-1/2 mix-blend-screen opacity-[0.98]">
          <Image
            src="/images/hero/management-exact/hero-image-overlay.webp"
            alt=""
            fill
            sizes="1395px"
            className="object-contain"
          />
        </div>

        <div className="pointer-events-none absolute -right-[90px] -bottom-[85px] h-[1229px] w-[1624px] mix-blend-screen opacity-[0.29]">
          <Image
            src="/images/hero/management-exact/hero-noise.webp"
            alt=""
            fill
            sizes="1624px"
            className="object-cover"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] opacity-80">
          <Image
            src="/images/hero/management-exact/bottom-fade.webp"
            alt=""
            fill
            sizes="1440px"
            className="object-fill"
          />
        </div>

        <h1 className="font-display absolute left-1/2 top-[126px] w-[938px] -translate-x-1/2 text-center text-[52px] leading-[1.2] text-white">
          <span className="block">Постройте долгую стратегию</span>
          <span className="block">
            команды{" "}
            <span className="relative inline-block">
              за 3 часа
              <span className="pointer-events-none absolute left-1/2 top-[45px] h-4 w-[268px] -translate-x-1/2">
                <Image
                  src="/images/hero/management-exact/headline-accent.svg"
                  alt=""
                  fill
                  sizes="268px"
                  className="object-contain"
                />
              </span>
            </span>
          </span>
        </h1>

        <p className="font-ui absolute left-1/2 top-[275px] w-[836px] -translate-x-1/2 text-center text-[14px] leading-[1.5] text-white">
          {content.subtitle}
        </p>

        <button
          type="button"
          className="absolute left-1/2 top-[356px] flex h-16 w-[305px] -translate-x-1/2 items-center justify-center gap-4 rounded-[100px] bg-white p-2"
        >
          <Image
            src="/images/icons/cta-plus-exact.svg"
            alt=""
            width={16}
            height={16}
          />
          <span className="font-ui text-[14px] font-bold uppercase leading-none text-black">
            {content.ctaText}
          </span>
        </button>

        <div className="absolute left-[72px] top-[787px] flex gap-5">
          {content.benefits.map((benefit, index) => {
            const icon = managementBenefitIcons[index];

            return (
              <div
                key={index}
                className="relative flex h-[95px] w-[309px] items-center gap-5 rounded-2xl px-6 py-4"
              >
                <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-[20px]" />
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_4px_rgba(255,255,255,0.15)]" />

                <div className="relative shrink-0">
                  <Image
                    src={icon.src}
                    alt=""
                    width={icon.width}
                    height={icon.height}
                    className="h-auto"
                  />
                </div>

                <p className="font-ui relative text-[16px] leading-[1.2] text-white">
                  <span className="block">{benefit.title}</span>
                  <span className="block">{benefit.description}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HeroSection({ content, variant }: HeroSectionProps) {
  if (variant === "management") {
    return (
      <>
        <ManagementHeroDesktop content={content} />
        <ResponsiveHeroSection
          content={content}
          variant={variant}
          className="min-[1440px]:hidden"
        />
      </>
    );
  }

  return <ResponsiveHeroSection content={content} variant={variant} />;
}
