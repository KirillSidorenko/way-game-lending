"use client";

import { useState } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { TabSwitcher } from "@/components/ui/TabSwitcher";
import { navLinks } from "@/data/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const { goToChooser } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[1344px] -translate-x-1/2 md:top-8 md:w-[calc(100%-4rem)]">
      <div className="flex items-center justify-between rounded-full bg-white px-4 py-2 shadow-lg md:px-6">
        {/* Logo */}
        <button
          onClick={goToChooser}
          className="flex items-center gap-1 cursor-pointer"
        >
          <span className="text-lg font-black tracking-tight text-black">
            WAY
          </span>
          <span className="text-xs text-black/40">✦</span>
          <span className="text-lg font-black tracking-tight text-black">
            GAME
          </span>
        </button>

        {/* Tabs (desktop) */}
        <div className="hidden md:block">
          <TabSwitcher />
        </div>

        {/* Nav links (desktop) */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-black transition-colors hover:text-black/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
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

      {/* Mobile menu */}
      {menuOpen && (
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
                className="text-sm text-black transition-colors hover:text-black/60"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
