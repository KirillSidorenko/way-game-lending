import type { NavLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { label: "Запрос", href: "#request" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Методика", href: "#methodology" },
  { label: "Формат", href: "#format" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Вопросы и ответы", href: "#faq" },
];

export const tabLabels = {
  management: "Управленческая стратегия",
  personal: "Личная стратегия",
} as const;
