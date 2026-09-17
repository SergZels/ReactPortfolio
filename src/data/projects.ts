import type { Project } from '../types';

/**
 * Увесь контент кейсів. Додати проєкт = дописати один об'єкт.
 * Поле uk тимчасово дублює en — українські тексти окремою задачею.
 */
export const projects: Project[] = [
  {
    slug: 'community',
    title: 'Community',
    year: 2026,
    status: 'production',
    featured: true,
    summary: {
      en: 'A large, ongoing platform under NDA that I have worked on for almost two years. Its codebase exceeds 100,000 lines. I develop and maintain its backend and integrations across a single-tenant architecture: each deployment is isolated, and I operate many servers. The technology stack includes FastAPI, Telethon, Pillow, Beautiful Soup, OpenRouter, OpenAI, Elasticsearch, Playwright, ElevenLabs and more. Product details, clients and internal workflows remain confidential.',
      uk: 'Великий проєкт, над яким працюю майже два роки; його кодова база перевищує 100 000 рядків. Деталі захищені NDA. Розробляю й підтримую бекенд та інтеграції в single-tenant архітектурі: кожне розгортання ізольоване, тому обслуговую багато серверів. У технологічному стеку — FastAPI, Telethon, Pillow, Beautiful Soup, OpenRouter, OpenAI, Elasticsearch, Playwright, ElevenLabs та багато іншого. Дані про продукт, клієнтів і внутрішні процеси не розкриваю.',
    },
    stack: ['python', 'fastapi', 'telethon', 'pillow', 'beautifulsoup', 'openrouter', 'openai', 'elasticsearch', 'playwright', 'elevenlabs'],
    links: {},
    cover: '/shots/community/cover-640.webp',
    shots: [],
  },
  {
    slug: 'community-ecosystem',
    title: 'Community Ecosystem',
    year: 2026,
    status: 'production',
    featured: true,
    summary: {
      en: 'Community is the main product. Community Ecosystem is a separate group of applications built to support and maintain it: one large supporting application with more than 200,000 lines of code and many smaller companion applications. I cannot disclose their internal workflows, but the stack includes FastAPI, PostgreSQL, the ELK Stack, numerous MCP integrations, S3, gspread and other technologies.',
      uk: 'Community — основний продукт. Community Ecosystem — це окрема група застосунків для його роботи й супроводу: один великий допоміжний застосунок із понад 200 000 рядків коду та багато менших. Їхні внутрішні процеси не розкриваю, але в стеку є FastAPI, PostgreSQL, ELK Stack, численні MCP-інтеграції, S3, gspread та інші технології.',
    },
    stack: ['python', 'fastapi', 'postgresql', 'elk', 'mcp', 's3', 'gspread'],
    links: {},
    cover: '/shots/community-ecosystem/cover-640.webp',
    shots: [],
  },
  {
    slug: 'hvac-school-bot',
    title: 'HVAC School Bot',
    year: 2026,
    status: 'production',
    featured: false,
    summary: {
      en: 'A Telegram learning platform for HVAC courses. Students enter through one-time invitation tokens, watch video lessons in Telegram, confirm viewing, and work through multiple-choice or written questions. The bot tracks progress, explains wrong answers with links to relevant lessons, and sends written submissions to a teacher for manual review. I built the aiogram 3 bot, Django content and student admin, FastAPI webhook service, and Dockerized deployment with nginx. The course landing page introduces training in air-conditioning, heating and service.',
      uk: 'Навчальна платформа для HVAC-курсів у Telegram. Студенти заходять за одноразовими запрошеннями, дивляться відеоуроки в Telegram, підтверджують перегляд і проходять тести або відповідають на відкриті запитання. Бот відстежує прогрес, пояснює помилки з посиланнями на відповідні уроки та передає письмові відповіді викладачу на ручну перевірку. Я розробив бота на aiogram 3, Django-адмінку для контенту й студентів, FastAPI-сервіс webhook та контейнеризоване розгортання з nginx. Лендинг представляє навчання з кондиціонування, опалення й сервісу.',
    },
    stack: ['python', 'aiogram', 'django', 'fastapi', 'sqlite', 'docker', 'nginx', 'html-css'],
    links: {
      telegram: 'https://t.me/HVAC_SCH00L_BOT',
    },
    cover: '/shots/hvac-school-bot/cover-640.webp',
    shots: [
      {
        src: '/shots/hvac-school-bot/1-1280.webp',
        caption: {
          en: 'The Django admin manages lessons, questions, answer options, access tokens and student progress.',
          uk: 'Django-адмінка керує уроками, запитаннями, варіантами відповідей, токенами доступу й прогресом студентів.',
        },
      },
      {
        src: '/shots/hvac-school-bot/2-1280.webp',
        caption: {
          en: 'An editor configures a lesson question, optional photo, response mode and correct multiple-choice answer.',
          uk: 'Редактор налаштовує запитання уроку, необов’язкове фото, режим відповіді та правильний варіант тесту.',
        },
      },
      {
        src: '/shots/hvac-school-bot/3-1280.webp',
        caption: {
          en: 'In Telegram, the student watches a video lesson, confirms viewing and moves on to the quiz.',
          uk: 'У Telegram студент дивиться відеоурок, підтверджує перегляд і переходить до тесту.',
        },
      },
      {
        src: '/shots/hvac-school-bot/4-1280.webp',
        caption: {
          en: 'A teacher can review a written answer and return voice feedback before the student continues.',
          uk: 'Викладач може перевірити письмову відповідь і надіслати голосовий коментар перед продовженням навчання.',
        },
      },
    ],
  },
  {
    slug: 'smartses',
    title: 'SmartSES',
    year: 2026,
    status: 'production',
    featured: true,
    summary: {
      en: 'An end-to-end monitoring and control system for a solar power station. ESP32 firmware reads a JBD battery BMS over BLE and publishes telemetry through MQTT; a FastAPI service stores history in SQLite, streams live data over WebSocket, controls timed charging, sends Telegram alerts, and exposes read-only MCP tools for AI agents.',
      uk: 'Наскрізна система моніторингу й керування сонячною електростанцією. Прошивка ESP32 читає JBD BMS через BLE та передає телеметрію через MQTT; сервіс на FastAPI зберігає історію в SQLite, транслює live-дані через WebSocket, керує зарядкою за таймером, надсилає Telegram-алерти й надає read-only MCP-інструменти для AI-агентів.',
    },
    stack: ['python', 'fastapi', 'mqtt', 'esp32', 'cpp', 'mcp', 'javascript', 'sqlite', 'docker'],
    links: {},
    cover: '/shots/smartses/cover-640.webp',
    shots: [
      {
        src: '/shots/smartses/1-1280.webp',
        caption: {
          en: 'The live dashboard combines battery charge, voltage, current, temperature, BMS state, energy flow history, and per-cell voltages.',
          uk: 'Live-дашборд поєднує заряд батареї, напругу, струм, температуру, стан BMS, історію потоків енергії та напруги окремих комірок.',
        },
      },
      {
        src: '/shots/smartses/2-1280.webp',
        caption: {
          en: 'A 24-hour charge chart and system event log make battery behaviour and state changes easy to audit.',
          uk: 'Добовий графік заряду та журнал системних подій дають змогу відстежувати поведінку батареї й зміни її стану.',
        },
      },
      {
        src: '/shots/smartses/3-1280.webp',
        caption: {
          en: 'Telegram reports charge and discharge milestones and sends alerts when monitored conditions change.',
          uk: 'Telegram повідомляє про рівні заряду й розряду та надсилає алерти, коли контрольовані стани змінюються.',
        },
      },
    ],
  },
  {
    slug: 'rukodilna-hatynka',
    title: 'Рукодільна хатинка',
    year: 2026,
    status: 'production',
    featured: true,
    summary: {
      en: 'An SEO-first online craft-supplies store built with FastAPI, Jinja2 and HTMX. It includes a product catalog with variants and faceted filters, FTS5 search, cart and checkout, customer accounts, a custom admin panel, CSV/Excel imports, and Telegram order notifications.',
      uk: 'SEO-first інтернет-магазин товарів для рукоділля на FastAPI, Jinja2 і HTMX. Є каталог із варіантами та фасетними фільтрами, FTS5-пошук, кошик і checkout, акаунти покупців, власна адмінка, імпорт CSV/Excel і Telegram-сповіщення про замовлення.',
    },
    stack: ['python', 'fastapi', 'jinja2', 'htmx', 'sqlalchemy', 'sqlite', 'docker'],
    links: {
      github: 'https://github.com/SergZels/rukodilna-hatynka',
      live: 'https://rukodilna-hatynka.orxid.in.ua/',
    },
    cover: '/shots/rukodilna-hatynka/cover-640.webp',
    shots: [
      {
        src: '/shots/rukodilna-hatynka/1-1280.webp',
        caption: {
          en: 'The storefront home page presents the brand and leads customers directly into the product catalog.',
          uk: 'Головна сторінка презентує бренд і веде покупця прямо до каталогу.',
        },
      },
      {
        src: '/shots/rukodilna-hatynka/2-1280.webp',
        caption: {
          en: 'A production category page with eleven products, a visual category header and responsive product cards.',
          uk: 'Продакшен-сторінка категорії з одинадцятьма товарами, візуальною обкладинкою та адаптивними картками.',
        },
      },
      {
        src: '/shots/rukodilna-hatynka/3-1280.webp',
        caption: {
          en: 'The live product page shows the description, price, SKU, stock status and quantity controls.',
          uk: 'Жива сторінка товару показує опис, ціну, артикул, наявність і керування кількістю.',
        },
      },
      {
        src: '/shots/rukodilna-hatynka/4-1280.webp',
        caption: {
          en: 'The cart recalculates quantities and totals and leads the customer into checkout.',
          uk: 'Кошик перераховує кількість і суму та веде покупця до оформлення замовлення.',
        },
      },
      {
        src: '/shots/rukodilna-hatynka/5-1280.webp',
        caption: {
          en: 'The custom admin panel manages products, categories, brands, attributes, imports, orders and stock.',
          uk: 'Власна адмінка керує товарами, категоріями, брендами, атрибутами, імпортом, замовленнями та залишками.',
        },
      },
      {
        src: '/shots/rukodilna-hatynka/6-1280.webp',
        caption: {
          en: 'A Telegram bot immediately sends the owner a structured notification about every new order.',
          uk: 'Telegram-бот миттєво надсилає власнику структуроване сповіщення про кожне нове замовлення.',
        },
      },
    ],
  },
  {
    slug: 'zelse-terminal',
    title: 'Zelse soft Terminal',
    year: 2026,
    status: 'production',
    featured: true,
    summary: {
      en: 'A local web terminal for PowerShell and remote SSH servers. It combines an encrypted server vault, SFTP file browsing and folder uploads, SSH tunnels, a WebSocket terminal, and nginx + SSL automation.',
      uk: 'Локальний вебтермінал для PowerShell і віддалених SSH-серверів. Поєднує зашифроване сховище серверів, SFTP-браузер і завантаження папок, SSH-тунелі, WebSocket-термінал та автоматизацію nginx + SSL.',
    },
    stack: ['python', 'fastapi', 'javascript', 'html-css', 'sqlite'],
    links: {
      github: 'https://github.com/SergZels/terminal',
    },
    cover: '/shots/zelse-terminal/cover-640.webp',
    shots: [
      {
        src: '/shots/zelse-terminal/1-1280.webp',
        caption: {
          en: 'One interface for a local PowerShell shell, remote SSH sessions, files, tunnels, and repeatable SFTP folder uploads.',
          uk: 'Єдиний інтерфейс для локальної PowerShell, віддалених SSH-сесій, файлів, тунелів і повторюваних SFTP-завантажень папок.',
        },
      },
      {
        src: '/shots/zelse-terminal/2-1280.webp',
        caption: {
          en: 'Reusable SFTP upload profiles synchronize selected local folders with remote servers.',
          uk: 'Багаторазові SFTP-профілі синхронізують вибрані локальні папки з віддаленими серверами.',
        },
      },
      {
        src: '/shots/zelse-terminal/3-1280.webp',
        caption: {
          en: 'Saved SSH tunnels provide local access to databases and other private services.',
          uk: 'Збережені SSH-тунелі надають локальний доступ до баз даних та інших приватних сервісів.',
        },
      },
    ],
  },
  {
    slug: 'water-bot-v2',
    title: 'Water Bot v2',
    year: 2026,
    status: 'production',
    featured: false,
    summary: {
      en: 'A rebuilt water-meter reporting service for the Terebovlia utility. Residents submit readings through an aiogram 3 Telegram bot or a FastAPI web form, review the details before confirming, and can enter either a meter value or consumed cubic metres (for example, +4). The service accepts submissions from the 20th, sends monthly reminders, and keeps the database compatible with the original bot. Staff can filter and mark readings as processed in a password-protected web view and export Excel reports. Built with Python, SQLite and Docker Compose.',
      uk: 'Оновлений сервіс подання показників води для Теребовлянського водоканалу. Мешканці надсилають показники через Telegram-бота на aiogram 3 або вебформу FastAPI, перевіряють дані перед підтвердженням і можуть вказати як показ лічильника, так і спожиті куби (наприклад, +4). Сервіс приймає показники з 20-го числа, щомісяця надсилає нагадування й зберігає сумісність із базою старого бота. Працівники можуть фільтрувати та позначати оброблені записи в захищеному вебінтерфейсі й експортувати Excel-звіти. Стек: Python, SQLite та Docker Compose.',
    },
    stack: ['python', 'aiogram', 'fastapi', 'sqlite', 'sqlalchemy', 'docker', 'excel'],
    links: {
      telegram: 'https://t.me/TerebovlaVodokanal_bot',
    },
    cover: '/shots/water-bot-v2/cover-640.webp',
    shots: [
      {
        src: '/shots/water-bot-v2/1-1280.webp',
        caption: {
          en: 'The public web form accepts text readings and opens submissions from the 20th of each month. Users review their details before the reading is saved.',
          uk: 'Публічна вебформа приймає текстові показники з 20-го числа кожного місяця. Перед збереженням користувач перевіряє введені дані.',
        },
      },
      {
        src: '/shots/water-bot-v2/2-1280.webp',
        caption: {
          en: 'The Telegram bot guides residents through a four-step flow: account, name, address and meter reading. Subscriber details are hidden in this public screenshot.',
          uk: 'Telegram-бот веде мешканців через чотири кроки: рахунок, ПІБ, адресу й показник. Дані абонента на публічному скриншоті приховано.',
        },
      },
      {
        src: '/shots/water-bot-v2/3-1280.webp',
        caption: {
          en: 'Before submission, residents can confirm, edit individual fields or cancel; the bot then acknowledges the reading. Subscriber details are hidden.',
          uk: 'Перед поданням мешканці можуть підтвердити, змінити окремі поля або скасувати запис; бот повідомляє про прийняття показника. Дані абонента приховано.',
        },
      },
      {
        src: '/shots/water-bot-v2/4-1280.webp',
        caption: {
          en: 'The protected staff view offers monthly statistics, filters, processing status and an Excel export. Rows with subscriber data are excluded from the public image.',
          uk: 'Захищений інтерфейс для працівників показує статистику за місяць, фільтри, статус обробки та експорт Excel. Рядки з даними абонентів не потрапили до публічного кадру.',
        },
      },
    ],
  },
  {
    slug: 'terinfo-ai',
    title: 'Теребовля Інфо AI',
    year: 2025,
    status: 'production',
    featured: true,
    summary: {
      en: 'A digital guide to the Terebovlia community: residents and visitors can browse places, organizations, services and transport through a searchable web catalog or ask the Telegram assistant. I built the FastAPI backend, aiogram bot, Django admin panel and inter-service APIs; a teammate built the React frontend. The assistant uses RAG: multilingual embeddings index curated question–answer pairs in Qdrant, semantic search retrieves relevant entries, and an LLM generates an answer using that context and catalog data. PostgreSQL stores the catalog, Redis supports caching, and Docker packages the services.',
      uk: 'Цифровий довідник Теребовлянської громади: мешканці й гості переглядають локації, установи, послуги й транспорт у вебкаталозі з пошуком або запитують Telegram-помічника. Я розробив бекенд на FastAPI, бота на aiogram, адмінпанель Django та API між сервісами; React-фронтенд створив учасник команди. AI-помічник працює за принципом RAG: багатомовні ембеддинги індексують перевірені пари «питання–відповідь» у Qdrant, семантичний пошук знаходить релевантні записи, а мовна модель формує відповідь із цим контекстом і даними каталогу. PostgreSQL зберігає каталог, Redis підтримує кешування, Docker контейнеризує сервіси.',
    },
    stack: ['python', 'fastapi', 'aiogram', 'django', 'react', 'postgresql', 'redis', 'qdrant', 'openai', 'docker'],
    links: {
      live: 'https://catalog.terebinfo.in.ua/',
      telegram: 'https://t.me/TerInfobot',
    },
    cover: '/shots/terinfo-ai/cover-640.webp',
    shots: [
      {
        src: '/shots/terinfo-ai/1-1280.webp',
        caption: {
          en: 'The React catalog gives residents and visitors a searchable directory of local organizations, shops, services and places.',
          uk: 'React-каталог дає мешканцям і гостям пошук по місцевих установах, магазинах, послугах та локаціях.',
        },
      },
      {
        src: '/shots/terinfo-ai/2-1280.webp',
        caption: {
          en: 'Nested categories lead to location cards with practical details such as addresses, opening hours and contacts.',
          uk: 'Вкладені категорії ведуть до карток локацій з адресами, графіком роботи та контактами.',
        },
      },
      {
        src: '/shots/terinfo-ai/3-1280.webp',
        caption: {
          en: 'The Qdrant knowledge-base editor manages question–answer records, semantic similarity search and CSV import/export for the assistant.',
          uk: 'Редактор бази знань Qdrant керує парами «питання–відповідь», пошуком схожих записів і імпортом/експортом CSV для помічника.',
        },
      },
      {
        src: '/shots/terinfo-ai/4-1280.webp',
        caption: {
          en: 'The Django admin panel maintains the catalog, categories, publication state and other operational data.',
          uk: 'Django-адмінка керує каталогом, категоріями, публікацією та іншими робочими даними.',
        },
      },
    ],
  },
  {
    slug: 'rrepair-crm',
    title: 'RRepair CRM',
    year: 2023,
    status: 'production',
    featured: true,
    summary: {
      en: 'Large custom CRM for a phone repair shop: orders, parts warehouse, technician payroll and customer correspondence. Microservice architecture — PostgreSQL, a Django backend and an aiogram bot as the front end.',
      uk: 'Велика CRM для майстерні з ремонту телефонів: замовлення, склад запчастин, зарплати майстрів і листування з клієнтами. Мікросервісна архітектура — PostgreSQL, бекенд на Django і бот на aiogram замість інтерфейсу.',
    },
    stack: ['python', 'django', 'aiogram', 'postgresql', 'docker'],
    links: {},
    cover: '/shots/rrepair-crm/cover-640.webp',
    shots: [
      {
        src: '/shots/rrepair-crm/1-1280.webp',
        caption: {
          en: 'The client has the opportunity to - Keep records of orders, - Print labels and invoices - Work with a spare parts warehouse - Keep track of the salaries of the masters - Maintain correspondence with customers - and much more',
          uk: 'Замовник може вести облік замовлень, друкувати наліпки й накладні, працювати зі складом запчастин, рахувати зарплати майстрів, листуватися з клієнтами — і багато іншого.',
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
    slug: 'summyze',
    title: 'SUMMYZE',
    year: 2025,
    status: 'production',
    featured: true,
    summary: {
      en: 'An AI-powered SaaS platform for turning support emails into structured tickets and actionable analytics. Incoming mail is summarized and categorized automatically; teams can search and filter tickets, ask questions across a selected set of emails in an AI chat, and receive scheduled daily, weekly and monthly reports. I developed the FastAPI application and its HTML/CSS/JavaScript interface, plus a gateway for client onboarding, plans, support and audit logs. Each client runs in an isolated Docker instance, backed by PostgreSQL; a provisioning service manages container capacity, RabbitMQ queues support email delivery, and a self-hosted Mailu server handles the mail ecosystem.',
      uk: 'SaaS-платформа, що перетворює листи підтримки на структуровані тікети й аналітику за допомогою AI. Вхідні листи автоматично отримують резюме та категорії; команда може шукати й фільтрувати тікети, ставити запитання до вибірки листів в AI-чаті й отримувати щоденні, щотижневі та щомісячні звіти. Я розробив FastAPI-застосунок та інтерфейс на HTML/CSS/JavaScript, а також gateway для реєстрації клієнтів, тарифів, підтримки й аудиту дій. Кожен клієнт працює в ізольованому Docker-інстансі з PostgreSQL; сервіс розгортання керує пулом контейнерів, RabbitMQ обслуговує черги надсилання листів, а власний поштовий сервер Mailu доповнює екосистему.',
    },
    stack: ['python', 'fastapi', 'postgresql', 'docker', 'rabbitmq', 'mailu', 'html-css', 'javascript', 'bootstrap'],
    links: {
      live: 'https://test.summyze.com/',
    },
    cover: '/shots/summyze/cover-640.webp',
    shots: [
      {
        src: '/shots/summyze/1-1280.webp',
        caption: {
          en: 'The demo ticket hub shows AI summaries, categories and products alongside search, filters and CSV export.',
          uk: 'Демонстраційний список тікетів показує AI-резюме, категорії та продукти, а також пошук, фільтри й експорт CSV.',
        },
      },
      {
        src: '/shots/summyze/2-1280.webp',
        caption: {
          en: 'Ask Over Tickets answers questions across filtered emails and links its findings back to individual tickets.',
          uk: 'Ask Over Tickets відповідає на запитання за відфільтрованими листами й пов’язує висновки з конкретними тікетами.',
        },
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
      uk: 'Telegram-бот для продажу курсів графічного дизайну. Мій перший високонавантажений бот на aiogram 3 + FastAPI, з автоматичною оплатою через LiqPay і реферальною програмою.',
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
          uk: 'Бот для продажу курсів графічного дизайну',
        },
      },
      {
        src: '/shots/dedit/2-1280.webp',
        caption: {
          en: 'My first high-load bot on Aiogram 3 + FastAPI',
          uk: 'Мій перший високонавантажений бот на aiogram 3 + FastAPI',
        },
      },
      {
        src: '/shots/dedit/3-1280.webp',
        caption: {
          en: 'Lessons open in the telegram mini-browser',
          uk: 'Уроки відкриваються у вбудованому браузері Telegram',
        },
      },
      {
        src: '/shots/dedit/4-1280.webp',
        caption: {
          en: 'Admin panel - server-side rendering (HTML, CSS, bootstrap, Jinja2)',
          uk: 'Адмінка з рендерингом на сервері: HTML, CSS, Bootstrap, Jinja2',
        },
      },
      {
        src: '/shots/dedit/5-1280.webp',
      },
      {
        src: '/shots/dedit/6-1280.webp',
        caption: {
          en: 'Implemented automatic payment by liqpay. The bot also has a referral program',
          uk: 'Реалізовано автоматичну оплату через LiqPay. Ще в боті є реферальна програма',
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
      uk: 'Копітрейдинг для біржі ByBit — мій перший проєкт на Go. Фронтенд на чистому JavaScript, понад тисяча рядків.',
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
          uk: 'Мій перший проєкт на Go. Дає трейдерам копітрейдинг на біржі ByBit',
        },
      },
      {
        src: '/shots/bybit-copy-trading/2-1280.webp',
      },
      {
        src: '/shots/bybit-copy-trading/3-1280.webp',
        caption: {
          en: 'Vanilla js frontend (more than 1000 lines js code), Boorstrap',
          uk: 'Фронтенд на чистому JavaScript, понад 1000 рядків коду, плюс Bootstrap',
        },
      },
    ],
  },
  {
    slug: 'terinfobot',
    title: 'TerInfoBot',
    year: 2022,
    status: 'production',
    featured: false,
    summary: {
      en: 'An information portal for my town, built as a gift to it. Microservice architecture: PostgreSQL, a Django backend and an aiogram bot, with a small search site added later.',
      uk: 'Інформаційний портал мого міста — мій подарунок йому. Мікросервісна архітектура: PostgreSQL, бекенд на Django і бот на aiogram; згодом додався невеликий сайт із пошуком.',
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
          uk: 'Бот написано на Python за мікросервісною архітектурою, він складається з трьох частин: база PostgreSQL, бекенд на Django і сам бот на aiogram замість інтерфейсу.',
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
          uk: 'Згодом з’явився й невеликий сайт із пошуком',
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
    featured: false,
    summary: {
      en: 'Helps recruiters find candidates on Work.ua by given criteria. Three parts: a parser, a filtering and sorting layer, and the bot itself on FastAPI + aiogram.',
      uk: 'Допомагає рекрутерам шукати кандидатів на Work.ua за заданими критеріями. Три частини: парсер, шар фільтрації й сортування та сам бот на FastAPI + aiogram.',
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
          uk: 'Бот допомагає HR шукати кандидатів на Work.ua за заданими параметрами',
        },
      },
      {
        src: '/shots/hr-bot/2-1280.webp',
        caption: {
          en: 'The bot algorithm consists of 3 parts: - parser - work.ua - a handler that filters and sorts data - the bot itself based on FastAPI + aiogram',
          uk: 'Алгоритм складається з трьох частин: парсер Work.ua, обробник, що фільтрує й сортує дані, і сам бот на FastAPI + aiogram.',
        },
      },
      {
        src: '/shots/hr-bot/3-1280.webp',
        caption: {
          en: 'For convenience, there is a simple website where you can view candidates',
          uk: 'Для зручності є простий сайт, де можна переглядати кандидатів',
        },
      },
    ],
  },
  {
    slug: 'code-review-ai',
    title: 'Code Review AI',
    year: 2024,
    status: 'pet',
    featured: false,
    summary: {
      en: 'A tool that automates code review: a FastAPI backend, a React front end and GPT doing the reading.',
      uk: 'Інструмент, що автоматизує рев’ю коду: бекенд на FastAPI, фронтенд на React, а читає код GPT.',
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
          uk: 'Інструмент для автоматизації рев’ю коду: бекенд на Python (FastAPI), фронтенд на React, аналізує GPT.',
        },
      },
    ],
  },
  {
    slug: 'water-bot',
    title: 'Water Bot',
    year: 2022,
    status: 'archived',
    featured: false,
    summary: {
      en: 'The original water-meter reading bot for my town utility — a gift to the city. It collected readings in Telegram and prepared an Excel file for the operator; the service was later rebuilt as Water Bot v2.',
      uk: 'Перша версія бота для передавання показників водомірів місцевому водоканалу — мій подарунок місту. Збирала показники в Telegram і формувала Excel-файл для оператора; згодом сервіс переписано як Water Bot v2.',
    },
    stack: ['python', 'aiogram', 'sqlite'],
    links: {
      youtube: 'https://www.youtube.com/shorts/oUcjWH9b4RE',
    },
    cover: '/shots/water-bot/cover-640.webp',
    shots: [
      {
        src: '/shots/water-bot/1-1280.webp',
        caption: {
          en: 'The bot collects water meter readings in Terebovlia sity and creates an Excel file for the bot operator.',
          uk: 'Бот збирає показники водомірів у Теребовлі й формує файл Excel для оператора.',
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
      uk: 'Telegram-бот, яким моя сім’я веде облік витрат.',
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
          uk: 'Бот, у якому зручно вести облік сімейних витрат. Надсилає графіки статистики та формує HTML-сторінку з повним переліком.',
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
      uk: 'У 2016-му написав кілька застосунків для Android на Java.',
    },
    stack: ['java'],
    links: {},
    cover: '/shots/mobile-dev/cover-640.webp',
    shots: [
      {
        src: '/shots/mobile-dev/1-1280.webp',
        caption: {
          en: 'In 2016, I wrote several mobile apps for Android in Java',
          uk: 'У 2016-му написав кілька мобільних застосунків для Android на Java',
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
      en: 'A CRM for renting out children’s carnival costumes — my first commercial project, written in VBA on top of Excel and full of search and order-processing logic.',
      uk: 'CRM для прокату дитячих карнавальних костюмів — мій перший комерційний проєкт, написаний на VBA поверх Excel, із купою алгоритмів пошуку й обробки замовлень.',
    },
    stack: ['vba', 'excel'],
    links: {},
    cover: '/shots/prokat/cover-640.webp',
    shots: [
      {
        src: '/shots/prokat/1-1280.webp',
        caption: {
          en: 'My first commercial project for a family business.',
          uk: 'Мій перший комерційний проєкт для сімейного бізнесу.',
        },
      },
      {
        src: '/shots/prokat/2-1280.webp',
        caption: {
          en: 'CRM system for renting children\'s carnival costumes',
          uk: 'CRM для прокату дитячих карнавальних костюмів',
        },
      },
      {
        src: '/shots/prokat/3-1280.webp',
      },
      {
        src: '/shots/prokat/4-1280.webp',
        caption: {
          en: 'Admin panel',
          uk: 'Адмінка',
        },
      },
      {
        src: '/shots/prokat/5-1280.webp',
        caption: {
          en: 'Statistics',
          uk: 'Статистика',
        },
      },
      {
        src: '/shots/prokat/6-1280.webp',
      },
      {
        src: '/shots/prokat/7-1280.webp',
        caption: {
          en: 'Label.',
          uk: 'Наліпка.',
        },
      },
      {
        src: '/shots/prokat/8-1280.webp',
        caption: {
          en: 'Many different algorithms for searching and processing orders',
          uk: 'Багато різних алгоритмів пошуку та обробки замовлень',
        },
      },
      {
        src: '/shots/prokat/9-1280.webp',
        caption: {
          en: 'Custom database system',
          uk: 'Власна система обліку',
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
      en: 'A desktop CRM on MS Access that has been serving our family tailoring studio since 2013.',
      uk: 'Десктопна CRM на MS Access, яка обслуговує наше сімейне ательє з 2013 року.',
    },
    stack: ['vba', 'ms-access'],
    links: {},
    cover: '/shots/atele/cover-640.webp',
    shots: [
      {
        src: '/shots/atele/1-1280.webp',
        caption: {
          en: 'Desktop CRM that has been faithfully serving our family business since 2013.',
          uk: 'Десктопна CRM, яка справно служить нашому сімейному бізнесу з 2013 року.',
        },
      },
      {
        src: '/shots/atele/2-1280.webp',
        caption: {
          en: 'Atele - developed on MS Access',
          uk: 'Ательє — зроблено на MS Access',
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
      uk: 'Мій перший чат-бот: помічник ательє «Орхідея» у Viber, який відповідає на питання про послуги, ціни й контакти, а за потреби передає розмову оператору. Великий проєкт на PHP з елементами ШІ.',
    },
    stack: ['php', 'viber'],
    links: {},
    cover: '/shots/orxid-viber-bot/cover-640.webp',
    shots: [
      {
        src: '/shots/orxid-viber-bot/1-1280.webp',
        caption: {
          en: 'Viber Bot - a virtual employee of Orchid atelier, which provides answers to clients\' questions about services, prices, contacts, and much more. This bot works together with an operator.',
          uk: 'Viber-бот — віртуальний працівник ательє «Орхідея». Відповідає на питання клієнтів про послуги, ціни, контакти й багато іншого, працюючи в парі з оператором.',
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
      uk: 'Telegram-бот, що показує щоденні продажі сімейного бізнесу.',
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
          uk: 'Магазин вносить щоденну виручку через бота, а той повертає статистику — суми, мінімуми, максимуми — у вигляді графіків.',
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
      uk: 'Програма обліку, яку я написав для сімейного бізнесу.',
    },
    stack: ['python', 'fastapi', 'sqlite'],
    links: {
      github: 'https://github.com/SergZels/OrxidStatistics',
    },
    cover: '/shots/orxid-accounting/cover-640.webp',
    shots: [
      {
        src: '/shots/orxid-accounting/1-1280.webp',
        caption: {
          en: 'Accounting software for my family biznes. Backend FastAPI',
          uk: 'Програма обліку для сімейного бізнесу. Бекенд на FastAPI',
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
      uk: 'Статичний сайт нашого сімейного бізнесу.',
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
          uk: 'Перейти на сайт можна за посиланням',
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
      uk: 'Скрипт, що збирає каталоги бісеру в одну таблицю.',
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
          uk: 'Дуже корисний скрипт, який зекономив багато годин рутини: розбирає замовлення у файлі Excel.',
        },
      },
      {
        src: '/shots/beads-parser/2-1280.webp',
        caption: {
          en: 'And develops product labels for printing (Word)',
          uk: 'А ще формує наліпки на товар для друку у Word',
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
      en: 'Python scripts pull data from APIs and CSV reports, process it and write it into sheets; Looker Studio then turns it into charts for the client. With a React front end over a FastAPI backend.',
      uk: 'Скрипти на Python витягують дані з API та CSV-звітів, обробляють їх і записують у таблиці, а Looker Studio будує з них графіки для замовника. Фронтенд на React поверх бекенду на FastAPI.',
    },
    stack: ['python', 'fastapi', 'react'],
    links: {},
    cover: '/shots/gingr-analytics/cover-640.webp',
    shots: [
      {
        src: '/shots/gingr-analytics/1-1280.webp',
        caption: {
          en: 'By extracting data from API and CSV reports, my python scripts process it and write it to sheets. Then, with the help of Looker Studio, I create charts to analyze the customer\'s business.',
          uk: 'Скрипти на Python витягують дані з API та CSV-звітів, обробляють їх і записують у таблиці. Далі в Looker Studio я будую графіки для аналізу бізнесу замовника.',
        },
      },
      {
        src: '/shots/gingr-analytics/2-1280.webp',
        caption: {
          en: 'Frontend - React',
          uk: 'Фронтенд — React',
        },
      },
      {
        src: '/shots/gingr-analytics/3-1280.webp',
        caption: {
          en: 'Backend - FastAPI',
          uk: 'Бекенд — FastAPI',
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
      en: 'A pet project in Python: a Telegram bot that returns a picture of a Czech bead by its code, with a React admin panel behind it.',
      uk: 'Пет-проєкт на Python: Telegram-бот, який за кодом чеського бісеру повертає його зображення, з адмінкою на React.',
    },
    stack: ['python', 'aiogram', 'react'],
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
          uk: 'Адмінка — React',
        },
      },
      {
        src: '/shots/czech-beads-bot/3-1280.webp',
      },
      {
        src: '/shots/czech-beads-bot/4-1280.webp',
        caption: {
          en: 'The bot returns an image of Czech beads based on its code. The programming language is Python.',
          uk: 'За кодом чеського бісеру бот повертає його зображення. Мова — Python.',
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
      uk: 'Магазин eSIM, зібраний як no-code автоматизація в Make.com.',
    },
    stack: ['make.com'],
    links: {},
    cover: '/shots/esim-shop/cover-640.webp',
    shots: [
      {
        src: '/shots/esim-shop/1-1280.webp',
        caption: {
          en: 'The customer makes purchases of eSim on the site made on WIX. And receives an activation code to email.',
          uk: 'Клієнт купує eSIM на сайті, зробленому на WIX, і отримує код активації на пошту.',
        },
      },
      {
        src: '/shots/esim-shop/2-1280.webp',
        caption: {
          en: 'An online store for automated eSim sales with a Make.com backend — part of the Make scenario.',
          uk: 'Інтернет-магазин автоматизованого продажу eSIM на бекенді Make.com — частина сценарію Make.',
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
      en: 'A small Flask service that talks to the Midjourney neural network and helps pick one of the four generated images.',
      uk: 'Невеликий сервіс на Flask, який спілкується з нейромережею Midjourney і допомагає обрати одне з чотирьох згенерованих зображень.',
    },
    stack: ['python', 'flask'],
    links: {},
    cover: '/shots/poland-flask/cover-640.webp',
    shots: [
      {
        src: '/shots/poland-flask/1-1280.webp',
        caption: {
          en: 'A small project that interacts with the Midjourney neural network and helps to choose one of the four generated photos.',
          uk: 'Невеликий проєкт, що взаємодіє з нейромережею Midjourney і допомагає обрати одну з чотирьох згенерованих світлин.',
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
      en: 'A catalogue of museum exhibits, built as a desktop database on MS Access.',
      uk: 'Каталог музейних експонатів, зроблений як десктопна база на MS Access.',
    },
    stack: ['ms-access'],
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
          uk: 'База даних музейних експонатів',
        },
      },
      {
        src: '/shots/museum/4-1280.webp',
        caption: {
          en: 'Software developed in MS Access',
          uk: 'Програму зроблено на MS Access',
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
      uk: 'Моє попереднє портфоліо — не сайт, а Telegram-бот.',
    },
    stack: ['python', 'aiogram'],
    links: {},
    cover: '/shots/bot-portfolio/cover-640.webp',
    shots: [
      {
        src: '/shots/bot-portfolio/1-1280.webp',
        caption: {
          en: 'HTML/CSS portfolio for chat bot development',
          uk: 'Портфоліо з розробки чат-ботів на HTML і CSS',
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
      en: 'A security bot: it reads an IP camera over RTSP, uses a small neural network to spot a human silhouette, and sends the photo to Telegram — it even tries to name the colour of the clothes.',
      uk: 'Охоронний бот: читає IP-камеру через RTSP, невеликою нейромережею шукає в кадрі силует людини й надсилає знімок у Telegram — ще й намагається визначити колір одягу.',
    },
    stack: ['python', 'aiogram'],
    links: {},
    cover: '/shots/guard-bot/cover-640.webp',
    shots: [
      {
        src: '/shots/guard-bot/1-1280.webp',
        caption: {
          en: 'The script connects to the IP camera via rtsp protocol and uses a small neural network to search for a human silhouette',
          uk: 'Скрипт підключається до IP-камери протоколом RTSP і невеликою нейромережею шукає силует людини',
        },
      },
      {
        src: '/shots/guard-bot/2-1280.webp',
        caption: {
          en: 'If a person is detected, the photo is sent to the Telegram bot.',
          uk: 'Якщо людину виявлено, знімок надходить у Telegram-бот.',
        },
      },
      {
        src: '/shots/guard-bot/3-1280.webp',
        caption: {
          en: 'The script also tries to recognize the color of clothes.',
          uk: 'Ще скрипт намагається розпізнати колір одягу.',
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
      uk: 'Різні дрібніші проєкти на Python, зокрема ігровий бот у Telegram.',
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
