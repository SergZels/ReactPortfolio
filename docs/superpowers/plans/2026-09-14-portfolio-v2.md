# Портфоліо v2 — план реалізації

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Замінити портфоліо на CRA сучасним двомовним SPA з єдиною моделлю даних і локальними зображеннями.

**Architecture:** Vite-застосунок на React 19 + TypeScript. Увесь контент 24 проєктів — в одному типізованому масиві `src/data/projects.ts`; один шаблон рендерить будь-який кейс за slug. Двомовність — власний React-контекст із типом `Localized = { uk, en }`, який робить пропущений переклад помилкою компіляції. Зображення конвертуються у WebP разовим Node-скриптом і лежать у репозиторії.

**Tech Stack:** Vite 7, React 19, TypeScript 5, Tailwind CSS 4, react-router 7, lucide-react, Vitest, Testing Library, sharp (dev).

**Spec:** `docs/superpowers/specs/2026-09-14-portfolio-v2-design.md`

**Гілка:** `v2` у `C:\D\real_code\ReactPortfolio` (репозиторій `SergZels/ReactPortfolio`).

## Global Constraints

- Рантайм-залежності — рівно чотири: `react`, `react-dom`, `react-router`, `lucide-react`. Будь-яка п'ята потребує узгодження з Сергієм.
- Заборонено додавати: `bootstrap`, `react-bootstrap`, `@mui/*`, `@emotion/*`, `react-icons`, `emailjs-com`, `typewriter-effect`, `react-transition-group`, `react-helmet-async`, `web-vitals`, `i18next`.
- Мова інтерфейсу коду: ідентифікатори англійською, коментарі й тексти комітів — українською.
- Жодного посилання на `zelse.asuscomm.com` у фінальному коді `src/`.
- Кожен текст, який бачить користувач, має тип `Localized` з непорожніми `uk` і `en`. Виняток — `Shot.caption`: він необов'язковий, бо в старому коді підписи мали лише 47 кадрів зі 112; якщо підпис є, обидві мови обов'язкові.
- Одна темна тема. Кольори — лише через CSS-змінні на `:root`, жодних захардкожених hex у компонентах.
- Усі анімації — всередині `@media (prefers-reduced-motion: no-preference)`.
- Featured-проєктів рівно 6.
- Проєктів усього 24.
- Node ≥ 20.

---

## Виявлені баги в поточному коді

Під час аудиту знайдено скопійовані чужі посилання. **Не переносити їх наосліп** — Task 5 містить окремий крок звірки:

| Файл | Що не так |
|---|---|
| `Gingr.js` | GitHub вказує на `familyExpenses` — репозиторій іншого проєкту |
| `Guard.js` | GitHub `Czech_beads_V2` + Telegram `Czech_beads_bot` — обидва від Czech Beads |
| `Make.js` (eSim) | GitHub `OrxidStatBot2` — не той проєкт |
| `Poland.js` | GitHub `OrxidStatBot2` — не той проєкт |
| `OrxidBotVib.js` | GitHub `Czech_beads_V2` — не той проєкт |

---

## Таблиця відповідності проєктів

Джерело для Task 5. Колонка «Тека» — підтека `Content/`; «—» означає, що локальних файлів немає (див. Task 1).

| slug | Назва | Старий файл | Стара URL | Тека | Кадрів | featured |
|---|---|---|---|---|---|---|
| `rrepair-crm` | RRepair CRM | `rrepair.js` | `/RR` | `RR` | 14 | ✅ |
| `dedit` | dEdit | `Dedit.js` | `/Dedit` | `dEditBot` | 7 | ✅ |
| `bybit-copy-trading` | ByBit Copy Trading | `ByBit.js` | `/ByBit` | `Bybit` | 3 | ✅ |
| `terinfobot` | TerInfoBot | `1.js` | `/Project1` | `TerInfoBot` | 9 | ✅ |
| `hr-bot` | HR Bot | `HRbot.js` | `/HRBot` | `HRBot` | 3 | ✅ |
| `code-review-ai` | Code Review AI | `CodeReviewAI.js` | `/CodeRevAI` | `CodeReviewAI` | 1 | ✅ |
| `water-bot` | Water Bot | `WaterBot.js` | `/WaterBot` | `WaterBot` | 1 | |
| `family-expenses` | Family Expenses Bot | `FamilyExpenses.js` | `/FamilyExpenses` | — | 1 | |
| `mobile-dev` | Mobile development | `MobDev.js` | `/MobDev` | `Mobile` | 0 | |
| `prokat` | Prokat | `Prokat.js` | `/Prokat` | `Prokat` | 17 | |
| `atele` | Atele | `Atele.js` | `/Atele` | `Atele` | 7 | |
| `orxid-viber-bot` | OrxidBot | `OrxidBotVib.js` | `/OrxidBot` | `OrxidViber` | 10 | |
| `biznes-statistics-bot` | Biznes Statistics Bot | `BotBiznesStatistics.js` | `/BotBiznesStatistics` | — | 1 | |
| `orxid-accounting` | Accounting | `OrxidStatistics.js` | `/OrxidStatistics` | `BiznesStatistic` | 2 | |
| `orxid-site` | orxid.in.ua | `StaticSite.js` | `/StaticSite` | `StaticSite` | 3 | |
| `beads-parser` | Beads Parser | `BeadsParser.js` | `/BeadsParser` | `BeadsParser` | 2 | |
| `gingr-analytics` | Data analysis project | `Gingr.js` | `/Gingr` | `Gingr` | 10 | |
| `czech-beads-bot` | Czech Beads Bot | `CzechBeads.js` | `/CzechBeads` | `CzechBeads` | 4 | |
| `esim-shop` | eSim Shop | `Make.js` | `/Make` | `eSim` | 2 | |
| `poland-flask` | Flask | `Poland.js` | `/Poland` | `Poland` | 1 | |
| `museum` | Museum software | `museum.js` | `/Museum` | `Museum` | 6 | |
| `bot-portfolio` | Bot Portfolio | `BotPortfolio.js` | `/BotPortfolio` | `OldPortfolio` | 2 | |
| `guard-bot` | Guard Bot | `Guard.js` | `/Guard` | `Guard` | 4 | |
| `other-projects` | Other | `OtherPr.js` | `/Other` | (змішана) | 2 | |

---

## Структура файлів

```
scripts/
  fetch-missing-images.mjs   Task 1 — разове завантаження з NAS
  optimize-images.mjs        Task 6 — Content/** → public/shots/**
src/
  main.tsx                   точка входу, провайдери
  App.tsx                    роутер
  index.css                  @import tailwindcss + CSS-змінні теми
  types.ts                   Localized, Project, ProjectStatus, StackLevel
  data/
    projects.ts              24 записи — увесь контент кейсів
    projects.test.ts         тести цілісності даних
    profile.ts               hero, «про себе», таймлайн, стек, контакти
  i18n/
    LangContext.tsx          провайдер + useLang()
    ui.ts                    словник інтерфейсу
    ui.test.ts               повнота словника
  hooks/
    useMeta.ts               title/description/OG без бібліотеки
    useReveal.ts             IntersectionObserver для появи секцій
  components/
    Shell.tsx                шапка, перемикач мови, футер
    ProjectCard.tsx          картка в сітці
    StackFilter.tsx          фільтр за технологією
    Reveal.tsx               обгортка анімації появи
  routes/
    Home.tsx                 головна: збирає секції
    Project.tsx              /project/:slug
    NotFound.tsx             404
    redirects.ts             таблиця старий URL → slug
  sections/
    Hero.tsx
    About.tsx
    Stack.tsx
    Cases.tsx
    Contact.tsx
```

Старі теки `src/app/`, `src/header/`, `src/pages/`, `src/components/socialicons/`, `src/components/themetoggle/`, `src/hooks/AnimatedCursor.js`, `src/content_option.js` видаляються в Task 20.

---

### Task 1: Забрати зображення з NAS, поки він доступний

Не залежить від решти. **Робиться першим.** Якщо NAS уже недоступний — зупинитись і повідомити Сергія: без цих файлів проєкти `family-expenses` і `biznes-statistics-bot` лишаться без зображень.

**Files:**
- Create: `scripts/fetch-missing-images.mjs`
- Create (результат): `Content/_hero/hero.jpg`, `Content/FamilyExpenses/1.jpg`, `Content/BiznesStatisticBot/1.jpg`, `Content/TerInfoBot/cover.jpg`, `Content/WaterBot/cover.jpg`, `Content/CzechBeads/cover.jpg`, `Content/eSim/2.jpg`

- [ ] **Step 1: Написати скрипт завантаження**

