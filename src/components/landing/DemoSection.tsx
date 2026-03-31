import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function DemoSection() {
  return (
    <section className="bg-bg-primary py-12">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-8 md:flex-row md:justify-between md:p-12">
            <h3 className="text-2xl font-black uppercase text-black md:text-3xl lg:text-4xl lg:max-w-sm">
              Запишитесь на демонстрацию игры
            </h3>
            <div className="flex flex-col items-start gap-4">
              <p className="text-sm text-black/60 leading-relaxed max-w-sm">
                Профессиональный психолог расскажет об игре и покажет, как она
                может решить ваш запрос.
              </p>
              <Button
                variant="primary"
                className="bg-gradient-to-t from-accent to-accent-hover text-white hover:opacity-90"
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
