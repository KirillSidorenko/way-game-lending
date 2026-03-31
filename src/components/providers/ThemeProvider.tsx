"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Variant } from "@/lib/types";

interface ThemeContextValue {
  variant: Variant;
  showLanding: boolean;
  setVariant: (v: Variant) => void;
  goToChooser: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "way-variant";
const STORAGE_EVENT = "way-variant-change";
const themeVariables: Record<Variant, Record<string, string>> = {
  management: {
    "--accent": "#3b82f6",
    "--accent-glow": "rgba(59, 130, 246, 0.15)",
    "--accent-hover": "#2563eb",
    "--accent-light": "#60a5fa",
    "--bg-card": "#111d33",
    "--bg-card-hover": "#162640",
    "--bg-primary": "#080e1a",
    "--bg-secondary": "#0c1527",
    "--border": "rgba(255, 255, 255, 0.08)",
    "--border-accent": "rgba(59, 130, 246, 0.3)",
    "--button-bg": "#2563eb",
    "--button-bg-hover": "#1d4ed8",
    "--button-text": "#ffffff",
    "--header-bg": "rgba(8, 14, 26, 0.85)",
    "--tab-active-bg": "#2563eb",
    "--tab-active-text": "#ffffff",
    "--tab-inactive-bg": "transparent",
    "--tab-inactive-text": "#94a3b8",
    "--text-muted": "#64748b",
    "--text-primary": "#ffffff",
    "--text-secondary": "#94a3b8",
  },
  personal: {
    "--accent": "#f97316",
    "--accent-glow": "rgba(249, 115, 22, 0.15)",
    "--accent-hover": "#ea580c",
    "--accent-light": "#fb923c",
    "--bg-card": "#241a0e",
    "--bg-card-hover": "#2d2012",
    "--bg-primary": "#120c06",
    "--bg-secondary": "#1a1008",
    "--border": "rgba(255, 255, 255, 0.08)",
    "--border-accent": "rgba(249, 115, 22, 0.3)",
    "--button-bg": "#ea580c",
    "--button-bg-hover": "#c2410c",
    "--button-text": "#ffffff",
    "--header-bg": "rgba(18, 12, 6, 0.85)",
    "--tab-active-bg": "#ea580c",
    "--tab-active-text": "#ffffff",
    "--tab-inactive-bg": "transparent",
    "--tab-inactive-text": "#a8a29e",
    "--text-muted": "#78716c",
    "--text-primary": "#ffffff",
    "--text-secondary": "#a8a29e",
  },
};

function readStoredVariant(): Variant | null {
  if (typeof window === "undefined") {
    return null;
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "management" || saved === "personal" ? saved : null;
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const notify = () => onStoreChange();
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener(STORAGE_EVENT, notify);
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener(STORAGE_EVENT, notify);
    window.removeEventListener("storage", onStorage);
  };
}

function emitVariantChange() {
  window.dispatchEvent(new Event(STORAGE_EVENT));
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const storedVariant = useSyncExternalStore(
    subscribe,
    readStoredVariant,
    () => null,
  );
  const variant = storedVariant ?? "management";
  const showLanding = storedVariant !== null;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", variant);

    for (const [key, value] of Object.entries(themeVariables[variant])) {
      root.style.setProperty(key, value);
    }
  }, [variant]);

  function setVariant(v: Variant) {
    window.localStorage.setItem(STORAGE_KEY, v);
    emitVariantChange();
  }

  function goToChooser() {
    window.localStorage.removeItem(STORAGE_KEY);
    emitVariantChange();
  }

  return (
    <ThemeContext.Provider
      value={{ variant, showLanding, setVariant, goToChooser }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
