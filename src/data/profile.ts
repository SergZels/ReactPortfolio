import type { Localized, StackLevel, Tech } from '../types';

type StackEntry = { tech: Tech; label: string; level: StackLevel };

export const profile = {
  name: 'Sergiy Zelinskii',
  heroImage: '/shots/_hero/cover-640.webp',
  cvUrl: '/SergiyZelinskii.pdf',
  tagline: {
    uk: 'AI Agentic Engineer. Розробляю AI-рішення та Python-бекенд для реальних задач.',
    en: 'AI Agentic Engineer building AI solutions and Python backends for real-world problems.',
  } satisfies Localized,
  about: {
    uk: `Мій шлях у розробці почався в 1998 році з простих ігор на BASIC. Під час навчання в університеті я зацікавився штучним інтелектом і почав писати дисертацію про аналіз медичних зображень. Наукову кар’єру не продовжив: кілька років працював інженером комп’ютерних мереж, а згодом розвивав власний бізнес у комерції.

Саме потреби бізнесу повернули мене до програмування. Я створював для нього облікові системи, застосунки й чат-ботів, тож добре знаю, як перетворювати реальні процеси на корисні інструменти. З 2021 року вивчаю Python, а з 2023-го розробляю проєкти і для клієнтів.

Сьогодні працюю з Python backend та agentic AI у LeadB. Мені цікаві системи, де автоматизація й AI не просто демонструють технології, а розв’язують конкретні задачі людей і бізнесу.`,
    en: `My path in software began in 1998 with simple games written in BASIC. At university, I became interested in artificial intelligence and started a dissertation on medical image analysis. I chose not to pursue an academic career: I spent several years as a computer network engineer, then built my own business in commerce.

The needs of that business brought me back to programming. I built accounting systems, apps and chatbots for it, learning to turn real workflows into useful tools. I began learning Python in 2021 and started developing projects for clients in 2023.

Today I work on Python backend and agentic AI at LeadB. I am most interested in systems where automation and AI solve concrete problems for people and businesses, rather than merely showcase technology.`,
  } satisfies Localized,
  timeline: [
    {
      year: 2026,
      title: {
        uk: 'Middle+ Agentic Engineer',
        en: 'Middle+ Agentic Engineer',
      } satisfies Localized,
      text: {
        uk: 'LeadB.',
        en: 'LeadB.',
      } satisfies Localized,
    },
    {
      year: '2025–2026',
      title: {
        uk: 'Middle Python Backend Developer',
        en: 'Middle Python Backend Developer',
      } satisfies Localized,
      text: {
        uk: 'LeadB.',
        en: 'LeadB.',
      } satisfies Localized,
    },
    {
      year: 2024,
      title: { uk: 'React і Go', en: 'React and Go' } satisfies Localized,
      text: {
        uk: 'Почав вивчати React і Go.',
        en: 'Started learning React and Go.',
      } satisfies Localized,
    },
    {
      year: 2023,
      title: { uk: 'Початок фрілансу', en: 'Started freelancing' } satisfies Localized,
      text: {
        uk: 'Почав брати замовлення на розробку для клієнтів.',
        en: 'Started taking on software development projects for clients.',
      } satisfies Localized,
    },
    {
      year: 2021,
      title: { uk: 'Вивчення Python', en: 'Learning Python' } satisfies Localized,
      text: {
        uk: 'Почав вивчати Python і розробку ботів; згодом опанував aiogram, Django, PostgreSQL та суміжний стек.',
        en: 'Started learning Python and bot development; later added aiogram, Django, PostgreSQL and related tools.',
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
      year: '2011–2023',
      title: { uk: 'Власний бізнес у комерції', en: 'Own business in commerce' } satisfies Localized,
      text: {
        uk: 'Розвивав власний бізнес у комерції та паралельно створював для нього програми.',
        en: 'Ran my own business in commerce and built software for it alongside that work.',
      } satisfies Localized,
    },
    {
      year: '2004–2011',
      title: { uk: 'Інженер комп’ютерних мереж', en: 'Computer network engineer' } satisfies Localized,
      text: {
        uk: 'Після відмови від наукової кар’єри працював у сфері комп’ютерних мереж; у цей період не програмував.',
        en: 'After stepping away from academia, worked in computer networking and did not program during this period.',
      } satisfies Localized,
    },
    {
      year: 2004,
      title: { uk: 'Спроба наукової кар’єри', en: 'Exploring an academic career' } satisfies Localized,
      text: {
        uk: 'Почав писати дисертацію з AI-аналізу медичних зображень, але згодом відмовився від наукової кар’єри.',
        en: 'Started writing a dissertation on AI analysis of medical images, but later decided against an academic career.',
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
    {
      year: 1998,
      title: {
        uk: 'Олімпіада з програмування',
        en: 'Programming Olympiad',
      } satisfies Localized,
      text: {
        uk: 'Посів перше місце на районній олімпіаді та 12-те — на обласній.',
        en: 'Won first place at the district Olympiad and placed 12th at the regional Olympiad.',
      } satisfies Localized,
    },
    {
      year: 1998,
      title: { uk: 'Перші програми', en: 'First programs' } satisfies Localized,
      text: {
        uk: 'Ще в 10-му класі почав писати перші програми на BASIC — це були прості ігри.',
        en: 'I started writing my first programs in BASIC in the 10th grade. They were simple games.',
      } satisfies Localized,
    },
  ],
  stack: [
    { tech: 'python', label: 'Python', level: 'daily' },
    { tech: 'codex', label: 'OpenAI Codex', level: 'daily' },
    { tech: 'claude-code', label: 'Claude Code', level: 'daily' },
    { tech: 'aiogram', label: 'Aiogram', level: 'daily' },
    { tech: 'telethon', label: 'Telethon', level: 'daily' },
    { tech: 'fastapi', label: 'FastAPI', level: 'daily' },
    { tech: 'postgresql', label: 'PostgreSQL', level: 'daily' },
    { tech: 'git', label: 'Git', level: 'daily' },
    { tech: 'mcp', label: 'MCP', level: 'daily' },
    { tech: 'docker', label: 'Docker · Nginx · Linux', level: 'daily' },
    { tech: 'django', label: 'Django', level: 'confident' },
    { tech: 'sqlite', label: 'SQL · SQLite · aiosqlite · sqlite3', level: 'confident' },
    { tech: 'sqlalchemy', label: 'SQLAlchemy · Peewee · Django ORM', level: 'confident' },
    { tech: 'html-css', label: 'HTML · CSS · Bootstrap', level: 'confident' },
    { tech: 'htmx', label: 'HTMX · Alpine.js', level: 'confident' },
    { tech: 'javascript', label: 'JavaScript', level: 'confident' },
    { tech: 'make.com', label: 'Make.com', level: 'confident' },
    { tech: 'elk', label: 'ELK Stack', level: 'confident' },
    { tech: 'go', label: 'Go (Gin)', level: 'familiar' },
    { tech: 'react', label: 'React · MUI', level: 'familiar' },
    { tech: 'flask', label: 'Flask', level: 'familiar' },
    { tech: 'php', label: 'PHP', level: 'familiar' },
    { tech: 'java', label: 'Java', level: 'familiar' },
    { tech: 'vba', label: 'VBA (Excel, Access)', level: 'familiar' },
    { tech: 'opencv', label: 'OpenCV', level: 'familiar' },
    { tech: 'esp32', label: 'Embedded development · ESP32', level: 'familiar' },
    { tech: 'cpp', label: 'C++', level: 'familiar' },
    { tech: 'pascal', label: 'Pascal', level: 'familiar' },
    { tech: 'assembler', label: 'Assembler', level: 'familiar' },
    { tech: 'prolog', label: 'Prolog', level: 'familiar' },
    { tech: 'vhdl', label: 'VHDL', level: 'familiar' },
    { tech: 'matlab', label: 'Matlab', level: 'familiar' },
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
