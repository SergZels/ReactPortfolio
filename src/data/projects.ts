import type { Project } from '../types';

/**
 * Увесь контент кейсів. Додати проєкт = дописати один об'єкт.
 * Поле uk тимчасово дублює en — українські тексти окремою задачею.
 */
export const projects: Project[] = [
  {
    slug: 'rrepair-crm',
    title: 'RRepair CRM',
    year: 2023,
    status: 'production',
    featured: true,
    summary: {
      en: 'Large custom CRM for a phone repair shop: orders, parts warehouse, technician payroll and customer correspondence. Microservice architecture — PostgreSQL, a Django backend and an aiogram bot as the front end.',
      uk: 'Large custom CRM for a phone repair shop: orders, parts warehouse, technician payroll and customer correspondence. Microservice architecture — PostgreSQL, a Django backend and an aiogram bot as the front end.',
    },
    stack: ['python', 'django', 'aiogram', 'postgresql', 'docker'],
    links: {},
    cover: '/shots/rrepair-crm/cover-640.webp',
    shots: [
      {
        src: '/shots/rrepair-crm/1-1280.webp',
        caption: {
          en: 'The client has the opportunity to - Keep records of orders, - Print labels and invoices - Work with a spare parts warehouse - Keep track of the salaries of the masters - Maintain correspondence with customers - and much more',
          uk: 'The client has the opportunity to - Keep records of orders, - Print labels and invoices - Work with a spare parts warehouse - Keep track of the salaries of the masters - Maintain correspondence with customers - and much more',
        },
      },
      {
        src: '/shots/rrepair-crm/2-1280.webp',
      },
      {
        src: '/shots/rrepair-crm/3-1280.webp',
      },
      {
        src: '/shots/rrepair-crm/4-1280.webp',
      },
      {
        src: '/shots/rrepair-crm/5-1280.webp',
      },
      {
        src: '/shots/rrepair-crm/6-1280.webp',
      },
      {
        src: '/shots/rrepair-crm/7-1280.webp',
      },
      {
        src: '/shots/rrepair-crm/8-1280.webp',
      },
      {
        src: '/shots/rrepair-crm/9-1280.webp',
      },
      {
        src: '/shots/rrepair-crm/10-1280.webp',
      },
      {
        src: '/shots/rrepair-crm/11-1280.webp',
      },
      {
        src: '/shots/rrepair-crm/12-1280.webp',
      },
    ],
  },
  {
    slug: 'dedit',
    title: 'dEdit',
    year: 2024,
    status: 'production',
    featured: true,
    summary: {
      en: 'A Telegram bot selling graphic-design courses. My first high-load bot on aiogram 3 + FastAPI, with automatic LiqPay payments and a referral programme.',
      uk: 'A Telegram bot selling graphic-design courses. My first high-load bot on aiogram 3 + FastAPI, with automatic LiqPay payments and a referral programme.',
    },
    stack: ['python', 'aiogram', 'fastapi', 'jinja2', 'html-css'],
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
          en: 'Lessons open in the telegram mini-browser',
          uk: 'Lessons open in the telegram mini-browser',
        },
      },
      {
        src: '/shots/dedit/4-1280.webp',
        caption: {
          en: 'Admin panel - server-side rendering (HTML, CSS, bootstrap, Jinja2)',
          uk: 'Admin panel - server-side rendering (HTML, CSS, bootstrap, Jinja2)',
        },
      },
      {
        src: '/shots/dedit/5-1280.webp',
      },
      {
        src: '/shots/dedit/6-1280.webp',
        caption: {
          en: 'Implemented automatic payment by liqpay. The bot also has a referral program',
          uk: 'Implemented automatic payment by liqpay. The bot also has a referral program',
        },
      },
      {
        src: '/shots/dedit/7-1280.webp',
      },
    ],
  },
  {
    slug: 'bybit-copy-trading',
    title: 'ByBit Copy Trading',
    year: 2024,
    status: 'archived',
    featured: true,
    summary: {
      en: 'Copy trading for the ByBit exchange — my first project in Go. Vanilla JavaScript front end of over a thousand lines.',
      uk: 'Copy trading for the ByBit exchange — my first project in Go. Vanilla JavaScript front end of over a thousand lines.',
    },
    stack: ['go', 'javascript', 'html-css'],
    links: {
      github: 'https://github.com/SergZels/BybitCopyTradingGO',
    },
    cover: '/shots/bybit-copy-trading/cover-640.webp',
    shots: [
      {
        src: '/shots/bybit-copy-trading/1-1280.webp',
        caption: {
          en: 'My first project on GO. The project provides copy trade for traders on the ByBit exchange',
          uk: 'My first project on GO. The project provides copy trade for traders on the ByBit exchange',
        },
      },
      {
        src: '/shots/bybit-copy-trading/2-1280.webp',
      },
      {
        src: '/shots/bybit-copy-trading/3-1280.webp',
        caption: {
          en: 'Vanilla js frontend (more than 1000 lines js code), Boorstrap',
          uk: 'Vanilla js frontend (more than 1000 lines js code), Boorstrap',
        },
      },
    ],
  },
  {
    slug: 'terinfobot',
    title: 'TerInfoBot',
    year: 2022,
    status: 'production',
    featured: true,
    summary: {
      en: 'An information portal for my town, built as a gift to it. Microservice architecture: PostgreSQL, a Django backend and an aiogram bot, with a small search site added later.',
      uk: 'An information portal for my town, built as a gift to it. Microservice architecture: PostgreSQL, a Django backend and an aiogram bot, with a small search site added later.',
    },
    stack: ['python', 'aiogram', 'django', 'postgresql'],
    links: {
      github: 'https://github.com/SergZels/TerInfoBot',
      telegram: 'https://t.me/TerInfobot',
      youtube: 'https://www.youtube.com/shorts/a4DmC3CdNVc',
    },
    cover: '/shots/terinfobot/cover-640.webp',
    shots: [
      {
        src: '/shots/terinfobot/1-1280.webp',
        caption: {
          en: 'The bot is written in Python language using microservices architecture and consists of 3 components: - PostgreSQL DB - Backend on Django - Frontend is the bot itself using aiogram',
          uk: 'The bot is written in Python language using microservices architecture and consists of 3 components: - PostgreSQL DB - Backend on Django - Frontend is the bot itself using aiogram',
        },
      },
      {
        src: '/shots/terinfobot/2-1280.webp',
      },
      {
        src: '/shots/terinfobot/3-1280.webp',
      },
      {
        src: '/shots/terinfobot/4-1280.webp',
      },
      {
        src: '/shots/terinfobot/5-1280.webp',
        caption: {
          en: 'Later, a small search site was also implemented',
          uk: 'Later, a small search site was also implemented',
        },
      },
      {
        src: '/shots/terinfobot/6-1280.webp',
      },
      {
        src: '/shots/terinfobot/7-1280.webp',
      },
      {
        src: '/shots/terinfobot/8-1280.webp',
      },
      {
        src: '/shots/terinfobot/9-1280.webp',
      },
    ],
  },
  {
    slug: 'hr-bot',
    title: 'HR Bot',
    year: 2024,
    status: 'production',
    featured: true,
    summary: {
      en: 'Helps recruiters find candidates on Work.ua by given criteria. Three parts: a parser, a filtering and sorting layer, and the bot itself on FastAPI + aiogram.',
      uk: 'Helps recruiters find candidates on Work.ua by given criteria. Three parts: a parser, a filtering and sorting layer, and the bot itself on FastAPI + aiogram.',
    },
    stack: ['python', 'aiogram', 'fastapi'],
    links: {
      github: 'https://github.com/SergZels/HR-Robomate-Bot',
      telegram: 'https://t.me/HR_robomate_test_bot',
    },
    cover: '/shots/hr-bot/cover-640.webp',
    shots: [
      {
        src: '/shots/hr-bot/1-1280.webp',
        caption: {
          en: 'The bot helps HR to find candidates according to the specified parameters on Work.ua',
          uk: 'The bot helps HR to find candidates according to the specified parameters on Work.ua',
        },
      },
      {
        src: '/shots/hr-bot/2-1280.webp',
        caption: {
          en: 'The bot algorithm consists of 3 parts: - parser - work.ua - a handler that filters and sorts data - the bot itself based on FastAPI + aiogram',
          uk: 'The bot algorithm consists of 3 parts: - parser - work.ua - a handler that filters and sorts data - the bot itself based on FastAPI + aiogram',
        },
      },
      {
        src: '/shots/hr-bot/3-1280.webp',
        caption: {
          en: 'For convenience, there is a simple website where you can view candidates',
          uk: 'For convenience, there is a simple website where you can view candidates',
        },
      },
    ],
  },
  {
    slug: 'code-review-ai',
    title: 'Code Review AI',
    year: 2024,
    status: 'pet',
    featured: true,
    summary: {
      en: 'A tool that automates code review: a FastAPI backend, a React front end and GPT doing the reading.',
      uk: 'A tool that automates code review: a FastAPI backend, a React front end and GPT doing the reading.',
    },
    stack: ['python', 'fastapi', 'react', 'openai'],
    links: {
      github: 'https://github.com/SergZels/CodeReviewAI-v2-',
    },
    cover: '/shots/code-review-ai/cover-640.webp',
    shots: [
      {
        src: '/shots/code-review-ai/1-1280.webp',
        caption: {
          en: 'A tool that will help you automate the code review process. - Backend - python (FastAPI). - Frontend - React - AI - GPT',
          uk: 'A tool that will help you automate the code review process. - Backend - python (FastAPI). - Frontend - React - AI - GPT',
        },
      },
    ],
  },
  {
    slug: 'water-bot',
    title: 'Water Bot',
    year: 2022,
    status: 'production',
    featured: false,
    summary: {
      en: 'A water-meter reading bot for my town utility — another gift to the city.',
      uk: 'A water-meter reading bot for my town utility — another gift to the city.',
    },
    stack: ['python', 'aiogram', 'sqlite'],
    links: {
      telegram: 'https://t.me/TerebovlaVodokanal_bot',
      youtube: 'https://www.youtube.com/shorts/oUcjWH9b4RE',
    },
    cover: '/shots/water-bot/cover-640.webp',
    shots: [
      {
        src: '/shots/water-bot/1-1280.webp',
        caption: {
          en: 'The bot collects water meter readings in Terebovlia sity and creates an Excel file for the bot operator.',
          uk: 'The bot collects water meter readings in Terebovlia sity and creates an Excel file for the bot operator.',
        },
      },
    ],
  },
  {
    slug: 'family-expenses',
    title: 'Family Expenses Bot',
    year: 2021,
    status: 'production',
    featured: false,
    summary: {
      en: 'A Telegram bot my family uses to track household spending.',
      uk: 'A Telegram bot my family uses to track household spending.',
    },
    stack: ['python', 'aiogram', 'sqlite'],
    links: {
      github: 'https://github.com/SergZels/familyExpenses',
      youtube: 'https://www.youtube.com/shorts/NJ27k09QAR8',
    },
    cover: '/shots/family-expenses/cover-640.webp',
    shots: [
      {
        src: '/shots/family-expenses/1-1280.webp',
        caption: {
          en: 'A bot that makes it convenient to keep track of family expenses. It sends expense statistics charts and generates an HTML page with the full list.',
          uk: 'A bot that makes it convenient to keep track of family expenses. It sends expense statistics charts and generates an HTML page with the full list.',
        },
      },
    ],
  },
  {
    slug: 'mobile-dev',
    title: 'Mobile development',
    year: 2016,
    status: 'archived',
    featured: false,
    summary: {
      en: 'In 2016 I wrote several Android applications in Java.',
      uk: 'In 2016 I wrote several Android applications in Java.',
    },
    stack: ['java'],
    links: {},
    cover: '/shots/mobile-dev/cover-640.webp',
    shots: [
      {
        src: '/shots/mobile-dev/1-1280.webp',
        caption: {
          en: 'In 2016, I wrote several mobile apps for Android in Java',
          uk: 'In 2016, I wrote several mobile apps for Android in Java',
        },
      },
      {
        src: '/shots/mobile-dev/2-1280.webp',
      },
    ],
  },
  {
    slug: 'prokat',
    title: 'Prokat',
    year: 2012,
    status: 'archived',
    featured: false,
    summary: {
      en: 'An accounting system for our family rental business, written in VBA on top of Excel.',
      uk: 'An accounting system for our family rental business, written in VBA on top of Excel.',
    },
    stack: ['vba', 'excel'],
    links: {},
    cover: '/shots/prokat/cover-640.webp',
    shots: [
      {
        src: '/shots/prokat/1-1280.webp',
        caption: {
          en: 'My first commercial project for a family business.',
          uk: 'My first commercial project for a family business.',
        },
      },
      {
        src: '/shots/prokat/2-1280.webp',
        caption: {
          en: 'CRM system for renting children\'s carnival costumes',
          uk: 'CRM system for renting children\'s carnival costumes',
        },
      },
      {
        src: '/shots/prokat/3-1280.webp',
      },
      {
        src: '/shots/prokat/4-1280.webp',
        caption: {
          en: 'Admin panel',
          uk: 'Admin panel',
        },
      },
      {
        src: '/shots/prokat/5-1280.webp',
        caption: {
          en: 'Statistics',
          uk: 'Statistics',
        },
      },
      {
        src: '/shots/prokat/6-1280.webp',
      },
      {
        src: '/shots/prokat/7-1280.webp',
        caption: {
          en: 'Label.',
          uk: 'Label.',
        },
      },
      {
        src: '/shots/prokat/8-1280.webp',
        caption: {
          en: 'Many different algorithms for searching and processing orders',
          uk: 'Many different algorithms for searching and processing orders',
        },
      },
      {
        src: '/shots/prokat/9-1280.webp',
        caption: {
          en: 'Custom database system',
          uk: 'Custom database system',
        },
      },
      {
        src: '/shots/prokat/10-1280.webp',
      },
      {
        src: '/shots/prokat/11-1280.webp',
      },
      {
        src: '/shots/prokat/12-1280.webp',
      },
      {
        src: '/shots/prokat/13-1280.webp',
      },
      {
        src: '/shots/prokat/14-1280.webp',
      },
      {
        src: '/shots/prokat/15-1280.webp',
      },
      {
        src: '/shots/prokat/16-1280.webp',
      },
      {
        src: '/shots/prokat/17-1280.webp',
      },
    ],
  },
  {
    slug: 'atele',
    title: 'Atele',
    year: 2012,
    status: 'archived',
    featured: false,
    summary: {
      en: 'A custom CRM for our family tailoring studio, built on MS Access.',
      uk: 'A custom CRM for our family tailoring studio, built on MS Access.',
    },
    stack: ['vba', 'ms-access'],
    links: {},
    cover: '/shots/atele/cover-640.webp',
    shots: [
      {
        src: '/shots/atele/1-1280.webp',
        caption: {
          en: 'Desktop CRM that has been faithfully serving our family business since 2013.',
          uk: 'Desktop CRM that has been faithfully serving our family business since 2013.',
        },
      },
      {
        src: '/shots/atele/2-1280.webp',
        caption: {
          en: 'Atele - developed on MS Access',
          uk: 'Atele - developed on MS Access',
        },
      },
      {
        src: '/shots/atele/3-1280.webp',
      },
      {
        src: '/shots/atele/4-1280.webp',
      },
      {
        src: '/shots/atele/5-1280.webp',
      },
      {
        src: '/shots/atele/6-1280.webp',
      },
      {
        src: '/shots/atele/7-1280.webp',
      },
      {
        src: '/shots/atele/8-1280.webp',
      },
    ],
  },
  {
    slug: 'orxid-viber-bot',
    title: 'OrxidBot',
    year: 2020,
    status: 'archived',
    featured: false,
    summary: {
      en: 'My first chat bot: a Viber assistant for the Orchid atelier that answers customer questions about services, prices and contacts, and hands over to a human operator when needed. A large project in PHP with elements of AI.',
      uk: 'My first chat bot: a Viber assistant for the Orchid atelier that answers customer questions about services, prices and contacts, and hands over to a human operator when needed. A large project in PHP with elements of AI.',
    },
    stack: ['php', 'viber'],
    links: {},
    cover: '/shots/orxid-viber-bot/cover-640.webp',
    shots: [
      {
        src: '/shots/orxid-viber-bot/1-1280.webp',
        caption: {
          en: 'Viber Bot - a virtual employee of Orchid atelier, which provides answers to clients\' questions about services, prices, contacts, and much more. This bot works together with an operator.',
          uk: 'Viber Bot - a virtual employee of Orchid atelier, which provides answers to clients\' questions about services, prices, contacts, and much more. This bot works together with an operator.',
        },
      },
      {
        src: '/shots/orxid-viber-bot/2-1280.webp',
      },
      {
        src: '/shots/orxid-viber-bot/3-1280.webp',
      },
      {
        src: '/shots/orxid-viber-bot/4-1280.webp',
      },
      {
        src: '/shots/orxid-viber-bot/5-1280.webp',
      },
      {
        src: '/shots/orxid-viber-bot/6-1280.webp',
      },
      {
        src: '/shots/orxid-viber-bot/7-1280.webp',
      },
      {
        src: '/shots/orxid-viber-bot/8-1280.webp',
      },
      {
        src: '/shots/orxid-viber-bot/9-1280.webp',
      },
    ],
  },
  {
    slug: 'biznes-statistics-bot',
    title: 'Biznes Statistics Bot',
    year: 2021,
    status: 'production',
    featured: false,
    summary: {
      en: 'A Telegram bot that reports daily sales figures for the family business.',
      uk: 'A Telegram bot that reports daily sales figures for the family business.',
    },
    stack: ['python', 'aiogram', 'sqlite'],
    links: {
      github: 'https://github.com/SergZels/OrxidStatBot2',
      youtube: 'https://www.youtube.com/shorts/1qPdNgIkRyk',
    },
    cover: '/shots/biznes-statistics-bot/cover-640.webp',
    shots: [
      {
        src: '/shots/biznes-statistics-bot/1-1280.webp',
        caption: {
          en: 'The shop logs its daily revenue through the bot, which then returns statistics — totals, minimums, maximums — as charts.',
          uk: 'The shop logs its daily revenue through the bot, which then returns statistics — totals, minimums, maximums — as charts.',
        },
      },
    ],
  },
  {
    slug: 'orxid-accounting',
    title: 'Accounting',
    year: 2019,
    status: 'archived',
    featured: false,
    summary: {
      en: 'Accounting software I wrote for the family business.',
      uk: 'Accounting software I wrote for the family business.',
    },
    stack: ['python', 'sqlite'],
    links: {
      github: 'https://github.com/SergZels/OrxidStatistics',
    },
    cover: '/shots/orxid-accounting/cover-640.webp',
    shots: [
      {
        src: '/shots/orxid-accounting/1-1280.webp',
        caption: {
          en: 'Accounting software for my family biznes. Backend FastAPI',
          uk: 'Accounting software for my family biznes. Backend FastAPI',
        },
      },
      {
        src: '/shots/orxid-accounting/2-1280.webp',
      },
    ],
  },
  {
    slug: 'orxid-site',
    title: 'orxid.in.ua',
    year: 2020,
    status: 'production',
    featured: false,
    summary: {
      en: 'The static site for our family business.',
      uk: 'The static site for our family business.',
    },
    stack: ['html-css', 'javascript'],
    links: {
      live: 'https://orxid.in.ua/',
    },
    cover: '/shots/orxid-site/cover-640.webp',
    shots: [
      {
        src: '/shots/orxid-site/1-1280.webp',
      },
      {
        src: '/shots/orxid-site/2-1280.webp',
        caption: {
          en: 'You can go to the site by following the link',
          uk: 'You can go to the site by following the link',
        },
      },
      {
        src: '/shots/orxid-site/3-1280.webp',
      },
    ],
  },
  {
    slug: 'beads-parser',
    title: 'Beads Parser',
    year: 2023,
    status: 'pet',
    featured: false,
    summary: {
      en: 'A scraping script that collects bead catalogues into a single table.',
      uk: 'A scraping script that collects bead catalogues into a single table.',
    },
    stack: ['python'],
    links: {
      github: 'https://github.com/SergZels/Beads_parser',
    },
    cover: '/shots/beads-parser/cover-640.webp',
    shots: [
      {
        src: '/shots/beads-parser/1-1280.webp',
        caption: {
          en: 'A very useful script that helped to save many hours of routine work. The script parses orders in an exel file.',
          uk: 'A very useful script that helped to save many hours of routine work. The script parses orders in an exel file.',
        },
      },
      {
        src: '/shots/beads-parser/2-1280.webp',
        caption: {
          en: 'And develops product labels for printing (Word)',
          uk: 'And develops product labels for printing (Word)',
        },
      },
    ],
  },
  {
    slug: 'gingr-analytics',
    title: 'Data analysis project',
    year: 2023,
    status: 'archived',
    featured: false,
    summary: {
      en: 'A data analysis project: collecting, cleaning and visualising business metrics.',
      uk: 'A data analysis project: collecting, cleaning and visualising business metrics.',
    },
    stack: ['python', 'postgresql'],
    links: {},
    cover: '/shots/gingr-analytics/cover-640.webp',
    shots: [
      {
        src: '/shots/gingr-analytics/1-1280.webp',
        caption: {
          en: 'By extracting data from API and CSV reports, my python scripts process it and write it to sheets. Then, with the help of Looker Studio, I create charts to analyze the customer\'s business.',
          uk: 'By extracting data from API and CSV reports, my python scripts process it and write it to sheets. Then, with the help of Looker Studio, I create charts to analyze the customer\'s business.',
        },
      },
      {
        src: '/shots/gingr-analytics/2-1280.webp',
        caption: {
          en: 'Frontend - React',
          uk: 'Frontend - React',
        },
      },
      {
        src: '/shots/gingr-analytics/3-1280.webp',
        caption: {
          en: 'Backend - FastAPI',
          uk: 'Backend - FastAPI',
        },
      },
      {
        src: '/shots/gingr-analytics/4-1280.webp',
      },
      {
        src: '/shots/gingr-analytics/5-1280.webp',
      },
      {
        src: '/shots/gingr-analytics/6-1280.webp',
      },
      {
        src: '/shots/gingr-analytics/7-1280.webp',
      },
      {
        src: '/shots/gingr-analytics/8-1280.webp',
      },
      {
        src: '/shots/gingr-analytics/9-1280.webp',
      },
      {
        src: '/shots/gingr-analytics/10-1280.webp',
      },
    ],
  },
  {
    slug: 'czech-beads-bot',
    title: 'Czech Beads Bot',
    year: 2023,
    status: 'pet',
    featured: false,
    summary: {
      en: 'A pet project in Python: a Telegram shop bot for Czech beads with its own admin panel.',
      uk: 'A pet project in Python: a Telegram shop bot for Czech beads with its own admin panel.',
    },
    stack: ['python', 'aiogram', 'django'],
    links: {
      github: 'https://github.com/SergZels/Czech_beads_V2',
      telegram: 'https://t.me/Czech_beads_bot',
      youtube: 'https://www.youtube.com/shorts/HecgA7FqErE',
    },
    cover: '/shots/czech-beads-bot/cover-640.webp',
    shots: [
      {
        src: '/shots/czech-beads-bot/1-1280.webp',
      },
      {
        src: '/shots/czech-beads-bot/2-1280.webp',
        caption: {
          en: 'Adminka - React',
          uk: 'Adminka - React',
        },
      },
      {
        src: '/shots/czech-beads-bot/3-1280.webp',
      },
      {
        src: '/shots/czech-beads-bot/4-1280.webp',
        caption: {
          en: 'The bot returns an image of Czech beads based on its code. The programming language is Python.',
          uk: 'The bot returns an image of Czech beads based on its code. The programming language is Python.',
        },
      },
    ],
  },
  {
    slug: 'esim-shop',
    title: 'eSim Shop',
    year: 2024,
    status: 'production',
    featured: false,
    summary: {
      en: 'An eSIM shop assembled as a no-code automation in Make.com.',
      uk: 'An eSIM shop assembled as a no-code automation in Make.com.',
    },
    stack: ['make.com'],
    links: {},
    cover: '/shots/esim-shop/cover-640.webp',
    shots: [
      {
        src: '/shots/esim-shop/1-1280.webp',
        caption: {
          en: 'The customer makes purchases of eSim on the site made on WIX. And receives an activation code to email.',
          uk: 'The customer makes purchases of eSim on the site made on WIX. And receives an activation code to email.',
        },
      },
      {
        src: '/shots/esim-shop/2-1280.webp',
        caption: {
          en: 'An online store for automated eSim sales with a Make.com backend — part of the Make scenario.',
          uk: 'An online store for automated eSim sales with a Make.com backend — part of the Make scenario.',
        },
      },
    ],
  },
  {
    slug: 'poland-flask',
    title: 'Flask project',
    year: 2023,
    status: 'archived',
    featured: false,
    summary: {
      en: 'A small web service built on Flask.',
      uk: 'A small web service built on Flask.',
    },
    stack: ['python', 'flask'],
    links: {},
    cover: '/shots/poland-flask/cover-640.webp',
    shots: [
      {
        src: '/shots/poland-flask/1-1280.webp',
        caption: {
          en: 'A small project that interacts with the Midjourney neural network and helps to choose one of the four generated photos.',
          uk: 'A small project that interacts with the Midjourney neural network and helps to choose one of the four generated photos.',
        },
      },
    ],
  },
  {
    slug: 'museum',
    title: 'Museum software',
    year: 2023,
    status: 'production',
    featured: false,
    summary: {
      en: 'Cataloguing software for a local museum collection.',
      uk: 'Cataloguing software for a local museum collection.',
    },
    stack: ['python', 'django', 'sqlite'],
    links: {
      github: 'https://github.com/SergZels/Museum',
    },
    cover: '/shots/museum/cover-640.webp',
    shots: [
      {
        src: '/shots/museum/1-1280.webp',
      },
      {
        src: '/shots/museum/2-1280.webp',
      },
      {
        src: '/shots/museum/3-1280.webp',
        caption: {
          en: 'Database of museum exhibits',
          uk: 'Database of museum exhibits',
        },
      },
      {
        src: '/shots/museum/4-1280.webp',
        caption: {
          en: 'Software developed in MS Access',
          uk: 'Software developed in MS Access',
        },
      },
      {
        src: '/shots/museum/5-1280.webp',
      },
      {
        src: '/shots/museum/6-1280.webp',
      },
      {
        src: '/shots/museum/7-1280.webp',
      },
    ],
  },
  {
    slug: 'bot-portfolio',
    title: 'Bot Portfolio',
    year: 2021,
    status: 'archived',
    featured: false,
    summary: {
      en: 'My earlier portfolio — delivered as a Telegram bot instead of a website.',
      uk: 'My earlier portfolio — delivered as a Telegram bot instead of a website.',
    },
    stack: ['python', 'aiogram'],
    links: {},
    cover: '/shots/bot-portfolio/cover-640.webp',
    shots: [
      {
        src: '/shots/bot-portfolio/1-1280.webp',
        caption: {
          en: 'HTML/CSS portfolio for chat bot development',
          uk: 'HTML/CSS portfolio for chat bot development',
        },
      },
      {
        src: '/shots/bot-portfolio/2-1280.webp',
      },
    ],
  },
  {
    slug: 'guard-bot',
    title: 'Guard Bot',
    year: 2022,
    status: 'production',
    featured: false,
    summary: {
      en: 'A moderation bot that keeps spam out of Telegram groups.',
      uk: 'A moderation bot that keeps spam out of Telegram groups.',
    },
    stack: ['python', 'aiogram'],
    links: {},
    cover: '/shots/guard-bot/cover-640.webp',
    shots: [
      {
        src: '/shots/guard-bot/1-1280.webp',
        caption: {
          en: 'The script connects to the IP camera via rtsp protocol and uses a small neural network to search for a human silhouette',
          uk: 'The script connects to the IP camera via rtsp protocol and uses a small neural network to search for a human silhouette',
        },
      },
      {
        src: '/shots/guard-bot/2-1280.webp',
        caption: {
          en: 'If a person is detected, the photo is sent to the Telegram bot.',
          uk: 'If a person is detected, the photo is sent to the Telegram bot.',
        },
      },
      {
        src: '/shots/guard-bot/3-1280.webp',
        caption: {
          en: 'The script also tries to recognize the color of clothes.',
          uk: 'The script also tries to recognize the color of clothes.',
        },
      },
      {
        src: '/shots/guard-bot/4-1280.webp',
      },
    ],
  },
  {
    slug: 'other-projects',
    title: 'Other projects',
    year: 2022,
    status: 'pet',
    featured: false,
    summary: {
      en: 'Assorted smaller Python projects, including a Telegram game bot.',
      uk: 'Assorted smaller Python projects, including a Telegram game bot.',
    },
    stack: ['python'],
    links: {
      github: 'https://github.com/SergZels/gameBot',
      telegram: 'https://t.me/ZelGameBot',
      youtube: 'https://www.youtube.com/shorts/xVSC31UXQVw',
    },
    cover: '/shots/other-projects/cover-640.webp',
    shots: [
      {
        src: '/shots/other-projects/1-1280.webp',
      },
    ],
  },
];
