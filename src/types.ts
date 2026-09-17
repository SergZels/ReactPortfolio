export type Localized = { uk: string; en: string };

export type ProjectStatus = 'production' | 'archived' | 'pet';

export type StackLevel = 'daily' | 'confident' | 'familiar';

/** Єдиний дозволений перелік технологій. Захищає фільтр від друкарських помилок. */
export const KNOWN_STACK = [
  'python',
  'aiogram',
  'telethon',
  'pillow',
  'beautifulsoup',
  'openrouter',
  'elasticsearch',
  'playwright',
  'elevenlabs',
  'django',
  'fastapi',
  'flask',
  'postgresql',
  's3',
  'gspread',
  'redis',
  'qdrant',
  'rabbitmq',
  'mailu',
  'sqlite',
  'sqlalchemy',
  'peewee',
  'html-css',
  'bootstrap',
  'htmx',
  'javascript',
  'react',
  'go',
  'php',
  'java',
  'vba',
  'make.com',
  'docker',
  'nginx',
  'linux',
  'jinja2',
  'ms-access',
  'excel',
  'viber',
  'openai',
  'codex',
  'claude-code',
  'opencv',
  'esp32',
  'cpp',
  'mqtt',
  'mcp',
  'git',
  'pascal',
  'assembler',
  'prolog',
  'vhdl',
  'matlab',
  'elk',
] as const;

export type Tech = (typeof KNOWN_STACK)[number];

export type Shot = {
  src: string;
  /**
   * Підпис необов'язковий: у старому портфоліо підписи мали лише 47 кадрів
   * зі 112. Де підпису не було, кадр лишається без нього — вигадувати опис
   * чужого скриншота гірше, ніж показати його мовчки.
   */
  caption?: Localized;
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