```js
// scripts/fetch-missing-images.mjs
// Разове завантаження зображень, які існують лише на NAS.
// Запуск: node scripts/fetch-missing-images.mjs
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

const FILES = [
  ['https://zelse.asuscomm.com/portfolio/img/hero.jpg', 'Content/_hero/hero.jpg'],
  ['https://zelse.asuscomm.com/portfolio/img/port7.jpg', 'Content/FamilyExpenses/1.jpg'],
  ['https://zelse.asuscomm.com/portfolio/img/port6.jpg', 'Content/BiznesStatisticBot/1.jpg'],
  ['https://zelse.asuscomm.com/portfolio/img/port1.jpg', 'Content/TerInfoBot/cover.jpg'],
  ['https://zelse.asuscomm.com/portfolio/img/port2.jpg', 'Content/WaterBot/cover.jpg'],
  ['https://zelse.asuscomm.com/portfolio/img/port5.jpg', 'Content/CzechBeads/cover.jpg'],
  [
    'https://www.upwork.com/att/download/portfolio/persons/uid/1662865922213687296/profile/projects/files/6a9bde64-f1d8-40eb-899c-1564275b18ef',
    'Content/eSim/2.jpg',
  ],
];

let ok = 0;
const failed = [];

for (const [url, rel] of FILES) {
  const dest = resolve(ROOT, rel);
  try {
    await access(dest);
    console.log(`пропущено (вже є): ${rel}`);
    ok += 1;
    continue;
  } catch {
    // файлу немає — качаємо
  }
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(30_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.byteLength < 1024) throw new Error(`підозріло малий файл: ${buf.byteLength} Б`);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`завантажено: ${rel} (${Math.round(buf.byteLength / 1024)} КБ)`);
    ok += 1;
  } catch (err) {
    console.error(`ПОМИЛКА ${rel}: ${err.message}`);
    failed.push(rel);
  }
}

console.log(`\nготово: ${ok}/${FILES.length}`);
if (failed.length) {
  console.error(`не вдалося: ${failed.join(', ')}`);
  process.exitCode = 1;
}
```

- [ ] **Step 2: Запустити**

Run: `node scripts/fetch-missing-images.mjs`
Expected: `готово: 7/7`, код виходу 0.

Якщо будь-який файл не завантажився — **зупинитись**, не переходити далі, повідомити Сергія з переліком того, що не вдалося.

- [ ] **Step 3: Перевірити, що файли справжні зображення**

Run: `node -e "const {readdirSync,statSync}=require('fs');for(const d of ['_hero','FamilyExpenses','BiznesStatisticBot']){for(const f of readdirSync('Content/'+d)){console.log(d+'/'+f, statSync('Content/'+d+'/'+f).size)}}"`
Expected: кожен файл більший за 10 КБ.

- [ ] **Step 4: Коміт**

```bash
git add scripts/fetch-missing-images.mjs Content/_hero Content/FamilyExpenses Content/BiznesStatisticBot Content/TerInfoBot Content/WaterBot Content/CzechBeads Content/eSim
git commit -m "chore: забрати з NAS зображення без локальної копії

Сім файлів існували лише на zelse.asuscomm.com та upwork.com.
Тепер вони в репозиторії й сайт від NAS не залежить."
```

---

### Task 2: Прибрати робоче дерево

**Files:** без змін коду.

Перед створенням каркаса робоче дерево має бути чистим, інакше незакомічені зміни змішаються з новим кодом.

- [ ] **Step 1: Показати, що саме незакомічене**

Run: `git status --short && git diff --stat`

Очікується: зміни в `src/app/routes.js`, `src/content_option.js`, `src/header/index.js` + нові теки `Content/CodeReviewAI`, `Content/HRBot` + PDF/DOCX.

- [ ] **Step 2: Запитати Сергія**

Це рішення людини, не виконавця. Поставити питання: закомітити цю роботу в `main` як завершену, чи вона недороблена й має лишитися в робочому дереві?

**Не вирішувати самостійно.** Дочекатися відповіді.

- [ ] **Step 3: Виконати рішення**

Якщо «закомітити»:
```bash
git stash push -m "wip-main" -- src/app/routes.js src/content_option.js src/header/index.js
git checkout main
git stash pop
git add -A
git commit -m "feat: додати сторінки CodeReviewAI і HRBot"
git checkout v2
git merge main
```

Якщо «лишити як є»: перейти до Task 3, файли не чіпати — вони не конфліктують із новим кодом, бо Task 20 видаляє `src/` цілком уже після того, як нове працює.

---

### Task 3: Каркас Vite + TypeScript + Tailwind + Vitest

**Files:**
- Create: `package.json` (замінити), `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, `vitest.setup.ts`
- Delete: `yarn.lock` (лишається `package-lock.json`)

**Interfaces:**
- Produces: працюючий `npm run dev`, `npm run build`, `npm test`; CSS-змінні теми на `:root`.

- [ ] **Step 1: Замінити package.json**

```json
{
  "name": "portfolio",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "images": "node scripts/optimize-images.mjs"
  },
  "dependencies": {
    "lucide-react": "^0.460.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router": "^7.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@testing-library/jest-dom": "^6.6.0",
    "@testing-library/react": "^16.1.0",
    "@testing-library/user-event": "^14.5.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "jsdom": "^25.0.0",
    "sharp": "^0.33.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "vite": "^7.0.0",
    "vitest": "^2.1.0"
  }
}
```

- [ ] **Step 2: Встановити залежності**

```bash
rm -f yarn.lock
rm -rf node_modules
npm install
```
Expected: встановлення без помилок.

- [ ] **Step 3: vite.config.ts**

`base` тимчасово `/` — фінальне значення виставляється в Task 20 після відповіді Сергія про адресу сайту.

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
});
```

- [ ] **Step 4: tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": ["src", "vitest.setup.ts", "vite.config.ts"]
}
```

- [ ] **Step 5: vitest.setup.ts**

```ts
import '@testing-library/jest-dom/vitest';
```

- [ ] **Step 6: index.html у корені**

```html
<!doctype html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/ico.jpg" />
    <title>Sergiy Zelinskii</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 7: src/index.css — тема варіанта C**

```css
@import 'tailwindcss';

:root {
  --bg: #0c0d10;
  --surface: #14161b;
  --surface-2: #1c1f26;
  --border: #272b33;
  --border-strong: #383d48;
  --text: #e6e8ec;
  --text-dim: #9aa1ad;
  --text-faint: #6b7280;
  --accent: #7f77dd;
  --accent-dim: #534ab7;
  --ok: #5dcaa5;
}

@theme inline {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-surface-2: var(--surface-2);
  --color-border: var(--border);
  --color-border-strong: var(--border-strong);
  --color-text: var(--text);
  --color-text-dim: var(--text-dim);
  --color-text-faint: var(--text-faint);
  --color-accent: var(--accent);
  --color-accent-dim: var(--accent-dim);
  --color-ok: var(--ok);
  --font-mono: ui-monospace, 'JetBrains Mono', 'Cascadia Code', Consolas, monospace;
}

html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

body {
  background: var(--bg);
  color: var(--text);
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

- [ ] **Step 8: src/App.tsx і src/main.tsx — мінімальні**

```tsx
// src/App.tsx
export default function App() {
  return <h1 className="p-8 font-mono text-2xl">portfolio v2</h1>;
}
```

```tsx
// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

- [ ] **Step 9: Перевірити збірку й дев-сервер**

Run: `npm run build`
Expected: збірка успішна, тека `dist/` створена.

Run: `npm run dev` — сторінка відкривається, видно «portfolio v2» світлим моношрифтом на темному тлі. Зупинити сервер.

- [ ] **Step 10: Коміт**

```bash
git add package.json package-lock.json vite.config.ts tsconfig.json vitest.setup.ts index.html src/main.tsx src/App.tsx src/index.css
git rm --cached yarn.lock
git commit -m "feat: каркас Vite + React 19 + TypeScript + Tailwind 4

Замість CRA. Стара тека src/ поки лишається — видаляється в кінці,
коли нове запрацює."
```

---

### Task 4: Типи та тести цілісності даних

Тести пишуться **до** контенту — вони визначають, яким той контент має бути.

**Files:**
- Create: `src/types.ts`, `src/data/projects.ts` (порожній масив), `src/data/projects.test.ts`

**Interfaces:**
- Produces: `Localized`, `ProjectStatus`, `StackLevel`, `Project`, `KNOWN_STACK`, `projects: Project[]`.

- [ ] **Step 1: Написати типи**

```ts
// src/types.ts
export type Localized = { uk: string; en: string };

export type ProjectStatus = 'production' | 'archived' | 'pet';

export type StackLevel = 'daily' | 'confident' | 'familiar';

/** Єдиний дозволений перелік технологій. Захищає фільтр від друкарських помилок. */
export const KNOWN_STACK = [
  'python', 'aiogram', 'django', 'fastapi', 'flask', 'postgresql', 'sqlite',
  'sqlalchemy', 'peewee', 'html-css', 'htmx', 'javascript', 'react', 'go',
  'php', 'java', 'vba', 'make.com', 'docker', 'nginx', 'linux', 'jinja2',
  'ms-access', 'excel', 'viber', 'openai',
] as const;

export type Tech = (typeof KNOWN_STACK)[number];

export type Shot = {
  src: string;
  caption: Localized;
};

export type Project = {
  slug: string;
  title: string;
  year: number;
  status: ProjectStatus;
  featured: boolean;
  summary: Localized;
  stack: Tech[];
  links: {
    github?: string;
    telegram?: string;
    live?: string;
    youtube?: string;
  };
  cover: string;
  shots: Shot[];
};
```

