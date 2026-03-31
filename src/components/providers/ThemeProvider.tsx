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
    document.documentElement.setAttribute("data-theme", variant);
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
