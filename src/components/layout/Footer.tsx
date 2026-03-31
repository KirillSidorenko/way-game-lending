import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-primary py-8">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-lg font-black text-white">WAY</span>
          <span className="text-xs text-white/40">‹ WHO ARE YOU</span>
        </div>
        <p className="text-xs text-text-muted">
          © 2025 WAY. Все права защищены.
        </p>
        <div className="flex gap-6 text-xs text-text-muted">
          <a href="#" className="transition-colors hover:text-white">
            Политика конфиденциальности
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Пользовательское соглашение
          </a>
        </div>
      </Container>
    </footer>
  );
}