- [ ] **Step 2: Створити порожній масив даних**

```ts
// src/data/projects.ts
import type { Project } from '../types';

export const projects: Project[] = [];
```

- [ ] **Step 3: Написати тести цілісності**

```ts
// src/data/projects.test.ts
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { KNOWN_STACK } from '../types';
import { projects } from './projects';

const PUBLIC_DIR = resolve(import.meta.dirname, '../../public');
const localized = (v: { uk: string; en: string }) =>
  v.uk.trim().length > 0 && v.en.trim().length > 0;

describe('дані проєктів', () => {
  it('містить рівно 24 проєкти', () => {
    expect(projects).toHaveLength(24);
  });

  it('має рівно 6 featured-проєктів', () => {
    expect(projects.filter((p) => p.featured)).toHaveLength(6);
  });

  it('усі slug унікальні', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it.each(projects.map((p) => [p.slug, p] as const))('%s — коректний', (_slug, p) => {
    expect(p.slug).toMatch(/^[a-z0-9-]+$/);
    expect(p.title.trim()).not.toBe('');
    expect(p.year).toBeGreaterThanOrEqual(2010);
    expect(p.year).toBeLessThanOrEqual(new Date().getFullYear());
    expect(localized(p.summary)).toBe(true);
    expect(p.stack.length).toBeGreaterThan(0);
    for (const tech of p.stack) {
      expect(KNOWN_STACK).toContain(tech);
    }
    for (const shot of p.shots) {
      expect(localized(shot.caption)).toBe(true);
    }
  });

  it('не містить посилань на NAS', () => {
    expect(JSON.stringify(projects)).not.toContain('zelse.asuscomm.com');
  });

  it.each(projects.map((p) => [p.slug, p] as const))(
    '%s — файли зображень існують',
    (_slug, p) => {
      expect(existsSync(resolve(PUBLIC_DIR, p.cover.replace(/^\//, '')))).toBe(true);
      for (const shot of p.shots) {
        expect(existsSync(resolve(PUBLIC_DIR, shot.src.replace(/^\//, '')))).toBe(true);
      }
    },
  );
});
```

- [ ] **Step 4: Запустити — тести мають впасти**

Run: `npm test`
Expected: FAIL — «містить рівно 24 проєкти» падає (`0 !== 24`). Це правильно: даних ще немає.

- [ ] **Step 5: Коміт**

```bash
git add src/types.ts src/data/projects.ts src/data/projects.test.ts
git commit -m "test: типи та тести цілісності даних проєктів

Тести поки червоні — масив порожній. Наповнюється в наступних задачах."
```

---

### Task 5: Перенести контент 24 проєктів (англійською)

Найбільша механічна задача. Українські переклади **не** заповнюються тут — Task 12. Щоб тести не блокували роботу, `uk` тимчасово дублює `en`, і Task 12 їх замінює.

**Files:**
- Modify: `src/data/projects.ts`
- Read (джерело): `src/pages/portfolio/Projects/*.js`, `src/content_option.js`

- [ ] **Step 1: Звірити підозрілі посилання з Сергієм**

П'ять проєктів мають скопійовані чужі посилання (таблиця «Виявлені баги» вище). Для кожного запитати правильний URL або підтвердження, що посилання немає. **Не переносити хибні значення.**

- [ ] **Step 2: Заповнити масив**

Правила перенесення для кожного рядка таблиці відповідності:

- `slug`, `title`, `featured` — з таблиці;
- `summary.en` — рядок `description` із `dataportfolio` у `src/content_option.js`; `summary.uk` тимчасово дорівнює `summary.en`;
- `shots[].caption.en` — поле `title` кожного елемента `photo` у файлі проєкту; порожні підписи пропускати разом із кадром **ні** — кадр лишається, підпис треба написати (Task 12 перекладе, але англійський текст потрібен уже тут; якщо в оригіналі порожньо — описати те, що на скриншоті);
- `cover` — `/shots/{slug}/cover-640.webp`;
- `shots[].src` — `/shots/{slug}/{n}-1280.webp`, нумерація з 1 у порядку появи в старому файлі;
- `stack` — вивести з тексту проєкту, лише значення з `KNOWN_STACK`;
- `year`, `status` — з `worktimeline` і змісту проєкту; при сумніві `archived`.

Приклад повного запису (зразок форми для решти 23):

```ts
{
  slug: 'dedit',
  title: 'dEdit',
  year: 2024,
  status: 'production',
  featured: true,
  summary: {
    en: 'Telegram bot selling graphic-design courses, with LiqPay payments and a referral programme.',
    uk: 'Telegram bot selling graphic-design courses, with LiqPay payments and a referral programme.',
  },
  stack: ['python', 'aiogram', 'fastapi', 'jinja2', 'docker'],
  links: {
    github: 'https://github.com/SergZels/dEditTelegramBot',
    telegram: 'https://t.me/dedit_edit_bot',
  },
  cover: '/shots/dedit/cover-640.webp',
  shots: [
    {
      src: '/shots/dedit/1-1280.webp',
      caption: {
        en: 'A bot for selling graphic design courses',
        uk: 'A bot for selling graphic design courses',
      },
    },
    {
      src: '/shots/dedit/2-1280.webp',
      caption: {
        en: 'My first high-load bot on Aiogram 3 + FastAPI',
        uk: 'My first high-load bot on Aiogram 3 + FastAPI',
      },
    },
    {
      src: '/shots/dedit/3-1280.webp',
      caption: {
        en: 'Lessons open in the Telegram mini-browser',
        uk: 'Lessons open in the Telegram mini-browser',
      },
    },
    {
      src: '/shots/dedit/4-1280.webp',
      caption: {
        en: 'Admin panel rendered server-side with Jinja2 and Bootstrap',
        uk: 'Admin panel rendered server-side with Jinja2 and Bootstrap',
      },
    },
    {
      src: '/shots/dedit/5-1280.webp',
      caption: {
        en: 'Course catalogue as the buyer sees it',
        uk: 'Course catalogue as the buyer sees it',
      },
    },
    {
      src: '/shots/dedit/6-1280.webp',
      caption: {
        en: 'Automatic payment through LiqPay, plus a referral programme',
        uk: 'Automatic payment through LiqPay, plus a referral programme',
      },
    },
    {
      src: '/shots/dedit/7-1280.webp',
      caption: {
        en: 'Sales statistics in the admin panel',
        uk: 'Sales statistics in the admin panel',
      },
    },
  ],
},
```

- [ ] **Step 3: Перевірити кількість і форму**

Run: `npm test -- projects`
Expected: тести на кількість (24), featured (6), унікальність slug, `KNOWN_STACK` і відсутність NAS — **проходять**. Тест «файли зображень існують» — **падає**, бо `public/shots/` ще немає. Це очікувано, він зазеленіє в Task 6.

- [ ] **Step 4: Коміт**

```bash
git add src/data/projects.ts
git commit -m "feat: перенести контент 24 проєктів у типізовану модель

Замість 24 дубльованих компонентів — один масив. Поле uk поки
дублює en, українські тексти — окремою задачею.
Виправлено скопійовані чужі посилання в Gingr, Guard, eSim,
Poland, OrxidBot."
```

---

### Task 6: Скрипт оптимізації зображень

**Files:**
- Create: `scripts/optimize-images.mjs`
- Create (результат): `public/shots/{slug}/*.webp`
- Modify: `.gitignore` (не ігнорувати `public/shots`)

**Interfaces:**
- Consumes: `projects` із Task 5 — бере перелік slug і теку-джерело з мапи в скрипті.
- Produces: `public/shots/{slug}/cover-640.webp`, `public/shots/{slug}/{n}-{640,1280}.webp`.

- [ ] **Step 1: Написати скрипт**

