"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTheme } from "@/components/providers/ThemeProvider";
import { ArrowRight } from "lucide-react";

export function CrossPromoSection() {
  const { variant, setVariant } = useTheme();

  const isPersonal = variant === "personal";
  const title = isPersonal
    ? "Хотите пройти путь как лидер?"
    : "Хотите разобраться в себе?";
  const description = isPersonal
    ? "«WAY. Психологические стратегии» помогает выстроить не только личную стратегию, но и управленческую"
    : "«WAY. Психологические стратегии» помогает не только управлять командой, но и понять себя";
  const buttonText = isPersonal
    ? "Перейти на управленческую версию"
    : "Перейти на личную версию";
  const targetVariant = isPersonal ? "management" : "personal";

  return (
    <section className="bg-bg-primary py-12">
      <Container>
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 md:flex md:items-center md:justify-between md:p-12">
            <h3 className="text-2xl font-black uppercase text-black md:text-3xl lg:max-w-sm">
              {title}
            </h3>
            <div className="mt-6 flex flex-col items-start gap-4 md:mt-0">
              <p className="text-sm text-black/60 leading-relaxed max-w-sm">
                {description}
              </p>
              <button
                onClick={() => {
                  setVariant(targetVariant);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#3b5bdb] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#364fc7] cursor-pointer"
              >
                {buttonText}
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
