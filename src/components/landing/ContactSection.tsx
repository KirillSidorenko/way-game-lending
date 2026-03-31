import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContactSection() {
  return (
    <section className="bg-bg-primary py-16">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Артур */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                Генеральный директор
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                Артур Вашлаев
              </h3>
              <div className="flex gap-4 text-sm text-text-secondary">
                <span>+7(901)770-90-46</span>
                <span>•</span>
                <span>av@way-prof.ru</span>
              </div>
            </div>
            {/* Руслан */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                Руководитель проекта
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">
                Руслан Молодцов
              </h3>
              <div className="flex gap-4 text-sm text-text-secondary">
                <span>+7(906)895-18-88</span>
                <span>•</span>
                <span>rm@way-prof.ru</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-center text-xs leading-relaxed text-text-muted max-w-2xl mx-auto">
            WAY — сервис для точной оценки, подбора и развития персонала. Основан
            на 20-летней практике института психологии «Образ Мысли» и технологиях
            компьютерного зрения VisionLabs.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