```js
// scripts/optimize-images.mjs
// Content/** → public/shots/{slug}/*.webp у двох ширинах.
// Запуск: npm run images
import { mkdir, readdir, rm, stat } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import sharp from 'sharp';

const ROOT = resolve(import.meta.dirname, '..');
const OUT = resolve(ROOT, 'public/shots');
const WIDTHS = [640, 1280];
const QUALITY = 80;

/** slug → тека в Content/. Порядок файлів усередині — за іменем. */
const SOURCES = {
  'rrepair-crm': 'RR',
  dedit: 'dEditBot',
  'bybit-copy-trading': 'Bybit',
  terinfobot: 'TerInfoBot',
  'hr-bot': 'HRBot',
  'code-review-ai': 'CodeReviewAI',
  'water-bot': 'WaterBot',
  'family-expenses': 'FamilyExpenses',
  'mobile-dev': 'Mobile',
  prokat: 'Prokat',
  atele: 'Atele',
  'orxid-viber-bot': 'OrxidViber',
  'biznes-statistics-bot': 'BiznesStatisticBot',
  'orxid-accounting': 'BiznesStatistic',
  'orxid-site': 'StaticSite',
  'beads-parser': 'BeadsParser',
  'gingr-analytics': 'Gingr',
  'czech-beads-bot': 'CzechBeads',
  'esim-shop': 'eSim',
  'poland-flask': 'Poland',
  museum: 'Museum',
  'bot-portfolio': 'OldPortfolio',
  'guard-bot': 'Guard',
  'other-projects': 'OldPortfolio',
};

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp']);

await rm(OUT, { recursive: true, force: true });

let totalIn = 0;
let totalOut = 0;

for (const [slug, folder] of Object.entries(SOURCES)) {
  const srcDir = resolve(ROOT, 'Content', folder);
  const destDir = resolve(OUT, slug);
  await mkdir(destDir, { recursive: true });

  let entries;
  try {
    entries = (await readdir(srcDir)).filter((f) => IMAGE_EXT.has(extname(f).toLowerCase())).sort();
  } catch {
    console.error(`ПОМИЛКА: немає теки Content/${folder} (slug ${slug})`);
    process.exitCode = 1;
    continue;
  }

  if (entries.length === 0) {
    console.error(`ПОМИЛКА: Content/${folder} порожня (slug ${slug})`);
    process.exitCode = 1;
    continue;
  }

  // Обкладинка — перший файл або файл з іменем cover.*
  const coverName = entries.find((f) => f.startsWith('cover.')) ?? entries[0];
  const shots = entries.filter((f) => f !== coverName);

  const jobs = [
    { file: coverName, out: 'cover', widths: [640] },
    ...shots.map((file, i) => ({ file, out: String(i + 1), widths: WIDTHS })),
  ];

  for (const job of jobs) {
    const src = resolve(srcDir, job.file);
    totalIn += (await stat(src)).size;
    const meta = await sharp(src).metadata();
    for (const w of job.widths) {
      const dest = resolve(destDir, `${job.out}-${w}.webp`);
      await sharp(src)
        .resize({ width: Math.min(w, meta.width ?? w), withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(dest);
      totalOut += (await stat(dest)).size;
    }
  }

  console.log(`${slug}: 1 обкладинка + ${shots.length} кадрів`);
}

const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log(`\nбуло ${mb(totalIn)} МБ → стало ${mb(totalOut)} МБ`);
```

**Увага: `other-projects` і `bot-portfolio` тимчасово вказують на одну теку
`OldPortfolio`.** У старому коді сторінка `OtherPr.js` збирала зображення з
різних тек і не мала власної. Перед запуском треба вирішити з Сергієм одне з
двох: або завести `Content/Other/` з окремими скриншотами, або прибрати
`other-projects` зі списку проєктів (тоді їх стає 23, і константу в
`projects.test.ts` та в Global Constraints треба змінити на 23).

Не лишати обидва slug на одній теці — на сайті будуть дві картки з однаковими
картинками.

- [ ] **Step 2: Запустити**

Run: `npm run images`
Expected: рядок по кожному з 24 slug, наприкінці «було ~103 МБ → стало N МБ».

Якщо N більше 25 — зменшити більшу ширину з 1280 до 1024 у константі `WIDTHS` і перезапустити.

- [ ] **Step 3: Звірити кількість кадрів із даними**

Run: `node -e "const{readdirSync}=require('fs');const d=readdirSync('public/shots');console.log(d.length);for(const s of d){const n=readdirSync('public/shots/'+s).filter(f=>!f.startsWith('cover')).length/2;console.log(s,n)}"`
Expected: 24 теки; кількість кадрів по кожному збігається з колонкою «Кадрів» у таблиці відповідності.

Розбіжності означають, що в `Content/` більше або менше файлів, ніж використовував старий сайт — узгодити `shots` у `src/data/projects.ts` з фактичною кількістю.

- [ ] **Step 4: Тести зображень мають позеленіти**

Run: `npm test -- projects`
Expected: усі тести PASS, включно з «файли зображень існують».

- [ ] **Step 5: Коміт**

```bash
git add scripts/optimize-images.mjs public/shots .gitignore
git commit -m "feat: оптимізація зображень у WebP

Content/** → public/shots/**, дві ширини. Сайт більше не тягне
картинки з zelse.asuscomm.com."
```

---

### Task 7: Двомовність — контекст і словник

**Files:**
- Create: `src/i18n/LangContext.tsx`, `src/i18n/ui.ts`, `src/i18n/ui.test.ts`

**Interfaces:**
- Produces: `LangProvider`, `useLang(): { lang: Lang; setLang: (l: Lang) => void; t: (key: UiKey) => string; pick: (v: Localized) => string }`, `UI`, `type UiKey`.

- [ ] **Step 1: Написати словник**

```ts
// src/i18n/ui.ts
import type { Localized } from '../types';

export const UI = {
  navCases: { uk: 'Кейси', en: 'Cases' },
  navAbout: { uk: 'Про мене', en: 'About' },
  navStack: { uk: 'Стек', en: 'Stack' },
  navContact: { uk: 'Контакти', en: 'Contact' },
  heroRole: { uk: 'бекенд · боти · автоматизація', en: 'backend · bots · automation' },
  heroCta: { uk: 'Дивитись кейси', en: 'View cases' },
  heroCv: { uk: 'Завантажити CV', en: 'Download CV' },
  metricYears: { uk: 'років у коді', en: 'years coding' },
  metricProjects: { uk: 'проєктів', en: 'projects' },
  metricStack: { uk: 'технологій', en: 'technologies' },
  aboutTitle: { uk: 'Про мене', en: 'About' },
  timelineTitle: { uk: 'Шлях', en: 'Timeline' },
  stackTitle: { uk: 'Стек', en: 'Stack' },
  levelDaily: { uk: 'щоденно', en: 'daily' },
  levelConfident: { uk: 'впевнено', en: 'confident' },
  levelFamiliar: { uk: 'знайомий', en: 'familiar' },
  casesTitle: { uk: 'Кейси', en: 'Cases' },
  casesAll: { uk: 'Усі', en: 'All' },
  casesRest: { uk: 'Решта проєктів', en: 'Other projects' },
  casesEmpty: { uk: 'Немає проєктів із цією технологією', en: 'No projects use this technology' },
  contactTitle: { uk: 'Контакти', en: 'Contact' },
  statusProduction: { uk: 'у продакшені', en: 'production' },
  statusArchived: { uk: 'в архіві', en: 'archived' },
  statusPet: { uk: 'пет-проєкт', en: 'pet project' },
  backToCases: { uk: 'Назад до кейсів', en: 'Back to cases' },
  notFoundTitle: { uk: 'Сторінку не знайдено', en: 'Page not found' },
  notFoundHome: { uk: 'На головну', en: 'Go home' },
  linkGithub: { uk: 'Код на GitHub', en: 'Code on GitHub' },
  linkTelegram: { uk: 'Відкрити в Telegram', en: 'Open in Telegram' },
  linkLive: { uk: 'Живий сайт', en: 'Live site' },
  linkYoutube: { uk: 'Відео', en: 'Video' },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof UI;
```

- [ ] **Step 2: Написати контекст**

```tsx
// src/i18n/LangContext.tsx
import { createContext, use, useCallback, useEffect, useState, type ReactNode } from 'react';
import type { Localized } from '../types';
import { UI, type UiKey } from './ui';

export type Lang = 'uk' | 'en';

const STORAGE_KEY = 'portfolio-lang';

type LangValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: UiKey) => string;
  pick: (value: Localized) => string;
};

const LangContext = createContext<LangValue | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'uk' || saved === 'en') return saved;
  } catch {
    // приватний режим — читати не вдалося, беремо мову браузера
  }
  return navigator.language.toLowerCase().startsWith('uk') ? 'uk' : 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // не критично — мова просто не запам'ятається
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const pick = useCallback((value: Localized) => value[lang], [lang]);
  const t = useCallback((key: UiKey) => UI[key][lang], [lang]);

  return <LangContext value={{ lang, setLang, t, pick }}>{children}</LangContext>;
}

export function useLang(): LangValue {
  const ctx = use(LangContext);
  if (!ctx) throw new Error('useLang використано поза LangProvider');
  return ctx;
}
```

- [ ] **Step 3: Написати тест словника**

```ts
// src/i18n/ui.test.ts
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { UI, type UiKey } from './ui';

const SRC = resolve(import.meta.dirname, '..');

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = resolve(dir, name);
    if (statSync(full).isDirectory()) return sourceFiles(full);
    return /\.tsx?$/.test(name) && !name.endsWith('.test.ts') && !name.endsWith('.test.tsx')
      ? [full]
      : [];
  });
}

const allSource = sourceFiles(SRC)
  .filter((f) => !f.endsWith('ui.ts'))
  .map((f) => readFileSync(f, 'utf8'))
  .join('\n');

describe('словник інтерфейсу', () => {
  it.each(Object.keys(UI) as UiKey[])('%s має обидві мови', (key) => {
    expect(UI[key].uk.trim()).not.toBe('');
    expect(UI[key].en.trim()).not.toBe('');
  });

  it.each(Object.keys(UI) as UiKey[])('%s використовується в коді', (key) => {
    expect(allSource).toContain(`'${key}'`);
  });
});
```

