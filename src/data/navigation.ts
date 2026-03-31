import type { NavLink, Variant } from "@/lib/types";

export const navLinksByVariant: Record<Variant, NavLink[]> = {
  management: [
    { label: "Для кого", href: "#request" },
    { label: "Как это работает", href: "#how-it-works" },
    { label: "Точки роста", href: "#results" },
    { label: "Методика", href: "#methodology" },
    { label: "Вопросы и ответы", href: "#faq" },
  ],
  personal: [
    { label: "Запрос", href: "#request" },
    { label: "Как это работает", href: "#how-it-works" },
    { label: "Методика", href: "#methodology" },
    { label: "Формат", href: "#format" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Вопросы и ответы", href: "#faq" },
  ],
};

export const tabLabels = {
  management: "Управленческая стратегия",
  personal: "Личная стратегия",
} as const;
