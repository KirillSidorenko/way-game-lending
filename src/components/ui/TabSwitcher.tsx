"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { tabLabels } from "@/data/navigation";
import { cn } from "@/lib/cn";
import type { Variant } from "@/lib/types";

export function TabSwitcher() {
  const { variant, setVariant } = useTheme();

  const tabs: Variant[] = ["management", "personal"];

  return (
    <div className="relative flex items-center rounded-full bg-[#a7a7a7]/20 p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setVariant(tab)}
          style={variant === tab ? { backgroundColor: "var(--accent)" } : undefined}
          className={cn(
            "relative z-10 rounded-full px-5 py-2 text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap",
            variant === tab
              ? "text-white shadow-[0_8px_20px_rgba(15,23,42,0.16)]"
              : "text-black hover:text-black/70",
          )}
        >
          {tabLabels[tab]}
        </button>
      ))}
    </div>
  );
}