- [ ] **Step 4: Запустити тести**

Run: `npm test -- ui`
Expected: перша група PASS; друга група FAIL для всіх ключів — компонентів ще немає. Це очікувано і зафіксовано: тест зазеленіє після Task 11.

- [ ] **Step 5: Коміт**

```bash
git add src/i18n
git commit -m "feat: двомовність через власний контекст

Без i18next. Тип Localized робить пропущений переклад помилкою
компіляції."
```

---

### Task 8: Профіль — hero, «про себе», таймлайн, стек, контакти

**Files:**
- Create: `src/data/profile.ts`
- Read (джерело): `src/content_option.js`

**Interfaces:**
- Produces: `profile` з полями `name`, `role`, `metrics`, `about`, `timeline`, `stack`, `contacts`, `cvUrl`, `heroImage`.

- [ ] **Step 1: Написати файл**

Тексти `uk` тут пишуться одразу — їх мало, на відміну від 112 підписів.

```ts
// src/data/profile.ts
import type { Localized, StackLevel, Tech } from '../types';

export const profile = {
  name: 'Sergiy Zelinskii',
  heroImage: '/shots/_hero/cover-640.webp',
  cvUrl: '/SergiyZelinskii.pdf',
  tagline: {
    uk: 'Роблю телеграм-ботів, CRM і автоматизацію для малого бізнесу',
    en: 'I build Telegram bots, CRMs and automation for small businesses',
  } satisfies Localized,
  about: {
    uk: `Програмую з 1997 року — почав із Basic. Був досвід із C++, Pascal, Assembler, Prolog, VHDL, Matlab, VBA, Java, PHP.
Зараз зосереджений на ботах на Python із асинхронним фреймворком aiogram.`,
    en: `I started programming back in 1997 in Basic. I have had experience with C++, Pascal, Assembler, Prolog, VHDL, Matlab, VBA, Java and PHP.
Now I am focused on developing bots in Python using the asynchronous aiogram framework.`,
  } satisfies Localized,
  timeline: [
    {
      year: 2024,
      title: { uk: 'React і Go', en: 'React and Go' },
      text: {
        uk: 'Почав вивчати React і Go.',
        en: 'Started learning React and Go.',
      },
    },
    {
      year: 2021,
      title: { uk: 'Python-розробник', en: 'Python developer' },
      text: {
        uk: 'aiogram, aiosqlite, aiogram-dialog, peewee, Django, PostgreSQL, Git, Docker Compose, Ubuntu 22.04.',
        en: 'aiogram, aiosqlite, aiogram-dialog, peewee, Django, PostgreSQL, Git, Docker Compose, Ubuntu 22.04.',
      },
    },
    {
      year: 2020,
      title: { uk: 'Перший чат-бот', en: 'The first chat bot' },
      text: {
        uk: 'На PHP зробив розумного чат-бота для власного бізнесу. Створювати ботів дуже сподобалось.',
        en: 'Using PHP I built an intelligent chatbot for my own business. I really enjoyed creating bots.',
      },
    },
    {
      year: 2016,
      title: { uk: 'Мобільна розробка', en: 'Mobile apps development' },
      text: {
        uk: 'Деякий час писав застосунки для Android на Java.',
        en: 'I spent some time creating Android apps in Java.',
      },
    },
    {
      year: 2012,
      title: { uk: 'Перші комерційні проєкти', en: 'First commercial projects' },
      text: {
        uk: 'Дві великі програми для власного бізнесу на VBA і SQL (MS Access та Excel).',
        en: 'Two large programs for my own business using VBA and SQL under MS Access and Excel.',
      },
    },
    {
      year: 1999,
      title: { uk: 'Університет', en: 'Education' },
      text: {
        uk: '1999–2004, університет: C++, Assembler, Prolog, VHDL, Matlab.',
        en: '1999–2004 at university: C++, Assembler, Prolog, VHDL, Matlab.',
      },
    },
  ],
  stack: [
    { tech: 'python' as Tech, label: 'Python', level: 'daily' as StackLevel },
    { tech: 'aiogram' as Tech, label: 'Aiogram', level: 'daily' as StackLevel },
    { tech: 'sqlite' as Tech, label: 'SQL · aiosqlite · sqlite3', level: 'daily' as StackLevel },
    { tech: 'docker' as Tech, label: 'Docker · Nginx · Linux', level: 'daily' as StackLevel },
    { tech: 'django' as Tech, label: 'Django', level: 'confident' as StackLevel },
    { tech: 'fastapi' as Tech, label: 'FastAPI', level: 'confident' as StackLevel },
    { tech: 'postgresql' as Tech, label: 'PostgreSQL · SQLite', level: 'confident' as StackLevel },
    { tech: 'sqlalchemy' as Tech, label: 'SQLAlchemy · Peewee · Django ORM', level: 'confident' as StackLevel },
    { tech: 'html-css' as Tech, label: 'HTML · CSS · Bootstrap', level: 'confident' as StackLevel },
    { tech: 'htmx' as Tech, label: 'HTMX · Alpine.js', level: 'confident' as StackLevel },
    { tech: 'javascript' as Tech, label: 'JavaScript', level: 'confident' as StackLevel },
    { tech: 'make.com' as Tech, label: 'Make.com', level: 'confident' as StackLevel },
    { tech: 'go' as Tech, label: 'Go (Gin)', level: 'familiar' as StackLevel },
    { tech: 'react' as Tech, label: 'React · MUI', level: 'familiar' as StackLevel },
    { tech: 'flask' as Tech, label: 'Flask', level: 'familiar' as StackLevel },
    { tech: 'php' as Tech, label: 'PHP', level: 'familiar' as StackLevel },
    { tech: 'java' as Tech, label: 'Java', level: 'familiar' as StackLevel },
    { tech: 'vba' as Tech, label: 'VBA (Excel, Access)', level: 'familiar' as StackLevel },
  ],
  contacts: {
    email: 'sergzels@gmail.com',
    telegram: 'https://t.me/sergzels',
    github: 'https://github.com/SergZels',
    linkedin: 'https://www.linkedin.com/in/sergzel/',
    youtube: 'https://www.youtube.com/channel/UCLmbaTBBpZ5ECVvjOmde7Fg',
    location: {
      uk: 'Теребовля, Тернопільська область, Україна',
      en: 'Terebovlia, Ternopil Region, Ukraine',
    } satisfies Localized,
  },
} as const;

export const YEARS_CODING = new Date().getFullYear() - 2012;
```

- [ ] **Step 2: Питання до Сергія**

Telegram-контакт `https://t.me/sergzels` — припущення за іменем на GitHub та Instagram. Підтвердити або дати правильний. Instagram зі старого сайту не переноситься; якщо він потрібен — сказати.

- [ ] **Step 3: Додати hero-зображення в конвеєр**

У `scripts/optimize-images.mjs` додати до `SOURCES` рядок `'_hero': '_hero',` і перезапустити `npm run images`.

- [ ] **Step 4: Перевірити типізацію**

Run: `npx tsc -b`
Expected: без помилок.

- [ ] **Step 5: Коміт**

```bash
git add src/data/profile.ts scripts/optimize-images.mjs public/shots/_hero
git commit -m "feat: дані профілю — hero, про себе, таймлайн, стек, контакти

Відсотки володіння замінено на три рівні. VBA перенесено
в «знайомий»: це технологія проєктів 2012 року."
```

---

### Task 9: Оболонка — шапка, перемикач мови, футер, роутер

**Files:**
- Create: `src/components/Shell.tsx`, `src/routes/NotFound.tsx`, `src/hooks/useMeta.ts`
- Modify: `src/App.tsx`, `src/main.tsx`

**Interfaces:**
- Consumes: `useLang` (Task 7), `profile` (Task 8).
- Produces: `<Shell>`, `useMeta({ title, description })`.

- [ ] **Step 1: useMeta**

```ts
// src/hooks/useMeta.ts
import { useEffect } from 'react';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function useMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
  }, [title, description]);
}
```

- [ ] **Step 2: Shell**

