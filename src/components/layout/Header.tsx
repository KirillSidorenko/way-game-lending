"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";
import { TabSwitcher } from "@/components/ui/TabSwitcher";
import { navLinksByVariant, tabLabels } from "@/data/navigation";
import { Menu, X } from "lucide-react";

function ManagementWayLogo() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-0 top-0 h-[25px] w-[83px]"
    >
      <Image
        src="/images/header/way-logo-part-3.svg"
        alt=""
        width={35.904}
        height={24.64}
        className="absolute left-[0.622px] top-[0.36px] h-[24.64px] w-[35.904px]"
      />
      <Image
        src="/images/header/way-logo-part-2.svg"
        alt=""
        width={25.8192}
        height={24.64}
        className="absolute left-[35.897px] top-[0.36px] h-[24.64px] w-[25.819px]"
      />
      <Image
        src="/images/header/way-logo-part-1.svg"
        alt=""
        width={23.7248}
        height={24.64}
        className="absolute left-[59.37px] top-[0.36px] h-[24.64px] w-[23.725px]"
      />
    </span>
  );
}

function DefaultHeader({
  menuOpen,
  navLinks,
  setMenuOpen,
}: {
  menuOpen: boolean;
  navLinks: { href: string; label: string }[];
  setMenuOpen: (open: boolean) => void;
}) {
  const { goToChooser } = useTheme();

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[1344px] -translate-x-1/2 md:top-8 md:w-[calc(100%-4rem)]">
        <div className="flex items-center justify-between rounded-full bg-white px-4 py-2 shadow-lg md:px-6">
          <button
            type="button"
            onClick={goToChooser}
            className="flex items-center gap-1 cursor-pointer"
          >
            <span className="font-display text-lg font-black tracking-tight text-black">
              WAY
            </span>
            <span className="text-xs text-black/40">✦</span>
            <span className="font-display text-lg font-black tracking-tight text-black">
              GAME
            </span>
          </button>

          <div className="hidden md:block">
            <TabSwitcher />
          </div>

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

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer lg:hidden"
          >
            {menuOpen ? (
              <X className="size-5 text-black" />
            ) : (
              <Menu className="size-5 text-black" />
            )}
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-2 rounded-2xl bg-white p-6 shadow-lg lg:hidden">
            <div className="mb-4 flex justify-center md:hidden">
              <TabSwitcher />
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-ui text-sm text-black transition-colors hover:text-black/60"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}

function ManagementDesktopHeader() {
  const { goToChooser, setVariant } = useTheme();
  const navLinks = navLinksByVariant.management;

  return (
    <header className="fixed top-8 left-1/2 z-50 hidden w-[1344px] -translate-x-1/2 min-[1440px]:block">
      <div className="relative h-12 w-full rounded-[39.111px] bg-white">
        <button
          type="button"
          onClick={goToChooser}
          className="absolute left-6 top-[11.5px] h-[25px] w-[191px] cursor-pointer"
          aria-label="Вернуться к выбору сценария"
        >
          <ManagementWayLogo />
          <Image
            src="/images/header/way-game-cards.svg"
            alt=""
            width={32.064}
            height={32.431}
            className="absolute left-[89px] top-[-2.5px] h-[32.431px] w-[32.064px]"
          />
          <span className="font-display absolute left-[122px] top-[-2px] text-[35px] leading-none text-black">
            GAME
          </span>
        </button>

        <div className="absolute left-[435px] top-[6px] h-9 w-[194px] rounded-[24px] bg-[#a7a7a7] opacity-20" />
        <button
          type="button"
          onClick={() => setVariant("management")}
          className="absolute left-[292px] top-[6px] h-9 w-[194px] rounded-[24px] bg-[#0062ff]"
          aria-label={tabLabels.management}
        />
        <button
          type="button"
          onClick={() => setVariant("personal")}
          className="absolute left-[435px] top-[6px] h-9 w-[194px] rounded-[24px]"
          aria-label={tabLabels.personal}
        />

        <div className="font-ui absolute left-[308.5px] top-4 flex items-start justify-center gap-8 text-[12px] leading-4 whitespace-nowrap">
          <button
            type="button"
            onClick={() => setVariant("management")}
            className="cursor-pointer text-white"
          >
            {tabLabels.management}
          </button>
          <button
            type="button"
            onClick={() => setVariant("personal")}
            className="cursor-pointer text-black"
          >
            {tabLabels.personal}
          </button>
        </div>

        <nav className="font-ui absolute right-10 top-4 flex items-start justify-center gap-6 text-[12px] leading-4 text-black whitespace-nowrap">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Header() {
  const { variant } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = navLinksByVariant[variant];

  if (variant === "management") {
    return (
      <>
        <ManagementDesktopHeader />
        <div className="min-[1440px]:hidden">
          <DefaultHeader
            menuOpen={menuOpen}
            navLinks={navLinks}
            setMenuOpen={setMenuOpen}
          />
        </div>
      </>
    );
  }

  return (
    <DefaultHeader
      menuOpen={menuOpen}
      navLinks={navLinks}
      setMenuOpen={setMenuOpen}
    />
  );
}
