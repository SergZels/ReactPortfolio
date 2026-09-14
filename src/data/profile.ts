import type { Localized, StackLevel, Tech } from '../types';

type StackEntry = { tech: Tech; label: string; level: StackLevel };

export const profile = {
  name: 'Sergiy Zelinskii',
  heroImage: '/shots/_hero/cover-640.webp',
  cvUrl: '/SergiyZelinskii.pdf',
  tagline: {
    uk: 'Роблю телеграм-ботів, CRM і автоматизацію для малого бізнесу',
    en: 'I build Telegram bots, CRMs and automation for small businesses',
  } satisfies Localized,
  about: {
    uk: `Програмую з 1997 року — почав із Basic. Був досвід із C++, Pascal, Assembler, Prolog, VHDL, Matlab, VBA, Java та PHP.
Зараз зосереджений на ботах на Python із асинхронним фреймворком aiogram.`,
    en: `I started programming back in 1997 in Basic. I have had experience with C++, Pascal, Assembler, Prolog, VHDL, Matlab, VBA, Java and PHP.
Now I am focused on developing bots in Python using the asynchronous aiogram framework.`,
  } satisfies Localized,
  timeline: [
    {
      year: 2024,
      title: { uk: 'React і Go', en: 'React and Go' } satisfies Localized,
      text: {
        uk: 'Почав вивчати React і Go.',
        en: 'Started learning React and Go.',
      } satisfies Localized,
    },
    {
      year: 2021,
      title: { uk: 'Python-розробник', en: 'Python developer' } satisfies Localized,
      text: {
        uk: 'aiogram, aiosqlite, aiogram-dialog, peewee, Django, PostgreSQL, Git, Docker Compose, Ubuntu 22.04.',
        en: 'aiogram, aiosqlite, aiogram-dialog, peewee, Django, PostgreSQL, Git, Docker Compose, Ubuntu 22.04.',
      } satisfies Localized,
    },
    {
      year: 2020,
      title: { uk: 'Перший чат-бот', en: 'The first chat bot' } satisfies Localized,
      text: {
        uk: 'На PHP зробив розумного чат-бота для власного бізнесу. Створювати ботів дуже сподобалось.',
        en: 'Using PHP I built an intelligent chatbot for my own business. I really enjoyed creating bots.',
      } satisfies Localized,
    },
    {
      year: 2016,
      title: { uk: 'Мобільна розробка', en: 'Mobile apps development' } satisfies Localized,
      text: {
        uk: 'Деякий час писав застосунки для Android на Java.',
        en: 'I spent some time creating Android apps in Java.',
      } satisfies Localized,
    },
    {
      year: 2012,
      title: {
        uk: 'Перші комерційні проєкти',
        en: 'First commercial projects',
      } satisfies Localized,
      text: {
        uk: 'Дві великі програми для власного бізнесу на VBA і SQL (MS Access та Excel).',
        en: 'Two large programs for my own business using VBA and SQL under MS Access and Excel.',
      } satisfies Localized,
    },
    {
      year: 1999,
      title: { uk: 'Університет', en: 'Education' } satisfies Localized,
      text: {
        uk: '1999–2004, університет: C++, Assembler, Prolog, VHDL, Matlab.',
        en: '1999–2004 at university: C++, Assembler, Prolog, VHDL, Matlab.',
      } satisfies Localized,
    },
  ],
  stack: [
    { tech: 'python', label: 'Python', level: 'daily' },
    { tech: 'aiogram', label: 'Aiogram', level: 'daily' },
    { tech: 'sqlite', label: 'SQL · aiosqlite · sqlite3', level: 'daily' },
    { tech: 'docker', label: 'Docker · Nginx · Linux', level: 'daily' },
    { tech: 'django', label: 'Django', level: 'confident' },
    { tech: 'fastapi', label: 'FastAPI', level: 'confident' },
    { tech: 'postgresql', label: 'PostgreSQL · SQLite', level: 'confident' },
    { tech: 'sqlalchemy', label: 'SQLAlchemy · Peewee · Django ORM', level: 'confident' },
    { tech: 'html-css', label: 'HTML · CSS · Bootstrap', level: 'confident' },
    { tech: 'htmx', label: 'HTMX · Alpine.js', level: 'confident' },
    { tech: 'javascript', label: 'JavaScript', level: 'confident' },
    { tech: 'make.com', label: 'Make.com', level: 'confident' },
    { tech: 'go', label: 'Go (Gin)', level: 'familiar' },
    { tech: 'react', label: 'React · MUI', level: 'familiar' },
    { tech: 'flask', label: 'Flask', level: 'familiar' },
    { tech: 'php', label: 'PHP', level: 'familiar' },
    { tech: 'java', label: 'Java', level: 'familiar' },
    { tech: 'vba', label: 'VBA (Excel, Access)', level: 'familiar' },
  ] satisfies StackEntry[],
  contacts: {
    email: 'sergzels@gmail.com',
    telegram: 'https://t.me/SZelinsky',
    github: 'https://github.com/SergZels',
    linkedin: 'https://www.linkedin.com/in/sergzel/',
    youtube: 'https://www.youtube.com/channel/UCLmbaTBBpZ5ECVvjOmde7Fg',
    location: {
      uk: 'Теребовля, Тернопільська область, Україна',
      en: 'Terebovlia, Ternopil Region, Ukraine',
    } satisfies Localized,
  },
} as const;

/** Рік перших комерційних проєктів — від нього рахуємо стаж у hero. */
export const CODING_SINCE = 2012;

export const YEARS_CODING = new Date().getFullYear() - CODING_SINCE;