```tsx
// src/components/Shell.tsx
import { Link } from 'react-router';
import type { ReactNode } from 'react';
import { useLang } from '../i18n/LangContext';
import { profile } from '../data/profile';

const NAV = [
  { href: '/#cases', key: 'navCases' },
  { href: '/#about', key: 'navAbout' },
  { href: '/#stack', key: 'navStack' },
  { href: '/#contact', key: 'navContact' },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const { lang, setLang, t } = useLang();

  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="sticky top-0 z-10 border-b border-border bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="font-mono text-sm text-text hover:text-accent">
            ~/sergzels
          </Link>
          <nav className="hidden gap-5 text-sm text-text-dim sm:flex">
            {NAV.map((item) => (
              <a key={item.key} href={item.href} className="hover:text-text">
                {t(item.key)}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setLang(lang === 'uk' ? 'en' : 'uk')}
            className="rounded border border-border-strong px-2.5 py-1 font-mono text-xs text-text-dim hover:border-accent hover:text-text"
            aria-label={lang === 'uk' ? 'Switch to English' : 'Перемкнути на українську'}
          >
            {lang === 'uk' ? 'EN' : 'UK'}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5">{children}</main>

      <footer className="mt-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-5 py-8 font-mono text-xs text-text-faint">
          {profile.name} · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
```

- [ ] **Step 3: NotFound**

```tsx
// src/routes/NotFound.tsx
import { Link } from 'react-router';
import { useLang } from '../i18n/LangContext';
import { useMeta } from '../hooks/useMeta';

export default function NotFound() {
  const { t } = useLang();
  useMeta({ title: '404', description: t('notFoundTitle') });

  return (
    <div className="py-32 text-center">
      <p className="font-mono text-5xl text-accent">404</p>
      <h1 className="mt-4 text-xl">{t('notFoundTitle')}</h1>
      <Link to="/" className="mt-6 inline-block text-sm text-accent hover:underline">
        {t('notFoundHome')}
      </Link>
    </div>
  );
}
```

- [ ] **Step 4: App і main**

```tsx
// src/App.tsx
import { Route, Routes } from 'react-router';
import { Shell } from './components/Shell';
import Home from './routes/Home';
import Project from './routes/Project';
import NotFound from './routes/NotFound';

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Shell>
  );
}
```

```tsx
// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App';
import { LangProvider } from './i18n/LangContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </LangProvider>
  </StrictMode>,
);
```

- [ ] **Step 5: Тимчасові заглушки Home і Project**

Щоб імпорти в `App.tsx` резолвились до Task 10–11:

```tsx
// src/routes/Home.tsx
export default function Home() {
  return <div className="py-20">home</div>;
}
```

```tsx
// src/routes/Project.tsx
export default function Project() {
  return <div className="py-20">project</div>;
}
```

- [ ] **Step 6: Перевірити**

Run: `npx tsc -b && npm run dev`
Expected: шапка з `~/sergzels`, навігацією й кнопкою `EN`/`UK`; клік по кнопці перемикає підписи навігації. Відкрити `/неіснує` — видно 404.

- [ ] **Step 7: Коміт**

```bash
git add src/components/Shell.tsx src/routes src/hooks/useMeta.ts src/App.tsx src/main.tsx
git commit -m "feat: оболонка, роутер, перемикач мови, 404"
```

---

### Task 10: Секції головної — hero, про себе, стек

**Files:**
- Create: `src/sections/Hero.tsx`, `src/sections/About.tsx`, `src/sections/Stack.tsx`, `src/hooks/useReveal.ts`, `src/components/Reveal.tsx`
- Modify: `src/routes/Home.tsx`

**Interfaces:**
- Consumes: `profile`, `YEARS_CODING` (Task 8), `projects` (Task 5), `useLang` (Task 7).
- Produces: `<Hero>`, `<About>`, `<Stack>`, `<Reveal>`.

- [ ] **Step 1: useReveal + Reveal**

```ts
// src/hooks/useReveal.ts
import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}
```

```tsx
// src/components/Reveal.tsx
import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ease-out motion-reduce:transition-none ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Hero**

```tsx
// src/sections/Hero.tsx
import { profile, YEARS_CODING } from '../data/profile';
import { projects } from '../data/projects';
import { useLang } from '../i18n/LangContext';

