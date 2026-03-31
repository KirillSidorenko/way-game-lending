# WAY GAME Landing Page — Implementation Plan

## Context

Реализация лендинга для психологической настольной игры "WAY GAME" по дизайну из Figma. Ключевая особенность: **две цветовые темы** (синяя "Управленческая стратегия" и оранжевая "Личная стратегия"), переключаемые табами в хедере. Экран-выбор (split-screen Бизнес/Личность) — отдельная начальная страница. Проект — чистый Next.js 16.2.1 + Tailwind v4 + TypeScript.

**Figma**: `z42XYlzP8TqZ0QPIUJQECE`, секция `2818:3606` "Game landing 1.12"

---

## Phase 1: Foundation

### 1.1 Прочитать Next.js 16 docs (breaking changes)
- `params`/`searchParams` теперь `Promise` — нужен `await`
- Turbopack по умолчанию — конфликтов с нашим проектом нет
- Синхронный доступ к request APIs полностью убран

### 1.2 Установить зависимости
```bash
npm install clsx tailwind-merge framer-motion lucide-react
```

### 1.3 Обновить `src/app/globals.css`
- Удалить дефолтные стили create-next-app
- Определить две темы через CSS-переменные:
  - `[data-theme="management"]` — холодный синий (#0a1628, #00b4d8, #0077b6)
  - `[data-theme="personal"]` — тёплый оранжевый (#1a120b, #f59e0b, #ea580c)
- Зарегистрировать в `@theme inline` для Tailwind: `--color-primary`, `--color-accent`, `--color-bg-*`, `--color-text-*`
- Добавить `transition-colors duration-500` для плавного переключения тем

### 1.4 Обновить `src/app/layout.tsx`
- `lang="ru"`, шрифты с `subsets: ["latin", "cyrillic"]`
- Проверить поддержку кириллицы в Geist — если нет, заменить на Inter
- Обернуть в `ThemeProvider`
- Metadata: title "WAY GAME", description на русском

### 1.5 Создать `src/lib/cn.ts`
- Утилита `cn()` = clsx + tailwind-merge

---

## Phase 2: Theme & Data

### 2.1 `src/lib/types.ts`
- `type Variant = "management" | "personal"`
- Типы для контента секций: Hero, TeamMember, FAQ, Testimonial, PricingTier

### 2.2 `src/components/providers/ThemeProvider.tsx` ("use client")
- Context: `variant`, `showLanding`, `setVariant()`, `goToChooser()`
- `useEffect` ставит `data-theme` на `document.documentElement`
- Хранение выбора в `localStorage`

### 2.3 `src/data/content.ts`
- Весь текстовый контент для обеих тем (заголовки, описания, FAQ, отзывы)
- Текст берём из Figma через get_design_context по каждой секции

### 2.4 `src/data/navigation.ts`
- Навигационные ссылки: Запрос, Как это работает, Методика, Формат, Отзывы, Вопросы и ответы

---

## Phase 3: Экспорт изображений из Figma

Экспортировать через Figma API (get_screenshot / use_figma):
- Лого WAY GAME (SVG)
- Hero-фоны для обеих тем
- Фото команды/спикеров
- Иконки для benefit-карточек
- Фоны секций
- Фото для экрана-выбора (бизнес/личность split)

Сохранить в `public/images/` с организацией по секциям.

---

## Phase 4: UI Components

### 4.1 Базовые компоненты (`src/components/ui/`)
- `Container.tsx` — обёртка max-w-[1440px]
- `Button.tsx` — CTA кнопка, цвета из темы
- `Card.tsx` — универсальная карточка
- `SectionHeading.tsx` — заголовок секции
- `TabSwitcher.tsx` ("use client") — переключатель "Управленческая / Личная стратегия"
- `Accordion.tsx` ("use client") — для FAQ с framer-motion анимацией
- `ScrollReveal.tsx` ("use client") — обёртка с fade-in-up анимацией через framer-motion useInView

### 4.2 Layout (`src/components/layout/`)
- `Header.tsx` — sticky, лого + табы + навигация + smooth scroll
- `MobileMenu.tsx` ("use client") — бургер-меню для мобильных
- `Footer.tsx` — копирайт + ссылки

---

## Phase 5: Страницы

### 5.1 Экран-выбор (`src/components/chooser/`)
- `ChooserScreen.tsx` — split-screen: два блока 50/50
- `ChooserCard.tsx` — одна половина (фото-фон, заголовок, описание, CTA)
- Desktop: side-by-side, Mobile: стек
- Клик → `setVariant()` + `showLanding = true`

### 5.2 Секции лендинга (`src/components/landing/`)

| # | Компонент | Figma нода (Landing 2, оранж) | Описание |
|---|-----------|-------------------------------|----------|
| 1 | `HeroSection.tsx` | `2833:2290` | Hero + 4 benefit-карточки |
| 2 | `TeamSection.tsx` | — | Команда с фото |
| 3 | `DiagnosticSection.tsx` | — | Методика диагностики |
| 4 | `GrowthSection.tsx` | — | Точки роста |
| 5 | `ResultsSection.tsx` | — | Результаты участия |
| 6 | `ToolsSection.tsx` | — | Инструменты |
| 7 | `PricingSection.tsx` | — | Тарифы/формат |
| 8 | `TestimonialsSection.tsx` | — | Отзывы |
| 9 | `FAQSection.tsx` | — | Вопросы и ответы |
| 10 | `CTAFooterSection.tsx` | — | Финальный CTA |

Каждая секция:
- Получает контент через props из `content.ts[variant]`
- Обёрнута в `ScrollReveal` для анимации появления
- Использует theme-aware цвета через CSS переменные

### 5.3 Сборка страницы `src/app/page.tsx`
- Server Component → рендерит `PageContent` (client)
- `PageContent` читает `showLanding` из контекста
- `!showLanding` → `ChooserScreen`
- `showLanding` → `Header` + все секции + `Footer`

---

## Phase 6: Responsive & Polish

- Desktop 1440px (Figma baseline) → Tablet 768px → Mobile 375px
- `scroll-smooth` на html + `scroll-mt-20` на секциях (учёт sticky header)
- Framer-motion: fade-in-up при скролле, плавная смена цветов при переключении табов
- `next/image` с `priority` для hero, `loading="lazy"` для остального
- Проверка кириллических шрифтов

---

## File Structure

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    providers/ThemeProvider.tsx
    layout/Header.tsx, Footer.tsx, MobileMenu.tsx
    chooser/ChooserScreen.tsx, ChooserCard.tsx
    landing/HeroSection.tsx, TeamSection.tsx, DiagnosticSection.tsx,
            GrowthSection.tsx, ResultsSection.tsx, ToolsSection.tsx,
            PricingSection.tsx, TestimonialsSection.tsx, FAQSection.tsx,
            CTAFooterSection.tsx
    ui/Button.tsx, Card.tsx, Container.tsx, SectionHeading.tsx,
       TabSwitcher.tsx, Accordion.tsx, ScrollReveal.tsx
  data/content.ts, navigation.ts
  lib/types.ts, cn.ts
public/
  images/logos/, hero/, team/, backgrounds/, icons/
```

---

## Implementation Order

1. Foundation: globals.css, layout.tsx, cn.ts, types.ts, ThemeProvider
2. Экспорт изображений из Figma → public/images/
3. UI компоненты: Container, Button, Card, SectionHeading, TabSwitcher, Accordion, ScrollReveal
4. Layout: Header, Footer, MobileMenu
5. Контент: content.ts (текст из Figma), navigation.ts
6. Chooser: ChooserScreen + ChooserCard
7. Секции лендинга (по порядку сверху вниз): Hero → Team → Diagnostic → Growth → Results → Tools → Pricing → Testimonials → FAQ → CTA
8. Сборка page.tsx
9. Responsive адаптация + финальная полировка

---

## Verification

1. `npm run dev` — проект запускается без ошибок
2. Экран-выбор отображается корректно на desktop и mobile
3. Клик по "WAY ДЛЯ БИЗНЕСА" → синяя тема лендинга
4. Клик по "WAY ДЛЯ ЛИЧНОСТИ" → оранжевая тема лендинга
5. Табы в хедере плавно переключают тему (цвета + контент)
6. Навигация по секциям через smooth scroll
7. Scroll-reveal анимации работают
8. Mobile (375px): бургер-меню, стек-layout, адаптивные секции
9. `npm run build` — билд проходит без ошибок
10. Визуальное сравнение с Figma-дизайном через get_screenshot
