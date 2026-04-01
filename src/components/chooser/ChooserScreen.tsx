/* eslint-disable @next/next/no-img-element */
"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { TabSwitcher } from "@/components/ui/TabSwitcher";
import { navLinksByVariant } from "@/data/navigation";
import Image from "next/image";
import { Menu, Search } from "lucide-react";

export function ChooserScreen() {
  const { setVariant } = useTheme();
  const navLinks = navLinksByVariant.management;

  return (
    <div className="relative h-dvh min-h-[700px] overflow-hidden bg-[#01071e]">
      {/* Background image */}
      <Image
        src="/images/chooser/chooser-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] lg:object-top"
      />

      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#01071e] from-10% via-[#01071e]/90 via-40% to-transparent" />

      {/* Vertical center divider */}
      <div className="pointer-events-none absolute left-1/2 top-0 bottom-[10%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.33] to-transparent" />

      {/* ===== Mobile Header (< md) ===== */}
      <header className="fixed top-6 left-6 right-6 z-50 md:hidden">
        <div className="flex h-12 items-center justify-between rounded-[39px] bg-white px-6">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-lg leading-none text-black">
              WAY
            </span>
            <img
              src="/images/header/way-game-cards.svg"
              alt=""
              className="h-5 w-5"
            />
            <span className="font-ui text-[9.4px] font-semibold text-black">
              WHO ARE YOU
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Search className="size-4 text-black/60" />
            <Menu className="size-5 text-black" />
          </div>
        </div>
      </header>

      {/* ===== Desktop Header (md+) ===== */}
      <header className="fixed top-8 left-1/2 z-50 hidden w-[calc(100%-4rem)] max-w-[1344px] -translate-x-1/2 md:block">
        <div className="flex h-12 items-center justify-between rounded-full bg-white px-6 shadow-lg">
          <div className="flex items-center">
            <span className="font-display text-[35px] font-bold leading-none text-black">
              WAY
            </span>
            <img
              src="/images/header/way-game-cards.svg"
              alt=""
              className="mx-0.5 h-8 w-8"
            />
            <span className="font-display text-[35px] font-bold leading-none text-black">
              GAME
            </span>
          </div>

          <TabSwitcher />

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-ui text-xs text-black transition-colors hover:text-black/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button type="button" className="cursor-pointer lg:hidden">
            <Menu className="size-5 text-black" />
          </button>
        </div>
      </header>

      {/* ===== Content ===== */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Top spacer (accounts for header + gap to titles) */}
        <div className="h-[104px] shrink-0 lg:h-[122px]" />

        {/* Titles — two columns */}
        <div className="grid shrink-0 grid-cols-2">
          {/* Business */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-ui text-[30px] font-medium leading-[1.1] text-white lg:text-[52px]">
              Бизнес
            </h2>
            <p className="font-ui mt-[9px] w-[150px] text-[11px] leading-[1.4] text-white lg:mt-[10px] lg:w-[322px] lg:text-sm lg:leading-[1.5]">
              Увидеть роли в команде и повысить эффективность
            </p>
          </div>

          {/* Personal */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-ui text-[30px] font-medium leading-[1.1] text-white lg:text-[52px]">
              Личность
            </h2>
            <p className="font-ui mt-[9px] w-[150px] text-[11px] leading-[1.4] text-white lg:mt-[10px] lg:w-[322px] lg:text-sm lg:leading-[1.5]">
              Понять себя и начать новую жизнь.
            </p>
          </div>
        </div>

        {/* Flexible spacer — shows background through */}
        <div className="flex-1" />

        {/* Desktop CTA buttons — one per half (lg+) */}
        <div className="hidden shrink-0 grid-cols-2 lg:grid">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setVariant("management")}
              className="flex h-16 w-[291px] cursor-pointer items-center justify-center gap-4 rounded-full bg-white transition-shadow hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
            >
              <span className="font-ui text-sm font-bold uppercase text-[#01071e]">
                Way для бизнеса
              </span>
              <Image
                src="/images/chooser/icon-business.svg"
                alt=""
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setVariant("personal")}
              className="flex h-16 w-[291px] cursor-pointer items-center justify-center gap-4 rounded-full bg-white transition-shadow hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
            >
              <span className="font-ui text-sm font-bold uppercase text-[#01071e]">
                Way для личности
              </span>
              <Image
                src="/images/chooser/icon-personal.svg"
                alt=""
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>

        {/* Mobile CTA buttons — stacked (< lg) */}
        <div className="flex shrink-0 flex-col items-center gap-[14px] lg:hidden">
          <button
            type="button"
            onClick={() => setVariant("management")}
            className="flex h-16 w-[291px] cursor-pointer items-center justify-center gap-4 rounded-full bg-white"
          >
            <span className="font-ui text-sm font-bold uppercase text-[#01071e]">
              Way для бизнеса
            </span>
            <Image
              src="/images/chooser/icon-business.svg"
              alt=""
              width={16}
              height={16}
            />
          </button>
          <button
            type="button"
            onClick={() => setVariant("personal")}
            className="flex h-16 w-[291px] cursor-pointer items-center justify-center gap-4 rounded-full bg-white"
          >
            <span className="font-ui text-sm font-bold uppercase text-[#01071e]">
              Way для личности
            </span>
            <Image
              src="/images/chooser/icon-personal.svg"
              alt=""
              width={16}
              height={16}
            />
          </button>
        </div>

        {/* Footer */}
        <div className="shrink-0 px-6 lg:px-[72px]">
          <div className="mt-10 pb-6 lg:mt-[87px] lg:border-t lg:border-white/20 lg:pt-[31px] lg:pb-8">
            <div className="flex items-center justify-center lg:justify-between">
              <p className="font-ui text-[13px] leading-[1.3] text-white/50">
                © 2025 WAY. Все права защищены.
              </p>
              <div className="hidden gap-8 lg:flex">
                <a
                  href="#"
                  className="font-ui text-[13px] text-white/50 transition-colors hover:text-white/70"
                >
                  Политика конфиденциальности
                </a>
                <a
                  href="#"
                  className="font-ui text-[13px] text-white/50 transition-colors hover:text-white/70"
                >
                  Пользовательское соглашение
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