export function Hero() {
  const { t, pick } = useLang();

  const metrics = [
    { value: YEARS_CODING, label: t('metricYears') },
    { value: projects.length, label: t('metricProjects') },
    { value: profile.stack.length, label: t('metricStack') },
  ];

  return (
    <section className="py-20 sm:py-28">
      <p className="font-mono text-sm text-accent">~/sergzels $ whoami</p>
      <h1 className="mt-4 text-4xl font-medium sm:text-5xl">{profile.name}</h1>
      <p className="mt-3 font-mono text-sm text-text-dim">{t('heroRole')}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-dim">
        {pick(profile.tagline)}
      </p>

      <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-md">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-lg bg-surface px-4 py-3">
            <div className="text-2xl font-medium">{m.value}</div>
            <div className="mt-0.5 text-xs text-text-faint">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#cases"
          className="rounded-md bg-accent-dim px-5 py-2.5 text-sm text-white hover:bg-accent"
        >
          {t('heroCta')}
        </a>
        <a
          href={profile.cvUrl}
          className="rounded-md border border-border-strong px-5 py-2.5 text-sm hover:border-accent"
        >
          {t('heroCv')}
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: About із таймлайном**

```tsx
// src/sections/About.tsx
import { profile } from '../data/profile';
import { useLang } from '../i18n/LangContext';
import { Reveal } from '../components/Reveal';

export function About() {
  const { t, pick } = useLang();

  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16">
      <h2 className="font-mono text-sm text-accent">{t('aboutTitle')}</h2>
      <p className="mt-6 max-w-2xl whitespace-pre-line leading-relaxed text-text-dim">
        {pick(profile.about)}
      </p>

      <h3 className="mt-14 font-mono text-sm text-accent">{t('timelineTitle')}</h3>
      <ol className="mt-6 border-l border-border">
        {profile.timeline.map((item) => (
          <Reveal key={item.year}>
            <li className="relative py-4 pl-6">
              <span className="absolute -left-[4.5px] top-6 h-2 w-2 rounded-full bg-accent" />
              <div className="font-mono text-xs text-text-faint">{item.year}</div>
              <div className="mt-1 font-medium">{pick(item.title)}</div>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-text-dim">
                {pick(item.text)}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
```

- [ ] **Step 4: Stack**

```tsx
// src/sections/Stack.tsx
import type { StackLevel } from '../types';
import { profile } from '../data/profile';
import { useLang } from '../i18n/LangContext';

const LEVELS: { level: StackLevel; key: 'levelDaily' | 'levelConfident' | 'levelFamiliar' }[] = [
  { level: 'daily', key: 'levelDaily' },
  { level: 'confident', key: 'levelConfident' },
  { level: 'familiar', key: 'levelFamiliar' },
];

export function Stack() {
  const { t } = useLang();

  return (
    <section id="stack" className="scroll-mt-20 border-t border-border py-16">
      <h2 className="font-mono text-sm text-accent">{t('stackTitle')}</h2>
      <div className="mt-8 space-y-8">
        {LEVELS.map(({ level, key }) => (
          <div key={level}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-faint">{t(key)}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.stack
                .filter((s) => s.level === level)
                .map((s) => (
                  <li
                    key={s.label}
                    className="rounded border border-border bg-surface px-3 py-1.5 font-mono text-sm text-text-dim"
                  >
                    {s.label}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Підключити в Home**

```tsx
// src/routes/Home.tsx
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Stack } from '../sections/Stack';
import { profile } from '../data/profile';
import { useLang } from '../i18n/LangContext';
import { useMeta } from '../hooks/useMeta';

export default function Home() {
  const { pick } = useLang();
  useMeta({ title: profile.name, description: pick(profile.tagline) });

  return (
    <>
      <Hero />
      <About />
      <Stack />
    </>
  );
}
```

- [ ] **Step 6: Перевірити**

Run: `npx tsc -b && npm run dev`
Expected: три секції рендеряться, метрики показують `14 / 24 / 18`, перемикач мови міняє всі підписи, записи таймлайну з'являються при скролі.

- [ ] **Step 7: Коміт**

```bash
git add src/sections src/hooks/useReveal.ts src/components/Reveal.tsx src/routes/Home.tsx
git commit -m "feat: секції hero, про себе й стек"
```

---

### Task 11: Кейси — картки, фільтр, featured

**Files:**
- Create: `src/components/ProjectCard.tsx`, `src/components/StackFilter.tsx`, `src/sections/Cases.tsx`, `src/sections/Cases.test.tsx`
- Modify: `src/routes/Home.tsx`

**Interfaces:**
- Consumes: `projects`, `useLang`.
- Produces: `<Cases>`, `<ProjectCard project featured?>`, `<StackFilter value onChange options>`.

- [ ] **Step 1: Написати тест фільтра**

```tsx
// src/sections/Cases.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import { LangProvider } from '../i18n/LangContext';
import { projects } from '../data/projects';
import { Cases } from './Cases';

function renderCases() {
  return render(
    <LangProvider>
      <MemoryRouter>
        <Cases />
      </MemoryRouter>
    </LangProvider>,
  );
}

describe('секція кейсів', () => {
  it('показує всі 24 проєкти без фільтра', () => {
    renderCases();
    expect(screen.getAllByRole('link', { name: /./ }).length).toBeGreaterThanOrEqual(24);
  });

  it('фільтр за технологією лишає лише проєкти з нею', async () => {
    const user = userEvent.setup();
    renderCases();

    await user.click(screen.getByRole('button', { name: 'go' }));

    const expected = projects.filter((p) => p.stack.includes('go'));
    expect(expected.length).toBeGreaterThan(0);
    for (const p of expected) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
    const excluded = projects.find((p) => !p.stack.includes('go'));
    expect(excluded).toBeDefined();
    expect(screen.queryByText(excluded!.title)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Запустити — має впасти**

Run: `npm test -- Cases`
Expected: FAIL — `Cases` не існує.

- [ ] **Step 3: ProjectCard**

```tsx
// src/components/ProjectCard.tsx
import { Link } from 'react-router';
import type { Project } from '../types';
import { useLang } from '../i18n/LangContext';

const STATUS_KEY = {
  production: 'statusProduction',
  archived: 'statusArchived',
  pet: 'statusPet',
} as const;

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { t, pick } = useLang();

  return (
    <Link
      to={`/project/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <img
        src={project.cover}
        alt=""
        loading="lazy"
        width={640}
        height={360}
        className={`w-full object-cover ${featured ? 'aspect-video' : 'aspect-[16/10]'}`}
      />
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-mono text-sm text-text group-hover:text-accent">{project.title}</h3>
          <span className="shrink-0 font-mono text-xs text-text-faint">{project.year}</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-dim">
          {pick(project.summary)}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-text-faint">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {featured && (
          <span className="mt-3 inline-block rounded bg-surface-2 px-2 py-0.5 font-mono text-xs text-ok">
            {t(STATUS_KEY[project.status])}
          </span>
        )}
      </div>
    </Link>
  );
}
```

- [ ] **Step 4: StackFilter**

```tsx
// src/components/StackFilter.tsx
import type { Tech } from '../types';
import { useLang } from '../i18n/LangContext';

export function StackFilter({
  options,
  value,
  onChange,
}: {
  options: Tech[];
  value: Tech | null;
  onChange: (v: Tech | null) => void;
}) {
  const { t } = useLang();

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={value === null}
        className={`rounded border px-3 py-1 font-mono text-xs ${
          value === null
            ? 'border-accent text-accent'
            : 'border-border text-text-faint hover:border-border-strong'
        }`}
      >
        {t('casesAll')}
      </button>
      {options.map((tech) => (
        <button
          key={tech}
          type="button"
          onClick={() => onChange(value === tech ? null : tech)}
          aria-pressed={value === tech}
          className={`rounded border px-3 py-1 font-mono text-xs ${
            value === tech
              ? 'border-accent text-accent'
              : 'border-border text-text-faint hover:border-border-strong'
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Cases**

```tsx
// src/sections/Cases.tsx
import { useMemo, useState } from 'react';
import type { Tech } from '../types';
import { projects } from '../data/projects';
import { useLang } from '../i18n/LangContext';
import { ProjectCard } from '../components/ProjectCard';
import { StackFilter } from '../components/StackFilter';
import { Reveal } from '../components/Reveal';

export function Cases() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Tech | null>(null);

  const options = useMemo(() => {
    const counts = new Map<Tech, number>();
    for (const p of projects) {
      for (const tech of p.stack) counts.set(tech, (counts.get(tech) ?? 0) + 1);
    }
    return [...counts.entries()]
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([tech]) => tech);
  }, []);

  const visible = filter ? projects.filter((p) => p.stack.includes(filter)) : projects;
  const featured = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <section id="cases" className="scroll-mt-20 border-t border-border py-16">
      <h2 className="font-mono text-sm text-accent">{t('casesTitle')}</h2>

      <div className="mt-6">
        <StackFilter options={options} value={filter} onChange={setFilter} />
      </div>

      {visible.length === 0 && <p className="mt-10 text-sm text-text-dim">{t('casesEmpty')}</p>}

      {featured.length > 0 && (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} featured />
            </Reveal>
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <>
          {featured.length > 0 && (
            <h3 className="mt-14 font-mono text-xs uppercase tracking-wider text-text-faint">
              {t('casesRest')}
            </h3>
          )}
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Reveal key={p.slug}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
```

- [ ] **Step 6: Підключити в Home**

Додати `import { Cases } from '../sections/Cases';` і вставити `<Cases />` між `<Hero />` та `<About />`.

- [ ] **Step 7: Тести мають пройти**

Run: `npm test -- Cases`
Expected: PASS.

- [ ] **Step 8: Коміт**

```bash
git add src/components/ProjectCard.tsx src/components/StackFilter.tsx src/sections/Cases.tsx src/sections/Cases.test.tsx src/routes/Home.tsx
git commit -m "feat: секція кейсів із фільтром за технологією"
```

---

### Task 12: Сторінка кейсу, контакти, редиректи

**Files:**
- Create: `src/routes/redirects.ts`, `src/routes/Project.test.tsx`, `src/sections/Contact.tsx`
- Modify: `src/routes/Project.tsx`, `src/App.tsx`, `src/routes/Home.tsx`

**Interfaces:**
- Consumes: `projects`, `useLang`, `useMeta`.
- Produces: `REDIRECTS: Record<string, string>`.

- [ ] **Step 1: Написати тести сторінки кейсу**

```tsx
// src/routes/Project.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, expect, it } from 'vitest';
import { LangProvider } from '../i18n/LangContext';
import { projects } from '../data/projects';
import Project from './Project';
import NotFound from './NotFound';

function renderAt(path: string) {
  return render(
    <LangProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/project/:slug" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    </LangProvider>,
  );
}

describe('сторінка кейсу', () => {
  it('рендерить назву і всі кадри', () => {
    const p = projects.find((x) => x.shots.length > 2)!;
    renderAt(`/project/${p.slug}`);
    expect(screen.getByRole('heading', { name: p.title })).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(p.shots.length);
  });

  it('невідомий slug дає 404, а не головну', () => {
    renderAt('/project/no-such-project');
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Запустити — має впасти**

Run: `npm test -- Project`
Expected: FAIL — заглушка `Project.tsx` не рендерить заголовка.

- [ ] **Step 3: Сторінка кейсу**

```tsx
// src/routes/Project.tsx
import { Link, useParams } from 'react-router';
import { Github, Send, Globe, Youtube, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { useLang } from '../i18n/LangContext';
import { useMeta } from '../hooks/useMeta';
import NotFound from './NotFound';

const STATUS_KEY = {
  production: 'statusProduction',
  archived: 'statusArchived',
  pet: 'statusPet',
} as const;

export default function Project() {
  const { slug } = useParams();
  const { t, pick } = useLang();
  const project = projects.find((p) => p.slug === slug);

  useMeta({
    title: project ? `${project.title} — Sergiy Zelinskii` : '404',
    description: project ? pick(project.summary) : '',
  });

  if (!project) return <NotFound />;

  const links = [
    { url: project.links.github, Icon: Github, key: 'linkGithub' },
    { url: project.links.telegram, Icon: Send, key: 'linkTelegram' },
    { url: project.links.live, Icon: Globe, key: 'linkLive' },
    { url: project.links.youtube, Icon: Youtube, key: 'linkYoutube' },
  ] as const;

  return (
    <article className="py-14">
      <Link to="/#cases" className="inline-flex items-center gap-1.5 text-sm text-text-dim hover:text-accent">
        <ArrowLeft size={15} aria-hidden="true" />
        {t('backToCases')}
      </Link>

      <header className="mt-8 border-b border-border pb-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h1 className="font-mono text-3xl">{project.title}</h1>
          <span className="rounded bg-surface-2 px-2 py-0.5 font-mono text-xs text-ok">
            {t(STATUS_KEY[project.status])}
          </span>
          <span className="font-mono text-sm text-text-faint">{project.year}</span>
        </div>

        <p className="mt-4 max-w-2xl leading-relaxed text-text-dim">{pick(project.summary)}</p>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-text-faint">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {links.map(({ url, Icon, key }) =>
            url ? (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-sm hover:border-accent"
              >
                <Icon size={16} aria-hidden="true" />
                {t(key)}
              </a>
            ) : null,
          )}
        </div>
      </header>

      <div className="mt-12 space-y-14">
        {project.shots.map((shot, i) => (
          <figure key={shot.src}>
            <img
              src={shot.src}
              srcSet={`${shot.src.replace('-1280', '-640')} 640w, ${shot.src} 1280w`}
              sizes="(max-width: 900px) 100vw, 900px"
              alt={pick(shot.caption)}
              loading={i === 0 ? 'eager' : 'lazy'}
              width={1280}
              height={720}
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-text-dim">
              {pick(shot.caption)}
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
```

- [ ] **Step 4: Редиректи зі старих URL**

```ts
// src/routes/redirects.ts
/** Старий шлях (нижнім регістром) → новий slug. Зберігає зовнішні посилання. */
export const REDIRECTS: Record<string, string> = {
  rr: 'rrepair-crm',
  dedit: 'dedit',
  bybit: 'bybit-copy-trading',
  project1: 'terinfobot',
  hrbot: 'hr-bot',
  coderevai: 'code-review-ai',
  waterbot: 'water-bot',
  familyexpenses: 'family-expenses',
  mobdev: 'mobile-dev',
  prokat: 'prokat',
  atele: 'atele',
  orxidbot: 'orxid-viber-bot',
  botbiznesstatistics: 'biznes-statistics-bot',
  orxidstatistics: 'orxid-accounting',
  staticsite: 'orxid-site',
  beadsparser: 'beads-parser',
  gingr: 'gingr-analytics',
  czechbeads: 'czech-beads-bot',
  make: 'esim-shop',
  poland: 'poland-flask',
  museum: 'museum',
  botportfolio: 'bot-portfolio',
  guard: 'guard-bot',
  other: 'other-projects',
};
```

Додати в `App.tsx` перед `<Route path="*">`:

```tsx
{Object.entries(REDIRECTS).map(([from, slug]) => (
  <Route key={from} path={`/${from}`} element={<Navigate to={`/project/${slug}`} replace />} />
))}
```

з імпортами `import { Navigate, Route, Routes } from 'react-router';` та `import { REDIRECTS } from './routes/redirects';`.

- [ ] **Step 5: Секція контактів**

```tsx
// src/sections/Contact.tsx
import { Mail, Send, Github, Linkedin, Youtube } from 'lucide-react';
import { profile } from '../data/profile';
import { useLang } from '../i18n/LangContext';

export function Contact() {
  const { t, pick } = useLang();

  const items = [
    { href: `mailto:${profile.contacts.email}`, Icon: Mail, label: profile.contacts.email },
    { href: profile.contacts.telegram, Icon: Send, label: 'Telegram' },
    { href: profile.contacts.github, Icon: Github, label: 'GitHub' },
    { href: profile.contacts.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { href: profile.contacts.youtube, Icon: Youtube, label: 'YouTube' },
  ];

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-16">
      <h2 className="font-mono text-sm text-accent">{t('contactTitle')}</h2>
      <p className="mt-4 text-sm text-text-faint">{pick(profile.contacts.location)}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm hover:border-accent"
          >
            <Icon size={16} aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
```

Додати `<Contact />` останньою секцією в `Home.tsx`.

- [ ] **Step 6: Тести**

Run: `npm test`
Expected: усі PASS, включно з тестом «використовується в коді» зі словника (Task 7) — тепер усі ключі задіяні.

- [ ] **Step 7: Коміт**

```bash
git add src/routes src/sections/Contact.tsx src/App.tsx
git commit -m "feat: сторінка кейсу, контакти, редиректи зі старих URL"
```

---

### Task 13: Українські переклади контенту

Найдовша задача за часом вичитки. Технічно проста.

**Files:**
- Modify: `src/data/projects.ts`

- [ ] **Step 1: Написати переклади**

Замінити тимчасові `uk`, які дублюють `en`, реальними українськими текстами: 24 `summary` + 47 `caption` (решта 65 кадрів підписів не мають).

Правила:
- технічні назви не перекладаються: `aiogram`, `FastAPI`, `LiqPay`, `Telegram`;
- звертання від першої особи, як в оригіналі;
- «бот», «замовник», «адмінка» — звичні слова, не канцелярит;
- лапки — «ялинки».

- [ ] **Step 2: Перевірити, що дублів не лишилось**

```bash
node -e "
const s = require('fs').readFileSync('src/data/projects.ts','utf8');
const m = [...s.matchAll(/en:\s*'([^']+)',\s*\n\s*uk:\s*'([^']+)'/g)];
const same = m.filter(([,en,uk]) => en === uk);
console.log('однакових en/uk:', same.length);
same.slice(0,10).forEach(([,en]) => console.log(' ', en));
process.exit(same.length ? 1 : 0);
"
```
Expected: `однакових en/uk: 0`, код виходу 0.

- [ ] **Step 3: Тести**

Run: `npm test`
Expected: усі PASS.

- [ ] **Step 4: Вичитка Сергієм**

Показати список українських текстів. **Це його голос — переклад обов'язково вичитується перед деплоєм.** Внести правки.

- [ ] **Step 5: Коміт**

```bash
git add src/data/projects.ts
git commit -m "feat: українські тексти для 24 кейсів і 112 підписів"
```

---

### Task 14: Прибрати старий код

**Files:**
- Delete: `src/app/`, `src/header/`, `src/pages/`, `src/components/socialicons/`, `src/components/themetoggle/`, `src/hooks/AnimatedCursor.js`, `src/hooks/withRouter.js`, `src/content_option.js`, `src/index.js`, `src/index.css` (старий), `src/reportWebVitals.js`, `src/assets/`, `public/index.html`, `public/manifest.json`, `build/`

- [ ] **Step 1: Переконатися, що нове працює**

Run: `npm test && npm run build`
Expected: усе зелене, збірка успішна.

- [ ] **Step 2: Видалити**

```bash
git rm -r --cached build
rm -rf build
git rm -r src/app src/header src/pages src/components/socialicons src/components/themetoggle src/assets
git rm src/hooks/AnimatedCursor.js src/hooks/withRouter.js src/content_option.js src/index.js src/reportWebVitals.js public/index.html public/manifest.json
```

- [ ] **Step 3: Додати build/ і node_modules/ у .gitignore**

- [ ] **Step 4: Перевірити, що нічого не зламалось**

Run: `npm test && npm run build && npx tsc -b`
Expected: усе проходить.

Run: `grep -r "zelse.asuscomm.com" src/ || echo "чисто"`
Expected: `чисто`.

- [ ] **Step 5: Коміт**

```bash
git add -A
git commit -m "chore: видалити код CRA-версії

24 дубльовані компоненти проєктів, content_option.js, кастомний
курсор, socialicons, themetoggle, зібрана тека build/."
```

- [ ] **Step 6: Відкликати ключі EmailJS**

У репозиторії відкритим текстом лежали `service_af19ua2`, `template_4ihr7as`,
`YhE6AmdJHiLEcLo3V`. Видалення файлу їх не рятує — вони лишаються в історії git
і доступні кожному, хто клонує репозиторій.

Сказати Сергію: зайти в кабінет EmailJS і видалити цей сервіс та шаблон. Це дія
людини, виконавець її не робить.

Файл `.env` у корені секретів не містить — лише `GENERATE_SOURCEMAP=false` і
`DISABLE_ESLINT_PLUGIN=true`, прапорці CRA, які з Vite не мають сенсу. Видалити
його разом зі старим кодом: `git rm .env`.

---

### Task 15: Візуальна перевірка й деплой

**Files:**
- Modify: `vite.config.ts` (фінальний `base`), `package.json` (скрипт деплою)
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Запитати Сергія про адресу**

Репозиторій `ReactPortfolio`, старий `homepage` — `/PortfolioReact`. З'ясувати фактичну адресу й виставити `base` у `vite.config.ts` (`'/ReactPortfolio/'` або `'/PortfolioReact/'`).

- [ ] **Step 2: Візуальна перевірка**

Запустити `npm run dev`, далі через Playwright зняти й переглянути:
- головна, 1280×900, українською;
- головна, 1280×900, англійською;
- головна, 390×844 (мобільний);
- `/project/rrepair-crm`, 1280×900;
- `/project/no-such-thing` — має бути 404.

Перевірити: жодного горизонтального скролу; усі зображення завантажились; контраст тексту читабельний; фільтр працює.

- [ ] **Step 3: Workflow деплою**

```yaml
# .github/workflows/deploy.yml
name: deploy
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm test
      - run: npm run build
      - run: cp dist/index.html dist/404.html
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Копіювання `index.html` у `404.html` обов'язкове: без нього пряме відкриття `/project/{slug}` дасть 404 від сервера GitHub Pages.

- [ ] **Step 4: Локальна перевірка продакшн-збірки**

Run: `npm run build && npm run preview`
Expected: сайт відкривається за базовим шляхом, переходи між сторінками працюють.

- [ ] **Step 5: Коміт**

```bash
git add vite.config.ts .github/workflows/deploy.yml
git commit -m "ci: деплой на GitHub Pages через Actions"
```

- [ ] **Step 6: Злиття в main**

Тільки після підтвердження Сергія, що все влаштовує:

```bash
git checkout main
git merge v2
git push origin main
```

---

## Відкриті питання

Блокують лише конкретні задачі, решту роботи можна робити паралельно.

| Питання | Блокує |
|---|---|
| Base path: `/ReactPortfolio/` чи `/PortfolioReact/`? | Task 15 |
| Незакомічені зміни в `main` — закомітити чи лишити? | Task 2 |
| Правильні GitHub/Telegram для Gingr, Guard, eSim, Poland, OrxidBot | Task 5 |
| Telegram-контакт Сергія — чи `t.me/sergzels`? | Task 8 |
| Instagram зі старого сайту — переносити? | Task 8 |
| Фото hero — старе з NAS чи нове? | Task 1, Task 10 |
