"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Briefcase, Heart } from "lucide-react";
import Image from "next/image";

export function ChooserScreen() {
  const { setVariant } = useTheme();

  return (
    <div className="relative flex min-h-screen flex-col md:flex-row">
      {/* Shared background image */}
      <Image
        src="/images/chooser/chooser-bg.webp"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Business half */}
      <div
        className="group relative flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center cursor-pointer transition-all"
        onClick={() => setVariant("management")}
      >
        <div className="absolute inset-0 bg-[#020824]/50 transition-all duration-500 group-hover:bg-[#020824]/30" />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold italic text-white md:text-5xl">
            Бизнес
          </h2>
          <p className="max-w-xs text-sm text-white/70 leading-relaxed">
            Увидеть роли в команде и повысить эффективность
          </p>
          <button
            className="mt-4 flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/15 cursor-pointer"
          >
            WAY ДЛЯ БИЗНЕСА
            <Briefcase className="size-5" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden w-px bg-white/10 md:block relative z-10" />

      {/* Personal half */}
      <div
        className="group relative flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center cursor-pointer transition-all"
        onClick={() => setVariant("personal")}
      >
        <div className="absolute inset-0 bg-[#1a0c02]/50 transition-all duration-500 group-hover:bg-[#1a0c02]/30" />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold italic text-white md:text-5xl">
            Личность
          </h2>
          <p className="max-w-xs text-sm text-white/70 leading-relaxed">
            Понять себя и начать новую жизнь.
          </p>
          <button
            className="mt-4 flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/15 cursor-pointer"
          >
            WAY ДЛЯ ЛИЧНОСТИ
            <Heart className="size-5" />
          </button>
        </div>
      </div>

      {/* Header overlay */}
      <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2 md:top-8">
        <div className="flex items-center gap-4 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-white">WAY</span>
            <span className="text-xs text-white/40">✦</span>
            <span className="text-lg font-black text-white">GAME</span>
          </div>
          <div className="hidden items-center gap-6 text-xs text-white/60 md:flex">
            <span>Управленческая стратегия</span>
            <span>Личная стратегия</span>
          </div>
          <div className="hidden items-center gap-4 text-xs text-white/50 lg:flex">
            <span>Для кого</span>
            <span>Как это работает</span>
            <span>Точки роста</span>
            <span>Методика</span>
            <span>Вопросы и ответы</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-6">
        <p className="text-xs text-white/40">
          © 2025 WAY. Все права защищены.
        </p>
        <div className="hidden gap-6 text-xs text-white/30 md:flex">
          <span>Политика конфиденциальности</span>
          <span>Пользовательское соглашение</span>
        </div>
      </div>
    </div>
  );
}
